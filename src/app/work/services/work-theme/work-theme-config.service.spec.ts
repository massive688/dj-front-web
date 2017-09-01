import { TestBed, inject } from '@angular/core/testing';

import { WorkThemeConfigService } from './work-theme-config.service';

describe('WorkThemeConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkThemeConfigService]
    });
  });

  it('should be created', inject([WorkThemeConfigService], (service: WorkThemeConfigService) => {
    expect(service).toBeTruthy();
  }));
});
