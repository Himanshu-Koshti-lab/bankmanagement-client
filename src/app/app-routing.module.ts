import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SampleComponent } from './components/sample/sample.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  //Himanshu Edit Start
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'forgot_password',component:ForgotpasswordComponent},
  {path:'Admin',component:AdminDashboardComponent},
  //End
  {path:'register',component:RegistrationComponent},
  {path:'sample', component:SampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
