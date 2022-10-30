import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-security',
  templateUrl: './search-security.component.html',
  styleUrls: ['./search-security.component.css']
})
export class SearchSecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  securityId=""
  status:boolean=false
  searchSecurityData=()=>{
    let data={
      "securityId":this.securityId
    }
    this.myapi.searchSecurity(data).subscribe((res)=>{
      this.searchData=res
      this.status=true
    })
    this.securityId=""
  }
  searchData:any=[]
  ngOnInit(): void {
  }

}