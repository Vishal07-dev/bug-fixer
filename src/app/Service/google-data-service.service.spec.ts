import { TestBed } from '@angular/core/testing';

import { GoogleDataServiceService } from './google-data-service.service';

describe('GoogleDataServiceService', () => {
  let service: GoogleDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
