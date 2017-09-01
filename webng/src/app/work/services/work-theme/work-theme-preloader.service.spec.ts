import { TestBed, inject } from '@angular/core/testing';

import { WorkThemePreloaderService } from './work-theme-preloader.service';

describe('WorkThemePreloaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkThemePreloaderService]
    });
  });

  it('should be created', inject([WorkThemePreloaderService], (service: WorkThemePreloaderService) => {
    expect(service).toBeTruthy();
  }));
});
