import { Injectable } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { Store } from '@ngrx/store';
import { SetDateComponent } from 'src/app/components/set-date/set-date.component';
import { Expence } from 'src/app/interfaces/expence';
import { DortOption } from 'src/app/modules/shared/interfaces/dort-option';
import { CheckAllExpences, CheckExpence, DeleteExpence, EditExpence } from 'src/app/store/actions/expence.actions';
import { selectCheckedExpences } from 'src/app/store/selectors/expence.selector';

@Injectable({
	providedIn: 'root',
})
export class BulkService {
	private checkeds: Expence[] = [];

	constructor(private store: Store, private dialog: DialogService) {
		this.store.select(selectCheckedExpences).subscribe(expences => (this.checkeds = expences));
	}

	public actions: DortOption[] = [
		{
			text: 'remove',
			action: () => this.removeChecked(),
		},
		{
			text: 'set net date',
			action: () => this.openSetDate(),
		},
	];


	check(item: Expence | Expence[]) {
		this.store.dispatch(new CheckExpence(item, true));
	}

	uncheck(item: Expence | Expence[]) {
		this.store.dispatch(new CheckExpence(item, false));
	}

	checkAll() {
		this.store.dispatch(new CheckAllExpences(true));
	}

	uncheckAll() {
		this.store.dispatch(new CheckAllExpences(false));
	}

	removeChecked(): void {
		this.store.dispatch(new DeleteExpence(this.checkeds))
	}

	async openSetDate(): Promise<void> {
		const result = await this.dialog.open(SetDateComponent).afterClosed$.toPromise();

		if (result) {
			this.store.dispatch(new EditExpence(this.checkeds, { date: result, isChecked: false }))
		}
	}
}
