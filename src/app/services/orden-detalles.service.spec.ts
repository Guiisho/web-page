import { TestBed } from '@angular/core/testing';

import { OrdenDetallesService } from '../services/orden-detalles.service';

describe('OrdenDetallesService', () => {
  let service: OrdenDetallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenDetallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
