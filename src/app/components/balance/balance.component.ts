import { Component, Input, OnInit } from '@angular/core';
import { ExpenceServiceService } from 'src/app/servises/expence-service/expence-service.service';
import { AppComponent } from '../../app.component';
import { Expence } from '../../interfaces/expence';
import { ColorService } from '../../servises/changeColor/color.service';
import { SalaryService } from '../../servises/salary.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  @Input() budget!: number;
  
  public expences: Expence[] = [];
  public isNegative: Boolean = false;
  public balance: number = 0;

  constructor(private salaryService: SalaryService, public color: ColorService, public expenceService: ExpenceServiceService) {}

  ngOnChanges() {
    this.balance = this.budget - this.salaryService.getExpenceSum(this.expences);
    this.isNegative = this.color.colorChange(this.balance);
  }

  ngOnInit(): void {
    this.expenceService.expences$.subscribe(expences => {
      this.expences = expences;
      this.balance = this.budget - this.salaryService.getExpenceSum(expences);
      this.isNegative = this.color.colorChange(this.balance);
    })
  }
}
