import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post('/api/users/signup', user, {headers});
  };

  
}
