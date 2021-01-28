import { Component, OnInit,ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminCustomerCustomerDetails } from 'src/app/model/admin-customer-customer-details';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  AllEmployee;
  temp:any;

  ELEMENT_DATA: AdminCustomerCustomerDetails[];

  dataSource = new MatTableDataSource<AdminCustomerCustomerDetails>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'firstName',
    'emailID',
    'dob'
  ];

  constructor(private _service:MainService ,
    private spinner: NgxSpinnerService) { }

    public getData() {
      this._service
        .getEmployeeFromRemote()
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
    this._service.getEmployeeFromRemote().subscribe((data) => this.AllEmployee = data);
    this.temp = this.AllEmployee;
    this.getData();
    this.dataSource.paginator = this.paginator;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
