import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from '../../interfaces/category';
import { selectCategories } from '../../store/selectors/categories.selector';

@Component({
	selector: 'app-category-view',
	templateUrl: './category-view.component.html',
	styleUrls: ['./category-view.component.scss'],
})
export class CategoryViewComponent implements OnInit {
	@Input() categoryId: number;

	public category: Category = {
		name: '',
		icon: { name: 'ri-image-line' },
		id: -1,
	};

	public text: string;

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.store.select(selectCategories).subscribe(categories => {
			this.category = this.getCategoryData(categories);
		});

		this.text = this.category.id != -1 ? this.category.name : 'No category';
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
			icon:{ name: 'ri-image-line' },
			id: -1,
		};
	}
}
