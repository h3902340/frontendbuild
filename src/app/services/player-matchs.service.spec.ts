import { TestBed } from '@angular/core/testing';

import { PlayerMatchsService } from './player-matchs.service';

describe('PlayerMatchsService', () => {
  let service: PlayerMatchsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerMatchsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
