import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../modules/auth-module/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router, private jwtHelper: JwtHelperService) { }

    canActivate(): any {
    if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/auth/authorization']);
    }
    return true;
    }
}
