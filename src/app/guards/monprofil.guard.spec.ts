import { TestBed } from '@angular/core/testing';

import { MonprofilGuard } from './monprofil.guard';

describe('MonprofilGuard', () => {
  let guard: MonprofilGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MonprofilGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
