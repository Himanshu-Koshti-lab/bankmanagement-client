import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-employee-registration-requests',
  templateUrl: './employee-registration-requests.component.html',
  styleUrls: ['./employee-registration-requests.component.css']
})
export class EmployeeRegistrationRequestsComponent implements OnInit {

  constructor(private _service:MainService) { }

  ngOnInit(): void {
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
