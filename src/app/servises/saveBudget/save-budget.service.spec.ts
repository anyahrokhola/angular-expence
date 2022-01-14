import { TestBed } from '@angular/core/testing';

import { SaveBudgetService } from './save-budget.service';

describe('SaveBudgetService', () => {
  let service: SaveBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
