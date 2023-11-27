import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {CurrentWeatherModel} from "../shared/models/current-weather";

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  api = environment.API + '/current.json';

  constructor(private http: HttpClient) {
  }

  getCurrent(q: string): Observable<CurrentWeatherModel> {
    return this.http.get<CurrentWeatherModel>(this.api, {params: {q}});
  }
}
