import { TestBed } from '@angular/core/testing';

import { ExpenceServiceService } from './expence-service.service';

describe('ExpenceServiceService', () => {
  let service: ExpenceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
