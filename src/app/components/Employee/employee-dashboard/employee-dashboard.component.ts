import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: true,
    autoWidth:true,
    autoHeight:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      840: {
        items: 1
      }
    },
    nav: true
  }

}
