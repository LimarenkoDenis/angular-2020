import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AuthToken } from '@app/models/AuthToken';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly authHeader: string = 'auth-token';

  public constructor(private authService: AuthService) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token: string = localStorage.getItem(this.authHeader);

    if (request.headers.has(this.authHeader) || this.isTokenValid(token)) {
      return next.handle(request);
    }

    return this.authService.getToken().pipe(
      flatMap((tk: AuthToken) => {
        request = request.clone({
          setHeaders: { authHeader: tk.token }
        });
        tk.expirationDate = new Date(new Date().getTime() + 30 * 60000);
        localStorage.setItem(this.authHeader, JSON.stringify(tk));
        return next.handle(request);
      })
    );
  }

  private isTokenValid(token: string): boolean {
    const result: AuthToken = JSON.parse(token);
    const isValid: boolean = result !== null && new Date(result.expirationDate) > new Date(new Date().toISOString());
    return isValid;
  }
}
