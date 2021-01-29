import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {AccountDetails} from 'src/app/classes/account-details';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-account-details',
  templateUrl: './customer-account-details.component.html',
  styleUrls: ['./customer-account-details.component.css']
})
export class CustomerAccountDetailsComponent implements OnInit {
  AllCustomers: any;
  temp:any;

  ELEMENT_DATA: AccountDetails[];

  constructor(private _service:MainService,private _http:HttpClient, private spinner: NgxSpinnerService) { }

  displayedColumns: string[] = [
    'accountNumber',
    'firstName',
    'balance',
    'accounttype',
    'accountregstatus'
  ];

  dataSource = new MatTableDataSource<AccountDetails>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;


  public getData() {
    this._service
      .getAccountDetails()
      .subscribe(
        (report) => (
          (this.dataSource.data = report as AccountDetails[]),
          (this.dataSource.paginator = this.paginator)
        )
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this._service.getAccountDetails().subscribe((data) => this.AllCustomers = data);
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
