import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTableHeaderComponent } from './super-table-header.component';

describe('SuperTableHeaderComponent', () => {
  let component: SuperTableHeaderComponent;
  let fixture: ComponentFixture<SuperTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
