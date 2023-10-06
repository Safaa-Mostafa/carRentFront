import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Search } from 'src/app/interfaces/search';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries:any =[]
  cities:any=[]
  search:Search={
    startDate:"",
    endDate:"",
    country:"",
    city:""
  }

  constructor(public global:GlobalService,private router:Router){

      this.global.GetallCountries().subscribe(country=>{
        for(let i = 0;i<30;i++){
        this.countries.push(country.data[i])
      }
      })
this.global.GetallCities().subscribe(city=>{
  for(let j = 0;j<30;j++){
    this.cities.push(city.data[j])

  }
})
}









searchHandle(data:NgForm){
  this.global.search(this.search).subscribe(res=>{

    localStorage.setItem("SearchDetailed",JSON.stringify(res.data))
    this.router.navigateByUrl('/cars')

  },(err)=>{
  },()=>{
  })

  }


  ngOnInit(): void {}
}






