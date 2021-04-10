import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMobileNumberUpdateComponent } from './customer-mobile-number-update.component';

describe('CustomerMobileNumberUpdateComponent', () => {
  let component: CustomerMobileNumberUpdateComponent;
  let fixture: ComponentFixture<CustomerMobileNumberUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMobileNumberUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMobileNumberUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
