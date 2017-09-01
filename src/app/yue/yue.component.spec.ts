import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YueComponent } from './yue.component';

describe('YueComponent', () => {
  let component: YueComponent;
  let fixture: ComponentFixture<YueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
