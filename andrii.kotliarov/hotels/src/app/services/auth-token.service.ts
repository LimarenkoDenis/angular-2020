import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { AuthToken } from './../models/AuthToken';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  private readonly baseUrl: string = 'http://localhost:3000/';
  private readonly storeKey: string = 'authToken';
  private httpClient: HttpClient;

  public constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  public getToken(): Observable<AuthToken> {
    const tokenString: string = localStorage.getItem(this.storeKey);
    const token: AuthToken = this.parseToken(tokenString);

    if (this.isTokenValid(token)) {
      return of(token);
    }

    return this.httpClient.get<AuthToken>(`${this.baseUrl}auth`).pipe(
      map((res: AuthToken) => {
        res.expirationDate = new Date(new Date().getTime() + 30 * 60000);
        localStorage.setItem(this.storeKey, JSON.stringify(res));
        return res;
      }));
  }

  private parseToken(tokenString: string): AuthToken {
    const result: AuthToken = tokenString ? JSON.parse(tokenString) : null;
    return result;
  }

  private isTokenValid(token: AuthToken): boolean {
    const isValid: boolean = token !== null && new Date(token.expirationDate) > new Date(new Date().toISOString());
    return isValid;
  }
}
