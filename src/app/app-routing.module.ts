import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './components/admin/customer/account-details/account-details.component';
import { AccountStatementComponent } from './components/admin/customer/account-statement/account-statement.component';
import { CustomerDetailsComponent } from './components/admin/customer/customer-details/customer-details.component';
import { EmployeeDetailsComponent } from './components/admin/employee/employee-details/employee-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SampleComponent } from './components/sample/sample.component';
import { EmployeeRegistrationRequestsComponent } from './components/admin/request/employee/employee-registration-requests/employee-registration-requests.component';
import { EmployeeUpdateProfileComponent } from './components/admin/request/employee/employee-update-profile/employee-update-profile.component';
import { CustomerRegistrationRequestComponent } from './components/admin/request/customer/customer-registration-request/customer-registration-request.component';
import { CustomerUpdateProfileComponent } from './components/admin/request/customer/customer-update-profile/customer-update-profile.component';
import { CHomeComponent } from './components/customer/chome/chome.component';
import { CcreateAccountComponent } from './components/customer/ccreate-account/ccreate-account.component';
import { CaccountStatementComponent } from './components/customer/caccount-statement/caccount-statement.component';
import { CFundTransferComponent } from './components/customer/cfund-transfer/cfund-transfer.component';
import { CupdateDetailsComponent } from './components/customer/cupdate-details/cupdate-details.component';
import { CcustomerdetailsComponent } from './components/customer/ccustomerdetails/ccustomerdetails.component';
import { CustomerAccountDetailsComponent } from './components/Employee/customer/customer-account-details/customer-account-details.component';
import { CustomerAccountStatementComponent } from './components/Employee/customer/customer-account-statement/customer-account-statement.component';
import { CustomerProfileDetailsComponent } from './components/Employee/customer/customer-profile-details/customer-profile-details.component';
import { ChangePasswordComponent } from './components/Employee/updateDetails/change-password/change-password.component';
import { EmployeeDashboardComponent } from './components/Employee/employee-dashboard/employee-dashboard.component';
import {EmpDetailsComponent} from './components/Employee/emp-details/emp-details.component';
import {AdminProfileComponent} from './components/admin/admin-profile/admin-profile.component';
  import { from } from 'rxjs';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  //Himanshu Edit Start
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'forgot_password',component:ForgotpasswordComponent},
  {path:'Admin',component:AdminDashboardComponent},
  //End
  {path:'register',component:RegistrationComponent},
  {path:'sample', component:SampleComponent},
  {path:'Customer/accountDetails', component:AccountDetailsComponent},
  {path:'accountStatement', component: AccountStatementComponent},
  {path:'customerDetails', component: CustomerDetailsComponent},
  {path:'employeeDetails', component:EmployeeDetailsComponent},
  {path:'employeeRegistrationRequest', component:EmployeeRegistrationRequestsComponent},
  {path:'employeeUpdateProfile', component:EmployeeUpdateProfileComponent},
  {path:'customerRegistrationRequest',component:CustomerRegistrationRequestComponent},
  {path:'customerUpdateProfile',component:CustomerUpdateProfileComponent},
  {path:'Admin_accountDetails', component:AccountDetailsComponent},
  {path:'Admin_accountStatement', component: AccountStatementComponent},
  {path:'Admin_customerDetails', component: CustomerDetailsComponent},
  {path:'Admin_employeeDetails', component:EmployeeDetailsComponent},
  {path:'CustomerHome',component:CHomeComponent},
  {path:'CustomerDetails',component:CcustomerdetailsComponent},
  {path:'Account_Information/Create_Account',component:CcreateAccountComponent},
  {path:'Account_Information/Account_Statement',component:CaccountStatementComponent},
  {path:'Fund_Transfer',component:CFundTransferComponent},
  {path:'UserDetails',component:CupdateDetailsComponent},
  {path:'Employee/customer/customerAccountDetails', component:CustomerAccountDetailsComponent},
  {path:'Employee/customer/customerAccountStatement',component:CustomerAccountStatementComponent},
  {path:'Employee/customer/customerProfileDetails',component:CustomerProfileDetailsComponent},
  {path:'Employee/customer/changePassword',component:ChangePasswordComponent},
  {path:'employeeDashboard',component:EmployeeDashboardComponent},
  {path:'employeeProfile',component:EmpDetailsComponent},
  {path:'adminProfile',component:AdminProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
