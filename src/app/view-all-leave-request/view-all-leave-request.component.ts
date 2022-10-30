import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-leave-request',
  templateUrl: './view-all-leave-request.component.html',
  styleUrls: ['./view-all-leave-request.component.css']
})
export class ViewAllLeaveRequestComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  statusL:boolean=false
  fetchData=()=>{
    this.myapi.viewAllLeaveRequest().subscribe((data)=>{
      this.leaveData=data
      this.statusL=true
    })
  }
  rejectLeave=(leave_id:any)=>{
    let data={
      "leave_id":leave_id,
      "status":-1
    }
    this.myapi.updateLeaveStatus(data).subscribe((res)=>{
    })
    alert("Employee ID: "+leave_id+" Leave Request Rejected Successfully !")
  }
  approvedLeave=(leave_id:any)=>{
    let data={
      "leave_id":leave_id,
      "status":1
    }
    this.myapi.updateLeaveStatus(data).subscribe((res)=>{
    })
    alert("Employee ID: "+leave_id+" Leave Request Approved Successfully !")
  }
  leaveData:any=[]
  ngOnInit(): void {
  }

}
