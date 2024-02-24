import { TestBed } from '@angular/core/testing';

import { NoteeditGuard } from './noteedit.guard';

describe('LoginGuard', () => {
  let guard: NoteeditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoteeditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
