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
  public categories: Category[] = [];
  public count: number = 0;

  categoryControl = new FormGroup({
    name: new FormControl('',Validators.required),
    icon: new FormControl('',Validators.required),
  });

  public get nameControl(): FormControl {
    return this.categoryControl.controls['name'] as FormControl;
  }

  public get iconControl(): FormControl {
    return this.categoryControl.controls['icon'] as FormControl;
  }


  constructor(private dialog: DialogService, public ref: DialogRef, private categoryService: CategoryService) {}

  ngOnInit(): void {}

  addIcon() {
    const dialogRef = this.dialog.open(CategoryIconsComponent);

    dialogRef.afterClosed$.subscribe((result) => {
      this.icon = result;
      console.log('this.icon = ', this.icon);
    });
  }

  addCategory() {
    this.categoryControl.markAllAsTouched();

    if (this.categoryControl.valid) {
      const newCategory: Category = this.categoryService.createCategory({
        ...this.categoryControl.value
      });
      console.log('newCategory',newCategory);
      this.ref.close(newCategory);
    }
  }

}
