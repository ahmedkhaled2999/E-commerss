import { TestBed } from '@angular/core/testing';

import { GatogoreService } from './gatogore.service';

describe('GatogoreService', () => {
  let service: GatogoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatogoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
