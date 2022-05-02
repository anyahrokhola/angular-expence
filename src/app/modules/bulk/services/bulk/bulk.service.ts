import { Injectable } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { SetDateComponent } from 'src/app/components/set-date/set-date.component';
import { Expence } from 'src/app/interfaces/expence';
import { DortOption } from 'src/app/modules/shared/interfaces/dort-option';
import { DeleteExpence, EditExpence } from 'src/app/store/actions/expence.actions';
import { selectExpences } from 'src/app/store/selectors/expence.selector';

@Injectable({
	providedIn: 'root',
})
export class BulkService {
	public checkeds$ = new BehaviorSubject<Expence[]>([]);

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

	private expences: Record<string, Expence[]> = {};

	constructor(private store: Store, private dialog: DialogService) {
		this.store.select(selectExpences).subscribe(expences => (this.expences = expences));
	}

	check(item: Expence | Expence[]) {
		const items = Array.isArray(item) ? item : [item];
		items.forEach(el => (el.isChecked = true));
		const checkeds = this.checkeds$.value;
		this.checkeds$.next([...checkeds, ...items]);
	}

	uncheck(item: Expence | Expence[]) {
		const items = Array.isArray(item) ? item : [item];
		items.forEach(el => (el.isChecked = false));
		const checkeds = this.checkeds$.value;
		this.checkeds$.next(checkeds.filter(el => !items.find(it => it.id === el.id)));
	}

	checkAll() {
		const keys = Object.keys(this.expences);
		let checkeds: Expence[] = [];
		keys.forEach(key => {
			checkeds = checkeds.concat(this.expences[key]);
		});
		this.check(checkeds);
		this.checkeds$.next([...checkeds]);
	}

	uncheckAll() {
		this.uncheck(this.checkeds$.value);
		this.checkeds$.next([]);
	}

	getLengthCheckeds(): number {
		const keys = Object.keys(this.expences);
		let checkeds: Expence[] = [];
		keys.forEach(key => {
			checkeds = checkeds.concat(this.expences[key]);
		});

		return checkeds.length;
	}

	isEqually(): boolean {
		let isEqually: boolean;
		if (this.checkeds$.value.length === this.getLengthCheckeds() && this.checkeds$.value.length != 0) {
			isEqually = true;
		} else {
			isEqually = false;
		}
		return isEqually;
	}

	removeChecked(): void {
		const checkeds = this.checkeds$.value;
		checkeds.forEach(el => this.store.dispatch(new DeleteExpence(el)));
		this.checkeds$.next([]);
	}

	openSetDate(): void {
		const dialogRef = this.dialog.open(SetDateComponent);

		dialogRef.afterClosed$.subscribe((result: Date | null) => {
			if (result) {
				const checkeds = this.checkeds$.value;
				checkeds.forEach(el =>this.store.dispatch(new EditExpence(el, { date: result })));
				this.checkeds$.next([]);
			}
		});
	}
}
