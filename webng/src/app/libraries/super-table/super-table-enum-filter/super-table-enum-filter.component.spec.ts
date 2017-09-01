import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTableEnumFilterComponent } from './super-table-enum-filter.component';

describe('SuperTableEnumFilterComponent', () => {
  let component: SuperTableEnumFilterComponent;
  let fixture: ComponentFixture<SuperTableEnumFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTableEnumFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTableEnumFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
