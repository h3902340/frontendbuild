import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCivPoolComponent } from './home-civ-pool.component';

describe('HomeCivPoolComponent', () => {
  let component: HomeCivPoolComponent;
  let fixture: ComponentFixture<HomeCivPoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCivPoolComponent]
    });
    fixture = TestBed.createComponent(HomeCivPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
