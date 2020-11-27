import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  Admin: any;
  
  constructor(private _service:MainService,private _http:HttpClient) { }

  ngOnInit(): void {
    this._service.getAdmin().subscribe((data) => this.Admin = data);
    console.log(this.Admin);
  }

}
