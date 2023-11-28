import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Astronomy} from "../shared/models/astronomy";

@Injectable({
  providedIn: 'root'
})
export class AstronomyService {

  api = environment.API + '/astronomy.json';

  constructor(private http: HttpClient) { }

  getAstronomy(q: string) {
    return this.http.get<Astronomy>(this.api, {params: {q}});
  }
}
