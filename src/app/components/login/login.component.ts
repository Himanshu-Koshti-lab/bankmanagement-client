import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from 'src/app/classes/user/user';
import { MainService } from 'src/app/services/main.service';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  logedUser: User;
  

  constructor(private _service:MainService,private _router:Router,private formBuilder: FormBuilder,private apiService: ApiService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailID: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
  });

  if(sessionStorage.getItem("token") !== null){
    this._router.navigateByUrl('home')
    console.log("First Logout")
    alert("First Logout")
  }    
  console.log(sessionStorage.getItem("token"))

  }
  // public loginUser(loguser: User){
  //   this.submitted = true; 
  //       // stop the process here if form is invalid
  //       if (this.loginForm.invalid) {
  //           return;
  //       }
  //     const resp =  this._service.loginuser(loguser);
  //     resp.subscribe(data => {
  //       this._router.navigateByUrl('Admin')
  //       console.log(data)
  //       sessionStorage.setItem("Log" , "login done" )        
  //      // console.log(sessionStorage.getItem("Log"))
  //     }  , err => alert("credential are wrong check Email and Password or Pending for review")) 
  // }  
  onSubmit() {
    // if (this.loginForm.invalid) {
    //   return;
    // }
    const body = new HttpParams()
      .set('username', this.loginForm.controls.emailID.value)
      .set('password', this.loginForm.controls.password.value)
      .set('grant_type', 'password');

    this.apiService.login(body.toString()).subscribe(data => {
     // window.sessionStorage.setItem('token', JSON.stringify(data));
      const jwt = JSON.stringify(data);
      let jwtData = jwt.split('.')[1]
      window.sessionStorage.setItem('token',jwtData)
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      console.log(decodedJwtData.authorities)
      if(decodedJwtData.authorities == "ROLE_ADMIN")
        this._router.navigateByUrl('Admin')
      else if (decodedJwtData.authorities == "ROLE_EMPLOYEE")
      this._router.navigateByUrl('employeeDashboard')
      else 
          this._router.navigateByUrl('CustomerHome')        
    }, error => {
        alert(error.error_description)
    });
  }

  
}