import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderCardComponent } from './deck-builder-card.component';

describe('DeckBuilderCardComponent', () => {
  let component: DeckBuilderCardComponent;
  let fixture: ComponentFixture<DeckBuilderCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckBuilderCardComponent]
    });
    fixture = TestBed.createComponent(DeckBuilderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
