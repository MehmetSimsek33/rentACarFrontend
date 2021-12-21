import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalAdComponent } from './rental-ad.component';

describe('RentalAdComponent', () => {
  let component: RentalAdComponent;
  let fixture: ComponentFixture<RentalAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
