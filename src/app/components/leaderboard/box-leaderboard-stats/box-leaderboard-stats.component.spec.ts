import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLeaderboardStatsComponent } from './box-leaderboard-stats.component';

describe('BoxLeaderboardStatsComponent', () => {
  let component: BoxLeaderboardStatsComponent;
  let fixture: ComponentFixture<BoxLeaderboardStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxLeaderboardStatsComponent]
    });
    fixture = TestBed.createComponent(BoxLeaderboardStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
