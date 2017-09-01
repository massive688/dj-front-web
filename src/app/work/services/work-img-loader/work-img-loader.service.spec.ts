import { TestBed, inject } from '@angular/core/testing';

import { WorkImgLoaderService } from './work-img-loader.service';

describe('WorkImgLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkImgLoaderService]
    });
  });

  it('should be created', inject([WorkImgLoaderService], (service: WorkImgLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
