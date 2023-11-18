import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlayersOnlineComponent } from './home-players-online.component';

describe('HomePlayersOnlineComponent', () => {
  let component: HomePlayersOnlineComponent;
  let fixture: ComponentFixture<HomePlayersOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePlayersOnlineComponent]
    });
    fixture = TestBed.createComponent(HomePlayersOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
