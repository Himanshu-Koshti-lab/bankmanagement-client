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
import { CHomeComponent } from './components/customer/chome/chome.component';
import { CcreateAccountComponent } from './components/customer/ccreate-account/ccreate-account.component';
import { CaccountStatementComponent } from './components/customer/caccount-statement/caccount-statement.component';
import { CFundTransferComponent } from './components/customer/cfund-transfer/cfund-transfer.component';
import { CupdateDetailsComponent } from './components/customer/cupdate-details/cupdate-details.component';

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
  {path:'Admin_accountDetails', component:AccountDetailsComponent},
  {path:'Admin_accountStatement', component: AccountStatementComponent},
  {path:'Admin_customerDetails', component: CustomerDetailsComponent},
  {path:'Admin_employeeDetails', component:EmployeeDetailsComponent},
  {path:'CustomerHome',component:CHomeComponent},
  {path:'CustomerDetails',component:CustomerDetailsComponent},
  {path:'Account_Information/Create_Account',component:CcreateAccountComponent},
  {path:'Account_Information/Account_Statement',component:CaccountStatementComponent},
  {path:'Fund_Transfer',component:CFundTransferComponent},
  {path:'UserDetails',component:CupdateDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
