import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'firstname': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'lastname': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8), passwordNumberValidator, passwordUpperValidator]),
      'confirmPassword': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
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
    return {message: 'В пароле должны быть хотя бы одна заглавная буква'};
  }
  return null;
}
