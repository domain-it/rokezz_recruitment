import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Changes } from './changes';

describe('Changes', () => {
  let component: Changes;
  let fixture: ComponentFixture<Changes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Changes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Changes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
