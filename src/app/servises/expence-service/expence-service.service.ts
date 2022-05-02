import { Injectable } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { Store } from '@ngrx/store';
import { AddExpenceComponent } from 'src/app/components/add-expence/add-expence.component';
import { ConfirmDeleteComponent } from 'src/app/components/confirm-delete/confirm-delete.component';
import { Expence } from 'src/app/interfaces/expence';
import { ExpenceStore } from 'src/app/interfaces/store.interface';
import { AddExpence, DeleteExpence, EditExpence } from 'src/app/store/actions/expence.actions';
import { selectExpences } from 'src/app/store/selectors/expence.selector';

@Injectable({
	providedIn: 'root',
})
export class ExpenceServiceService {
	constructor(private store: Store, private dialog: DialogService) {
		this.store.select(selectExpences).subscribe(expenses => this.saveExpences(expenses));
	}

	async add() {
		const result = await this.dialog.open<null, Expence>(AddExpenceComponent).afterClosed$.toPromise();

		if (result) {
			this.store.dispatch(new AddExpence(result));
		}
	}

	async edit(item: Expence) {
		const result = await this.dialog
			.open<Expence, Expence>(AddExpenceComponent, { data: { ...item } })
			.afterClosed$.toPromise();

		if (result) {
			this.store.dispatch(new EditExpence(item, result));
		}
	}

	async remove(item: Expence) {
		if (await this.dialog.open<null, boolean>(ConfirmDeleteComponent).afterClosed$.toPromise()) {
			this.store.dispatch(new DeleteExpence(item));
		}
	}

	public saveExpences(expences: ExpenceStore) {
		const jsonData = JSON.stringify(expences);
		localStorage.setItem('expences', jsonData);
	}
}
