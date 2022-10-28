import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewdeleteEmployeeComponent } from './viewdelete-employee/viewdelete-employee.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
const appRoutes:Routes=[
  {
    path:"",component:EmployeeLoginComponent
  },
  {
    path:"adminLogin",component:AdminLoginComponent
  },
  {
    path:"adminDashboard",component:AdminDashboardComponent
  },
  {
    path:"addsecurity",component:AddSecurityComponent
  },
  {
    path:"viewEmployee",component:ViewdeleteEmployeeComponent
  },
  {
    path:"viewSecurity",component:ViewSecurityComponent
  },
  {
    path:"searchEmployee",component:SearchEmployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    NavbarComponent,
    AddSecurityComponent,
    ViewdeleteEmployeeComponent,
    ViewSecurityComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
