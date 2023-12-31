import { Injectable } from '@angular/core';
import {Observable, of, tap} from 'rxjs';
import { BaseService } from '../shared/services/base.service';
import { User } from '../security/model/user';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<User>{

  endPoint = '/user';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }


  private users: any[] = [
    { username: 'usuario1', password: 'contrasena1' },
    { username: 'usuario2', password: 'contrasena2' }
  ];

  // Método para autenticar al usuario
  login(username: string, password: string): Observable<any> {
    const authenticatedUser = this.users.find(user => user.username === username && user.password === password);
    if (authenticatedUser) {
      // Simular un retraso para mostrar la autenticación exitosa
      return of([authenticatedUser]);
    } else {
      // El usuario no fue autenticado
      return of([]);
    }
  }

  getAllUsers(): Observable<any> {
    return this.http.get( `${this.basePath}`);
  }

}
