import { TestBed } from '@angular/core/testing';

import { InnerModuleService } from './inner-module.service';

describe('InnerModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InnerModuleService = TestBed.get(InnerModuleService);
    expect(service).toBeTruthy();
  });
});
