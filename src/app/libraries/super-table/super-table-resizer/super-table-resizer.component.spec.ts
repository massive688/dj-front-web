import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTableResizerComponent } from './super-table-resizer.component';

describe('SuperTableResizerComponent', () => {
  let component: SuperTableResizerComponent;
  let fixture: ComponentFixture<SuperTableResizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTableResizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTableResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
