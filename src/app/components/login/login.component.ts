import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from 'src/app/classes/user/user';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  logedUser: User;
  

  constructor(private _service:MainService,private _router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailID: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
  });

  if(sessionStorage.getItem("Log") !== null){
    this._router.navigateByUrl('home')
    console.log("First Logout")
    alert("First Logout")
  }    
  console.log(sessionStorage.getItem("Log"))

  }
  public loginUser(loguser: User){
    this.submitted = true; 
        // stop the process here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
      const resp =  this._service.loginuser(loguser);
      resp.subscribe(data => {
        this._router.navigateByUrl('Admin')
        console.log(data)
        sessionStorage.setItem("Log" , "login done" )        
       // console.log(sessionStorage.getItem("Log"))
      }  , err => alert("credential are wrong check Email and Password")) 
          
  }  
}