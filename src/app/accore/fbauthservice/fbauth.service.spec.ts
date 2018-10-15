import { TestBed } from '@angular/core/testing';

import { FbauthService } from './fbauth.service';

describe('FbauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbauthService = TestBed.get(FbauthService);
    expect(service).toBeTruthy();
  });
});
