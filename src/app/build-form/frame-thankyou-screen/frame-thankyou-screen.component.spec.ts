import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameThankyouScreenComponent } from './frame-thankyou-screen.component';

describe('FrameThankyouScreenComponent', () => {
  let component: FrameThankyouScreenComponent;
  let fixture: ComponentFixture<FrameThankyouScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameThankyouScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameThankyouScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
