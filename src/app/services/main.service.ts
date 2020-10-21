import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../classes/user/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  registerUserFromRemote(user: User):Observable<any> {
    return this._http.post<any>("http://localhost:8080/register",user);
  }
  constructor(private _http:HttpClient) { }
}