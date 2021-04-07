import { AuthService } from '../auth-services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css']
})
export class SignInComponent implements OnInit {

  authorizationForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder){ }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.authorizationForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required]]
    });
  }

  redirectToSignUp(): void{
    this.router.navigate(['/auth/registration']);
  }

  signIn(): void{
    this.authService.login(this.authorizationForm.value)
    .subscribe(() => this.router.navigate(['/dashboard'])
    );
  }
}


