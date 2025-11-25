import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Achivments } from './achivments';

describe('Achivments', () => {
  let component: Achivments;
  let fixture: ComponentFixture<Achivments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Achivments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Achivments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
