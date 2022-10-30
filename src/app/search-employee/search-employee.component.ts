import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  empId=""
  status:boolean=false
  searchEmployeeData=()=>{
    let data={
      "empId":this.empId
    }
    this.myapi.searchEmployee(data).subscribe((res:any)=>{
      if (res.length>0) {
        this.searchData=res
        this.status=true
      } else {
        alert("Invalid Employee ID !")
        this.status=false
      }
    })
    this.empId=""
  }
  updateSearchData=()=>{
    this.myapi.updateEmployee(this.searchData[0]).subscribe((res)=>{

    })
    alert("Successfully Updated !")
  }
  searchData:any=[]
  ngOnInit(): void {
  }

}
