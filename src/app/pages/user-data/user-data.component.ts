import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
Data:any={}
order:any=[]
total:any=0
el:any
constructor(public global:GlobalService) {
    this.global.authMe().subscribe(res=>{
      this.Data=res.data
      this.order=this.Data.orders
      for(let i=0;i<this.order.length;i++){
        this.total += this.order[i].dailyRentalRate
      }
    })



  }

  ngOnInit(): void {
  }

}
