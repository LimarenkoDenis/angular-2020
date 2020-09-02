import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ICategory } from './../models/ICategory';
import { IHotel } from './../models/IHotel';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  private baseUrl: string = 'http://localhost:3000/';
  public constructor(private client: HttpClient ) { }

  public categoryList(): Observable<ICategory<IHotel>[]> {
    return this.client.get<ICategory<IHotel>[]>(`${this.baseUrl}data`).pipe(delay(1000));
  }
}
