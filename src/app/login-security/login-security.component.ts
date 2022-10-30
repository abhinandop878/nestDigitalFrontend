import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-security',
  templateUrl: './login-security.component.html',
  styleUrls: ['./login-security.component.css']
})
export class LoginSecurityComponent implements OnInit {

  constructor(private myapi:ApiService,private myrouter:Router) { }
  securityEmail=""
  securityPassword=""
  readSecurityLogin=()=>{
    let data={
      "securityEmail":this.securityEmail,
      "securityPassword":this.securityPassword
    }
    this.myapi.securityLogin(data).subscribe((res:any)=>{
      if (res.length>0) {
        localStorage.setItem("securityID",res[0].securityId)
        localStorage.setItem("securityName",res[0].securityName)
        alert("Login Successfully")
        this.myrouter.navigate(["/securityProfile"])
      } else {
        alert("Invalid EmailID or Password !")
      }
      this.securityEmail=""
      this.securityPassword=""
    })

  }
  ngOnInit(): void {
  }

}
