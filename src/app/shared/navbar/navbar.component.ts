import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userInfo:any={}
  d:any=""
  constructor(public global :GlobalService,private router:Router) {
    let token =localStorage.getItem('token')
    if(token){
      this.global.loginFlag=true
      this.d= localStorage.getItem("userName")
   this.userInfo=JSON.parse(this.d)
this.userInfo=this.userInfo.userData
  }
}

ngOnInit(): void {
}
  handleLogout(){
    this.global.loginFlag=false
    this.global.Logout().subscribe(data=>{
      localStorage.removeItem('token')
      localStorage.removeItem('userName')
      this.router.navigateByUrl("Login")

    })

  }

}

