import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../classes/user/user';
import { Observable } from 'rxjs';
import { CustomerResponse } from '../model/customer-response';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  registerUserFromRemote(user: User):Observable<any> {
    return this._http.post<any>("http://localhost:8080/userManagement-api/service/register-user",user);
  }

  
// HimanshuEdits Start Here
  loginuser(user: User){
    return this._http.post('http://localhost:8080/userManagement-api/login', user);
  }

  // Email For Generate OTP
  forgetPassByOtpSer(user:User){
    return this._http.post('http://localhost:8080/userManagement-api/forgotPasswordByOtp', user);
  }

  //Veriy Otp
  verifyotp(userotp : User){
    return this._http.post('http://localhost:8080/userManagement-api/VerifyOtp',userotp);
  }

  forgetPassByQuestionSer(user :User){
    console.log(user)
    return this._http.put('http://localhost:8080/userManagement-api/forgotPasswordByQuestion',user)
  }
// End Here

getCustomerFromRemote():Observable<any> {
  return this._http.get<any>("http://localhost:8080/getCustomerList");
}

getCustomerForEmployeeFromRemote():Observable<any>{
  return this._http.get<any>("http://localhost:8080/getCustomerDetails");
}

getEmployeeFromRemote():Observable<any> {
  return this._http.get<any>("http://localhost:8080/getEmployeeList");
}


approveRegistrationRequest(customerResponse: CustomerResponse){
  return this._http.post('http://localhost:8080/service/register-userRegistrationVerify', customerResponse);
}

// deleteCustomer(customerResponse: CustomerResponse){
//   return this._http.delete('http://localhost:8080/service/register-userRegistrationVerify', customerResponse);
// }

rejectRegistrationRequest(customerResponse: CustomerResponse){
  return this._http.post('http://localhost:8080/service/register-userRegistrationReject', customerResponse);
}

approveEmployeeRegistrationRequest(customerResponse: CustomerResponse){
  return this._http.post('http://localhost:8080/service/register-userEmployeeRegistrationVerify', customerResponse);
}

rejectEmployeeRegistrationRequest(customerResponse: CustomerResponse){
  return this._http.post('http://localhost:8080/service/register-userEmployeeRegistrationReject', customerResponse);
}

  constructor(private _http:HttpClient) { }
//


//  
}