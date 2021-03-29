import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: 'auth', loadChildren: () => import('./modules/auth-module/auth-module.module')
  .then(m => m.AuthModuleModule)},
  {path: 'authorization', loadChildren: () => import ('./modules/auth-module/auth-module.module')
  .then(m => m.AuthModuleModule)},
  {path: 'registration', loadChildren: () => import ('./modules/auth-module/auth-module.module')
  .then(m => m.AuthModuleModule)},
  {path: 'dashboard', loadChildren: () => import ('./dashboard/dashboard.module')
  .then(m => m.DashboardModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
