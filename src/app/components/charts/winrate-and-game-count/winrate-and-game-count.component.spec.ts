import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinrateAndGameCountComponent } from './winrate-and-game-count.component';

describe('WinrateAndGameCountComponent', () => {
  let component: WinrateAndGameCountComponent;
  let fixture: ComponentFixture<WinrateAndGameCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinrateAndGameCountComponent]
    });
    fixture = TestBed.createComponent(WinrateAndGameCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
