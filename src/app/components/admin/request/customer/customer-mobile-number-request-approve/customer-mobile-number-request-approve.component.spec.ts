import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMobileNumberRequestApproveComponent } from './customer-mobile-number-request-approve.component';

describe('CustomerMobileNumberRequestApproveComponent', () => {
  let component: CustomerMobileNumberRequestApproveComponent;
  let fixture: ComponentFixture<CustomerMobileNumberRequestApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMobileNumberRequestApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMobileNumberRequestApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
