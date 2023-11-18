import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeUpOptionComponent } from './age-up-option.component';

describe('AgeUpOptionComponent', () => {
  let component: AgeUpOptionComponent;
  let fixture: ComponentFixture<AgeUpOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeUpOptionComponent]
    });
    fixture = TestBed.createComponent(AgeUpOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
