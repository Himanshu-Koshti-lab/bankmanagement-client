import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  
  ngOnInit(): void {
    console.log(sessionStorage.getItem("Log"))
    if(sessionStorage.getItem("Log") === null){
      this.router.navigateByUrl('login')
      console.log("Login First")
    }
  }

}
