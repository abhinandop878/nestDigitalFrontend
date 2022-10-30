import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkout-in-and-out',
  templateUrl: './checkout-in-and-out.component.html',
  styleUrls: ['./checkout-in-and-out.component.css']
})
export class CheckoutInAndOutComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  securityId=localStorage.getItem("securityID")
  entryId=""
  entry_Id=""
  CheckInValidation=()=>{
    let data={
      "empId":this.entryId
    }
    this.myapi.searchEmployee(data).subscribe((response:any)=>{
      if (response.length>0) {
        this.checkInData()
      } else {
        alert("Invalid "+this.entryId+" Employee ID !")
        this.entryId=""
      }
    })
  }
  CheckOutValidation=()=>{
    let data={
      "entryId":this.entry_Id
    }
    this.myapi.checkoutValidation(data).subscribe((respon:any)=>{
      if (respon.length>0) {
        this.checkOutData()
      } else {
        alert("Invalid "+this.entry_Id+" Employee ID !")
        this.entry_Id=""
      }
    })
  }
  checkInData=()=>{
    let data={
      "security_Id":this.securityId,
      "entryId":this.entryId
    }
    this.myapi.employeeCheckIn(data).subscribe((res)=>{

    })
    alert("Employee ID "+this.entryId+" Successfully CheckIn")
    this.entryId=""
  }
  checkOutData=()=>{
    let data={
      "entryId":this.entry_Id
    }
    this.myapi.employeeCheckOut(data).subscribe((resp)=>{

    })
    alert("Employee ID "+this.entry_Id+" Successfully CheckOut")
    this.entry_Id=""
  }
  ngOnInit(): void {
  }

}
