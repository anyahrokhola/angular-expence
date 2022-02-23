import { Component, Input } from '@angular/core';
import { BulkService } from 'src/app/servises/bulk/bulk.service';
import { ExpenceServiceService } from 'src/app/servises/expence-service/expence-service.service';
import { Expence } from '../../interfaces/expence';

@Component({
	selector: 'app-expence-item',
	templateUrl: './expence-item.component.html',
	styleUrls: ['./expence-item.component.scss'],
})
export class ExpenceItemComponent {
	@Input() item: Expence;

	constructor(private expenceService: ExpenceServiceService, public bulkService: BulkService) {}

	removeItem() {
		this.expenceService.remove(this.item);
	}

	editItem() {
		this.expenceService.edit(this.item);
	}

	checked(item: Expence) {
		item.isChecked = !item.isChecked;
		item.isChecked ? this.bulkService.check(item) : this.bulkService.uncheck(item);		
	}
}
