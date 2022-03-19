import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BulkService } from '../../services/bulk/bulk.service';

@Component({
	selector: 'app-check-box-bulk',
	templateUrl: './check-box-bulk.component.html',
	styleUrls: ['./check-box-bulk.component.scss'],
})
export class CheckBoxBulkComponent implements OnInit {
	constructor(private bulkService: BulkService) {}

	public checkedControl = new FormControl();

	ngOnInit(): void {
		this.checkedControl.valueChanges.subscribe((value) => {
			value ? this.bulkService.checkAll() : this.bulkService.uncheckAll();
		});
		
		this.bulkService.checkeds$.subscribe(() => {
			this.checkedControl.setValue(this.bulkService.isEqually(), { emitEvent: false })
		});
	}
}
