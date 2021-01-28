import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  AllEmployee;
  temp:any;
  constructor(private _service:MainService ,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this._service.getEmployeeFromRemote().subscribe((data) => this.AllEmployee = data);
    this.temp = this.AllEmployee;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
