import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { Expence } from '../../interfaces/expence';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectOption } from 'src/app/modules/inputs/interfaces/select-option';
import { CustomValidators } from 'src/app/modules/validation/validators/custom-validators';
import { Store } from '@ngrx/store';
import { selectCategories } from 'src/app/modules/category/store/selectors/categories.selector';

@Component({
	selector: 'app-add-expence',
	templateUrl: './add-expence.component.html',
	styleUrls: ['./add-expence.component.scss'],
})
export class AddExpenceComponent implements OnInit {
	public data: Expence[] = [];
	public isEdit = !!this.ref.data;
	public options: SelectOption[] = [];

	fullNameControl = new FormGroup({
		name: new FormControl(this.ref.data?.name, Validators.required),
		price: new FormControl(this.ref.data?.price, [Validators.required, Validators.min(1), CustomValidators.number]),
		categoryId: new FormControl(this.ref.data?.categoryId),
		date: new FormControl(this.ref.data?.date || new Date()),
	});

	public get nameControl(): FormControl {
		return this.fullNameControl.controls['name'] as FormControl;
	}

	public get priceControl(): FormControl {
		return this.fullNameControl.controls['price'] as FormControl;
	}

	constructor(private store: Store, public ref: DialogRef) {}

	ngOnInit() {
		console.log(this.ref.data);
		this.store.select(selectCategories).subscribe(categories => {
			this.options = categories.map(category => ({
				id: category.id,
				name: category.name,
				icon: category.icon.name,
				iconColor: category.icon.color,
			}));
		});
	}

	addExpence() {
		this.fullNameControl.markAllAsTouched();

		if (this.fullNameControl.invalid) {
			return;
		}

		return this.ref.close(this.fullNameControl.value);
	}
}
