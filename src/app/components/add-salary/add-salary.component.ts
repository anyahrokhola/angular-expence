import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/modules/validation/validators/custom-validators';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.scss']
})
export class AddSalaryComponent implements OnInit {
  
  priceControl = new FormControl('',[Validators.required, Validators.min(1), CustomValidators.number]);

  constructor(public ref: DialogRef){}

  ngOnInit(): void {
    this.priceControl.valueChanges.subscribe((value) => {
      console.log(value)
    })
  }

  addSalaryValue(){
    this.priceControl.markAllAsTouched();

    if (this.priceControl.valid) {
      this.ref.close(this.priceControl.value);
    } 
  }
}
