import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameLongQuestionComponent } from './frame-long-question.component';

describe('FrameLongQuestionComponent', () => {
  let component: FrameLongQuestionComponent;
  let fixture: ComponentFixture<FrameLongQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameLongQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameLongQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
