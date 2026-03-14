import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Service {

  private baseUrl = 'https://localhost:7159/api'; // మీ API base URL



  constructor(private http: HttpClient) {}
  

  loginApi(username: any, password: any): Observable<any> {
  const body = { username, password }; // JSON object
  return this.http.post(`${this.baseUrl}/Auth/login`, body);
  
   
}
}
