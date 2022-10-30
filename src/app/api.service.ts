import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  employeeLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/employeeLogin",data)
  }
  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addEmployee",data)
  }
  addSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/addSecurity",data)
  }
  viewAllEmployees=()=>{
    return this.http.get("http://localhost:8080/viewEmployees")
  }
  deleteEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee",data)
  }
  viewAllSecurity=()=>{
    return this.http.get("http://localhost:8080/viewAllSecurity")
  }
  searchEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/searchEmployee",data)
  }
  updateEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/updateEmployee",data)
  }
  searchSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/viewSecurity",data)
  }
}
