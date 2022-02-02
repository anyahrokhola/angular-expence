import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor() {}

  sort(arr: Date[]) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          let swap = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = swap;
        }
      }
    }
    return arr;
  }
}
