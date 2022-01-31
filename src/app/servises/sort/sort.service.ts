import { Injectable } from '@angular/core';
import { Expence } from 'src/app/interfaces/expence';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor() {}

  sort(arr: Array<{date: Date}>) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j].date < arr[j + 1].date) {
          let swap = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = swap;
        }
      }
    }
    return arr;
  }
}
