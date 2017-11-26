import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameRatingQuestionComponent } from './frame-rating-question.component';

describe('FrameRatingQuestionComponent', () => {
  let component: FrameRatingQuestionComponent;
  let fixture: ComponentFixture<FrameRatingQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameRatingQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameRatingQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
