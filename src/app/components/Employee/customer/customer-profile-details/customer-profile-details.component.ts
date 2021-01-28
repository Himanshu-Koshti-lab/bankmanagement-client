import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerResponse } from 'src/app/model/customer-response';
import { MainService } from 'src/app/services/main.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer-profile-details',
  templateUrl: './customer-profile-details.component.html',
  styleUrls: ['./customer-profile-details.component.css'],
})
export class CustomerProfileDetailsComponent implements OnInit {
  AllCustomers;
  emailID;
  temp;

  constructor(private _service: MainService, private _http: HttpClient, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this._service
      .getCustomerForEmployeeFromRemote()
      .subscribe((data) => (this.AllCustomers = data));

      this.temp = this.AllCustomers;
      this.spinner.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);
  }

  
  
  
}
