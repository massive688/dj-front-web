import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksidebarComponent } from './worksidebar.component';

describe('WorksidebarComponent', () => {
  let component: WorksidebarComponent;
  let fixture: ComponentFixture<WorksidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
