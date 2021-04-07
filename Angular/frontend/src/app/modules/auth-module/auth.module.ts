import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth-services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signIn/signIn.component';
import { SignUpComponent } from './signUp/signUp.component';
import { AuthorizationRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule
  ],
  providers: [AuthService]
})
export class AuthModuleModule { }
