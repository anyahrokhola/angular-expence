import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputDateComponent,
      multi: true,
    },
  ],
})
export class InputDateComponent implements ControlValueAccessor {

  @Input() placeholder: string = 'Pick date';

  onChange: any = () => {};
  onTouch: any = () => {};

  val = '';

  writeValue(value: any) {
    this.val = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  handleInput($event): void {
    this.val = $event.target.value;
    this.onChange(this.val);
    this.onTouch();
    console.log(this.val)
  }
}
