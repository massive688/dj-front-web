import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSonTabsComponent } from './content-son-tabs.component';

describe('ContentSonTabsComponent', () => {
  let component: ContentSonTabsComponent;
  let fixture: ComponentFixture<ContentSonTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSonTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSonTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
