import { TestBed, inject } from '@angular/core/testing';

import { WorkThemeConfigProviderService } from './work-theme-config-provider.service';

describe('WorkThemeConfigProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkThemeConfigProviderService]
    });
  });

  it('should be created', inject([WorkThemeConfigProviderService], (service: WorkThemeConfigProviderService) => {
    expect(service).toBeTruthy();
  }));
});
