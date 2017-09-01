import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSonTabComponent } from './content-son-tab.component';

describe('ContentSonTabComponent', () => {
  let component: ContentSonTabComponent;
  let fixture: ComponentFixture<ContentSonTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSonTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSonTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
