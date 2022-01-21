import { TestBed } from '@angular/core/testing';
import { Expence } from 'src/app/interfaces/expence';
import { ExpenceGroup } from 'src/app/interfaces/expence-group';

import { GroupService } from './group.service';

describe('GroupService', () => {
  let service: GroupService;

  const dateYestarday = new Date(2021, 0, 20, 5);
  const dateToday = new Date(2021, 0, 21, 13);
  const clearDateYestarday = new Date(2021, 0, 20);
  const clearDateToday = new Date(2021, 0, 21);

  const expenceToday: Expence = {
    name: 'test today',
    price: 10,
    date: dateToday,
  };

  const expenceToday2: Expence = {
    name: 'test today2',
    price: 10,
    date: dateToday,
  };

  const expenceYestarday: Expence = {
    name: 'test yesterday',
    price: 10,
    date: dateYestarday,
  };

  const expenceYestarday2: Expence = {
    name: 'test yesterday2',
    price: 10,
    date: dateYestarday,
  };

  const expenceYestarday3: Expence = {
    name: 'test yesterday3',
    price: 10,
    date: dateYestarday,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('groupByDate', () => {
    it('should group emty array', () => {
      expect(service.groupByDate([])).toEqual([]);
    });

    it('should group one item', () => {
      const expectedResult: ExpenceGroup = {
        date: clearDateToday,
        expences: [expenceToday],
      };
      expect(service.groupByDate([expenceToday])).toEqual([expectedResult]);
    });

    it('should group one today one yesterday', () => {
      const expectedResultToday: ExpenceGroup = {
        date: clearDateToday,
        expences: [expenceToday],
      };

      const expectedResultYestarday: ExpenceGroup = {
        date: clearDateYestarday,
        expences: [expenceYestarday],
      };

      expect(service.groupByDate([expenceToday, expenceYestarday])).toEqual([
        expectedResultToday,
        expectedResultYestarday,
      ]);
    });

    it('should group two today three yesterday', () => {
      const expectedResultToday: ExpenceGroup = {
        date: clearDateToday,
        expences: [expenceToday, expenceToday2],
      };

      const expectedResultYestarday: ExpenceGroup = {
        date: clearDateYestarday,
        expences: [expenceYestarday, expenceYestarday2, expenceYestarday3],
      };

      expect(
        service.groupByDate([
          expenceToday,
          expenceToday2,
          expenceYestarday,
          expenceYestarday2,
          expenceYestarday3,
        ])
      ).toEqual([expectedResultToday, expectedResultYestarday]);
      console.log(
        'service: ',
        service.groupByDate([
          expenceToday,
          expenceToday2,
          expenceYestarday,
          expenceYestarday2,
          expenceYestarday3,
        ])
      );
    });
  });
});
