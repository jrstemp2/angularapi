import { TestBed } from '@angular/core/testing';

import { RServiceService } from './rservice.service';

describe('RServiceService', () => {
  let service: RServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
