import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ProfileDetails } from 'src/app/model/profile-details';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  Admin: any;
  temp: any;

  constructor(private _service:MainService,private _http:HttpClient, private spinner: NgxSpinnerService) { }

  //ProfileDetails

  ngOnInit(): void {
    this._service.getAdmin().subscribe((data) => this.Admin = data);
    this.temp = this.Admin;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
