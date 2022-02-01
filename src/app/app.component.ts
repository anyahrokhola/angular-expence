import { Component } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { AddSalaryComponent } from './components/add-salary/add-salary.component';
import { CategoryListComponent } from './modules/category/components/category-list/category-list.component';
import { ExpenceServiceService } from './servises/expence-service/expence-service.service';
import { SaveBudgetService } from './servises/saveBudget/save-budget.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public budget: number = 0;

  constructor(
    private dialog: DialogService,
    private saveBudget: SaveBudgetService,
    public expenceService: ExpenceServiceService
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
    const dialogRef = this.dialog.open(CategoryListComponent);
  }
}
