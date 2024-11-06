import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '88143fe28e1b81be893f916218d61228';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
