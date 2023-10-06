import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
import { Search } from 'src/app/interfaces/search';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-getcategories',
  templateUrl: './getcategories.component.html',
  styleUrls: ['./getcategories.component.css']
})
export class GetcategoriesComponent implements OnInit {
  Brands:any=[]
  cars:any=[]
  dj:any=[]
  data:Boolean=true

  constructor(public global:GlobalService,private activated: ActivatedRoute,private router:Router) {
    this.dj = localStorage.getItem("SearchDetailed")
    this.cars=JSON.parse(this.dj)

    if(this.cars.length > 1 && this.cars.length == 1){
      this.data=true

    }else if(this.cars.length == 0){
      this.data=false
    }

    this.global.getAllCategories().subscribe(res=>{
      for(let i=5;i<10;i++){
     this.Brands.push(res.data[i])
}
    })




  }

  ngOnInit(): void {


  }
}
