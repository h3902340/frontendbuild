import { TestBed } from '@angular/core/testing';

import { TableAgeService } from './table-age.service';

describe('TableAgeService', () => {
  let service: TableAgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableAgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
