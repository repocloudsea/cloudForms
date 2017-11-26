import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameDropdownQuestionComponent } from './frame-dropdown-question.component';

describe('FrameDropdownQuestionComponent', () => {
  let component: FrameDropdownQuestionComponent;
  let fixture: ComponentFixture<FrameDropdownQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameDropdownQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameDropdownQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
