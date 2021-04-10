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
    if(sessionStorage.getItem("token"))
    {
      this.isUserLoggedIn = true;
    }else{
      this.isUserLoggedIn = false;
    }
  }
  onLogout(){    
    if(sessionStorage.getItem("token") !== null){
      sessionStorage.removeItem("token")
      this.router.navigateByUrl('home')
      console.log("SuccessFull Logout")
    }
  }
}
