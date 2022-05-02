import { Expence } from 'src/app/interfaces/expence';
import { ExpenceStore } from '../interfaces/store.interface';

export class ExpenceHelper {
	public static getNewList(state: ExpenceStore, item: Expence): Expence[] {
		const key = ExpenceHelper.getExpenceDate(item.date);
		const data = state[key];

		return data ? [...data, item] : [item];
	}

	public static getRemovedList(state: ExpenceStore, item: Expence): Expence[] {	
		const key = ExpenceHelper.getExpenceDate(item.date);

		return state[key].filter(el => el.id !== item.id);
	}

	public static getExpence(item: Expence): Expence {
		return {
			...item,
			price: Number(item.price),
			date: new Date(item.date),
			isChecked: false,
		};
	}

	public static getIdExpence(state: ExpenceStore): number {
		const keys = Object.keys(state);

		let max: number = 0;

		keys.forEach(key => {
			state[key].forEach(expence => {
				if (max < expence.id) {
					max = expence.id;
				}
			});
		});

		return max + 1;
	}

	public static getExpenceDate(date: Date) {
		return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
	}
}
