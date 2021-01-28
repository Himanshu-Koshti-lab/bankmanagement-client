import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { MainService } from 'src/app/services/main.service';
import {CustomerResponse} from 'src/app/model/customer-response'
import { NgxSpinnerService } from 'ngx-spinner';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-registration-request',
  templateUrl: './customer-registration-request.component.html',
  styleUrls: ['./customer-registration-request.component.css']
})
export class CustomerRegistrationRequestComponent implements OnInit {
  AllCustomers;

  user=new User();
  temp

  constructor(private _service:MainService,private _http:HttpClient,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {    
      this._service.getCustomerFromRemote().subscribe((data) => this.AllCustomers = data);
      this.temp = this.AllCustomers;
      this.spinner.show();
       setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    //   this._service.getEmployeeFromRemote().subscribe((data) => this.AllEmployee = data);
    // this.temp = this.AllEmployee;
    // this.getData();
    // this.dataSource.paginator = this.paginator;
    // this.spinner.show();
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
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
