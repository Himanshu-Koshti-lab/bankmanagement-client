import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { MobileNoUpdate } from 'src/app/classes/mobile-no-update';
import { CustomerUpdateMobile } from 'src/app/model/customer-update-mobile';
import { MainService } from 'src/app/services/main.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer-mobile-number-request-approve',
  templateUrl: './customer-mobile-number-request-approve.component.html',
  styleUrls: ['./customer-mobile-number-request-approve.component.css']
})
export class CustomerMobileNumberRequestApproveComponent implements OnInit {
  AllCustomers: any;

  constructor(private _service:MainService,private _http:HttpClient,private spinner: NgxSpinnerService) { }

  temp;

  ELEMENT_DATA: MobileNoUpdate[];

  displayedColumns: string[] = [
    'req_id',
    'emailID',
    'newmobileNo',
    'userRequestStatus'
  ];

  dataSource = new MatTableDataSource<MobileNoUpdate>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public getData() {
    this._service
      .getCustomerMobNoUpdateRequest()
      .subscribe(
        (report) => (
          (this.dataSource.data = report as MobileNoUpdate[]),
          (this.dataSource.paginator = this.paginator)
        )
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this._service.getCustomerMobNoUpdateRequest().subscribe((data) => this.AllCustomers = data);
    this.temp = this.AllCustomers;
    this.getData();
    this.dataSource.paginator = this.paginator;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  approveMobNoRequest(updaterequests: CustomerUpdateMobile)
  {
    // updaterequests.emailID=this.AllCustomers.emailID;
    // updaterequests.status=2;
    this._service.approveMobNoRequest(updaterequests).subscribe(
      data=>{
        this._service.getCustomerMobNoUpdateRequest().subscribe((data) => this.AllCustomers = data);
        console.log("User Approved");
      },
      error=>{
        console.log("User not approved");
      }
    )
  }

  rejectMobNoRequest(updaterequests: CustomerUpdateMobile)
  {
    this._service.rejectMobNoRequest(updaterequests).subscribe(
      data=>{
        this._service.getCustomerMobNoUpdateRequest().subscribe((data) => this.AllCustomers = data);
        console.log("User rejected");
      },
      error=>{
        console.log("User not rejected");
      }
    )
  }
  
}
