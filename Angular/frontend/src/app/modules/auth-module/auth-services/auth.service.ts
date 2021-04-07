import { config } from '../../../config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

interface User{
    username: string;
    password: string;
}

interface AccessToken{
    accessToken: string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private readonly JWT_TOKEN = 'JWT_TOKEN';
    constructor(private http: HttpClient, private jwtHelper: JwtHelperService){}

    logup(user: User): Observable<void>{
        return this.http.post<void>(`${config.baseUrl}/auth/signup`, user);
    }

    login(user: User): Observable<AccessToken>{
        return this.http.post<AccessToken>(`${config.baseUrl}/auth/signin`, user)
        .pipe(
            tap((token: AccessToken) => this.storeToken(token.accessToken))
        );
    }

    logout(): void{
        return this.removeToken();
    }
    isLoggedIn(): boolean {
        return !!this.getJwtToken() && !this.jwtHelper.isTokenExpired(this.getJwtToken());
    }

    getJwtToken(): string {
        return localStorage.getItem(this.JWT_TOKEN);
    }

    private storeToken(token: string): void {
        localStorage.setItem(this.JWT_TOKEN, token);
    }

    private removeToken(): void {
        localStorage.removeItem(this.JWT_TOKEN);
    }
    }

