import { Component, Input, OnInit } from '@angular/core';
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
  @Input() expences!: Expence[];
  @Input() budget!: number;
  public isNegative: Boolean = false;
  public balance: number = 0;

  constructor(private salaryService: SalaryService, public color: ColorService) {}

  ngOnChanges() {
    this.balance = this.budget - this.salaryService.getExpenceSum(this.expences);
    this.isNegative = this.color.colorChange(this.balance);
  }

  ngOnInit(): void {}
}