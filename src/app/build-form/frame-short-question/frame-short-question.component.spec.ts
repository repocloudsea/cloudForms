import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameShortQuestionComponent } from './frame-short-question.component';

describe('FrameShortQuestionComponent', () => {
  let component: FrameShortQuestionComponent;
  let fixture: ComponentFixture<FrameShortQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameShortQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameShortQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
