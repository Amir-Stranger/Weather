import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FutureService {

  api = environment.API + '/future.json';

  constructor(private http: HttpClient) { }
}
