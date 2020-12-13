import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
// import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './common/navbar/navbar/navbar.component';
import { SidebarDirective } from './sidebar.directive';
import { LoginNewComponent } from './login-new/login-new.component';
import { CustomKendoMultiselectFilterComponent } from './common/custom-kendo-multiselect-filter/custom-kendo-multiselect-filter.component';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { IntlModule } from "@progress/kendo-angular-intl";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import 'hammerjs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import * as $ from "jquery";
import * as bootstrap from "bootstrap";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountComponent,
    // LoginComponent,
    SidebarDirective,
    NavbarComponent,
    LoginNewComponent,
    CustomKendoMultiselectFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GridModule,
    ExcelModule,
    IntlModule,
    DateInputsModule,
    ButtonsModule,
    BrowserAnimationsModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
