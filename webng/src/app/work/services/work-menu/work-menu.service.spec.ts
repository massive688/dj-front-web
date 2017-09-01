import { TestBed, inject } from '@angular/core/testing';

import { WorkMenuService } from './work-menu.service';

describe('WorkMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkMenuService]
    });
  });

  it('should be created', inject([WorkMenuService], (service: WorkMenuService) => {
    expect(service).toBeTruthy();
  }));
});
