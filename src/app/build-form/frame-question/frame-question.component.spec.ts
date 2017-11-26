import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameQuestionComponent } from './frame-question.component';

describe('FrameQuestionComponent', () => {
  let component: FrameQuestionComponent;
  let fixture: ComponentFixture<FrameQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
