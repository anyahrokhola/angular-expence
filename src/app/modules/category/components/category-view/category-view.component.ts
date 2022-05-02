import { Component, Input, OnInit} from '@angular/core';
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
    id: -1,
  };

  public text: string;

  constructor(public categoryService: CategoryService) {}

  ngOnInit(): void {
   
    this.category = this.getCategoryData(this.categoryService.categories);

    this.categoryService.categories$.subscribe((categories) => {
      this.category = this.getCategoryData(categories);
    });

    this.text = this.category.id != -1 ? this.category.name : "No category";
  }

  private getCategoryData(data: Category[]): Category {
    for (let i = 0; i < data.length; i++) {
      if (this.categoryId === data[i].id) {
        return {
          ...data[i],
        };
      }
    }
    return {
      name: '',
      icon: 'ri-image-line',
      id: -1,
    };
  }

}
