import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveBudgetService {

  constructor() { 
    
  }

  saveBudget(valute: number) {
    const budget = JSON.stringify(valute);
    localStorage.setItem('myBudget', budget);
  }
}
