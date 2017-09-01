import { TestBed, inject } from '@angular/core/testing';

import { CustomerDocumentService } from './customer-document.service';

describe('CustomerDocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerDocumentService]
    });
  });

  it('should be created', inject([CustomerDocumentService], (service: CustomerDocumentService) => {
    expect(service).toBeTruthy();
  }));
});
