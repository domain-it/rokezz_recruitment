import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBanner } from './home-page-banner.component';

describe('Banner', () => {
  let component: HomePageBanner;
  let fixture: ComponentFixture<HomePageBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
