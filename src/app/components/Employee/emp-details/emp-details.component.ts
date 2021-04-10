import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  Employee: any;
  temp:any;

  constructor(private _service:MainService,private _http:HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this._service.getEmployee().subscribe((data) => this.Employee = data);
    this.temp = this.Employee;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
