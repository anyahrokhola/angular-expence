import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Expence } from '../interfaces/expence';

@Component({
  selector: 'app-expence-item',
  templateUrl: './expence-item.component.html',
  styleUrls: ['./expence-item.component.scss']
})
export class ExpenceItemComponent implements OnInit {

  @Input() item: Expence;

  @Output() removeClick = new EventEmitter<Expence>();
  @Output() editClick = new EventEmitter<Expence>();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem() {
    this.removeClick.emit(this.item)
  }

  editItem() {
    this.editClick.emit(this.item)
  }
}
