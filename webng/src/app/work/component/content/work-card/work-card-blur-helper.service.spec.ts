import { TestBed, inject } from '@angular/core/testing';

import { WorkCardBlurHelperService } from './work-card-blur-helper.service';

describe('WorkCardBlurHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkCardBlurHelperService]
    });
  });

  it('should be created', inject([WorkCardBlurHelperService], (service: WorkCardBlurHelperService) => {
    expect(service).toBeTruthy();
  }));
});
