import { Component, Input} from '@angular/core';
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
  public val: string;

  @Input() placeholder: string = 'Enter amount'

  public isValid: boolean = true;

  onChange: (value?: number | string) => {};
  onTouch: () => {};

  writeValue(value: string) {
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
      
      if($event.target.value === ''){
        this.onChange();
        this.onTouch();

        return;
      }
      
      const value = isNaN(Number(this.val)) ? this.val : Number(this.val);

      this.onChange(value);
      this.onTouch();
  }
}
