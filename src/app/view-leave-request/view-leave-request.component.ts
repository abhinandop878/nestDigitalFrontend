import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-leave-request',
  templateUrl: './view-leave-request.component.html',
  styleUrls: ['./view-leave-request.component.css']
})
export class ViewLeaveRequestComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.leaveRequest()
   }
  status:boolean=false
  leave_id=localStorage.getItem("Id")
  leaveRequest=()=>{
    let data={
      "leave_id":this.leave_id
    }
    this.myapi.viewEmployeeLeaveRequest(data).subscribe((res)=>{
      this.leaveData=res
      this.status=true
    })
  }
  leaveData:any=[]
  ngOnInit(): void {
  }

}
