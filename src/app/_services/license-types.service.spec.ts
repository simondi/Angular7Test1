import { TestBed } from '@angular/core/testing';

import { LicenseTypesService } from './license-types.service';

describe('LicenseTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicenseTypesService = TestBed.get(LicenseTypesService);
    expect(service).toBeTruthy();
  });
});
