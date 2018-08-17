import { TestBed, inject } from '@angular/core/testing';

import { LogementService } from './logement.service';

describe('LogementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogementService]
    });
  });

  it('should be created', inject([LogementService], (service: LogementService) => {
    expect(service).toBeTruthy();
  }));
});
