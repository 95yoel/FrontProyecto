import { TestBed } from '@angular/core/testing';

import { EsferaService } from './esfera.service';

describe('EsferaService', () => {
  let service: EsferaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsferaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
