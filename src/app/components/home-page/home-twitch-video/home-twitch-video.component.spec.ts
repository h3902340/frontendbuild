import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTwitchVideoComponent } from './home-twitch-video.component';

describe('HomeTwitchVideoComponent', () => {
  let component: HomeTwitchVideoComponent;
  let fixture: ComponentFixture<HomeTwitchVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTwitchVideoComponent],
    });
    fixture = TestBed.createComponent(HomeTwitchVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});