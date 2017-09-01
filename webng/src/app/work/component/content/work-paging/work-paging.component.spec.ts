import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPagingComponent } from './work-paging.component';

describe('WorkPagingComponent', () => {
  let component: WorkPagingComponent;
  let fixture: ComponentFixture<WorkPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
