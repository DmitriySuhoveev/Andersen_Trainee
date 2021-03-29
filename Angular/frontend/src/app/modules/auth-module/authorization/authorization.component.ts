import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  authorizationForm: FormGroup;
  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.authorizationForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required])
    });
  }

  redirectToSignUp(){
    this.router.navigate(['/auth/registration']);
  }

  get f(): any {return this.authorizationForm.controls;
  }

  signIn(){
    this.authService.login(
      {
        username: this.f.username.value,
        password: this.f.password.value
      }
    )
    .subscribe(success => {
      if (success){
        this.router.navigate(['/dashboard']);
      }
    });
  }
}


