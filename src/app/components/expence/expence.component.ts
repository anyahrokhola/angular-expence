import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectExpences } from 'src/app/store/selectors/expence.selector';
import { SalaryService } from '../../servises/salary.service';

@Component({
	selector: 'app-expence',
	templateUrl: './expence.component.html',
	styleUrls: ['./expence.component.scss'],
})
export class ExpenceComponent implements OnInit {
	public expence: number = 0;

	constructor(private store: Store, private salaryService: SalaryService) {}

	ngOnInit(): void {
		this.store.select(selectExpences).subscribe(expences => {
			this.expence = this.salaryService.getExpenceSum(expences);
		});
	}
}
