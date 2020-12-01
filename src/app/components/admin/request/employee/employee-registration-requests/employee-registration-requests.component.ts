import { Component, OnInit } from '@angular/core';
import { CustomerResponse } from 'src/app/model/customer-response';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-employee-registration-requests',
  templateUrl: './employee-registration-requests.component.html',
  styleUrls: ['./employee-registration-requests.component.css']
})
export class EmployeeRegistrationRequestsComponent implements OnInit {

  AllEmployee;

  constructor(private _service:MainService) { }

  ngOnInit(): void {
    this._service.getEmployeeFromRemote().subscribe((data) => this.AllEmployee = data);
  }

  approveEmployee(customerResponse:CustomerResponse)
    {
      this._service.approveEmployeeRegistrationRequest(customerResponse).subscribe(
        data=>{
          this._service.getEmployeeFromRemote().subscribe((data) => this.AllEmployee = data);
          console.log("Employee Approved");
        },
        error=>{
          console.log("User not approved");
        }
      )
    }

    rejectemployeeRegistrationRequest(customerResponse:CustomerResponse)
    {
      this._service.rejectEmployeeRegistrationRequest(customerResponse).subscribe(
        data=>{
          this._service.getCustomerFromRemote().subscribe((data) => this.AllEmployee = data);
          console.log("User rejected");
        },
        error=>{
          console.log("User not rejected");
        }
      )
    }

}
