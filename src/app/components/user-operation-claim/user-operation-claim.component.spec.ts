import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperationClaimComponent } from './user-operation-claim.component';

describe('UserOperationClaimComponent', () => {
  let component: UserOperationClaimComponent;
  let fixture: ComponentFixture<UserOperationClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOperationClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOperationClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
