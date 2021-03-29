import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './modules/auth-module/services/auth.service';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

constructor(public authService: AuthService) { }

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.getJwtToken()) {
    request = this.addToken(request, this.authService.getJwtToken());
    }

    return next.handle(request).pipe(catchError(error => {
    if (error instanceof HttpErrorResponse && error.status === 401) {
        return throwError(error);
    } else {
        return throwError(error);
    }
    }));
}

private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
    setHeaders: {
        Authorization: `Bearer ${token}`
    }
    });
}
}
