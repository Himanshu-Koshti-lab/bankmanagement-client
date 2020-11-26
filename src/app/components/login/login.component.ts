import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user/user';
import { MainService } from 'src/app/services/main.service';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  logedUser: User;
  NewToken;

  constructor(
    private _service: MainService,
    private _router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailID: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    if (sessionStorage.getItem('token') !== null) {
      this._router.navigateByUrl('home');
      console.log('First Logout');
      alert('First Logout');
    }
    console.log(sessionStorage.getItem('token'));
  }

  onSubmit() {
    const body = new HttpParams()
      .set('username', this.loginForm.controls.emailID.value)
      .set('password', this.loginForm.controls.password.value)
      .set('grant_type', 'password');

    this.apiService.login(body.toString()).subscribe(
      (data) => {
        const jwt = JSON.stringify(data.access_token);
        const token12 = jwt.split('"')[1];
        window.sessionStorage.setItem('token', token12);
        const jwt2 = JSON.stringify(data);
        let jwtData = jwt2.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        if (decodedJwtData.authorities == 'ROLE_ADMIN')
          this._router.navigateByUrl('Admin');
        else if (decodedJwtData.authorities == 'ROLE_EMPLOYEE')
          this._router.navigateByUrl('employeeDashboard');
        else this._router.navigateByUrl('CustomerHome');
      },
      (error) => {
        alert(error.error.error_description);
      }
    );
  }
}
