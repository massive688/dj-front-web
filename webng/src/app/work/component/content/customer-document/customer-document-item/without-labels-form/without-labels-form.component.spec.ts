import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutLabelsFormComponent } from './without-labels-form.component';

describe('WithoutLabelsFormComponent', () => {
  let component: WithoutLabelsFormComponent;
  let fixture: ComponentFixture<WithoutLabelsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutLabelsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutLabelsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
