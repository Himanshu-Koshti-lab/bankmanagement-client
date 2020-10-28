import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../classes/user/user';
import { Observable } from 'rxjs';
// import { Userotp } from '../classes/userotp';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  registerUserFromRemote(user: User):Observable<any> {
    return this._http.post<any>("http://localhost:8080/register",user);
  }
// HimanshuEdits Start Here
  loginuser(user: User){
    return this._http.post('http://localhost:8080/login', user);
  }

  // Email For Generate OTP
  forgotPasswordByOtp(user:User){
    return this._http.post('http://localhost:8080/forgotPasswordByOtp', user);
  }

  // //Veriy Otp
  // verifyotp(userotp : Userotp){
  //   return this._http.put('Updatelink',userotp);
  // }

  forgetPassByQuestionSer(user :User){
    console.log(user)
    return this._http.put('http://localhost:8080/forgotPasswordByAnswer',user)
  }
// End Here
  constructor(private _http:HttpClient) { }
}