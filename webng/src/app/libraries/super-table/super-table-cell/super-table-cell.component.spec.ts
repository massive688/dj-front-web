import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTableCellComponent } from './super-table-cell.component';

describe('SuperTableCellComponent', () => {
  let component: SuperTableCellComponent;
  let fixture: ComponentFixture<SuperTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
