import { TestBed } from '@angular/core/testing';

import { ApiLoggerService } from './api-logger.service';

describe('ApiLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiLoggerService = TestBed.get(ApiLoggerService);
    expect(service).toBeTruthy();
  });
});
