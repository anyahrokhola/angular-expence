import { Injectable } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { Store } from '@ngrx/store';
import { ConfirmDeleteComponent } from 'src/app/components/confirm-delete/confirm-delete.component';
import { AddCategoryComponent } from '../components/add-category/add-category.component';
import { Category } from '../interfaces/category';
import { AddCategory, DeleteCategory, EditCategory } from '../store/actions/categories.actions';
import { selectCategories } from '../store/selectors/categories.selector';

@Injectable({
	providedIn: 'root',
})
export class CategoryService {
	constructor(private store: Store, private dialog: DialogService) {
		this.store.select(selectCategories).subscribe(categories => this.saveCategories(categories));
	}

	async add() {
		const result = await this.dialog.open(AddCategoryComponent).afterClosed$.toPromise();

		if (result) {
			this.store.dispatch(new AddCategory(result));
		}
	}

	async remove(item: Category) {
		if (await this.dialog.open<null, boolean>(ConfirmDeleteComponent).afterClosed$.toPromise()) {
			this.store.dispatch(new DeleteCategory(item));
		}
	}

	async edit(item: Category) {
		const result = await this.dialog.open(AddCategoryComponent, { data: item }).afterClosed$.toPromise();

		if (result) {
			this.store.dispatch(new EditCategory(item, result));
		}
	}

	private saveCategories(categories: Category[]) {
		const jsonData = JSON.stringify(categories);
		localStorage.setItem('categories', jsonData);
	}
}
