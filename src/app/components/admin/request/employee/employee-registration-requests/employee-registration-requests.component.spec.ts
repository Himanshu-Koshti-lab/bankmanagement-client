import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegistrationRequestsComponent } from './employee-registration-requests.component';

describe('EmployeeRegistrationRequestsComponent', () => {
  let component: EmployeeRegistrationRequestsComponent;
  let fixture: ComponentFixture<EmployeeRegistrationRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRegistrationRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRegistrationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
