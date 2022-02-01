import { Injectable } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { BehaviorSubject } from 'rxjs';
import { ConfirmDeleteComponent } from 'src/app/components/confirm-delete/confirm-delete.component';
import { AddCategoryComponent } from '../components/add-category/add-category.component';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public categories$ = new BehaviorSubject<Category[]>([]);
  public categories: Category[] = [];

  constructor(private dialog: DialogService) {
    const json = localStorage.getItem('categories');

    if (json) {
      this.categories = JSON.parse(json);
      this.categories$.next(this.categories);
    }
  }

  getCategoryId(): number {
    let max: number = 0;

    for (let i = 0; i < this.categories.length; i++) {
      if (max < this.categories[i].id) {
        max = this.categories[i].id;
      }
    }

    return max + 1;
  }

  createCategory(data: Omit<Category, 'id'>): Category {
    const category: Category = { ...data, id: this.getCategoryId() };
    this.categories.push(category);
    this.categories$.next(this.categories);
    this.saveCategories();
    return category;
  }

  removeCategory(category: Category) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent);

    dialogRef.afterClosed$.subscribe((result) => {
      if (result) {
        this.categories = this.categories.filter(
          (item) => item.id != category.id
        );
        this.categories$.next(this.categories);
        this.saveCategories();
      }
    });
  }

  editCategory(item: Category, i: number) {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      data: {
        ...item,
      },
    });

    dialogRef.afterClosed$.subscribe((result: Category | null) => {
      if (result) {
        this.categories[i] = result;
        this.categories = [...this.categories];
        this.categories$.next(this.categories);
      }
      this.saveCategories();
    });
  }

  private saveCategories() {
    const jsonData = JSON.stringify([...this.categories]);
    localStorage.setItem('categories', jsonData);
  }
}
