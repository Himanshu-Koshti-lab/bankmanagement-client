import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private router: Router) { }

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
