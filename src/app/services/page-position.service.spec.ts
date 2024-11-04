import { TestBed } from '@angular/core/testing';

import { PagePositionService } from './page-position.service';

describe('PagePositionService', () => {
  let service: PagePositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagePositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
