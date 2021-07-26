import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { DataStates } from '../interfaces/data';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataCovidService {

  constructor(private http: HttpClient) { }
  getStates() {
    return this.http.get<any>(`${environment.api}`);
  }
}
