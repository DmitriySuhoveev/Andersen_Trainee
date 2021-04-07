import { AuthService } from '../auth-services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from '../../../handleValidators/handleValidators';
@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.registrationForm = this.formBuilder.group({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), passwordValidator]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  signUp(): void{
    this.authService.logup(this.registrationForm?.value)
    .subscribe(() =>  this.navigateToSignIn()
  );
  }

  navigateToSignIn(): void{
    this.router.navigate(['/auth/authorization']);
  }
}


