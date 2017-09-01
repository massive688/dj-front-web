import { TestBed, inject } from '@angular/core/testing';

import { WorkThemeSpinnerService } from './work-theme-spinner.service';

describe('WorkThemeSpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkThemeSpinnerService]
    });
  });

  it('should be created', inject([WorkThemeSpinnerService], (service: WorkThemeSpinnerService) => {
    expect(service).toBeTruthy();
  }));
});
