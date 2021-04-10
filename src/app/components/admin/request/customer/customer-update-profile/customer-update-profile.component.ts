import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { UpdateRequests } from 'src/app/classes/update-requests'

@Component({
  selector: 'app-customer-update-profile',
  templateUrl: './customer-update-profile.component.html',
  styleUrls: ['./customer-update-profile.component.css'],
})
export class CustomerUpdateProfileComponent implements OnInit {
  UpdateRequests;
  temp: any;

  constructor(private _service: MainService, private _http: HttpClient) {}

  ngOnInit(): void {
    this._service
      .getCustomerUpdateRequest()
      .subscribe((data) => (this.UpdateRequests = data));
    this.temp = this.UpdateRequests;
    console.log(this.temp);
  }

  approveUpdateRequest(updaterequests: UpdateRequests) {
    this._service.approveUpdateRequest(updaterequests).subscribe(
      (data) => {
        this._service
          .getCustomerUpdateRequest()
          .subscribe((data) => (this.UpdateRequests = data));
        console.log('User Approved');
      },
      (error) => {
        console.log('User not approved');
      }
    );
  }

  rejectUpdateRequest(updaterequests: UpdateRequests) {
    this._service.rejectUpdateRequest(updaterequests).subscribe(
      (data) => {
        this._service
          .getCustomerUpdateRequest()
          .subscribe((data) => (this.UpdateRequests = data));
        console.log('User rejected');
      },
      (error) => {
        console.log('User not rejected');
      }
    );
  }
}
