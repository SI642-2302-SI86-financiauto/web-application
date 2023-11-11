import { Injectable } from '@angular/core';
import {BaseService} from "../shared/services/base.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from '../security/model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/user/update';

  constructor(private http: HttpClient) {}

  updatePassword(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl, userData, { headers });
  }
}
