import { Injectable } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { BehaviorSubject } from 'rxjs';
import { AddExpenceComponent } from 'src/app/components/add-expence/add-expence.component';
import { ConfirmDeleteComponent } from 'src/app/components/confirm-delete/confirm-delete.component';
import { Expence } from 'src/app/interfaces/expence';

// type Data = Record<string, Expence[]>

interface Data {
	[key: string]: Expence[];
}

@Injectable({
	providedIn: 'root',
})
export class ExpenceServiceService {
	public expences$ = new BehaviorSubject<Data>({});

	constructor(private dialog: DialogService) {
		const json = localStorage.getItem('expences');

		if (json) {
			const expences: Data = JSON.parse(json);
			const keys = Object.keys(expences);
			const data: Data = {};

			keys.forEach(key => {
				data[key] = expences[key].map(item => this.getExpence(item));
			});

			this.expences$.next(data);
		}

		this.expences$.subscribe(expenses => this.saveExpences(expenses));
	}

	createExpence(item: Omit<Expence, 'id'>): Expence {
		const expence: Expence = this.getExpence({
			...item,
			id: this.getIdExpence(),
		});

		const key = this.getDate(expence.date);
		const data = this.addExpence(expence);

		this.expences$.next({ ...this.expences$.value, [key]: data });

		return expence;
	}

	updateExpence(item: Expence, newData: Expence): Expence {
		return {
			...item,
			...this.getExpence(newData),
		};
	}

	getIdExpence(): number {
		const keys = Object.keys(this.expences$.value);

		let max: number = 0;

		keys.forEach(key => {
			this.expences$.value[key].forEach(expence => {
				if (max < expence.id) {
					max = expence.id;
				}
			});
		});

		return max + 1;
	}

	add() {
		this.dialog.open(AddExpenceComponent);
	}

	remove(item: Expence) {
		const dialogRef = this.dialog.open(ConfirmDeleteComponent);
		const key = this.getDate(item.date);

		dialogRef.afterClosed$.subscribe(result => {
			if (result) {
				const data = this.removeExpence(item);

				this.expences$.next({ ...this.expences$.value, [key]: data });
			}
		});
	}

	quickRemove(item: Expence) {
		const key = this.getDate(item.date);
		const data = this.removeExpence(item);

		this.expences$.next({ ...this.expences$.value, [key]: data });
	}

	edit(item: Expence) {
		const dialogRef = this.dialog.open(AddExpenceComponent, {
			data: {
				...item,
			},
		});

		dialogRef.afterClosed$.subscribe((result: Expence | null) => {
			if (result) {
				this.quickEdit(item, result);
			}
		});
	}

	quickEdit(item: Expence, itemData: Expence) {
		const key = this.getDate(item.date);

		const newItem = this.getExpence(itemData);
		const newKey = this.getDate(newItem.date);

		if (key === newKey) {
			const data = [...this.expences$.value[key]];
			const i = data.findIndex(el => el.id === item.id);

			data[i] = newItem;

			this.expences$.next({ ...this.expences$.value, [key]: data });
		} else {
			const data = this.removeExpence(item);
			const newData = this.addExpence(newItem);

			this.expences$.next({ ...this.expences$.value, [key]: data, [newKey]: newData });
		}
	}

	getExpence(item: Expence): Expence {
		return {
			...item,
			price: Number(item.price),
			date: new Date(item.date),
			isChecked: false,
		};
	}

	public getDate(date: Date) {
		return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
	}

	private saveExpences(expences: Data) {
		const jsonData = JSON.stringify(expences);
		localStorage.setItem('expences', jsonData);
	}

	private addExpence(item: Expence): Expence[] {
		const key = this.getDate(item.date);
		let data = this.expences$.value[key];

		if (data) {
			data.push(item);
		} else {
			data = [item];
		}

		return [...data];
	}

	private removeExpence(item: Expence): Expence[] {
		const key = this.getDate(item.date);
		const data = this.expences$.value[key];
		const i = data.findIndex(el => el.id === item.id);

		data.splice(i, 1);

		return [...data];
	}
}
