import { CategoryStore } from 'src/app/interfaces/store.interface';
import { Category } from '../interfaces/category';

export class CategoryHelper {
	public static createCategory(state: CategoryStore, data: Omit<Category, 'id'>): Category {
		return { ...data, id: CategoryHelper.getCategoryId(state) };
	}

	public static getCategoryId(state: CategoryStore): number {
		let max: number = 0;

		for (let i = 0; i < state.length; i++) {
			if (max < state[i].id) {
				max = state[i].id;
			}
		}

		return max + 1;
	}
}
