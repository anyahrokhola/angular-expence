import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-input-checkbox',
	templateUrl: './input-checkbox.component.html',
	styleUrls: ['./input-checkbox.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: InputCheckboxComponent,
			multi: true,
		},
	],
})
export class InputCheckboxComponent implements ControlValueAccessor {
	public val: boolean = false;

	constructor() {}

	onChange: any = () => {};
	onTouch: any = () => {};

	writeValue(value: any): void {
		this.val = value;
	}
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

	handleInput(): void {
		this.val = !this.val;
		const value = this.val;
		this.onChange(value);
		this.onTouch();
	}
}
