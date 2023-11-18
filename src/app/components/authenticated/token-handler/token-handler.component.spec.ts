import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenHandlerComponent } from './token-handler.component';

describe('TokenHandlerComponent', () => {
  let component: TokenHandlerComponent;
  let fixture: ComponentFixture<TokenHandlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenHandlerComponent]
    });
    fixture = TestBed.createComponent(TokenHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
