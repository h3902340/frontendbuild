import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderSearchComponent } from './deck-builder-search.component';

describe('DeckBuilderSearchComponent', () => {
  let component: DeckBuilderSearchComponent;
  let fixture: ComponentFixture<DeckBuilderSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckBuilderSearchComponent]
    });
    fixture = TestBed.createComponent(DeckBuilderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
