import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTableTextFilterComponent } from './super-table-text-filter.component';

describe('SuperTableTextFilterComponent', () => {
  let component: SuperTableTextFilterComponent;
  let fixture: ComponentFixture<SuperTableTextFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTableTextFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTableTextFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
