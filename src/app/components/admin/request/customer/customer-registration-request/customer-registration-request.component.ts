import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-customer-registration-request',
  templateUrl: './customer-registration-request.component.html',
  styleUrls: ['./customer-registration-request.component.css']
})
export class CustomerRegistrationRequestComponent implements OnInit {

  constructor(private _service:MainService) { }

  ngOnInit(): void {

    this._service.getCustomerFromRemote().subscribe(
      data =>{
        console.log("response received");
      },
      error =>{
        console.log("exception occured");
      }
    )
  }

}
