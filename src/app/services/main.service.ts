import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user/user';
import { from, Observable } from 'rxjs';
import { CustomerResponse } from '../model/customer-response';
import { TransferFundRequest } from '../model/transfer-fund-request';
import { Router } from '@angular/router';
import { AccountCreate } from '../model/account-create';
import { UpdateUser } from '../classes/update-user';
import { UpdateRequests } from '../classes/update-requests';
import { ChangePassword } from '../model/change-password';
import { AccountCreationApproveRejectRequest } from '../model/account-creation-approve-reject-request';
import { CustomerUpdateMobile } from '../model/customer-update-mobile';
// import { Userotp } from '../classes/userotp';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>(
      'http://localhost:8081/service/register-user',
      user
    );
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
    console.log(user);
    return this._http.put(
      'http://localhost:8081/forgotPasswordByQuestion',
      user
    );
  }
  // End Here

  raisemobnorequest(customerUpdateMobile: UpdateRequests): Observable<any> {
    return this._http.post<any>(
      'http://localhost:8081/MobileUpdateRequest',
      customerUpdateMobile
    );
  }

  getCustomerMobNoUpdateRequest(): Observable<any> {
    return this._http.get<any>('http://localhost:8081/requestlist');
  }

  approveMobNoRequest(updaterequests: CustomerUpdateMobile) {
    return this._http.post(
      'http://localhost:8081/UpdateMobileNoRequestApproved',
      updaterequests
    );
  }

  rejectMobNoRequest(updaterequests: CustomerUpdateMobile) {
    return this._http.post(
      'http://localhost:8081/UpdateMobileNoRequestReject',
      updaterequests
    );
  }

  getCustomerFromRemote(): Observable<any> {
    return this._http.get<any>('http://localhost:8081/getCustomerList');
  }

  getAccountDetails(): Observable<any> {
    return this._http.get<any>('http://localhost:8083/accountDetails');
  }

  getCustomerForEmployeeFromRemote(): Observable<any> {
    return this._http.get<any>('http://localhost:8083/getCustomerDetails');
  }

  getEmployeeFromRemote(): Observable<any> {
    return this._http.get<any>('http://localhost:8081/getEmployeeList');
  }

  approveRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post(
      'http://localhost:8081/service/register-userRegistrationVerify',
      customerResponse
    );
  }

  // deleteCustomer(customerResponse: CustomerResponse){
  //   return this._http.delete('http://localhost:8080/service/register-userRegistrationVerify', customerResponse);
  // }

  rejectRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post(
      'http://localhost:8081/service/register-userRegistrationReject',
      customerResponse
    );
  }

  approveEmployeeRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post(
      'http://localhost:8083/service/register-userEmployeeRegistrationVerify',
      customerResponse
    );
  }

  rejectEmployeeRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post(
      'http://localhost:8081/service/register-userEmployeeRegistrationReject',
      customerResponse
    );
  }

  public doTransfer(pro: TransferFundRequest) {
    return this._http.post('http://localhost:8082/sendMoney', pro);
  }
  onLogout() {
    if (sessionStorage.getItem('token') !== null) {
      sessionStorage.removeItem('token');
      this.router.navigateByUrl('home');
      console.log('SuccessFull Logout');
    }
  }

  getCustomer(): Observable<any> {
    return this._http.get<any>('http://localhost:8081/getCustomer');
  }

  getEmployee(): Observable<any> {
    return this._http.get<any>('http://localhost:8081/getEmployee');
  }

  getAdmin(): Observable<any> {
    return this._http.get<any>('http://localhost:8081/getAdmin');
  }

  createAccount(accountCreate: AccountCreate) {
    return this._http.post(
      'http://localhost:8084/register-account',
      accountCreate
    );
  }

  getTransactionStatement(): Observable<any> {
    return this._http.post<any>(
      'http://localhost:8082/getAlltransaction',
      null
    );
  }

  getTransactionCustomersStatement(): Observable<any> {
    return this._http.get<any>('http://localhost:8082/getCustomerTransaction');
  }

  doUpdate(update: UpdateUser): Observable<any> {
    return this._http.post<any>('http://localhost:8084/Request', update);
  }
  getCustomerUpdateRequest(): Observable<any> {
    return this._http.get<any>('http://localhost:8084/requestlist');
  }

  approveUpdateRequest(updaterequests: UpdateRequests) {
    return this._http.post(
      'http://localhost:8084/RequestVerifyUpdate',
      updaterequests
    );
  }

  verifyAccountRequestApprovedReject(
    accountCreationApproveRejectRequest: AccountCreationApproveRejectRequest
  ) {
    return this._http.post(
      'http://localhost:8084/register-accountApprovereject',
      accountCreationApproveRejectRequest
    );
  }

  rejectUpdateRequest(updaterequests: UpdateRequests) {
    return this._http.post(
      'http://localhost:8084/RequestReject',
      updaterequests
    );
  }
  changePasswordService(changePassword: ChangePassword) {
    return this._http.put(
      'http://localhost:8081/UpdatePassword',
      changePassword
    );
  }

  constructor(private _http: HttpClient, private router: Router) {}
}
