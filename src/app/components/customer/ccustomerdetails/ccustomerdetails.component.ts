import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-ccustomerdetails',
  templateUrl: './ccustomerdetails.component.html',
  styleUrls: ['./ccustomerdetails.component.css'],
})
export class CcustomerdetailsComponent implements OnInit {
  Customer: any;

  constructor(
    private _service: MainService,
    private _http: HttpClient,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this._service.getCustomer().subscribe((data) => (this.Customer = data));
  }
}
