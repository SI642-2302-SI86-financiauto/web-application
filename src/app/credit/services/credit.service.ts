import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Credit} from "../model/credit";
import {Observable, tap} from "rxjs";
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class CreditService extends BaseService<Credit>{

  endPoint = '/credit';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }

  createCredit(credit: Credit): Observable<Credit>{
    const createCreditUrl = `${this.basePath}/create`;
    const userId = localStorage.getItem('userId');


    if (!userId) {
      throw new Error(' No se encontró el usuario registrado en el localStorage.');
    }

    return this.http.post<Credit>(createCreditUrl, credit )

  }


}
