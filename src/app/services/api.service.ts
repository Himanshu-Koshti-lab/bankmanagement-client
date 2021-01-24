import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  static getToken(): any {
    throw new Error('Method not implemented.');
  }
  baseUrl: string = 'http://localhost:8080/userManagement-api';

  constructor(private http: HttpClient) {}
  login(loginPayload) {
    const headers = {
      Authorization:
        'Basic ' + btoa(environment.clientId + ':' + environment.clientSecret),
      'Content-type': 'application/x-www-form-urlencoded',
    };
    return this.http.post<any>(
      environment.USER_API + '/oauth/token',
      loginPayload,
      { headers }
    );
  }

  getToken() {
    return sessionStorage.getItem('token');
  }
}
