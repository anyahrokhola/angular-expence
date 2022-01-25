import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { AddExpenceComponent } from '../add-expence/add-expence.component';
import { Expence } from '../../interfaces/expence';
import { DialogService } from '@ngneat/dialog';
import { Output } from '@angular/core';
import { ExpenceGroup } from 'src/app/interfaces/expence-group';
import { GroupService } from 'src/app/servises/group/group.service';
import { ExpenceServiceService } from 'src/app/servises/expence-service/expence-service.service';

@Component({
  selector: 'app-expence-list',
  templateUrl: './expence-list.component.html',
  styleUrls: ['./expence-list.component.scss'],
})
export class ExpenceListComponent implements OnInit {
  public groupedList: ExpenceGroup[] = [];
  
  constructor(
    private groupService: GroupService,
    private expenceService: ExpenceServiceService
  ) {}

  ngOnInit(): void {
    this.expenceService.expences$.subscribe((expences) => {
      this.groupedList = this.groupService.groupByDate(expences);
    });
  }
}
