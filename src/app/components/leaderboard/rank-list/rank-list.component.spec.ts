import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankListComponent } from './rank-list.component';

describe('RankListComponent', () => {
  let component: RankListComponent;
  let fixture: ComponentFixture<RankListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankListComponent]
    });
    fixture = TestBed.createComponent(RankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
