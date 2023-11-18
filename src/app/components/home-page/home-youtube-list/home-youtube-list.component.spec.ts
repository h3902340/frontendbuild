import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeYoutubeListComponent } from './home-youtube-list.component';

describe('HomeYoutubeListComponent', () => {
  let component: HomeYoutubeListComponent;
  let fixture: ComponentFixture<HomeYoutubeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeYoutubeListComponent]
    });
    fixture = TestBed.createComponent(HomeYoutubeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
