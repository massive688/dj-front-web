import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkContentTopComponent } from './work-content-top.component';

describe('WorkContentTopComponent', () => {
  let component: WorkContentTopComponent;
  let fixture: ComponentFixture<WorkContentTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkContentTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkContentTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
