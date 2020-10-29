import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

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
