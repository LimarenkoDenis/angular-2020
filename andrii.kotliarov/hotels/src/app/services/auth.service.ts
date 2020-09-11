import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { IUserData } from '@app/models/IUserData';
import { isDefined } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = 'http://localhost:3000/';
  private readonly key: string = 'loggedInKey';
  private httpClient: HttpClient;

  public constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  public logIn(data: IUserData): void {
    this.httpClient.post(`${this.baseUrl}users`, data)
    .pipe(map((user: IUserData) =>
     isDefined(user) && user !== null))
     .subscribe((isLoggedIn: boolean) => {
        localStorage.setItem(this.key, `${isLoggedIn}`);
      });
  }

  public logOut(): void {
    localStorage.setItem(this.key, 'false');
  }

  public get isLoggedIn(): boolean {
    return localStorage.getItem(this.key) === 'true';
  }
}
