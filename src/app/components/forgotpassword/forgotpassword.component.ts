import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user/user';
import { Userotp } from 'src/app/classes/userotp';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  ForgetForm: FormGroup;
  PasswordOtpForm:FormGroup;
  IsValidEmail = false;
  OtpBased:false;
  submitted = false;
  selectedQuestion:any;
  user:any;
  message:any;
  constructor(private _service: MainService, private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ForgetForm = this.formBuilder.group({
      emailID: ['', [Validators.required, Validators.email]]
    });
  }
  public forgetPass(user: User) {
    this.submitted = true;
    // stop the process here if form is invalid
    if (this.ForgetForm.invalid) {
      return;
    }
    const resp = this._service.forgotPasswordByOtp(user);
    resp.subscribe(data => {
      this.user = data
      this.IsValidEmail = true;
    })
  }
  public ChangePassWord(){
    console.log("change password in porgress")
  }

  public verifyOtp(otpver: Userotp){
    const resp = this._service.verifyotp(otpver);
    resp.subscribe(data => this.message = data,err => console.error("not change")
    )
  }

  //QuestionBased

  forgetPassByQuestion(user :User){
    const response = this._service.forgetPassByQuestionSer(user);
  }

  selectedOne(event:any){
    this.selectedQuestion = event.target.value;
  }
  
}

