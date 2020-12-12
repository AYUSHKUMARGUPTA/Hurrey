import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './common/navbar/navbar/navbar.component';
import { SidebarDirective } from './sidebar.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountComponent,
    LoginComponent,
    SidebarDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
