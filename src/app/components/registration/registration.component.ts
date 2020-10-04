import { Component, OnInit } from '@angular/core';
import {NgForm,FormGroup} from '@angular/forms';
import { from } from 'rxjs';
import {MainService} from 'src/app/services/main.service';
//import {User} from 'src/app/classes/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // user =new User();
  // msg='';

  constructor(private _service:MainService, private _router:Router) { }

  ngOnInit(): void {
  }

  // registerUser(){
  //   this._service.registerUserFromRemote(this.user).subscribe(
  //     data =>{
  //       console.log("response received");
  //     },
  //     error =>{
  //       console.log("exception occured");
  //       this.msg=error.error;
  //     }
  //   )
  // }

}
