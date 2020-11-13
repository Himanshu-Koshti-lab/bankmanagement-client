import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerResponse } from 'src/app/model/customer-response';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-customer-profile-details',
  templateUrl: './customer-profile-details.component.html',
  styleUrls: ['./customer-profile-details.component.css']
})
export class CustomerProfileDetailsComponent implements OnInit {

  AllCustomers;

  constructor(private _service:MainService,private _http:HttpClient) { }

  ngOnInit(): void {
    this._service.getCustomerForEmployeeFromRemote().subscribe((data) => this.AllCustomers = data);
  }

  deleteCustomer(customerResponse:CustomerResponse)
    {
      this._service.approveRegistrationRequest(customerResponse).subscribe(
        data=>{
          this._service.getCustomerFromRemote().subscribe((data) => this.AllCustomers = data);
          console.log("User Approved");
        },
        error=>{
          console.log("User not approved");
        }
      )
    }
}
