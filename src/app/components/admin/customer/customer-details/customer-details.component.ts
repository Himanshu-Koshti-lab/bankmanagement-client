import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  AllCustomers;
  constructor(private _service:MainService,private _http:HttpClient) { }

  ngOnInit(): void {
    this._service.getCustomerFromRemote().subscribe((data) => this.AllCustomers = data);
  }

}
