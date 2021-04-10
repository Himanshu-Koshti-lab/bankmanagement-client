import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ChangePassword } from 'src/app/model/change-password';
import {MatDialog} from '@angular/material/dialog';
import { ChangePasswordDialogComponent } from 'src/app/common/change-password-dialog/change-password-dialog.component';

@Component({
  selector: 'app-employee-change-password',
  templateUrl: './employee-change-password.component.html',
  styleUrls: ['./employee-change-password.component.css'],
})
export class EmployeeChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  Customer: any;
  message: any;

  constructor(private _service: MainService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      currentPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required]),
    });

    this._service.getEmployee().subscribe((data) => (this.Customer = data));
  }

  public changePassword(changePassword: ChangePassword) {
    let resp = this._service.changePasswordService(changePassword);
    resp.subscribe((data) => (this.message = data));
    this.openDialog();
  }

  openDialog(){
    this.dialog.open(ChangePasswordDialogComponent);
  }

}
