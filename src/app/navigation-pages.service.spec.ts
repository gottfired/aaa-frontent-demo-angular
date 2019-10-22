import { TestBed } from '@angular/core/testing';

import { NavigationPagesService } from './navigation-pages.service';

describe('NavigationPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationPagesService = TestBed.get(NavigationPagesService);
    expect(service).toBeTruthy();
  });
});
