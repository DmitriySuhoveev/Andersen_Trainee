import { config } from './config';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthModuleModule } from './modules/auth-module/auth.module';
import { AuthService } from './modules/auth-module/services/auth.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


export function tokenGetter(): any {
  return localStorage.getItem('JWT_TOKEN');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    RouterModule,
    AuthModuleModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [`${config.baseUrl}`]
      }
    })
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
