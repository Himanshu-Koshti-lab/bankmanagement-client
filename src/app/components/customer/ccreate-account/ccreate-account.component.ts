import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user/user';
import {AccountCreate} from 'src/app/model/account-create';
import { MainService } from 'src/app/services/main.service';
import { from } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CustomerCreateAccountDialogboxComponent } from '../customer-create-account-dialogbox/customer-create-account-dialogbox.component';

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


  constructor( private _service: MainService, private _router: Router, private formBuilder: FormBuilder,public dialog: MatDialog ) { }

  ngOnInit(): void {

    this.accountForm = this.formBuilder.group({
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
        this.openDialog();
      },
      err => 
      alert("Something went wrong with Email/Account Type"))
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomerCreateAccountDialogboxComponent, {
      width: '800px' ,
      data: {GeneratedOtp: this.temp.message}
    });
  }
}
