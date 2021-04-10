import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrls: ['./employee-navbar.component.css']
})
export class EmployeeNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLogout(){    
    if(sessionStorage.getItem("token") !== null){
      sessionStorage.removeItem("token")
      this.router.navigateByUrl('home')
      console.log("SuccessFull Logout")
    }
  }
}
