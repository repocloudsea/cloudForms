import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameWelcomeScreenComponent } from './frame-welcome-screen.component';

describe('FrameWelcomeScreenComponent', () => {
  let component: FrameWelcomeScreenComponent;
  let fixture: ComponentFixture<FrameWelcomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameWelcomeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameWelcomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
