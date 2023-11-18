import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHallFameComponent } from './home-hall-fame.component';

describe('HomeHallFameComponent', () => {
  let component: HomeHallFameComponent;
  let fixture: ComponentFixture<HomeHallFameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHallFameComponent]
    });
    fixture = TestBed.createComponent(HomeHallFameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
