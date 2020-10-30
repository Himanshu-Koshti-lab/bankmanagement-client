import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FooterComponent } from './components/footer/footer.component';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminnavbarComponent } from './components/navbar/AdminNavbar/adminnavbar/adminnavbar.component';
import { SampleComponent } from './components/sample/sample.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { AccountDetailsComponent } from './components/admin/customer/account-details/account-details.component';
import { CustomerDetailsComponent } from './components/admin/customer/customer-details/customer-details.component';
import { AccountStatementComponent } from './components/admin/customer/account-statement/account-statement.component';
import { EmployeeDetailsComponent } from './components/admin/employee/employee-details/employee-details.component';


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
  ],
  entryComponents:[DialogboxComponent],
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
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
