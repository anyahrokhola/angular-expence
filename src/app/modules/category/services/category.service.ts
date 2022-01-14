import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public categories: Category[] = [];

  constructor() {
    const json = localStorage.getItem('categories');

    if (json) {
      this.categories = JSON.parse(json);
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
    this.saveCategories();
    return category;
  }

  removeCategory(category: Category){
    this.categories = this.categories.filter((item)=>item.id != category.id)
    this.saveCategories();
  }

  private saveCategories() {
    const jsonData = JSON.stringify([...this.categories]);
    localStorage.setItem('categories', jsonData);
  }

  
}
