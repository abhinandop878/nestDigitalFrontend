import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-check-in-check-out',
  templateUrl: './view-all-check-in-check-out.component.html',
  styleUrls: ['./view-all-check-in-check-out.component.css']
})
export class ViewAllCheckInCheckOutComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.checkinoutData()
  }
  status:boolean=false
  checkinoutData=()=>{
      this.myapi.viewAllCheckInCheckOut().subscribe((data)=>{
        this.checkData=data
        this.status=true
      })
  }
  checkData:any=[]
  ngOnInit(): void {
  }

}
