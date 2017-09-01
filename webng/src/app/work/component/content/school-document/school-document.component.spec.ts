import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDocumentComponent } from './school-document.component';

describe('SchoolDocumentComponent', () => {
  let component: SchoolDocumentComponent;
  let fixture: ComponentFixture<SchoolDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
