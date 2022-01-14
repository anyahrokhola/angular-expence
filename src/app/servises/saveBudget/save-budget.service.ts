import { Injectable } from '@angular/core';
import { Expence } from 'src/app/interfaces/expence';

@Injectable({
  providedIn: 'root'
})
export class SaveBudgetService {

  constructor() { }

  saveBudget(valute: number) {
    const budget = JSON.stringify(valute);
    localStorage.setItem('myBudget', budget);
  }
}
