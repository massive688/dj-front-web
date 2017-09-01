import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandonTableComponent } from './handon-table.component';

describe('HandonTableComponent', () => {
  let component: HandonTableComponent;
  let fixture: ComponentFixture<HandonTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandonTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
