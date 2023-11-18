import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinrateByCivByEloComponent } from './winrate-by-civ-by-elo.component';

describe('WinrateByCivByEloComponent', () => {
  let component: WinrateByCivByEloComponent;
  let fixture: ComponentFixture<WinrateByCivByEloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinrateByCivByEloComponent]
    });
    fixture = TestBed.createComponent(WinrateByCivByEloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
