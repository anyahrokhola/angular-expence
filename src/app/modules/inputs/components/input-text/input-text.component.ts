import { Component, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputTextComponent,
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'Type hear';


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
  }
}
