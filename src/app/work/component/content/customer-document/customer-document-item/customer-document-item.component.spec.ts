import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDocumentItemComponent } from './customer-document-item.component';

describe('CustomerDocumentItemComponent', () => {
  let component: CustomerDocumentItemComponent;
  let fixture: ComponentFixture<CustomerDocumentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDocumentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDocumentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
