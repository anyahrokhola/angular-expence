import { Injectable } from '@angular/core';
import { Expence } from 'src/app/interfaces/expence';
import { ExpenceGroup } from 'src/app/interfaces/expence-group';
import { SortService } from '../sort/sort.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private sortService: SortService) {}

  groupByDate(expences: Expence[]): ExpenceGroup[] {
    let resultArray: ExpenceGroup[] = [];

    for (let i = 0; i < expences.length; i++) {
      let clearDate = new Date(expences[i].date);
      clearDate.setHours(0, 0, 0, 0);
      const group = resultArray.find((item) => item.date.getDay() === clearDate.getDay());
      // console.log('this.sortService.sort(expences);',this.sortService.sort(expences));
      if (group) {
        group.expences = [...group.expences, expences[i]];
        this.sortService.sort(group.expences)
        // console.log('this.sortService.sort(group.expences)',this.sortService.sort(group.expences));
      } else {
        resultArray.push({
          date: clearDate,
          expences: [expences[i]]
        });
      }
    }
    this.sortService.sort(resultArray)
    return resultArray;
  }
}
