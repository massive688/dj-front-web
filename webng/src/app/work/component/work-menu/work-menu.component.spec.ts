import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMenuComponent } from './work-menu.component';

describe('WorkMenuComponent', () => {
  let component: WorkMenuComponent;
  let fixture: ComponentFixture<WorkMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
