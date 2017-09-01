import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTableHeadComponent } from './super-table-head.component';

describe('SuperTableHeadComponent', () => {
  let component: SuperTableHeadComponent;
  let fixture: ComponentFixture<SuperTableHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTableHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
