import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router,private apiService: ApiService) { }

  
  ngOnInit(): void {
    if(sessionStorage.getItem("token") === null){
      this.router.navigateByUrl('login')
      console.log("Login First")
    }
  }
  

}
