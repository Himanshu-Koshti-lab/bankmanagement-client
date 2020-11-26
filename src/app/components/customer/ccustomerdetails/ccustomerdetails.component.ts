import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-ccustomerdetails',
  templateUrl: './ccustomerdetails.component.html',
  styleUrls: ['./ccustomerdetails.component.css']
})
export class CcustomerdetailsComponent implements OnInit {
  Customer: any;

  constructor(private _service:MainService,private _http:HttpClient) { }

  ngOnInit(): void {
    this._service.getCustomer().subscribe((data) => this.Customer = data);
    console.log(this.Customer);
  }

}
