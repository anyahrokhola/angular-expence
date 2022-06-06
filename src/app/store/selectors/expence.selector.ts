import { createSelector } from '@ngrx/store';
import { Expence } from 'src/app/interfaces/expence';
import { AppStore, ExpenceStore } from 'src/app/interfaces/store.interface';

export const selectExpences = (state: AppStore) => state.expences;

export const selectExpencesArr = createSelector<AppStore, ExpenceStore, Expence[]>(
	selectExpences,
	(expences: ExpenceStore): Expence[] => {		
		const keys = Object.keys(expences);

		let result: Expence[] = [];

		for (let i = 0; i < keys.length; i++) {
			result = result.concat(expences[keys[i]]);
		}

		return result;
	}
);

export const selectCheckedExpences = createSelector<AppStore, Expence[], Expence[]>(
	selectExpencesArr,
	(expences: Expence[]): Expence[] => {		
		return expences.filter(el => el.isChecked);
	}
);

export const selectIsAllChecked = createSelector<AppStore, Expence[], Expence[], boolean>(
	selectExpencesArr,
	selectCheckedExpences,
	(expences: Expence[], checkedExpences: Expence[]): boolean => expences.length === checkedExpences.length
);
