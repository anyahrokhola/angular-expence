import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BulkService } from 'src/app/modules/bulk/services/bulk/bulk.service';

import { ExpenceServiceService } from 'src/app/servises/expence-service/expence-service.service';
import { Expence } from '../../interfaces/expence';

@Component({
	selector: 'app-expence-item',
	templateUrl: './expence-item.component.html',
	styleUrls: ['./expence-item.component.scss'],
})
export class ExpenceItemComponent {
	@Input() item: Expence;

	public checkedControl = new FormControl();

	constructor(private expenceService: ExpenceServiceService, public bulkService: BulkService) {}

	ngOnInit() {
		this.checkedControl.valueChanges.subscribe(value => {
			value ? this.bulkService.check(this.item) : this.bulkService.uncheck(this.item);
		});
		this.bulkService.checkeds$.subscribe(items => {
			const isInclude = !!items.find(item => this.item.id === item.id);
			this.checkedControl.setValue(isInclude, {emitEvent: false})
		});
	}

	removeItem() {
		this.expenceService.remove(this.item);
	}

	editItem() {
		this.expenceService.edit(this.item);
	}
}
