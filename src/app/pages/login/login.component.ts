import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Login: any = {
    email: '',
    password: '',
  };
  constructor(
    private global: GlobalService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}
  LoginHandle(data: NgForm) {
    this.global.Login(this.Login).subscribe(
      (res) => {
        if (res.apiStatus) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userName', JSON.stringify(res.data));
          this.global.loginFlag = true;
          this.toastr.success('You are Logged In', 'LoggedIn');
            this.router.navigateByUrl('');
        }
      },
      () => {
        this.toastr.error('email or password is wrong');
      }
    );
  }
}
