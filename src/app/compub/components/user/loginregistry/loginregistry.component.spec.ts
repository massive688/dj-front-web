import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginregistryComponent } from './loginregistry.component';

describe('LoginregistryComponent', () => {
  let component: LoginregistryComponent;
  let fixture: ComponentFixture<LoginregistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginregistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
