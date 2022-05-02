import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input() itemCategory: Category;

  @Output() removeClick = new EventEmitter<Category>();
  @Output() editClick = new EventEmitter<Category>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    console.log(this.itemCategory);
    
  }

  removeItem() {
		this.categoryService.remove(this.itemCategory);
	}

	editItem() {
		this.categoryService.edit(this.itemCategory);
	}

}
