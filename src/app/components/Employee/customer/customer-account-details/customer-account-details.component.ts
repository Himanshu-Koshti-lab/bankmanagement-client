import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-customer-account-details',
  templateUrl: './customer-account-details.component.html',
  styleUrls: ['./customer-account-details.component.css']
})
export class CustomerAccountDetailsComponent implements OnInit {
  AllCustomers: any;

  constructor(private _service:MainService,private _http:HttpClient) { }

  ngOnInit(): void {
    this._service.getAccountDetails().subscribe((data) => this.AllCustomers = data);
  }

}
