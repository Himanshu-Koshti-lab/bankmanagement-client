import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators}from '@angular/forms';
import { from } from 'rxjs';
import{TransferFundRequest} from "src/app/model/transfer-fund-request"
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cfund-transfer',
  templateUrl: './cfund-transfer.component.html',
  styleUrls: ['./cfund-transfer.component.css']
})
export class CFundTransferComponent implements OnInit {

  transferFundForm: FormGroup;
 
  // transferfund: TransferFundRequest ; //added this
  message:any;
 
  constructor(private  service:MainService) { }
 
  ngOnInit(): void {
    this.transferFundForm = new FormGroup({
      'senderAccountNumber':new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern("^[0-9]*$")]),
      'receiverAccountNumber': new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern("^[0-9]*$")]),
      'amount':new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(5),Validators.pattern("^[0-9]*$")])
      });
  }
    
  public Transfernow(TransferFundRequest:TransferFundRequest){
    let resp= this.service.doTransfer(TransferFundRequest);
   resp.subscribe((data)=>this.message=data);
  console.log(TransferFundRequest)
     
     }

}
