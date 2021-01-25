import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { MainService } from 'src/app/services/main.service';
import { User } from 'src/app/classes/user/user';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user = new User();
  msg = '';

  siteKey: string;

  states: any = [
    'Andaman and Nicobar',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];

  updateAddress(event) {
    if (event.target.checked) {
      this.user.permanentAddress = this.user.currentAddress;
      this.user.permanentCity = this.user.currentCity;
      this.user.permanentState = this.user.currentState;
      this.user.permanentZipcode = this.user.currentZipcode;
    } else {
      this.user.permanentAddress = '';
      this.user.permanentCity = '';
      this.user.permanentState = '';
      this.user.permanentZipcode = '';
    }
  }
  constructor(
    private _service: MainService,
    private _router: Router,
    public dialog: MatDialog
  ) {
    this.siteKey = '6LfDCjsaAAAAABW9cqJ_pYej5CtdUOXz94_3cH3F';
  }

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DialogboxComponent);
  }

  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response received');
      },
      (error) => {
        console.log('exception occured');
        this.msg = error.error;
      }
    );
  }
}
