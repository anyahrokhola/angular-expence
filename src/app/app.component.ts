import { Component } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AddSalaryComponent } from './components/add-salary/add-salary.component';
import { BulkService } from './modules/bulk/services/bulk/bulk.service';
import { CategoryListComponent } from './modules/category/components/category-list/category-list.component';

import { ExpenceServiceService } from './servises/expence-service/expence-service.service';
import { SaveBudgetService } from './servises/saveBudget/save-budget.service';
import { selectCheckedExpences, selectExpencesArr } from './store/selectors/expence.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isShowBulk$ = this.store.select(selectExpencesArr).pipe(map(expences => !!expences.length))
  public isShowBulkOperations$ = this.store.select(selectCheckedExpences).pipe(map(expences => !!expences.length))

  public budget: number = 0;
  public isCheckedAll: boolean = false;

  constructor(
    private store: Store,
    private dialog: DialogService,
    private saveBudget: SaveBudgetService,
    public expenceService: ExpenceServiceService,
    public bulkService: BulkService
  ) {}

  ngOnInit() {
    this.budget = this.getBudget();
  }

  addSalary() {
    const dialogRef = this.dialog.open(AddSalaryComponent);
    dialogRef.afterClosed$.subscribe((result) => {
      if (result) {
        this.budget += result;
      }
      this.saveBudget.saveBudget(this.budget);
    });
  }

  addExpence() {
    this.expenceService.add();
  }

  getBudget(): number {
    const json = localStorage.getItem('myBudget');

    if (!json) {
      return 0;
    }

    return JSON.parse(json);
  }

  openListCategory() {
    this.dialog.open(CategoryListComponent);
  }
}
