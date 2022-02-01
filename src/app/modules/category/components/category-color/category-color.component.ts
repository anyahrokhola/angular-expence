import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';
import { colors } from '../../constants/colors.const';

@Component({
  selector: 'app-category-color',
  templateUrl: './category-color.component.html',
  styleUrls: ['./category-color.component.scss'],
  providers:[{
      provide: NG_VALUE_ACCESSOR,
      useExisting: CategoryColorComponent,
      multi: true,
  }]
})
export class CategoryColorComponent implements OnInit, ControlValueAccessor {

  public colors: ReadonlyArray<typeof colors[number]> = colors;
  public value: string = 'black';

  onChange: any = () => {};
  onTouch: any = () => {};
  
  constructor(public ref: DialogRef) { }

  writeValue(color: string): void {
    this.value = color || 'black';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  ngOnInit(): void {
  }

  handeChangeColor(color: string){
    this.value = color;
    this.onTouch();
    this.onChange(color);
  }
}
