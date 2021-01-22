import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  constructor(private _service: MainService, private _http: HttpClient) {}

  AllCustomers: any;
  // Allaccounts: any;
  // AllUsers: any;
  // temp: any;

  ngOnInit(): void {
    this._service
      .getAccountDetails()
      .subscribe((data) => (this.AllCustomers = data));
    // this._service.getAllUsers().subscribe((data) => (this.AllUsers = data));
    // this._service.allAccounts().subscribe((data) => (this.Allaccounts = data));
  }
}
