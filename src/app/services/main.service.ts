import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user/user';
import { Observable } from 'rxjs';
import { CustomerResponse } from '../model/customer-response';
import { TransferFundRequest } from '../model/transfer-fund-request';
import { Router } from '@angular/router';
// import { Userotp } from '../classes/userotp';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8081/service/register-user", user);
  }

  // Email For Generate OTP
  forgetPassByOtpSer(user: User) {
    return this._http.post('http://localhost:8081/forgotPasswordByOtp', user);
  }

  //Veriy Otp
  verifyotp(userotp: User) {
    return this._http.post('http://localhost:8081/VerifyOtp', userotp);
  }

  forgetPassByQuestionSer(user: User) {
    console.log(user)
    return this._http.put('http://localhost:8081/forgotPasswordByQuestion', user)
  }
  // End Here

  getCustomerFromRemote(): Observable<any> {
    return this._http.get<any>("http://localhost:8083/getCustomerList");
  }

  getCustomerForEmployeeFromRemote(): Observable<any> {
    return this._http.get<any>("http://localhost:8083/getCustomerDetails");
  }

  getEmployeeFromRemote(): Observable<any> {
    return this._http.get<any>("http://localhost:8083/getEmployeeList");
  }


  approveRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post('http://localhost:8081/service/register-userRegistrationVerify', customerResponse);
  }

  // deleteCustomer(customerResponse: CustomerResponse){
  //   return this._http.delete('http://localhost:8080/service/register-userRegistrationVerify', customerResponse);
  // }

  rejectRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post('http://localhost:8081/service/register-userRegistrationReject', customerResponse);
  }

  approveEmployeeRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post('http://localhost:8081/service/register-userEmployeeRegistrationVerify', customerResponse);
  }

  rejectEmployeeRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post('http://localhost:8081/service/register-userEmployeeRegistrationReject', customerResponse);
  }


  public doTransfer(pro: TransferFundRequest) {
    return this._http.post("http://localhost:8082/sendMoney", pro);
  }
  onLogout(){    
    if(sessionStorage.getItem("token") !== null){
      sessionStorage.removeItem("token")
      this.router.navigateByUrl('home')
      console.log("SuccessFull Logout")
    }
  }



  constructor(private _http: HttpClient, private router:Router) { }

}