import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonDialogComponent } from './add-button-dialog.component';

describe('AddButtonDialogComponent', () => {
  let component: AddButtonDialogComponent;
  let fixture: ComponentFixture<AddButtonDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddButtonDialogComponent]
    });
    fixture = TestBed.createComponent(AddButtonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
