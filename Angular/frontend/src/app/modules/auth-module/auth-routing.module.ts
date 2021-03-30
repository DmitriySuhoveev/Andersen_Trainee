import { SignUpComponent } from './signUp/signUp.component';
import { SignInComponent } from './signIn/signIn.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const mainRoutes: Routes = [
  {path: '', redirectTo: 'authorization', pathMatch: 'full'},
  {path: 'authorization', component: SignInComponent},
  {path: 'registration', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class AuthorizationRoutingModule { }
