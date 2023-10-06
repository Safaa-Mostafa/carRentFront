import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
cars:any=[]

loadingImg :boolean = true
constructor(public global:GlobalService) {

  this.global.getAllCars().subscribe(res=>{
this.cars = res.data
})
 }

  ngOnInit(): void {

  }

}
