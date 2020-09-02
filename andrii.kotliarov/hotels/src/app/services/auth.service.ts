import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { AuthToken } from './../models/AuthToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = 'http://localhost:3000/';
  private httpClient: HttpClient;

  public constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  public getToken(): Observable<AuthToken> {
    return this.httpClient.get<AuthToken>(`${this.baseUrl}auth`);
  }
}
