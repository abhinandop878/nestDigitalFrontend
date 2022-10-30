import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.securityProfile()
   }
  securityName=localStorage.getItem("securityName")
  securityId=localStorage.getItem("securityID")
  securityProfile=()=>{
    let data={
      "securityId":this.securityId
    }
    this.myapi.searchSecurity(data).subscribe((res)=>{
      this.myData=res
    })
  }
  myData:any=[]
  ngOnInit(): void {
  }

}
