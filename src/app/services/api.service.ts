import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'http://localhost:8080/userManagement-api';

  constructor(private http: HttpClient) { }
  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('ABCD:ABCD'),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.post<any>('http://localhost:8081/' + 'oauth/token', loginPayload, {headers});
  }
  
}
