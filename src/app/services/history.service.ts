import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  api = environment.API + '/history.json';

  constructor(private http: HttpClient) { }
}
