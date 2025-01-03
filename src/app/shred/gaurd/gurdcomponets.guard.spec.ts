import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gurdcomponetsGuard } from './gurdcomponets.guard';

describe('gurdcomponetsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gurdcomponetsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
