import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitEntryComponent } from './unit-entry.component';

describe('UnitEntryComponent', () => {
  let component: UnitEntryComponent;
  let fixture: ComponentFixture<UnitEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitEntryComponent]
    });
    fixture = TestBed.createComponent(UnitEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
