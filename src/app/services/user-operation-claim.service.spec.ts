import { TestBed } from '@angular/core/testing';

import { UserOperationClaimService } from './user-operation-claim.service';

describe('UserOperationClaimService', () => {
  let service: UserOperationClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserOperationClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
