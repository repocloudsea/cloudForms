import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameEmailQuestionComponent } from './frame-email-question.component';

describe('FrameEmailQuestionComponent', () => {
  let component: FrameEmailQuestionComponent;
  let fixture: ComponentFixture<FrameEmailQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameEmailQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameEmailQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
