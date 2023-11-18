import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHistoryPlayerComponent } from './match-history-player.component';

describe('MatchHistoryPlayerComponent', () => {
  let component: MatchHistoryPlayerComponent;
  let fixture: ComponentFixture<MatchHistoryPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchHistoryPlayerComponent]
    });
    fixture = TestBed.createComponent(MatchHistoryPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
