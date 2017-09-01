import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTableDummyRowsComponent } from './super-table-dummy-rows.component';

describe('SuperTableDummyRowsComponent', () => {
  let component: SuperTableDummyRowsComponent;
  let fixture: ComponentFixture<SuperTableDummyRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTableDummyRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTableDummyRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
