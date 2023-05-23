import { TestBed } from '@angular/core/testing';

import { DniRucService } from './DniRuc.service';

describe('DNIRUCService', () => {
  let service: DniRucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DniRucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
