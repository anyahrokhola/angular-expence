import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { AddExpenceComponent } from '../add-expence/add-expence.component';
import { Expence } from '../../interfaces/expence';
import { DialogService } from '@ngneat/dialog';
import { Output } from '@angular/core';
import { ExpenceGroup } from 'src/app/interfaces/expence-group';
import { GroupService } from 'src/app/servises/group/group.service';

@Component({
  selector: 'app-expence-list',
  templateUrl: './expence-list.component.html',
  styleUrls: ['./expence-list.component.scss'],
})
export class ExpenceListComponent implements OnChanges {
  @Input() list: Expence[];

  @Output() remove = new EventEmitter<Expence>();
  @Output() edit = new EventEmitter<Expence>();

  public groupedList: ExpenceGroup[] = [];

  constructor(
    private dialog: DialogService,
    private groupService: GroupService
  ) {}

  ngOnChanges(): void {
    this.groupedList = this.groupService.groupByDate(this.list);
  }

  removeFromList(item: Expence) {
    this.remove.emit(item);
  }

  editItem(item: Expence) {
    this.edit.emit(item);
  }
}
