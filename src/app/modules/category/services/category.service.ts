import { Injectable } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { AddCategoryComponent } from '../components/add-category/add-category.component';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public categories: Category[] = [];

  constructor(private dialog: DialogService) {
    const json = localStorage.getItem('categories');

    if (json) {
      this.categories = JSON.parse(json);
    }
  }

  ngOnInit(){
    console.log(this.categories);
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
    this.saveCategories();
    return category;
  }

  removeCategory(category: Category){
    this.categories = this.categories.filter((item)=>item.id != category.id)
    this.saveCategories();
  }

  // editCategory(item: Category, i: number){
  //   console.log(this.categories[i]);
  //   const dialogRef = this.dialog.open(AddCategoryComponent, {
  //     data: {
  //       ...item
  //     },
  //   });
   
  //   dialogRef.afterClosed$.subscribe((result: Category | null) => {
  //     if (result) {
  //       this.categories[i] = result;
  //       this.categories = [...this.categories];
  //     }
  //     this.saveCategories();
  //     console.log(this.categories[i]);
  //   });
    
  // }

  private saveCategories() {
    const jsonData = JSON.stringify([...this.categories]);
    localStorage.setItem('categories', jsonData);
  }

  
}
