import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('token') === null) {
      this.router.navigateByUrl('login');
      console.log('Login First');
    }
    const jwt = JSON.stringify(sessionStorage.getItem('token'));
    let jwtData = jwt.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    if (decodedJwtData.authorities == 'ROLE_ADMIN')
      this.router.navigateByUrl('Admin');
    else if (decodedJwtData.authorities == 'ROLE_EMPLOYEE')
      this.router.navigateByUrl('employeeDashboard');
    else this.router.navigateByUrl('CustomerHome');
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoWidth: true,
    autoHeight: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
    },
    nav: true,
  };
}
