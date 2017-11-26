import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameDateQuestionComponent } from './frame-date-question.component';

describe('FrameDateQuestionComponent', () => {
  let component: FrameDateQuestionComponent;
  let fixture: ComponentFixture<FrameDateQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameDateQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameDateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
