import { TestBed } from '@angular/core/testing';

import { CriteriaArrayRefurbishmentService } from './criteria-array-refurbishment.service';

describe('CriteriaArrayRefurbishmentService', () => {
  let service: CriteriaArrayRefurbishmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriteriaArrayRefurbishmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
