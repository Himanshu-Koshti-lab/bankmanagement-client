import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateAccountDialogboxComponent } from './customer-create-account-dialogbox.component';

describe('CustomerCreateAccountDialogboxComponent', () => {
  let component: CustomerCreateAccountDialogboxComponent;
  let fixture: ComponentFixture<CustomerCreateAccountDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCreateAccountDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreateAccountDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
