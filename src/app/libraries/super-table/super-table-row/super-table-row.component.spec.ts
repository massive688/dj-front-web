import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTableRowComponent } from './super-table-row.component';

describe('SuperTableRowComponent', () => {
  let component: SuperTableRowComponent;
  let fixture: ComponentFixture<SuperTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
