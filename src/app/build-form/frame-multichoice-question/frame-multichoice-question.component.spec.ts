import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameMultichoiceQuestionComponent } from './frame-multichoice-question.component';

describe('FrameMultichoiceQuestionComponent', () => {
  let component: FrameMultichoiceQuestionComponent;
  let fixture: ComponentFixture<FrameMultichoiceQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameMultichoiceQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameMultichoiceQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
