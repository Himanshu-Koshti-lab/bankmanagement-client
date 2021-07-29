import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminCustomerCustomerDetails } from 'src/app/model/admin-customer-customer-details';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  AllCustomers;
  temp: any;
  ELEMENT_DATA: AdminCustomerCustomerDetails[];

  

  constructor(private _service:MainService,private _http:HttpClient, private spinner: NgxSpinnerService) { }

  dataSource = new MatTableDataSource<AdminCustomerCustomerDetails>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'firstName',
    'emailID',
    'dob',
    'registrationStatus'
  ];

  //AdminCustomerCustomerDetails
  public getData() {
    this._service
      .getCustomerFromRemote()
      .subscribe(
        (report) => (
          (this.dataSource.data = report as AdminCustomerCustomerDetails[]),
          (this.dataSource.paginator = this.paginator)
        )
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this._service.getCustomerFromRemote().subscribe((data) => this.AllCustomers = data);
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
