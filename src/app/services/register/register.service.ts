import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { UserNotRegistered } from '../../security/model/user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService<UserNotRegistered>{
  uri = '/user/create';
  uri2 = '/user/update';

  constructor(http: HttpClient) {
    super(http)
  }


  register(user: Object): Observable<HttpResponse<any>> {
    const path = this.basePath + this.uri
    return this.http.post( path, user,{headers:this.httpOptions.headers, observe:'response'})

  }

  update(user: Object): Observable<HttpResponse<any>> {
    const path = this.basePath + this.uri2
    return this.http.post( path, user,{headers:this.httpOptions.headers, observe:'response'})

  }

}
