import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationClaimComponent } from './operation-claim.component';

describe('OperationClaimComponent', () => {
  let component: OperationClaimComponent;
  let fixture: ComponentFixture<OperationClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
