import { Component, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss'],
})
export class CategoryViewComponent implements OnInit {

  @Input() categoryId: number;
  
  public category: Category = {
    name: '',
    icon: 'ri-image-line',
    id: -1
  };

  constructor(public categoryService: CategoryService) {}

  ngOnInit(): void {
    for (let i = 0; i < this.categoryService.categories.length; i++) {
      if (this.categoryId === this.categoryService.categories[i].id) {
        this.category = this.categoryService.categories[i];
      }
    }

    console.log('category',this.category);
  }
}
