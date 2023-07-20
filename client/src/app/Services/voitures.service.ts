import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoituresService {

  constructor(private http: HttpClient) {}
  getAllcars(): any {
    return this.http.get("/api/voitures/getallcars");
  }
}
