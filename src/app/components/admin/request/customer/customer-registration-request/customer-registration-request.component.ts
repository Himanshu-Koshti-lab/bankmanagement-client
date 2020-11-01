import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-customer-registration-request',
  templateUrl: './customer-registration-request.component.html',
  styleUrls: ['./customer-registration-request.component.css']
})
export class CustomerRegistrationRequestComponent implements OnInit {
  AllCustomers;

  constructor(private _service:MainService,private _http:HttpClient) { }

  ngOnInit(): void {    
      this._service.getCustomerFromRemote().subscribe((data) => this.AllCustomers = data);
    }

    showData(){
      this._service.getCustomerFromRemote().subscribe((data) => this.AllCustomers = data);
    }
}
