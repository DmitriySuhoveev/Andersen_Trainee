import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorizationComponent} from './authorization/authorization.component';
import {RegistrationComponent} from './registration/registration.component';
import { AuthorizationRoutingModule } from './auth-module-routing.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [AuthorizationComponent, RegistrationComponent, AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule
  ],
  providers: [AuthService]
})
export class AuthModuleModule { }
