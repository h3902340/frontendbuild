import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitViewerComponent } from './unit-viewer.component';

describe('UnitViewerComponent', () => {
  let component: UnitViewerComponent;
  let fixture: ComponentFixture<UnitViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitViewerComponent]
    });
    fixture = TestBed.createComponent(UnitViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
