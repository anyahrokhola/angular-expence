import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputNumberComponent,
      multi: true,
    },
  ],
})
export class InputNumberComponent implements ControlValueAccessor {
  public validationNumber = /^[0-9]*$/;
  public valNumber: number;

  @Input() placeholder: string = 'Enter amount'

  public isValid: boolean = true;

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: number) {
    this.valNumber = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  handleInput($event): void {
    this.isValid = this.validationNumber.test($event.target.value.trim());
    if (this.isValid && $event.target.value != '') {
      this.valNumber = Number($event.target.value);
      this.onChange(this.valNumber);
      this.onTouch();
    } 
    if($event.target.value === ''){
        this.onChange(0);
        this.onTouch();
    }
  }
}
