import { Component, OnInit } from '@angular/core';
import { Expence } from 'src/app/interfaces/expence';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {

  constructor() { }

  public isChecked: boolean = false;

  ngOnInit(): void {
  }

  checked(item: Expence) {
    item.isChecked = !item.isChecked;
  }

}
