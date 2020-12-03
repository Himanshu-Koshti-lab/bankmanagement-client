import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user/user';
import {AccountCreate} from 'src/app/model/account-create';
import { MainService } from 'src/app/services/main.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-ccreate-account',
  templateUrl: './ccreate-account.component.html',
  styleUrls: ['./ccreate-account.component.css']
})
export class CcreateAccountComponent implements OnInit {

  accountForm:FormGroup;
  
  Customer:any;
  Updateuser: Object;
  temp:any;


  constructor( private _service: MainService, private _router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.accountForm = this.formBuilder.group({
      emailID: ['', [Validators.required, Validators.email]],
      userAccountType:['',[Validators.required]]
  });
  this._service.getCustomer().subscribe((data) => this.Customer = data);
  }

  userAccountType: number = 1;

  selectChangeHandler(event:any){
    this.userAccountType = event.target.value;
    console.log(this.userAccountType);
  }

  onSubmit(accountCreate:AccountCreate){
    accountCreate.emailID=this.Customer.emailID;
    accountCreate.user_id=this.Customer.user_id;
    const resp =  this._service.createAccount(accountCreate);
    resp.subscribe(
      (data) => {
        this.temp = data
        alert(this.temp.message)
      },
      err => 
      alert("Something went wrong with Email/Account Type"))
  }

}
