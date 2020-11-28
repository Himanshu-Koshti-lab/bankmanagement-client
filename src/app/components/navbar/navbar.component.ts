import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,public dialog:MatDialog) { }
  public isUserLoggedIn;

  openDialog(){
    this.dialog.open(AboutUsComponent,{width:'1400px'});
  }
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
