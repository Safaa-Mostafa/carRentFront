import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {

    }
  title = 'project';
  constructor(public global:GlobalService){
    let token = localStorage.getItem('token')
    if(token) this.global.navbarFlag=true
this.global.navbarFlag =true
this.global.authMe().subscribe(data=>{
  this.global.userInfo = data
})
  }
}

