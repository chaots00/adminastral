import { TestBed } from '@angular/core/testing';

import { QuetesService } from './quetes.service';

describe('QuetesService', () => {
  let service: QuetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
