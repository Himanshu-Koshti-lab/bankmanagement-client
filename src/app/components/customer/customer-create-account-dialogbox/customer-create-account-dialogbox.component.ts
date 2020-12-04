import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  GeneratedOtp:any
}

@Component({
  selector: 'app-customer-create-account-dialogbox',
  templateUrl: './customer-create-account-dialogbox.component.html',
  styleUrls: ['./customer-create-account-dialogbox.component.css']
})


export class CustomerCreateAccountDialogboxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerCreateAccountDialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) { }

  ngOnInit(): void {
  }

}
