import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInfoBannerComponent } from './home-info-banner.component';

describe('HomeInfoBannerComponent', () => {
  let component: HomeInfoBannerComponent;
  let fixture: ComponentFixture<HomeInfoBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeInfoBannerComponent]
    });
    fixture = TestBed.createComponent(HomeInfoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
