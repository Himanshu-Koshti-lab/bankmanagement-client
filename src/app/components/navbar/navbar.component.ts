import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  public isUserLoggedIn;

  ngOnInit(): void {
    if(sessionStorage.getItem("Log"))
    {
      this.isUserLoggedIn = true;
    }else{
      this.isUserLoggedIn = false;
    }
  }
  onLogout(){    
    if(sessionStorage.getItem("Log") !== null){
      sessionStorage.removeItem("Log")
      this.router.navigateByUrl('home')
      console.log("SuccessFull Logout")
    }
  }
}
