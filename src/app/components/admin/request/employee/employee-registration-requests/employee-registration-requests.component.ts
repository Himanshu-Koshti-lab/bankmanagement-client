import { Component, OnInit,ViewChild  } from '@angular/core';
import { CustomerResponse } from 'src/app/model/customer-response';
import { MainService } from 'src/app/services/main.service';
import { AdminCustomerCustomerDetails } from 'src/app/model/admin-customer-customer-details';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employee-registration-requests',
  templateUrl: './employee-registration-requests.component.html',
  styleUrls: ['./employee-registration-requests.component.css']
})
export class EmployeeRegistrationRequestsComponent implements OnInit {

  AllEmployee;
  ELEMENT_DATA: AdminCustomerCustomerDetails[];

  constructor(private _service:MainService ,
    private spinner: NgxSpinnerService) { }

  dataSource = new MatTableDataSource<AdminCustomerCustomerDetails>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'firstName',
    'emailID',
    'dob',
    'registrationStatus'
  ];

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
    this.getData();
    this.dataSource.paginator = this.paginator;
    this.spinner.show();
    setTimeout(() => {
   /** spinner ends after 5 seconds */
   this.spinner.hide();
 }, 5000);
  }

  approveEmployee(customerResponse:CustomerResponse)
    {
      this._service.approveEmployeeRegistrationRequest(customerResponse).subscribe(
        data=>{
          this._service.getEmployeeFromRemote().subscribe((data) => this.AllEmployee = data);
          console.log("Employee Approved");
        },
        error=>{
          console.log("User not approved");
        }
      )
    }

    rejectemployeeRegistrationRequest(customerResponse:CustomerResponse)
    {
      this._service.rejectEmployeeRegistrationRequest(customerResponse).subscribe(
        data=>{
          this._service.getCustomerFromRemote().subscribe((data) => this.AllEmployee = data);
          console.log("User rejected");
        },
        error=>{
          console.log("User not rejected");
        }
      )
    }

}
