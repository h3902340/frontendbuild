import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingHistoryComponent } from './rating-history.component';

describe('RatingHistoryComponent', () => {
  let component: RatingHistoryComponent;
  let fixture: ComponentFixture<RatingHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingHistoryComponent]
    });
    fixture = TestBed.createComponent(RatingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
