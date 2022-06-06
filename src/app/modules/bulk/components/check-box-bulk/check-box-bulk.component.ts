import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CheckAllExpences } from 'src/app/store/actions/expence.actions';
import { selectIsAllChecked } from 'src/app/store/selectors/expence.selector';

@Component({
	selector: 'app-check-box-bulk',
	templateUrl: './check-box-bulk.component.html',
	styleUrls: ['./check-box-bulk.component.scss'],
})
export class CheckBoxBulkComponent implements OnInit {
	public checkedControl = new FormControl();
	
	constructor(private store: Store) {}

	ngOnInit(): void {
		this.checkedControl.valueChanges.subscribe(isChecked => this.store.dispatch(new CheckAllExpences(isChecked)));
		this.store.select(selectIsAllChecked).subscribe(isChecked => this.checkedControl.setValue(isChecked, { emitEvent: false }));
	}
}
