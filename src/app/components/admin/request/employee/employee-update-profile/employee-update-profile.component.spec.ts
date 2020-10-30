import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateProfileComponent } from './employee-update-profile.component';

describe('EmployeeUpdateProfileComponent', () => {
  let component: EmployeeUpdateProfileComponent;
  let fixture: ComponentFixture<EmployeeUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
