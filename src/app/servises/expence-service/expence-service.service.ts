import { Injectable } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { BehaviorSubject } from 'rxjs';
import { AddExpenceComponent } from 'src/app/components/add-expence/add-expence.component';
import { ConfirmDeleteComponent } from 'src/app/components/confirm-delete/confirm-delete.component';
import { Expence } from 'src/app/interfaces/expence';
import { SalaryService } from '../salary.service';

@Injectable({
  providedIn: 'root',
})
export class ExpenceServiceService {
  public expences$ = new BehaviorSubject<Expence[]>([]);

  constructor(private dialog: DialogService, private salary: SalaryService) {
    const json = localStorage.getItem('expences');

    if (json) {
      const expences = JSON.parse(json);

      const data = expences.map(item => this.getExpence(item));
      this.expences$.next(data);
    }

    this.expences$.subscribe((expenses) => this.saveExpences(expenses));
  }

  createExpence(item: Omit<Expence, 'id'>): Expence {
    const expence: Expence = this.getExpence({ ...item, id: this.getIdExpence()});
    this.expences$.next([...this.expences$.value, expence]);

    return expence;
  }

  updateExpence(item: Expence, newData: Expence): Expence{
    return {
      ...item,
      ...this.getExpence(newData),
    };
  }

  getIdExpence(): number {
    let max: number = 0;

    for (let i = 0; i < this.expences$.value.length; i++) {
      if (max < this.expences$.value[i].id) {
        max = this.expences$.value[i].id;
      }
    }

    return max + 1;
  }

  addExpence() {
    this.dialog.open(AddExpenceComponent);
  }

  remove(item: Expence) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent);

    dialogRef.afterClosed$.subscribe((result) => {
      if (result) {
        const data = [...this.expences$.value];
        const i = this.findIndex(item.id);

        data.splice(i, 1);

        this.expences$.next([...data]);
      }
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
        const data = [...this.expences$.value];
        const i = this.findIndex(item.id);
        data[i] = this.getExpence(result);
        this.expences$.next([...data]);
      }
    });
  }

  getExpence(item: Expence): Expence{
    return {
      ...item,
      price: Number(item.price),
      date: new Date(item.date)
    }
  }

  private findIndex(id: number): number{
    return this.expences$.value.findIndex((el) => el.id === id);
  }

  private saveExpences(expences: Expence[]) {
    const jsonData = JSON.stringify([...expences]);
    localStorage.setItem('expences', jsonData);
  }
}
