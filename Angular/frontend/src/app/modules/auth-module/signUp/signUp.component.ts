import { HandleValidators } from './../../../handleValidators/handleValidators';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private authService: AuthService, private router: Router,
              private formBuilder: FormBuilder, private handleValidators: HandleValidators){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.registrationForm = this.formBuilder.group({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8), this.handleValidators.passwordValidator])
    });
  }

  signUp(): void{
    this.authService.logup(
      {
        username: this.registrationForm.controls.username.value,
        password: this.registrationForm.controls.password.value
      }
    )
    .subscribe(() => { this.navigateTosignIn();
    }
    );
  }

  navigateTosignIn(): void{
    this.router.navigate(['/auth/authorization']);
  }
}


