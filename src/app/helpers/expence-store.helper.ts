import { ExpenceStore } from '../interfaces/store.interface';
import { ExpenceHelper } from './expence.helper';

export class ExpenceStoreHelper {
	public static getInitialData(): ExpenceStore {
		const json = localStorage.getItem('expences');

		if (json) {
			const expences: ExpenceStore = JSON.parse(json);
			const keys = Object.keys(expences);
			const data: ExpenceStore = {};

			keys.forEach(key => {
				data[key] = expences[key].map(item => ExpenceHelper.getExpence(item));
			});

			return data;
		}

		return {};
	}
}
