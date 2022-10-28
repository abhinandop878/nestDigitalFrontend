import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  securityName=""
  securityId=""
  securityPhone=""
  securityDob=""
  securityAddress=""
  securityDoj=""
  securityYOE=""
  securityEmail=""
  securityPassword=""
  cpassword=""
  readAddSecurity=()=>{
    let data={
      "securityName":this.securityName,
      "securityId":this.securityId,
      "securityPhone":this.securityPhone,
      "securityDob":this.securityDob,
      "securityAddress":this.securityAddress,
      "securityDoj":this.securityDoj,
      "securityYOE":this.securityYOE,
      "securityEmail":this.securityEmail,
      "securityPassword":this.securityPassword
    }
    this.myapi.addSecurity(data).subscribe((res)=>{

    })
    alert("Added SuccessFully !")
    this.securityName=""
    this.securityId=""
    this.securityPhone=""
    this.securityDob=""
    this.securityAddress=""
    this.securityDoj=""
    this.securityYOE=""
    this.securityEmail=""
    this.securityPassword=""
    this.cpassword=""
  }
  ngOnInit(): void {
  }

}
