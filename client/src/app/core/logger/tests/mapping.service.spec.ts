import { TestBed } from '@angular/core/testing';

import { MappingService } from '../services/mapping.service';

describe('MappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MappingService = TestBed.get(MappingService);
    expect(service).toBeTruthy();
  });

  it(`get location should return file: './src/app/core/logger/tests/mapping.service.spec.ts'`, () => {
    const service: MappingService = TestBed.get(MappingService);
    const location = service.getLocation();
    expect(location.file).toEqual('./src/app/core/logger/tests/mapping.service.spec.ts');
  });

  it(`get location should return line: 19`, () => {
    const service: MappingService = TestBed.get(MappingService);
    const location = service.getLocation();
    expect(location.line).toEqual(19);
  });

  it(`get location should return colon: 32`, () => {
    const service: MappingService = TestBed.get(MappingService);
    const location = service.getLocation();
    expect(location.colon).toEqual(32);
  });

  it(`get location should return method: UserContext.eval`, () => {
    const service: MappingService = TestBed.get(MappingService);
    const location = service.getLocation();
    expect(location.method).toEqual('UserContext.eval');
  });
});
