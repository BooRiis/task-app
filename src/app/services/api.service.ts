import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError, map, retry} from 'rxjs/operators'
import {Data} from '../../assets/interface/user-info'



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = '../../assets/data.json'

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Data>(this.url)
  }

  getConfigResponse(): Observable<HttpResponse<Data>> {
    return this.http.get<Data>(this.url, {observe: 'response'});
  }

}
