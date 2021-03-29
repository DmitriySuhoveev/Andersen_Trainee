import { User } from '../../../user';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  user: User = new User();
  receivedUser: User;
  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), passwordNumberValidator, passwordUpperValidator]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }
  get f(): any {return this.registrationForm.controls;
  }

  signUp(){
    this.authService.logup(
      {
        username: this.f.username.value,
        password: this.f.password.value
      }
    )
    .subscribe((data: User) => {this.receivedUser = data;}
    ), (error: any) => console.log(error);
  }

  signIn(){
    this.router.navigate(['/auth/authorization']);
  }
}

function passwordNumberValidator(passwordControl: FormControl){
  let hasNumber = /\d/.test(passwordControl.value);
  if (!hasNumber){
    return {message: 'В пароле должны присутствовать цифры'};
  }
  return null;
}

function passwordUpperValidator(passwordControl: FormControl){
  let hasUpper = /[A-Z]/.test(passwordControl.value);
  if (!hasUpper){
    return {message: 'В пароле должна быть хотя бы одна заглавная буква'};
  }
  return null;
}
