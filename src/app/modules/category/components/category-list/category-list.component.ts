import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { CategoryService } from '../../services/category.service';
import { Store } from '@ngrx/store';
import { selectCategories } from '../../store/selectors/categories.selector';
import { Category } from '../../interfaces/category';

@Component({
	selector: 'app-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
	public icon: string = '';
	public name: string = '';
	public count: number = 0;
	
	public categories: Category[] = [];

	constructor(
		public ref: DialogRef,
		public categoryService: CategoryService,
		private store: Store
	) {}

	ngOnInit(): void {
		this.store.select(selectCategories).subscribe(categories => {
			this.categories = categories;
		});
	}

	openAddCategory() {
		this.categoryService.add()
	}
}
