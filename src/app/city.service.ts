import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './City';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private url = 'http://localhost:3000/cities';

  constructor(private _httpClient: HttpClient) {}

  getCity(): Observable<City[]> {
    return this._httpClient.get<City[]>(this.url);
  }

  getCityById(id: number): Observable<City> {
    return this._httpClient.get<City>(`${this.url}/${id}`);
  }

  create(city: City): Observable<City> {
    return this._httpClient.post<City>(this.url, city);
  }

  delete(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.url}/${id}`);
  }

  update(city: City): Observable<City> {
    return this._httpClient.put<City>(`${this.url}/${city.id}`, city);
  }
}
