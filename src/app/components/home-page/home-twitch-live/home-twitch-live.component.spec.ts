import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTwitchLiveComponent } from './home-twitch-live.component';

describe('HomeTwitchLiveComponent', () => {
  let component: HomeTwitchLiveComponent;
  let fixture: ComponentFixture<HomeTwitchLiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTwitchLiveComponent],
    });
    fixture = TestBed.createComponent(HomeTwitchLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});