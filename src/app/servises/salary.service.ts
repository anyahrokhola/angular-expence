import { Injectable } from '@angular/core';
import { Expence } from '../interfaces/expence';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor() { }

  getExpenceSum(expences: Expence[]): number{
    let sum = 0;

    for (let i = 0; i < expences.length; i++) {
      sum += expences[i].price;
    }
    return sum;
  }
}
