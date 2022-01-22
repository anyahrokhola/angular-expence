import { Component } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { AddExpenceComponent } from './components/add-expence/add-expence.component';
import { AddSalaryComponent } from './components/add-salary/add-salary.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { Expence } from './interfaces/expence';
import { CategoryListComponent } from './modules/category/components/category-list/category-list.component';
import { SalaryService } from './servises/salary.service';
import { SaveBudgetService } from './servises/saveBudget/save-budget.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public data: Expence[] = [];
  public budget: number = 0;
  public expenses: number = 0;
  public balance: number = 0;

  constructor(
    private dialog: DialogService,
    private salary: SalaryService,
    private saveBudget: SaveBudgetService
  ) {}

  ngOnInit() {
    this.data = this.getData();
    this.budget = this.getBudget();
  }

  addSalary() {
    const dialogRef = this.dialog.open(AddSalaryComponent);
    dialogRef.afterClosed$.subscribe((result) => {
      if (result) {
        this.budget += result;
        this.balance = this.budget - this.expenses;
      }
      this.saveData();
      this.saveBudget.saveBudget(this.budget);
    });
  }

  getIdExpence(): number {
    let max: number = 0;

    for (let i = 0; i < this.data.length; i++) {
      if (max < this.data[i].id) {
        max = this.data[i].id;
      }
    }

    return max + 1;
  }

  addExpence() {
    const dialogRef = this.dialog.open(AddExpenceComponent);
    dialogRef.afterClosed$.subscribe((result: Expence | null) => {
      if (result) {
        result.id = this.getIdExpence();
        console.log('result id',result.id = this.getIdExpence());
        this.expenses += Number(result.price);
        this.balance = this.budget - this.expenses;

        this.data = [...this.data, result];
        console.log('this.data, result: ',[...this.data, result]);
        console.log('result: ', result);
        
      }
      
      this.saveData();
    });
  }

  handleRemove(item: Expence) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: 350,
      minHeight: 250,
    });

    dialogRef.afterClosed$.subscribe((result) => {
      if (result) {
        const i = this.data.findIndex(el => el.id === item.id)
        this.expenses -= this.data[i].price;
        this.balance += this.data[i].price;

        this.data.splice(i, 1);
        this.data = [...this.data];
      }
      this.saveData();
    });
  }

  edit(item: Expence) {
    const dialogRef = this.dialog.open(AddExpenceComponent, {
      data: {
        ...item,
      },
    });

    dialogRef.afterClosed$.subscribe((result: Expence | null) => {
      if (result) {
        const i = this.data.findIndex(el => el.id === item.id)
        this.data[i] = result;
        this.data = [...this.data];
        this.expenses = this.salary.getExpenceSum(this.data);
        console.log('i: ',i);
      }
      this.saveData();
    });
  }

  saveData(): void {
    const preparedData: any[] = [...this.data];

    for (let i = 0; i < preparedData.length; i++) {
      preparedData[i].date = preparedData[i].date.toString();
    }
    const jsonData = JSON.stringify(preparedData);

    localStorage.setItem('myData', jsonData);
  }

  getData(): Expence[] {
    const json = localStorage.getItem('myData');

    if (!json) {
      return [];
    }

    const expences: Expence[] = JSON.parse(json);

    for (let i = 0; i < expences.length; i++) {
      expences[i].date = new Date(expences[i].date || null);
    }
    console.log('expences',expences);
    console.log('json',JSON.parse(json));
    return expences;
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

    dialogRef.afterClosed$.subscribe(() => {
      this.data = [...this.data];
      console.log('this data', this.data);
    });
  }
}
