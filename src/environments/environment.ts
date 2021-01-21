// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId:"ABCD",
  clientSecret:"ABCD",
  scope:"read",
  registerUserFromRemote: "http://localhost:8081/",
  forgetPassByOtpSer:"http://localhost:8081/",
  verifyotp:"http://localhost:8081/",
  forgetPassByQuestionSer:"http://localhost:8081/",
  raisemobnorequest:"http://localhost:8081/",
  getCustomerMobNoUpdateRequest:"http://localhost:8081/",
  approveMobNoRequest:"http://localhost:8081/",
  rejectMobNoRequest:"http://localhost:8081/",
  getCustomerFromRemote:"http://localhost:8081/",
  getAccountDetails:"http://localhost:8083/",
  getCustomerForEmployeeFromRemote:"http://localhost:8083/",
  getEmployeeFromRemote:"http://localhost:8081/",
  approveRegistrationRequest:"http://localhost:8081/",
  rejectRegistrationRequest:"http://localhost:8081/",
  approveEmployeeRegistrationRequest:"http://localhost:8083/",
  rejectEmployeeRegistrationRequest:"http://localhost:8081/",
  doTransfer:"http://localhost:8082/",
  getCustomer:"http://localhost:8081/",
  getEmployee:"http://localhost:8081/",
  getAdmin:"http://localhost:8081/",
  createAccount:"http://localhost:8084/",
  getTransactionStatement:"http://localhost:8082/",
  getTransactionCustomersStatement:"http://localhost:8082/",
  doUpdate:"http://localhost:8084/",
  getCustomerUpdateRequest:"http://localhost:8084/",
  approveUpdateRequest:"http://localhost:8084/",
  verifyAccountRequestApprovedReject:"http://localhost:8084/",
  rejectUpdateRequest:"http://localhost:8084/",
  changePasswordService:"http://localhost:8081/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
