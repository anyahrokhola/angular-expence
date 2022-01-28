import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { Expence } from '../../interfaces/expence';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../modules/category/interfaces/category';
import { CategoryService } from '../../modules/category/services/category.service';
import { ExpenceServiceService } from 'src/app/servises/expence-service/expence-service.service';
import { SelectOption } from 'src/app/modules/inputs/interfaces/select-option';

@Component({
  selector: 'app-add-expence',
  templateUrl: './add-expence.component.html',
  styleUrls: ['./add-expence.component.scss'],
})
export class AddExpenceComponent implements OnInit {
  public data: Expence[] = [];
  public isEdit = !!this.ref.data;
  public options: SelectOption[] = [];

  fullNameControl = new FormGroup({
    name: new FormControl(this.ref.data?.name, Validators.required),
    price: new FormControl(this.ref.data?.price, [
      Validators.required,
      Validators.min(1)
    ]),
    categoryId: new FormControl(this.ref.data?.categoryId),
    date: new FormControl(this.ref.data?.date || new Date()),
  });

  public get nameControl(): FormControl {
    return this.fullNameControl.controls['name'] as FormControl;
  }

  public get priceControl(): FormControl {
    return this.fullNameControl.controls['price'] as FormControl;
  }

  constructor(
    public ref: DialogRef,
    public categoryService: CategoryService,
    public expenceService: ExpenceServiceService
  ) {}

  ngOnInit() {
    this.options = this.categoryService.categories.map(category => {
      return {
        id: category.id,
        name: category.name,
        icon: category.icon,
        iconColor: category.color
      }
    })
  }

  addExpence() {
    let newExpence: Expence;

    this.fullNameControl.markAllAsTouched();
    if (this.fullNameControl.valid) {
      if (!this.isEdit) {
        newExpence = this.expenceService.createExpence(
          this.fullNameControl.value
        );
      }
      if (this.isEdit) {
        newExpence = {
          ...this.ref.data,
          ...this.fullNameControl.value,
          
        };
      }
      this.ref.close(newExpence);
    }
  }
}
