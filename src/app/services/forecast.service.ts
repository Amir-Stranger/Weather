import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ForecastModel} from "../shared/models/forecast";

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  api = environment.API + '/forecast.json';

  constructor(private http: HttpClient) { }

  getForecast(q: string): Observable<ForecastModel> {
    const params = {days : 7, aqi: true, q}
    return this.http.get<ForecastModel>(this.api, {params});
  }
}
