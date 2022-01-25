import { Component, Input, OnInit } from '@angular/core';
import { ExpenceServiceService } from 'src/app/servises/expence-service/expence-service.service';
import { Expence } from '../../interfaces/expence';
import { SalaryService } from '../../servises/salary.service';

@Component({
  selector: 'app-expence',
  templateUrl: './expence.component.html',
  styleUrls: ['./expence.component.scss']
})
export class ExpenceComponent implements OnInit {
  
  public expence: number = 0;

  constructor(private salaryService: SalaryService, private expenceService: ExpenceServiceService) {}

  ngOnInit(): void {
    this.expenceService.expences$.subscribe(expences => {
      this.expence = this.salaryService.getExpenceSum(expences);
    })
  }
}
