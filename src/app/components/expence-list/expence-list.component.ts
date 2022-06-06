import { Component, OnInit } from '@angular/core';
import { Expence } from '../../interfaces/expence';
import { SortService } from 'src/app/servises/sort/sort.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { selectExpences } from 'src/app/store/selectors/expence.selector';
import { ExpenceHelper } from 'src/app/helpers/expence.helper';
import { EditExpence } from 'src/app/store/actions/expence.actions';

@Component({
	selector: 'app-expence-list',
	templateUrl: './expence-list.component.html',
	styleUrls: ['./expence-list.component.scss'],
})
export class ExpenceListComponent implements OnInit {
	public keys: string[] = [];
	public dates: Date[] = [];
	public expences: Record<string, Expence[]> = {};

	constructor(private store: Store, private sortService: SortService) {}

	ngOnInit(): void {
		this.store.select(selectExpences).subscribe(expences => {
			this.expences = expences;
			this.keys = Object.keys(expences);

			this.dates = this.sortService.sort(this.keys.map(el => new Date(el)));
			this.keys = this.dates.map(date => ExpenceHelper.getExpenceDate(date));
		});
	}

	drop(event: CdkDragDrop<Expence[]>, key: string) {
		this.store.dispatch(new EditExpence(event.item.data, { date: new Date(key) }))
	}

	public isIdChanged(_index: number, item: Expence): number {
		return item.id
	}

	public isDateChanged(_index: number, key: Date): string {
		return key.toString();
	}
}
