import { Component, OnInit } from '@angular/core';
import { BulkService } from '../../services/bulk/bulk.service';

@Component({
	selector: 'app-check-box-bulk',
	templateUrl: './check-box-bulk.component.html',
	styleUrls: ['./check-box-bulk.component.scss'],
})
export class CheckBoxBulkComponent implements OnInit{
	constructor(private bulkService: BulkService) {}

	public isCheckedAll: boolean;

	ngOnInit() {
		this.bulkService.checkeds$.subscribe(() => {
      this.isCheckedAll = this.bulkService.isEqually();
    });
	}

	checked() {
		this.isCheckedAll = !this.isCheckedAll;
		this.isCheckedAll ? this.bulkService.checkAll() : this.bulkService.uncheckAll();
	}
}
