import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountRegistrationRequestComponent } from './customer-account-registration-request.component';

describe('CustomerAccountRegistrationRequestComponent', () => {
  let component: CustomerAccountRegistrationRequestComponent;
  let fixture: ComponentFixture<CustomerAccountRegistrationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAccountRegistrationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountRegistrationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
