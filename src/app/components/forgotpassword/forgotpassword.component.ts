import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user/user';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassByQue:FormGroup;
  Confirmpassword:String;
  OtpBased:boolean;
  user;
  Updateuser:any;
  submitted = false;
  constructor(private _service: MainService, private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forgotPassByQue = this.formBuilder.group({
      emailID: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      securityQuestion:[''],
      Confirmpassword: ['', [Validators.required, Validators.minLength(4)]],
      answer:['', [Validators.required, Validators.minLength(8)]],
  });
  }
  //Show Otp Based Form
  showOtp(){
    this.OtpBased = true;
  }
  //Show AnswerBased Form
  showAnswer(){
    this.OtpBased = false;
  }
  //Function For Submit forgotPassByQue Form
  forgotPassByQueF(user:User){
    const resp =  this._service.forgetPassByQuestionSer(user);
    resp.subscribe(
      data => {
        this.Updateuser = data
        this._router.navigateByUrl('home')
        console.log(this.Updateuser)
        alert("Done Update Password")
      },
      err => 
      alert("Something went wrong with Email,Question and Password"))
  }  
  selectedQuestion: string = 'What Is your favorite book?';
  

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedQuestion = event.target.value;
  } 
}


