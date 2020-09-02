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
    if (request.headers.has(this.authHeader)) {
      return next.handle(request);
    }

    return this.authService.getToken().pipe(
      flatMap((tk: AuthToken) => {
        request = request.clone({
          setHeaders: { authHeader: tk.token }
        });
        return next.handle(request);
      })
    );
  }
}
