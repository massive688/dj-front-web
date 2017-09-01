import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMsgCenterComponent } from './work-msg-center.component';

describe('WorkMsgCenterComponent', () => {
  let component: WorkMsgCenterComponent;
  let fixture: ComponentFixture<WorkMsgCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMsgCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMsgCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
