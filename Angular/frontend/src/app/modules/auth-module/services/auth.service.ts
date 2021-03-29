import { config } from '../../../../../config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

interface User{
    username: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private readonly JWT_TOKEN = 'JWT_TOKEN';
    constructor(private http: HttpClient, private jwtHelper: JwtHelperService){}

    logup(user: User): Observable<any>{
        return this.http.post(`${config.apiUrl}/auth/signup`, user);
    }

    login(user: User): Observable<any>{
        return this.http.post<any>(`${config.apiUrl}/auth/signin`, user)
        .pipe(
            tap((token: {accessToken: string}) => this.storeToken(token.accessToken)),
            catchError(error =>
                {
                alert(error.error);
                return of(false);
            })
        );
    }

    tokenCheck(){
        if (this.jwtHelper.isTokenExpired(this.getJwtToken())){
            return false;
        } else{
            return true;
        }
    }

    logout(){
        return this.removeToken();
    }
    isLoggedIn() {
        return !!this.getJwtToken();
    }

    verifyJWT(){
        const jwt = localStorage.getItem(this.JWT_TOKEN);
        console.log(jwt);
    }

    getJwtToken() {
        return localStorage.getItem(this.JWT_TOKEN);
    }

    private storeToken(token: string) {
        localStorage.setItem(this.JWT_TOKEN, token);
    }

    private removeToken() {
        localStorage.removeItem(this.JWT_TOKEN);
    }
    }

