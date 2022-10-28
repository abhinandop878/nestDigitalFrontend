import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-security',
  templateUrl: './view-security.component.html',
  styleUrls: ['./view-security.component.css']
})
export class ViewSecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  status:boolean=false
  fetchData=()=>{
    this.myapi.viewAllSecurity().subscribe((data)=>{
      this.securityData=data
      this.status=true
    })
  }
  securityData:any=[]
  ngOnInit(): void {
  }

}
