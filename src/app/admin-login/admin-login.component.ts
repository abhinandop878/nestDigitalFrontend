import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private myrouter:Router) { }
  emailId=""
  password=""
  readAdminLogin=()=>{
    let data={
      "emailId":this.emailId,
      "password":this.password
    }
    if (this.emailId=="Admin"&&this.password=="1234") {
      alert("Login Successfully")
      this.myrouter.navigate(["/adminDashboard"])
    } else {
      alert("Invalid emailId or Password")
    }
    this.emailId=""
    this.password=""
  }
  ngOnInit(): void {
  }

}
