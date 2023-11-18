import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHistoryOpponentComponent } from './match-history-opponent.component';

describe('MatchHistoryOpponentComponent', () => {
  let component: MatchHistoryOpponentComponent;
  let fixture: ComponentFixture<MatchHistoryOpponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchHistoryOpponentComponent]
    });
    fixture = TestBed.createComponent(MatchHistoryOpponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
