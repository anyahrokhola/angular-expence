import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogRef, DialogService } from '@ngneat/dialog';
import { CategoryIconsComponent } from '../category-icons/category-icons.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  public icon: string;
  public color: string;
  public categories: Category[] = [];
  public count: number = 0;
  public isEdit = !!this.ref.data;

  categoryControl = new FormGroup({
    name: new FormControl(this.ref.data?.name, Validators.required),
    icon: new FormControl(this.ref.data?.icon, Validators.required),
  });

  public get nameControl(): FormControl {
    return this.categoryControl.controls['name'] as FormControl;
  }

  public get iconControl(): FormControl {
    return this.categoryControl.controls['icon'] as FormControl;
  }

  constructor(
    private dialog: DialogService,
    public ref: DialogRef<Category | undefined>,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {}

  addCategory() {
    this.categoryControl.markAllAsTouched();
    if (this.categoryControl.valid) {
      let newCategory: Category;
      if (!this.isEdit) {
        newCategory = this.categoryService.createCategory({
          ...this.categoryControl.value,
          icon: this.iconControl.value.icon,
          color: this.iconControl.value.color,
        });
      }
      if (this.isEdit) {
        newCategory = {
          ...this.ref.data,
          ...this.categoryControl.value,
          icon: this.iconControl.value.icon,
          color: this.iconControl.value.color,
        };
      }
      this.ref.close(newCategory);
    }
  }
}
