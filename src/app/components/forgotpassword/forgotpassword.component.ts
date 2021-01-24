import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user/user';
import { MainService } from 'src/app/services/main.service';
import { LogindialogComponent } from '../dialogs/logindialog/logindialog.component';
import { ForgotPasswordDialogboxComponent } from '../forgot-password-dialogbox/forgot-password-dialogbox.component';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassByQue: FormGroup;
  Confirmpassword: String;
  OtpBased: boolean;
  validEmail: any;
  GenOtp: any;
  Updateuser: any;
  submitted = false;
  GeneratedOtp: string;
  constructor(
    private _service: MainService,
    private _router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.forgotPassByQue = this.formBuilder.group({
      emailID: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      otp: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      ],
      Confirmpassword: ['', [Validators.required]],
      securityQuestion: ['', [Validators.required]],
      answer: ['', [Validators.required]],
    });
  }
  //Show Otp Based Form
  showOtp() {
    this.OtpBased = true;
    this.validEmail = false;
    this.forgotPassByQue.reset();
  }
  //Show AnswerBased Form
  showAnswer() {
    this.OtpBased = false;
    this.validEmail = false;
    this.forgotPassByQue.reset();
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(LogindialogComponent, {
      width: '800px' ,
      data: {GeneratedOtp: this.GenOtp}
    });
  }
  //Function For Submit forgotPassByQue Form
  forgotPassByQueF(user: User) {
    const resp = this._service.forgetPassByQuestionSer(user);
    resp.subscribe(
      (data) => {
        this.Updateuser = data;
        this._router.navigateByUrl('home');
        console.log(this.Updateuser);
        alert('Done Update Password');
      },
      (err) => alert('Something went wrong Question and Answer')
    );
  }
  
  forgotPassByOtp(user: User) {
    const resp = this._service.forgetPassByOtpSer(user);
    resp.subscribe(
      (data) => {
        this.GenOtp = data;
        console.log(this.validEmail);
        console.log(this.GenOtp);
        if (this.GenOtp == 202) {
          alert('User Not Found');
        } else {
          this.validEmail = true;
          this.openDialog();
        }
      },
      (err) => {
        this.validEmail = false;
        alert('Please Enter Email First');
      }
    );
  }
  public verifyOtp(user: User) {
    this.validEmail = false;
    const resp = this._service.verifyotp(user);
    this.forgotPassByQue.reset();
    resp.subscribe(
      (data) => {
        this.validEmail = data;
        console.log(this.validEmail);
        alert('Password Updated Successfully');
      },
      (err) => alert('Something went wrong with Email,Question and Password')
    );
  }
  selectedQuestion: string = 'What Is your favorite book?';

  //event handler for the select element's change event
  selectChangeHandler(event: any) {
    this.selectedQuestion = event.target.value;
  }

  SentOtp() {
    console.log('Sending....');
    this.validEmail = true;
  }
}
