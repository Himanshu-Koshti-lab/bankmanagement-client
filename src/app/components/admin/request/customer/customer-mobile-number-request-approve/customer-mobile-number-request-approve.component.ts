import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UpdateRequests } from 'src/app/classes/update-requests';
import { CustomerUpdateMobile } from 'src/app/model/customer-update-mobile';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-customer-mobile-number-request-approve',
  templateUrl: './customer-mobile-number-request-approve.component.html',
  styleUrls: ['./customer-mobile-number-request-approve.component.css']
})
export class CustomerMobileNumberRequestApproveComponent implements OnInit {
  AllCustomers: any;

  constructor(private _service:MainService,private _http:HttpClient) { }

  ngOnInit(): void {
    this._service.getCustomerMobNoUpdateRequest().subscribe((data) => this.AllCustomers = data);
  }

  approveMobNoRequest(updaterequests: CustomerUpdateMobile)
  {
    // updaterequests.emailID=this.AllCustomers.emailID;
    // updaterequests.status=2;
    this._service.approveMobNoRequest(updaterequests).subscribe(
      data=>{
        this._service.getCustomerMobNoUpdateRequest().subscribe((data) => this.AllCustomers = data);
        console.log("User Approved");
      },
      error=>{
        console.log("User not approved");
      }
    )
  }

  rejectMobNoRequest(updaterequests: CustomerUpdateMobile)
  {
    this._service.rejectMobNoRequest(updaterequests).subscribe(
      data=>{
        this._service.getCustomerMobNoUpdateRequest().subscribe((data) => this.AllCustomers = data);
        console.log("User rejected");
      },
      error=>{
        console.log("User not rejected");
      }
    )
  }
  
}
