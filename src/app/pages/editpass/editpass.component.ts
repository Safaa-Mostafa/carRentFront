import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpass',
  templateUrl: './editpass.component.html',
  styleUrls: ['./editpass.component.css']
})
export class EditpassComponent implements OnInit {
  edit:any={
    email:"",
  newPass:"",
  oldPass:""
  }
  constructor(public global:GlobalService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  editHandle(data:NgForm){
    if(this.edit.email == "" || this.edit.oldPass == "" || this.edit.newPass == ""){
      alert("email and new and old password is required ")
    }else{
this.global.editPass(this.edit).subscribe(res=>{
this.toastr.success("password update success")
this.router.navigateByUrl('/Login')
console.log(res)
},(error)=>{
this.toastr.error(error.error.message)
this.router.navigateByUrl('/edit')

})}
  }
}
