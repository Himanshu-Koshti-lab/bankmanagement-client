import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerResponse } from 'src/app/model/customer-response';
import { MainService } from 'src/app/services/main.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {User} from 'src/app/classes/user/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-profile-details',
  templateUrl: './customer-profile-details.component.html',
  styleUrls: ['./customer-profile-details.component.css'],
})
export class CustomerProfileDetailsComponent implements OnInit {
  AllCustomers;
  emailID;
  temp: any;
  ELEMENT_DATA: User[];

  displayedColumns: string[] = [
    'id',
    'firstName',
    'emailID',
    'mobileNo',
    'gender'
  ];

  dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _service: MainService, private _http: HttpClient, private spinner: NgxSpinnerService) {}

  public getData() {
    this._service
      .getCustomerForEmployeeFromRemote()
      .subscribe(
        (report) => (
          (this.dataSource.data = report as User[]),
          (this.dataSource.paginator = this.paginator)
        )
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit(): void {
    this._service
      .getCustomerForEmployeeFromRemote()
      .subscribe((data) => (this.AllCustomers = data));
      this.temp = this.AllCustomers;
      this.getData();
      this.dataSource.paginator = this.paginator;
      this.spinner.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);
  }

  
  
  
}
