import { CategoryStore } from 'src/app/interfaces/store.interface';

export class CategoryStoreHelper {
	public static getInitialData(): CategoryStore {
		const json = localStorage.getItem('categories');
		console.log('JSON.parse(json)',JSON.parse(json));

		return json ? JSON.parse(json) : [];
	}
}
