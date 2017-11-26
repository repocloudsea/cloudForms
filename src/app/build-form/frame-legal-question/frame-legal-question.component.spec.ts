import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameLegalQuestionComponent } from './frame-legal-question.component';

describe('FrameLegalQuestionComponent', () => {
  let component: FrameLegalQuestionComponent;
  let fixture: ComponentFixture<FrameLegalQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameLegalQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameLegalQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
