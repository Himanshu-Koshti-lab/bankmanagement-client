import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegistrationRequestComponent } from './customer-registration-request.component';

describe('CustomerRegistrationRequestComponent', () => {
  let component: CustomerRegistrationRequestComponent;
  let fixture: ComponentFixture<CustomerRegistrationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRegistrationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRegistrationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
