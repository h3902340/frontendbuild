import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMatchsComponent } from './player-matchs.component';

describe('PlayerMatchsComponent', () => {
  let component: PlayerMatchsComponent;
  let fixture: ComponentFixture<PlayerMatchsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerMatchsComponent]
    });
    fixture = TestBed.createComponent(PlayerMatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
