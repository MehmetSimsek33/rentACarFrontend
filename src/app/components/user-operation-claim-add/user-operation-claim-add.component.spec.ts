import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperationClaimAddComponent } from './user-operation-claim-add.component';

describe('UserOperationClaimAddComponent', () => {
  let component: UserOperationClaimAddComponent;
  let fixture: ComponentFixture<UserOperationClaimAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOperationClaimAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOperationClaimAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
