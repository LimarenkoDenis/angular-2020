import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { IUserData } from '@app/models/IUserData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = 'http://localhost:3000/';
  private httpClient: HttpClient;

  public constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  public register(data: IUserData): Observable<boolean> {
    this.httpClient.post(`${this.baseUrl}users`, data).subscribe((user: IUserData) => {
      console.log(user);
    });

    return of(true);
  }

}
