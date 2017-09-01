import { TestBed, inject } from '@angular/core/testing';

import { SuperTableStateService } from './super-table-state.service';

describe('SuperTableStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperTableStateService]
    });
  });

  it('should be created', inject([SuperTableStateService], (service: SuperTableStateService) => {
    expect(service).toBeTruthy();
  }));
});
