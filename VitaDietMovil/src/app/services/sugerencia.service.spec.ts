import { TestBed } from '@angular/core/testing';

import { SugerenciaService } from './sugerencia.service';

describe('SugerenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SugerenciaService = TestBed.get(SugerenciaService);
    expect(service).toBeTruthy();
  });
});
