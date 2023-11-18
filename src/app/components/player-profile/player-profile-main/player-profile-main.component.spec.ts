import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProfileMainComponent } from './player-profile-main.component';

describe('PlayerProfileMainComponent', () => {
  let component: PlayerProfileMainComponent;
  let fixture: ComponentFixture<PlayerProfileMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerProfileMainComponent]
    });
    fixture = TestBed.createComponent(PlayerProfileMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
