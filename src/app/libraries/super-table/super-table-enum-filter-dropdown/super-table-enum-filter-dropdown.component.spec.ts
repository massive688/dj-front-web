import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTableEnumFilterDropdownComponent } from './super-table-enum-filter-dropdown.component';

describe('SuperTableEnumFilterDropdownComponent', () => {
  let component: SuperTableEnumFilterDropdownComponent;
  let fixture: ComponentFixture<SuperTableEnumFilterDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTableEnumFilterDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTableEnumFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
