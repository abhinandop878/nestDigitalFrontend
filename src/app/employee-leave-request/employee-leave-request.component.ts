import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-leave-request',
  templateUrl: './employee-leave-request.component.html',
  styleUrls: ['./employee-leave-request.component.css']
})
export class EmployeeLeaveRequestComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  leave_id=localStorage.getItem("Id")
  leaveType=""
  reason=""
  startDate=""
  duration=""
  endDate=""
  readLeaveRequest=()=>{
    let data={
      "leave_id":this.leave_id,
      "leaveType":this.leaveType,
      "reason":this.reason,
      "startDate":this.startDate,
      "duration":this.duration,
      "endDate":this.endDate
    }
    this.myapi.employeeLeaveRequest(data).subscribe((res)=>{

    })
    alert("Leave Request has Applied")
    this.duration=""
    this.reason=""
    this.endDate=""
    this.startDate=""
    this.leaveType=""
  }
  ngOnInit(): void {
  }

}
