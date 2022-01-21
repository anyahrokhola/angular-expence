import { Injectable } from '@angular/core';
import { Expence } from 'src/app/interfaces/expence';
import { ExpenceGroup } from 'src/app/interfaces/expence-group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor() {}

  groupByDate(expences: Expence[]): ExpenceGroup[] {
    let resultArray: ExpenceGroup[] = [];

    for (let i = 0; i < expences.length; i++) {
      let clearDate = new Date(expences[i].date);
      clearDate.setHours(0, 0, 0, 0);
      const group = resultArray.find((item) => item.date.getDay() === clearDate.getDay());

      if (group) {
        group.expences = [...group.expences, expences[i]];
      } else {
        resultArray.push({
          date: clearDate,
          expences: [expences[i]]
        });
      }
    }
    return resultArray;
  }
}
