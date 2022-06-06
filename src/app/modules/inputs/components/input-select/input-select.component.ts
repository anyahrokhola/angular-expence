import { Component, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '../../interfaces/select-option';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputSelectComponent,
      multi: true,
    },
  ],
})
export class InputSelectComponent implements ControlValueAccessor {
  @Input() options: SelectOption[];
  @Input() placeholder: string = 'Choose element';

  onChange: (value: number) => {};
  onTouch: () => {};

  public val: number;

  writeValue(value: number) {
    this.val = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  handleInput($event: number): void {
    this.val = $event;
    this.onChange(this.val);
    this.onTouch();
  }
}