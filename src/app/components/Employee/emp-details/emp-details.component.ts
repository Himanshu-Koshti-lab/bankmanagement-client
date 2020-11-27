import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  Employee: any;

  constructor(private _service:MainService,private _http:HttpClient) { }

  ngOnInit(): void {
    this._service.getEmployee().subscribe((data) => this.Employee = data);
    console.log(this.Employee);
  }

}
