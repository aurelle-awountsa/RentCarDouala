import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');


@Injectable({
  providedIn: 'root'
})

export class InscriptionService {
  http: any;

  constructor(private_http: HttpClient) { }

  inscriptionUser(user: any) {
    return this.http.post('/api/users/signup', user, {headers});
  };

  validationInscription(user:any) {
    return !(!user.lastName || !user.lastName || !user.email || !user.password);
  }
}
