import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AddExpenceComponent } from '../add-expence/add-expence.component';
import { Expence } from '../../interfaces/expence';
import { DialogService } from '@ngneat/dialog';
import { Output } from '@angular/core';

@Component({
  selector: 'app-expence-list',
  templateUrl: './expence-list.component.html',
  styleUrls: ['./expence-list.component.scss']
})
export class ExpenceListComponent implements OnInit {

  @Input() list: Expence[];

  @Output() remove = new EventEmitter<number>();
  @Output() edit = new EventEmitter<{item: Expence, index: number}>();

  constructor(private dialog: DialogService) {}

  ngOnInit(): void {
  }

  removeFromList(index: number) {
    this.remove.emit(index)
  }

  editItem(item: Expence, i: number){
    this.edit.emit({item,index: i});
  }
}
