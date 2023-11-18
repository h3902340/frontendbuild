import { TestBed } from '@angular/core/testing';

import { TechTreeService } from './tech-tree.service';

describe('TechTreeService', () => {
  let service: TechTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
