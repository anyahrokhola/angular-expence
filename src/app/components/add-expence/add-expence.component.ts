import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { Expence } from '../../interfaces/expence';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../modules/category/interfaces/category';
import { CategoryService } from '../../modules/category/services/category.service';

@Component({
  selector: 'app-add-expence',
  templateUrl: './add-expence.component.html',
  styleUrls: ['./add-expence.component.scss'],
})
export class AddExpenceComponent implements OnInit {
  public data: Expence[] = [];

  fullNameControl = new FormGroup({
    name: new FormControl(this.ref.data?.name, Validators.required),
    price: new FormControl(this.ref.data?.price, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
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

  constructor(public ref: DialogRef, public categoryService: CategoryService) {}

  ngOnInit() {}

  addExpence() {
    const { name, price, categoryId} = this.fullNameControl.value;
    const date = new Date(this.fullNameControl.value.date);

    console.log('this.fullNameControl.value.date',this.fullNameControl.value.date);
    const newExpence: Partial<Expence> = {
      name: name,
      price: Number(price),
      categoryId: categoryId,
      date: date
    };

    console.log('newExpence before closed',newExpence);

    console.log('date', date);
    console.log('typeof date', typeof date);
    this.fullNameControl.markAllAsTouched();

    if (this.fullNameControl.valid) {
      this.ref.close(newExpence);
    }

    console.log('newExpence after closed',newExpence);
  }
}
