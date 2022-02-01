import { Injectable } from '@angular/core';
import { Expence } from '../interfaces/expence';

@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  constructor() {}

  getExpenceSum(expences: Record<string, Expence[]>): number {
    let sum = 0;

    const keys = Object.keys(expences);
    keys.forEach((key) => {
      expences[key].forEach((expence) => {
        sum += expence.price;
      });
    });

    return sum;
  }
}
