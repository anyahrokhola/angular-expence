import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectExpences } from 'src/app/store/selectors/expence.selector';
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
  
  private expences: Record<string, Expence[]> = {};
  public isNegative: Boolean = false;
  public balance: number = 0;

  constructor(private store: Store, private salaryService: SalaryService, public color: ColorService,) {}

  ngOnChanges() {
    this.balance = this.budget - this.salaryService.getExpenceSum(this.expences);
    this.isNegative = this.color.colorChange(this.balance);
  }

  ngOnInit(): void {
    this.store.select(selectExpences).subscribe(expences => {
      this.expences = expences;
      this.balance = this.budget - this.salaryService.getExpenceSum(expences);
      this.isNegative = this.color.colorChange(this.balance);
    })
  }
}
