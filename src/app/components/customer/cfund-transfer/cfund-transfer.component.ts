import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { from } from 'rxjs';
import { TransferFundRequest } from 'src/app/model/transfer-fund-request';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cfund-transfer',
  templateUrl: './cfund-transfer.component.html',
  styleUrls: ['./cfund-transfer.component.css'],
})
export class CFundTransferComponent implements OnInit {
  transferFundForm: FormGroup;

  // transferfund: TransferFundRequest ; //added this
  AllAccount: any;
  message: any;

  constructor(
    private service: MainService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    this.service
      .getUserAccounts()
      .subscribe((data) => (this.AllAccount = data));
    this.transferFundForm = new FormGroup({
      senderAccountNumber: new FormControl(null),
      receiverAccountNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern('^[0-9]*$'),
      ]),
      amount: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(5),
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }
  accountNumber: number = 0;
  selectChangeHandler(event: any) {
    this.accountNumber = event.target.value;
  }

  public Transfernow(TransferFundRequest: TransferFundRequest) {
    let resp = this.service.doTransfer(TransferFundRequest);
    resp.subscribe((data) => (this.message = data));
    console.log(TransferFundRequest);
  }
  checkAccount(accountNumber: number) {
    if (accountNumber == 0) {
      return true;
    } else {
      return false;
    }
  }
}
