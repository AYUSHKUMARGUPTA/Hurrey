import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginNewComponent } from './login-new/login-new.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: LoginNewComponent
  // },
  // {
  //   path: "Login",
  //   component: LoginNewComponent
  // },
  {
    path: "Dashboard",
    component: DashboardComponent
  },
  {
    path: "Account",
    component: AccountComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
