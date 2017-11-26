import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameNumberQuestionComponent } from './frame-number-question.component';

describe('FrameNumberQuestionComponent', () => {
  let component: FrameNumberQuestionComponent;
  let fixture: ComponentFixture<FrameNumberQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameNumberQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameNumberQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
