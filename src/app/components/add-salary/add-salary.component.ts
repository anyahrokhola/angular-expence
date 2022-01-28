import { Component, Input, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SalaryService } from '../../servises/salary.service';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.scss']
})
export class AddSalaryComponent implements OnInit {
  
  priceControl = new FormControl('',[Validators.required, Validators.min(1)]);

  constructor(public ref: DialogRef){}

  ngOnInit(): void {
  }

  addSalaryValue(){
    this.priceControl.markAllAsTouched();

    if (this.priceControl.valid) {
      this.ref.close(this.priceControl.value);
    } 
    console.log(this.priceControl.value);
  }
}
