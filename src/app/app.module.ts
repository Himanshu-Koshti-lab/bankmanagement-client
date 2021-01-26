import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FooterComponent } from './components/footer/footer.component';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminnavbarComponent } from './components/navbar/AdminNavbar/adminnavbar/adminnavbar.component';
import { SampleComponent } from './components/sample/sample.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AccountDetailsComponent } from './components/admin/customer/account-details/account-details.component';
import { CustomerDetailsComponent } from './components/admin/customer/customer-details/customer-details.component';
import { AccountStatementComponent } from './components/admin/customer/account-statement/account-statement.component';
import { EmployeeDetailsComponent } from './components/admin/employee/employee-details/employee-details.component';
import { EmployeeRegistrationRequestsComponent } from './components/admin/request/employee/employee-registration-requests/employee-registration-requests.component';
import { EmployeeUpdateProfileComponent } from './components/admin/request/employee/employee-update-profile/employee-update-profile.component';
import { CustomerRegistrationRequestComponent } from './components/admin/request/customer/customer-registration-request/customer-registration-request.component';
import { CustomerUpdateProfileComponent } from './components/admin/request/customer/customer-update-profile/customer-update-profile.component';
import { CustomerNavbarComponent } from './components/customer/customer-navbar/customer-navbar.component';
import { CHomeComponent } from './components/customer/chome/chome.component';
import { CcreateAccountComponent } from './components/customer/ccreate-account/ccreate-account.component';
import { CFundTransferComponent } from './components/customer/cfund-transfer/cfund-transfer.component';
import { CupdateDetailsComponent } from './components/customer/cupdate-details/cupdate-details.component';
import { CaccountStatementComponent } from './components/customer/caccount-statement/caccount-statement.component';
import { CcustomerdetailsComponent } from './components/customer/ccustomerdetails/ccustomerdetails.component';
import { EmployeeDashboardComponent } from './components/Employee/employee-dashboard/employee-dashboard.component';
import { EmployeeNavbarComponent } from './components/Employee/employee-navbar/employee-navbar.component';
import { CustomerAccountDetailsComponent } from './components/Employee/customer/customer-account-details/customer-account-details.component';
import { CustomerAccountStatementComponent } from './components/Employee/customer/customer-account-statement/customer-account-statement.component';
import { ChangePasswordComponent } from './components/Employee/updateDetails/change-password/change-password.component';
import { CustomerProfileDetailsComponent } from './components/Employee/customer/customer-profile-details/customer-profile-details.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { from } from 'rxjs';
import { EmpDetailsComponent } from './components/Employee/emp-details/emp-details.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { CustomerCareComponent } from './components/customer-care/customer-care.component';
import { HeadersComponent } from './components/headers/headers.component';
import { AdminChangePasswordComponent } from './components/admin/admin-change-password/admin-change-password.component';
import { EmployeeChangePasswordComponent } from './components/Employee/employee-change-password/employee-change-password.component';
import { CustomerChangePasswordComponent } from './components/customer/customer-change-password/customer-change-password.component';
import { ForgotPasswordDialogboxComponent } from './components/forgot-password-dialogbox/forgot-password-dialogbox.component';
import { LogindialogComponent } from './components/dialogs/logindialog/logindialog.component';
import { CustomerAccountRegistrationRequestComponent } from './components/admin/request/customer/customer-account-registration-request/customer-account-registration-request.component';
import { MatTableModule } from '@angular/material/table';
import { CustomerCreateAccountDialogboxComponent } from './components/customer/customer-create-account-dialogbox/customer-create-account-dialogbox.component';
import { CustomerMobileNumberUpdateComponent } from './components/customer/customer-mobile-number-update/customer-mobile-number-update.component';
import { CustomerMobileNumberRequestApproveComponent } from './components/admin/request/customer/customer-mobile-number-request-approve/customer-mobile-number-request-approve.component';
import { AccountinfoComponent } from './components/customer/accountinfo/accountinfo.component';

import { ChartsModule } from 'ng2-charts';
import { TestingComponentComponent } from './components/testing-component/testing-component.component';
import { ChangePasswordDialogComponent } from './common/change-password-dialog/change-password-dialog.component';
import { ForgotPasswordDialogComponent } from './common/forgot-password-dialog/forgot-password-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    DialogboxComponent,
    BannerComponent,
    NavbarComponent,
    ForgotpasswordComponent,
    AdminDashboardComponent,
    AdminnavbarComponent,
    SampleComponent,
    DropdownDirective,
    AccountDetailsComponent,
    CustomerDetailsComponent,
    AccountStatementComponent,
    EmployeeDetailsComponent,
    EmployeeRegistrationRequestsComponent,
    EmployeeUpdateProfileComponent,
    CustomerRegistrationRequestComponent,
    CustomerUpdateProfileComponent,
    CustomerNavbarComponent,
    CHomeComponent,
    CcreateAccountComponent,
    CFundTransferComponent,
    CupdateDetailsComponent,
    CaccountStatementComponent,
    CcustomerdetailsComponent,
    EmployeeDashboardComponent,
    EmployeeNavbarComponent,
    CustomerAccountDetailsComponent,
    CustomerAccountStatementComponent,
    ChangePasswordComponent,
    CustomerProfileDetailsComponent,
    EmpDetailsComponent,
    AdminProfileComponent,
    CustomerCareComponent,
    HeadersComponent,
    AdminChangePasswordComponent,
    EmployeeChangePasswordComponent,
    CustomerChangePasswordComponent,
    ForgotPasswordDialogboxComponent,
    LogindialogComponent,
    CustomerAccountRegistrationRequestComponent,
    CustomerCreateAccountDialogboxComponent,
    CustomerMobileNumberUpdateComponent,
    CustomerMobileNumberRequestApproveComponent,
    TestingComponentComponent,
    AccountinfoComponent,
    ChangePasswordDialogComponent,
    ForgotPasswordDialogComponent,
  ],
  entryComponents: [DialogboxComponent, ChangePasswordDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    NgxCaptchaModule,
    NgxSpinnerModule,
    AppRoutingModule,
    MatPaginatorModule,
    CarouselModule,
    MatTableModule,
    BrowserAnimationsModule,
    ChartsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
