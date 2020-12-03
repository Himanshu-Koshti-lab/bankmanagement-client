import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountCreationApproveRejectRequest } from 'src/app/model/account-creation-approve-reject-request';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-customer-account-registration-request',
  templateUrl: './customer-account-registration-request.component.html',
  styleUrls: ['./customer-account-registration-request.component.css']
})
export class CustomerAccountRegistrationRequestComponent implements OnInit {

  AllCustomers;
  Updateuser: Object;
  accountCreationApproveRejectRequest:AccountCreationApproveRejectRequest;

  constructor(private _service:MainService,private _http:HttpClient) { }

  ngOnInit(): void {
    this._service.getAccountDetails().subscribe((data) => this.AllCustomers = data);
  }
  verifyAccount(customertemp){
    customertemp.accountregstatus = 2;
    customertemp.accounttype = customertemp.accountTypeId;
    this._service.verifyAccountRequestApprovedReject(customertemp);
    this._service.getAccountDetails().subscribe((data) => this.AllCustomers = data);
  }
  rejectRegistrationRequest(customertemp){
    customertemp.accountregstatus = 3;
    customertemp.accounttype = customertemp.accountTypeId;
    this._service.verifyAccountRequestApprovedReject(customertemp);
    this._service.getAccountDetails().subscribe((data) => this.AllCustomers = data);
  }

}
