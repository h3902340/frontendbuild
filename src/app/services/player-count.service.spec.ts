import { TestBed } from '@angular/core/testing';

import { PlayerCountService } from './player-count.service';

describe('PlayerCountService', () => {
  let service: PlayerCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
