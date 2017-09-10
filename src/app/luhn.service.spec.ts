import { TestBed, inject } from '@angular/core/testing';

import { LuhnService } from './luhn.service';

describe('LuhnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LuhnService]
    });
  });

  it('should be created', inject([LuhnService], (service: LuhnService) => {
    expect(service).toBeTruthy();
  }));
});
