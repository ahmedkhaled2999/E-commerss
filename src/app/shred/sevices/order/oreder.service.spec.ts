import { TestBed } from '@angular/core/testing';

import { OrederService } from './oreder.service';

describe('OrederService', () => {
  let service: OrederService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrederService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
