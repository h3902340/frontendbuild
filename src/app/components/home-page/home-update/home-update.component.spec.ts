import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpdateComponent } from './home-update.component';

describe('HomeUpdateComponent', () => {
  let component: HomeUpdateComponent;
  let fixture: ComponentFixture<HomeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeUpdateComponent]
    });
    fixture = TestBed.createComponent(HomeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
