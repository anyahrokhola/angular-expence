import { Injectable } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { BehaviorSubject } from 'rxjs';
import { SetDateComponent } from 'src/app/components/set-date/set-date.component';
import { Expence } from 'src/app/interfaces/expence';
import { DortOption } from 'src/app/modules/shared/interfaces/dort-option';
import { ExpenceServiceService } from '../../../../servises/expence-service/expence-service.service';

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

	constructor(private expenceService: ExpenceServiceService, private dialog: DialogService) {}

	check(item: Expence | Expence[]) {
		const items = Array.isArray(item) ? item : [item];
		items.forEach(el => (el.isChecked = true));
		const checkeds = this.checkeds$.value;
		this.checkeds$.next([...checkeds, ...items]);
		this.isEqually();
	}

	uncheck(item: Expence | Expence[]) {
		const items = Array.isArray(item) ? item : [item];
		items.forEach(el => (el.isChecked = false));
		const checkeds = this.checkeds$.value;
		this.checkeds$.next(checkeds.filter(el => !items.find(it => it.id === el.id)));
		this.isEqually();
	}

	checkAll() {
		this.isEqually();
		const keys = Object.keys(this.expenceService.expences$.value);
		let checkeds: Expence[] = [];
		keys.forEach(key => {
			checkeds = checkeds.concat(this.expenceService.expences$.value[key]);
		});
		this.check(checkeds);
		this.checkeds$.next([...checkeds]);
	}

	uncheckAll() {
		this.isEqually();
		this.uncheck(this.checkeds$.value);
		this.checkeds$.next([]);
	}

	getLengthCheckeds(): number {
		const keys = Object.keys(this.expenceService.expences$.value);
		let checkeds: Expence[] = [];
		keys.forEach(key => {
			checkeds = checkeds.concat(this.expenceService.expences$.value[key]);
		});

		return checkeds.length;
	}

	isEqually(): boolean{
		let isEqually: boolean;
		if( this.checkeds$.value.length === this.getLengthCheckeds()){
			isEqually = true;
		}
		else{
			isEqually = false;
		}
		return isEqually;
	}

	removeChecked(): void {
		const checkeds = this.checkeds$.value;
		checkeds.forEach(el => this.expenceService.quickRemove(el));
		this.checkeds$.next([]);
	}

	openSetDate(): void {
		const dialogRef = this.dialog.open(SetDateComponent);

		dialogRef.afterClosed$.subscribe((result: Date | null) => {
			if (result) {
				const checkeds = this.checkeds$.value;
				checkeds.forEach(el => this.expenceService.quickEdit(el, { ...el, date: result }));
				this.checkeds$.next([]);
			}
		});
	}
}
