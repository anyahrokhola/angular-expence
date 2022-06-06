import { CategoryStore } from 'src/app/interfaces/store.interface';

export class CategoryStoreHelper {
	public static getInitialData(): CategoryStore {
		const json = localStorage.getItem('categories');

		return json ? JSON.parse(json) : [];
	}
}
