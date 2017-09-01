import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompubComponent } from './compub.component';

describe('CompubComponent', () => {
  let component: CompubComponent;
  let fixture: ComponentFixture<CompubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
