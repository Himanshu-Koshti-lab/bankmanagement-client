import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  constructor(private _service: MainService, private _http: HttpClient,private spinner: NgxSpinnerService) {}

  AllCustomers: any;
  temp:any;

  ngOnInit(): void {
    this._service
      .getAccountDetails()
      .subscribe((data) => (this.AllCustomers = data));
      this.temp = this.AllCustomers;
      this.spinner.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);

  }
}
