import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMenuItemComponent } from './work-menu-item.component';

describe('WorkMenuItemComponent', () => {
  let component: WorkMenuItemComponent;
  let fixture: ComponentFixture<WorkMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
