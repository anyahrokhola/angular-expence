import { Injectable } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { BehaviorSubject } from 'rxjs';
import { SetDateComponent } from 'src/app/components/set-date/set-date.component';
import { Expence } from 'src/app/interfaces/expence';
import { DortOption } from 'src/app/modules/shared/interfaces/dort-option';
import { ExpenceServiceService } from '../expence-service/expence-service.service';

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

	constructor(private expenceService: ExpenceServiceService, private dialog: DialogService) {
		
	}

	check(item: Expence) {
		const checkeds = this.checkeds$.value;
		this.checkeds$.next([...checkeds, item]);
	}

	uncheck(item: Expence) {
		const checkeds = this.checkeds$.value;
		this.checkeds$.next(checkeds.filter(el => el.id != item.id));
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
