import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktopComponent } from './worktop.component';

describe('WorktopComponent', () => {
  let component: WorktopComponent;
  let fixture: ComponentFixture<WorktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
