import { Component, Input, OnInit } from '@angular/core';
import { Expence } from '../interfaces/expence';
import { SalaryService } from '../servises/salary.service';

@Component({
  selector: 'app-expence',
  templateUrl: './expence.component.html',
  styleUrls: ['./expence.component.scss']
})
export class ExpenceComponent implements OnInit {

  @Input() expences!: Expence[];
  
  public expence: number = 0;
  public isNegative: Boolean = false;

  constructor(private salaryService: SalaryService) {}

  ngOnChanges() {
    this.expence = this.salaryService.getExpenceSum(this.expences);
  }

  ngOnInit(): void {}

}
