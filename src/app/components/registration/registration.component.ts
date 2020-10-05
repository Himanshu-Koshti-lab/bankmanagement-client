import { Component, OnInit } from '@angular/core';
import {NgForm,FormGroup} from '@angular/forms';
import { from } from 'rxjs';
import {MainService} from 'src/app/services/main.service';
import {User} from 'src/app/classes/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user =new User();
  msg='';

  siteKey:string;

  states:any=["Andaman and Nicobar Islands",
"Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chandigarh",
"Chhattisgarh",
"Dadra and Nagar Haveli and Daman and Diu",
"Delhi",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jammu and Kashmir",
"Jharkhand",
"Karnataka",
"Kerala",
"Ladakh",
"Lakshadweep",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Puducherry",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttar Pradesh",
"Uttarakhand",
"West Bengal"];

  constructor(private _service:MainService, private _router:Router) {
    this.siteKey='6Lc9ktMZAAAAANyXdtiP4A-TDXMdX1KVvxnOL5WN';
   }

  ngOnInit(): void {
  }

  registerUser(){
    
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        return;
      },
      error =>{
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }

  
  
}
