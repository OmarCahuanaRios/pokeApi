import { TestBed } from '@angular/core/testing';

import { EvolucionService } from './evolucion.service';

describe('EvolucionService', () => {
  let service: EvolucionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvolucionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
