import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
carId:any
car:any={}
userData:any={}
user:any={}
token:any={}
  constructor(public global:GlobalService,private activated: ActivatedRoute,private toastr: ToastrService) {

    this.carId = this.activated.snapshot.paramMap.get("id")

    this.global.SingleCar(this.carId).subscribe(res=>{
      this.car = res.data
      if(this.car.airConditioner ) this.car.airConditioner="airConditioner"

      this.global.GetUser(this.car.userId).subscribe(res=>{
       this.userData=res.data
      })
    })

}
  ngOnInit(): void {

    this.token = localStorage.getItem("token");
  }
    orderData(){
      this.user = localStorage.getItem("userName")
    this.user = JSON.parse(this.user)
    let d=confirm("You are sure you want to rent")
    if(d){
    this.global.order(this.user.userData._id,this.car).subscribe(res=>{
       this.toastr.success("Rental car success")
     },()=>{
    this.toastr.warning("failed")
     })

     }
    }
  }


