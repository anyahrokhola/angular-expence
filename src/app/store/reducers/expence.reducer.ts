import { ExpenceStoreHelper } from 'src/app/helpers/expence-store.helper';
import { ExpenceHelper } from 'src/app/helpers/expence.helper';
import { ExpenceStore } from 'src/app/interfaces/store.interface';
import { ExpenceAction, ExpenceUnion } from '../actions/expence.actions';
import { mapValues } from 'lodash';

export const initialState: ExpenceStore = ExpenceStoreHelper.getInitialData();

export const expencesReducer = (state: ExpenceStore = initialState, action: ExpenceUnion): ExpenceStore => {
	switch (action.type) {
		case ExpenceAction.AddExpence: {
			const id = ExpenceHelper.getIdExpence(state);
			const key = ExpenceHelper.getExpenceDate(action.expence.date);
			const item = ExpenceHelper.getExpence({ ...action.expence, id });

			return { ...state, [key]: ExpenceHelper.getNewList(state, item) };
		}
		case ExpenceAction.EditExpence:
		case ExpenceAction.CheckExpence: {
			const expences = Array.isArray(action.expence) ? action.expence : [action.expence];

			let newState = { ...state };

			for (const expence of expences) {
				const key = ExpenceHelper.getExpenceDate(expence.date);
				const newItem = ExpenceHelper.getExpence({ ...expence, ...action.newExpence });
				const newKey = ExpenceHelper.getExpenceDate(newItem.date);

				if (key === newKey) {
					newState = { ...newState, [key]: newState[key].map(el => el.id === expence.id ? newItem : el) };
					continue;
				}

				const data = ExpenceHelper.getRemovedList(newState, expence);
				const newData = ExpenceHelper.getNewList(newState, newItem);

				newState = { ...newState, [key]: data, [newKey]: newData };
			}

			return newState;
		}
		case ExpenceAction.CheckAllExpences: {
			return mapValues(state, expences => expences.map(el => ({...el, isChecked: action.isAllChecked})));
		}
		case ExpenceAction.DeleteExpence: {
			const expences = Array.isArray(action.expence) ? action.expence : [action.expence];

			let newState = { ...state };

			for (const expence of expences) {
				const key = ExpenceHelper.getExpenceDate(expence.date);
				newState = { ...newState, [key]: ExpenceHelper.getRemovedList(newState, expence) };
			}

			return newState;
		}
		default:
			return state;
	}
};
