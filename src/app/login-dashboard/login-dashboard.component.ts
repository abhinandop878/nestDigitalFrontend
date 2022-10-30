import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.css']
})
export class LoginDashboardComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  name=localStorage.getItem("Name")
  empId=localStorage.getItem("Id")
  fetchData=()=>{
    let data={
      "empId":this.empId
    }
    this.myapi.searchEmployee(data).subscribe((res)=>{
      this.myData=res
    })
  }
  myData:any=[]
  ngOnInit(): void {
  }

}
