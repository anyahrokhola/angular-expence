import { CategoryStore } from 'src/app/interfaces/store.interface';
import { CategoryStoreHelper } from '../../helpers/category-store.helper';
import { CategoryHelper } from '../../helpers/category.helper';

import { CategoryAction, CategoryUnion } from '../actions/categories.actions';

export const initialState: CategoryStore = CategoryStoreHelper.getInitialData();

export const categoriesReducer = (state: CategoryStore = initialState, action: CategoryUnion): CategoryStore => {
	switch (action.type) {
		case CategoryAction.AddCategory: {
			const newCategory = CategoryHelper.createCategory(state, action.category);
			return [...state, newCategory];
		}

		case CategoryAction.EditCategory: {
			return state.map(el=> {
				if(el.id === action.category.id){
					return  {...action.category, ...action.newCategory}
				}
				return el;
			});
		}
		case CategoryAction.DeleteCategory: {
			
			return state.filter(el => el.id != action.category.id);
		}
		default:
			return state;
	}
};
