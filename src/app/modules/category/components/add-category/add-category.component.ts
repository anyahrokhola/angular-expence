import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../interfaces/category';

@Component({
	selector: 'app-add-category',
	templateUrl: './add-category.component.html',
	styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
	public categories: Category[] = [];
	public count: number = 0;
	public isEdit = !!this.ref.data;

	categoryControl = new FormGroup({
		name: new FormControl(this.ref.data?.name, Validators.required),
		icon: new FormControl(
			{
				name: this.ref.data?.icon.name,
				color: this.ref.data?.icon?.color,
			},
			Validators.required
		),
	});

	public get nameControl(): FormControl {
		return this.categoryControl.controls['name'] as FormControl;
	}

	public get iconControl(): FormControl {
		return this.categoryControl.controls['icon'] as FormControl;
	}

	constructor(public ref: DialogRef<Category | undefined>) {}

	ngOnInit(): void {}

	addCategory() {
		this.categoryControl.markAllAsTouched();

		if (this.categoryControl.invalid) {
			return;
		}
		
		return this.ref.close(this.categoryControl.value);
	}
}
