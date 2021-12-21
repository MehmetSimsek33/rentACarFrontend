import { TestBed } from '@angular/core/testing';

import { OperationClaimService } from './operation-claim.service';

describe('OperationClaimService', () => {
  let service: OperationClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
