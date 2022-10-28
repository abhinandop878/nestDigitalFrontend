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
}
