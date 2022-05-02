import { Component, OnInit} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogService } from '@ngneat/dialog';
import { IconData } from '../../interfaces/category';
import { CategoryIconsComponent } from '../category-icons/category-icons.component';

@Component({
  selector: 'app-category-icon-picker',
  templateUrl: './category-icon-picker.component.html',
  styleUrls: ['./category-icon-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CategoryIconPickerComponent,
      multi: true,
    },
  ],
})
export class CategoryIconPickerComponent
  implements OnInit, ControlValueAccessor
{
  public icon: IconData | null = null;
  public disabled: boolean = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor(public dialog: DialogService) {}

  ngOnInit(): void {}

  writeValue(icon: IconData): void {
    this.icon = icon;
    console.log(icon);
    
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  addIcon() {
    const dialogRef = this.dialog.open(CategoryIconsComponent,{
      data:{
        ...this.icon
      }
    });
    
    this.onTouch();

    dialogRef.afterClosed$.subscribe((result: IconData) => {
      this.icon = result;
      this.onChange(result);
    });
  }
}
