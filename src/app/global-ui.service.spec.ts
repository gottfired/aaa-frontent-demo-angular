import { TestBed } from '@angular/core/testing';

import { GlobalUiService } from './global-ui.service';

describe('GlobalUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalUiService = TestBed.get(GlobalUiService);
    expect(service).toBeTruthy();
  });
});
