import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/modules/category/interfaces/category';
import { ExpenceServiceService } from 'src/app/servises/expence-service/expence-service.service';
import { Expence } from '../../interfaces/expence';

@Component({
  selector: 'app-expence-item',
  templateUrl: './expence-item.component.html',
  styleUrls: ['./expence-item.component.scss'],
})
export class ExpenceItemComponent {
  @Input() item: Expence;

  constructor(private expenceService: ExpenceServiceService) {}

  removeItem() {
    this.expenceService.remove(this.item)
  }

  editItem() {
    this.expenceService.edit(this.item)
  }
}
