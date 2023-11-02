import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  protected basePath='http://localhost:8080'


  // Common options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(protected http: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    // @ts-ignore
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  create(item: any): Observable<T> {
    return this.http.post<T>(
      `${this.basePath}`,
      JSON.stringify(item),
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getAll(): Observable<T> {
    return this.http.get<T>(`${this.basePath}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }



}
