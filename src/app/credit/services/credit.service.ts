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

  /*getAllCredits(): Observable<any> {
    return this.http.get( `${this.basePath}`);
  }*/


  /*getMyLastCredit(): number {
    const getAllCreditUrl = `${this.basePath}`;
    const userId = localStorage.getItem('userId');

    if (!userId) {
      throw new Error(' No se encontró el usuario registrado en el localStorage.');
    }

     creditsList: Credit[] = [];

    const myCredits: Credit[] = [];
    this.http.get(getAllCreditUrl).subscribe((response: any) =>{
      this.creditsList = response;

    })
  }

    // Suponiendo que la respuesta es un arreglo de objetos de crédito, puedes asignarla directamente a tu lista de créditos




    return 0;
  }*/


}
