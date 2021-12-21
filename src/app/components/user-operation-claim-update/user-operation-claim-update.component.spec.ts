import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperationClaimUpdateComponent } from './user-operation-claim-update.component';

describe('UserOperationClaimUpdateComponent', () => {
  let component: UserOperationClaimUpdateComponent;
  let fixture: ComponentFixture<UserOperationClaimUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOperationClaimUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOperationClaimUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
