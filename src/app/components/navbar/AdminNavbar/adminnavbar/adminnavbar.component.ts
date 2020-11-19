import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  constructor(private router:Router) { }
  public isUserLoggedIn;

  @Output() featureSelected=new EventEmitter<string>();

  onSelect(feature:string)
  {
    this.featureSelected.emit(feature);
  }
  loadedFeature='accountDetails'
  onNavigate(feature:string)
  {
    this.loadedFeature=feature;
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
