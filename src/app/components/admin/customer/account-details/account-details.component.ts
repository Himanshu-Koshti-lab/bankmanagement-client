import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private _service:MainService) { }

  ngOnInit(): void {
  }

  getAccountDetailsList()
  {
    this._service.getEmployeeFromRemote().subscribe(
      data =>{
        console.log("response received");
      },
      error =>{
        console.log("exception occured");
      }
    )
  }
}
