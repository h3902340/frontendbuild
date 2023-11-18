import { TestBed } from '@angular/core/testing';

import { this.stringTableService } from './string-table.service';

describe('StrTableService', () => {
  let service: this.stringTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
