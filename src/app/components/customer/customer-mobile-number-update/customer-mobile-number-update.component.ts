import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { UpdateRequests } from 'src/app/classes/update-requests';
import {CustomerUpdateMobile} from 'src/app/model/customer-update-mobile';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-customer-mobile-number-update',
  templateUrl: './customer-mobile-number-update.component.html',
  styleUrls: ['./customer-mobile-number-update.component.css']
})
export class CustomerMobileNumberUpdateComponent implements OnInit {

  Submit:FormGroup;
  msg:any;
 Customer;
  UpdateForm: FormGroup;

  
  constructor(private  service: MainService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.UpdateForm= this.formBuilder.group({
      'newmobileNo': new FormControl(null,[Validators.required,Validators.maxLength(10)])
    });
    this.service.getCustomer().subscribe((data) => this.Customer = data);
  }

  updateUser(customerUpdateMobile:UpdateRequests){

    customerUpdateMobile.emailID=this.Customer.emailID;
    this.service.raisemobnorequest(customerUpdateMobile).subscribe(
      data =>{
        console.log("response received")
        alert("Send request successfully")
      },
      error =>{
        console.log("exception occured");
        this.msg=error.error;
       
      }
    )
  }


}
