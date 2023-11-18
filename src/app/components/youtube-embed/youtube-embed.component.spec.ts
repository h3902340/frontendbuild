import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeEmbedComponent } from './youtube-embed.component';

describe('YoutubeEmbedComponent', () => {
  let component: YoutubeEmbedComponent;
  let fixture: ComponentFixture<YoutubeEmbedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeEmbedComponent]
    });
    fixture = TestBed.createComponent(YoutubeEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
