import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewdelete-employee',
  templateUrl: './viewdelete-employee.component.html',
  styleUrls: ['./viewdelete-employee.component.css']
})
export class ViewdeleteEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
  status:boolean=false
  fetchData=()=>{
    this.myapi.viewAllEmployees().subscribe((data)=>{
      this.employeeData=data
      this.status=true
    })
  }
  deleteEmployee=(empId:any)=>{
    let data={
      "empId":empId
    }
    this.myapi.deleteEmployee(data).subscribe((res)=>{
    })
    alert("Deleted Successfully !")
    this.fetchData()
  }
  employeeData:any=[]
  ngOnInit(): void {
  }

}
