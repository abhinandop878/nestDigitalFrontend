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
  searchEmployeeData=()=>{
    let data={
      "empId":this.empId
    }
    this.myapi.searchEmployee(data).subscribe((res)=>{
      this.searchData=res
    })
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
