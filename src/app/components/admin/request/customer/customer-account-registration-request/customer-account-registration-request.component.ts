import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild } from '@angular/core';
import { AccountCreationApproveRejectRequest } from 'src/app/model/account-creation-approve-reject-request';
import { MainService } from 'src/app/services/main.service';
import {AccountDetails} from 'src/app/classes/account-details';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer-account-registration-request',
  templateUrl: './customer-account-registration-request.component.html',
  styleUrls: ['./customer-account-registration-request.component.css']
})
export class CustomerAccountRegistrationRequestComponent implements OnInit {

  AllCustomers;
  Updateuser: Object;
  accountCreationApproveRejectRequest:AccountCreationApproveRejectRequest;
  temp;

  ELEMENT_DATA: AccountDetails[];

  displayedColumns: string[] = [
    'firstName',
    'accountNumber',
    'balance',
    'accounttype',
    'accountregstatus'
  ];

  dataSource = new MatTableDataSource<AccountDetails>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private _service:MainService,private _http:HttpClient,private spinner: NgxSpinnerService) { }

  public getData() {
    this._service
      .getAccountDetails()
      .subscribe(
        (report) => (
          (this.dataSource.data = report as AccountDetails[]),
          (this.dataSource.paginator = this.paginator)
        )
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this._service.getAccountDetails().subscribe((data) => this.AllCustomers = data);
    this.temp = this.AllCustomers;
    this.getData();
    this.dataSource.paginator = this.paginator;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
  // verifyAccount(customertemp:AccountCreationApproveRejectRequest){
  //   customertemp.accountregstatus = 2;
  //   customertemp.accounttype = customertemp.accounttype;
  //   this._service.verifyAccountRequestApprovedReject(customertemp);
  //   this._service.getAccountDetails().subscribe((data) => this.AllCustomers = data);
  // }

  verifyAccount(customerResponse:AccountCreationApproveRejectRequest) //Created By Rohit
    {
      customerResponse.accountregstatus = 2;
      this._service.verifyAccountRequestApprovedReject(customerResponse).subscribe(
        data=>{
          this._service.getAccountDetails().subscribe((data) => this.AllCustomers = data);
          console.log("User Approved");
        },
        error=>{
          console.log("User not approved");
        }
      )
    }

  // rejectRegistrationRequest(customertemp){
  //   customertemp.accountregstatus = 3;
  //   customertemp.accounttype = customertemp.accounttype;
  //   this._service.verifyAccountRequestApprovedReject(customertemp);
  //   this._service.getAccountDetails().subscribe((data) => this.AllCustomers = data);
  // }

  rejectRegistrationRequest(customerResponse:AccountCreationApproveRejectRequest) //Created By Rohit
    {
      customerResponse.accountregstatus = 3;
      this._service.verifyAccountRequestApprovedReject(customerResponse).subscribe(
        data=>{
          this._service.getAccountDetails().subscribe((data) => this.AllCustomers = data);
          console.log("User rejected");
        },
        error=>{
          console.log("User not rejected");
        }
      )
    }

}
