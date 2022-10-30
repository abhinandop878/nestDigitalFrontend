import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private myapi:ApiService,private myrouter:Router) { }
  companyEmail=""
  password=""
  readEmployeeLogin=()=>{
    let data={
      "companyEmail":this.companyEmail,
      "password":this.password
    }
    this.myapi.employeeLogin(data).subscribe((res:any)=>{
      if (res.length>0) {
        localStorage.setItem("Id",res[0].empId)
        localStorage.setItem("Name",res[0].name)
        alert("Login Successfully")
        this.myrouter.navigate(["/employeeDashboard"])
      } else {
        alert("Invalid EmailID or Password !")
      }
    })
    this.companyEmail=""
    this.password=""
  }
  ngOnInit(): void {
  }

}
