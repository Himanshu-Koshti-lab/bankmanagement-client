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
      const jwt = JSON.stringify(sessionStorage.getItem("token"));
      let jwtData = jwt.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      if(decodedJwtData.authorities == "ROLE_ADMIN")
        this.router.navigateByUrl('Admin')
        else if (decodedJwtData.authorities == "ROLE_EMPLOYEE")
          this.router.navigateByUrl('employeeDashboard')
        else 
          this.router.navigateByUrl('CustomerHome')
  }
  

}
