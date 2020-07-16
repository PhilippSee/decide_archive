import { TestBed } from '@angular/core/testing';

import { GlobalDecideDataService } from './global-decide-data.service';

describe('GlobalDecideDataService', () => {
  let service: GlobalDecideDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalDecideDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
