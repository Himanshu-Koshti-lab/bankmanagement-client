import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegistrationDashboardComponent } from './employee-registration-dashboard.component';

describe('EmployeeRegistrationDashboardComponent', () => {
  let component: EmployeeRegistrationDashboardComponent;
  let fixture: ComponentFixture<EmployeeRegistrationDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRegistrationDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRegistrationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
