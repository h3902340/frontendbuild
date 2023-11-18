import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayParserComponent } from './replay-parser.component';

describe('ReplayParserComponent', () => {
  let component: ReplayParserComponent;
  let fixture: ComponentFixture<ReplayParserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplayParserComponent]
    });
    fixture = TestBed.createComponent(ReplayParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
