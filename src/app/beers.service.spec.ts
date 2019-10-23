import { TestBed } from '@angular/core/testing';

import { BeersService } from './beers.service';

describe('BeersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeersService = TestBed.get(BeersService);
    expect(service).toBeTruthy();
  });
});
