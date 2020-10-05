import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  massage: string;
  Error: true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]],
      acceptTandC: [false, Validators.requiredTrue],
    });
  }

  get h() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    var login = this.loginForm.value;
    this.login(login);
  }
  login(user: User) {
    this.userService.loginuser(user).subscribe((user) => {
      var succ = user;
      if (succ) {
        // this.loginForm.reset();
        localStorage.setItem('user', JSON.stringify(succ));
        this.router.navigate(['/home']);
        console.log('user');
      } else {
        this.Error = true;
        this.massage = 'User ID/password Wrong';
      }
    });
  }
}
