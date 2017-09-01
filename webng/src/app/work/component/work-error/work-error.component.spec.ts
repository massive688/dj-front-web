import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkErrorComponent } from './work-error.component';

describe('WorkErrorComponent', () => {
  let component: WorkErrorComponent;
  let fixture: ComponentFixture<WorkErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
