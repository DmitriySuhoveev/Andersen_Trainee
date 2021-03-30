import { SignUpComponent } from './signUp/signUp.component';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './signIn/signIn.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const childrenRoutes: Routes = [
  {path: 'authorization', component: SignInComponent},
  {path: 'registration', component: SignUpComponent}
];

const mainRoutes: Routes = [
  {path: '', component: AuthComponent, children: childrenRoutes}
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class AuthorizationRoutingModule { }
