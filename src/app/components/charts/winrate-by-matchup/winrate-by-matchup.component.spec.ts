import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinrateByMatchupComponent } from './winrate-by-matchup.component';

describe('WinrateByMatchupComponent', () => {
  let component: WinrateByMatchupComponent;
  let fixture: ComponentFixture<WinrateByMatchupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinrateByMatchupComponent]
    });
    fixture = TestBed.createComponent(WinrateByMatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
