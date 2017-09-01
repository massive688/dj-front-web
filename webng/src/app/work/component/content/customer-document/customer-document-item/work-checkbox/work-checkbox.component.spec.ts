import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCheckboxComponent } from './work-checkbox.component';

describe('WorkCheckboxComponent', () => {
  let component: WorkCheckboxComponent;
  let fixture: ComponentFixture<WorkCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
