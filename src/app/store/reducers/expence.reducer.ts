import { ExpenceStoreHelper } from 'src/app/helpers/expence-store.helper';
import { ExpenceHelper } from 'src/app/helpers/expence.helper';
import { ExpenceStore } from 'src/app/interfaces/store.interface';
import { ExpenceAction, ExpenceUnion } from '../actions/expence.actions';

export const initialState: ExpenceStore = ExpenceStoreHelper.getInitialData();

export const expencesReducer = (state: ExpenceStore = initialState, action: ExpenceUnion): ExpenceStore => {
	switch (action.type) {
		case ExpenceAction.AddExpence: {
			const id = ExpenceHelper.getIdExpence(state);
			const key = ExpenceHelper.getExpenceDate(action.expence.date);
			const item = ExpenceHelper.getExpence({ ...action.expence, id });

			return { ...state, [key]: ExpenceHelper.getNewList(state, item) };
		}
		case ExpenceAction.EditExpence: {
			const key = ExpenceHelper.getExpenceDate(action.expence.date);
			const newItem = ExpenceHelper.getExpence({ ...action.expence, ...action.newExpence });
			const newKey = ExpenceHelper.getExpenceDate(newItem.date);

			if (key === newKey) {
				const data = [...state[key]];
				const i = data.findIndex(el => el.id === action.expence.id);

				data[i] = newItem;

				return { ...state, [key]: data };
			}

			const data = ExpenceHelper.getRemovedList(state, action.expence);
			const newData = ExpenceHelper.getNewList(state, newItem);

			return { ...state, [key]: data, [newKey]: newData };
		}
		case ExpenceAction.DeleteExpence: {
			const key = ExpenceHelper.getExpenceDate(action.expence.date);

			return { ...state, [key]: ExpenceHelper.getRemovedList(state, action.expence) };
		}
		default:
			return state;
	}
};

