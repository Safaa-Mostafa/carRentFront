import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import {NgForm} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  userData={
    name:"",
    email:"",
    password:"",
    ConfirmPassword:""
    }
  constructor(private global : GlobalService ,private router: Router,private toastr:ToastrService) {

  }

  ngOnInit(): void {
  }

  AddUser(data:NgForm){
    this.global.register(this.userData).subscribe(res=>{
      localStorage.setItem("token",res.data.token);
    },(err)=>{
      console.log(err)
      this.toastr.error("Failed",err.error)

    },()=>{
      this.toastr.success("user Added successfully")

this.router.navigateByUrl('/Login')
    })
    }
}
