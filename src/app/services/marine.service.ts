import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MarineService {

  api = environment.API + '/marine.json';

  constructor(private http: HttpClient) { }
}
