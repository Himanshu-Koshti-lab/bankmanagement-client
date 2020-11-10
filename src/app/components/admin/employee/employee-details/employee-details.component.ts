import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  AllEmployee
  constructor(private _service:MainService) { }

  ngOnInit(): void {
    this._service.getEmployeeFromRemote().subscribe((data) => this.AllEmployee = data);
  }

}
