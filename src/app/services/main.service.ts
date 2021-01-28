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
import { environment } from 'src/environments/environment';
// import { Userotp } from '../classes/userotp';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private _http: HttpClient, private router: Router) {}

  registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>(
      environment.USER_API + '/service/register-user',
      user
    );
  }

  // Email For Generate OTP
  forgetPassByOtpSer(user: User) {
    return this._http.post(environment.USER_API + '/forgotPasswordByOtp', user);
  }

  //Veriy Otp
  verifyotp(userotp: User) {
    return this._http.post(environment.USER_API + '/VerifyOtp', userotp);
  }

  forgetPassByQuestionSer(user: User) {
    console.log(user);
    return this._http.put(
      environment.USER_API + '/forgotPasswordByQuestion',
      user
    );
  }
  // End Here

  raisemobnorequest(customerUpdateMobile: UpdateRequests): Observable<any> {
    return this._http.post<any>(
      environment.USER_API + '/MobileUpdateRequest',
      customerUpdateMobile
    );
  }

  getCustomerMobNoUpdateRequest(): Observable<any> {
    return this._http.get<any>(environment.USER_API + '/requestlist');
  }

  approveMobNoRequest(updaterequests: CustomerUpdateMobile) {
    return this._http.post(
      environment.USER_API + '/UpdateMobileNoRequestApproved',
      updaterequests
    );
  }

  rejectMobNoRequest(updaterequests: CustomerUpdateMobile) {
    return this._http.post(
      environment.USER_API + '/UpdateMobileNoRequestReject',
      updaterequests
    );
  }

  getCustomerFromRemote(): Observable<any> {
    return this._http.get<any>(environment.USER_API + '/getCustomerList');
  }

  getAccountDetails(): Observable<any> {
    return this._http.get<any>(environment.DASHBOARD_API + '/accountDetails');
  }

  getCustomerForEmployeeFromRemote(): Observable<any> {
    return this._http.get<any>(
      environment.DASHBOARD_API + '/getCustomerDetails'
    );
  }

  getEmployeeFromRemote(): Observable<any> {
    return this._http.get<any>(environment.USER_API + '/getEmployeeList');
  }

  approveRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post(
      environment.USER_API + '/service/register-userRegistrationVerify',
      customerResponse
    );
  }

  // deleteCustomer(customerResponse: CustomerResponse){
  //   return this._http.delete('http://localhost:8080/service/register-userRegistrationVerify', customerResponse);
  // }

  rejectRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post(
      environment.USER_API + '/service/register-userRegistrationReject',
      customerResponse
    );
  }

  approveEmployeeRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post(
      environment.USER_API +
        '/service/register-userEmployeeRegistrationVerify',
      customerResponse
    );
  }

  rejectEmployeeRegistrationRequest(customerResponse: CustomerResponse) {
    return this._http.post(
      environment.USER_API + '/service/register-userEmployeeRegistrationReject',
      customerResponse
    );
  }

  public doTransfer(pro: TransferFundRequest) {
    return this._http.post(environment.TRANSACTION_API + '/sendMoney', pro);
  }
  onLogout() {
    if (sessionStorage.getItem('token') !== null) {
      sessionStorage.removeItem('token');
      this.router.navigateByUrl('home');
      console.log('SuccessFull Logout');
    }
  }

  getCustomer(): Observable<any> {
    return this._http.get<any>(environment.USER_API + '/getCustomer');
  }

  getEmployee(): Observable<any> {
    return this._http.get<any>(environment.USER_API + '/getEmployee');
  }

  getAdmin(): Observable<any> {
    return this._http.get<any>(environment.USER_API + '/getAdmin');
  }

  createAccount(accountCreate: AccountCreate) {
    return this._http.post(
      environment.ACCOUNT_API + '/register-account',
      accountCreate
    );
  }

  getTransactionStatement(): Observable<any> {
    return this._http.get<any>(
      environment.TRANSACTION_API + '/getMyTransaction'
    );
  }

  getUserAccounts(): Observable<any> {
    return this._http.get<any>(environment.ACCOUNT_API + '/getUserAccounts');
  }

  getTransactionCustomersStatement(): Observable<any> {
    return this._http.get<any>(
      environment.TRANSACTION_API + '/getCustomerTransaction'
    );
  }

  doUpdate(update: UpdateUser): Observable<any> {
    return this._http.post<any>(environment.ACCOUNT_API + '/Request', update);
  }
  getCustomerUpdateRequest(): Observable<any> {
    return this._http.get<any>(environment.ACCOUNT_API + '/requestlist');
  }

  approveUpdateRequest(updaterequests: UpdateRequests) {
    return this._http.post(
      environment.ACCOUNT_API + '/RequestVerifyUpdate',
      updaterequests
    );
  }

  verifyAccountRequestApprovedReject(
    accountCreationApproveRejectRequest: AccountCreationApproveRejectRequest
  ) {
    return this._http.post(
      environment.ACCOUNT_API + '/register-accountApprovereject',
      accountCreationApproveRejectRequest
    );
  }

  rejectUpdateRequest(updaterequests: UpdateRequests) {
    return this._http.post(
      environment.ACCOUNT_API + '/RequestReject',
      updaterequests
    );
  }
  changePasswordService(changePassword: ChangePassword) {
    return this._http.put(
      environment.USER_API + '/UpdatePassword',
      changePassword
    );
  }
}
