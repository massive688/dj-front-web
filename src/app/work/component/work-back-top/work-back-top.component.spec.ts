import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkBackTopComponent } from './work-back-top.component';

describe('WorkBackTopComponent', () => {
  let component: WorkBackTopComponent;
  let fixture: ComponentFixture<WorkBackTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkBackTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkBackTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
