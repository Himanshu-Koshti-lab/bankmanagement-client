import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { MainService } from 'src/app/services/main.service';
import {CustomerResponse} from 'src/app/model/customer-response'

@Component({
  selector: 'app-customer-registration-request',
  templateUrl: './customer-registration-request.component.html',
  styleUrls: ['./customer-registration-request.component.css']
})
export class CustomerRegistrationRequestComponent implements OnInit {
  AllCustomers;

  user=new User();
  
  
  constructor(private _service:MainService,private _http:HttpClient) { }

  ngOnInit(): void {    
      this._service.getCustomerFromRemote().subscribe((data) => this.AllCustomers = data);
    }

    approveCustomer(customerResponse:CustomerResponse)
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

    rejectRegistrationRequest(customerResponse:CustomerResponse)
    {
      this._service.rejectRegistrationRequest(customerResponse).subscribe(
        data=>{
          this._service.getCustomerFromRemote().subscribe((data) => this.AllCustomers = data);
          console.log("User rejected");
        },
        error=>{
          console.log("User not rejected");
        }
      )
    }
}
