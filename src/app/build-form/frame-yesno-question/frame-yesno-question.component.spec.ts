import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameYesnoQuestionComponent } from './frame-yesno-question.component';

describe('FrameYesnoQuestionComponent', () => {
  let component: FrameYesnoQuestionComponent;
  let fixture: ComponentFixture<FrameYesnoQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameYesnoQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameYesnoQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
