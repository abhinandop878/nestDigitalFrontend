import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  empId=""
  name=""
  place=""
  bloodGroup=""
  desigination=""
  companyEmail=""
  dob=""
  companyAddress=""
  gender=""
  password=""
  cpassword=""
  readAddEmployee=()=>{
    let data={
      "empId":this.empId,
      "name":this.name,
      "place":this.place,
      "bloodGroup":this.bloodGroup,
      "desigination":this.desigination,
      "companyEmail":this.companyEmail,
      "dob":this.dob,
      "companyAddress":this.companyAddress,
      "gender":this.gender,
      "password":this.password
    }
    this.myapi.addEmployee(data).subscribe((res)=>{

    })
    alert("Added Successfully !")
    this.empId=""
    this.name=""
    this.place=""
    this.bloodGroup=""
    this.desigination=""
    this.companyEmail=""
    this.dob=""
    this.companyAddress=""
    this.gender=""
    this.password=""
    this.cpassword=""
  }
  ngOnInit(): void {
  }

}
