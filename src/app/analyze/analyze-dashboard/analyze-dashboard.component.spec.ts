import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeDashboardComponent } from './analyze-dashboard.component';

describe('AnalyzeDashboardComponent', () => {
  let component: AnalyzeDashboardComponent;
  let fixture: ComponentFixture<AnalyzeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
