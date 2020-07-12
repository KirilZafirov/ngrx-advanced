import { SearchParams } from './../../models/search-params.model';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { NotificationService } from './notification.service';
import { v4 as uuidv4 } from "uuid";

const BASE_URL = "http://localhost:3000/";

// TODO: Add Angular decorator.
@Injectable()
export class BaseApiService<T> implements OnDestroy {

  baseUrl;
  requestMemo = {};

  private webWorker: Worker;

  constructor(protected http: HttpClient , private notificationService: NotificationService) {
    this.baseUrl = BASE_URL;
    //   if (typeof Worker !== 'undefined') {
    //     this.webWorker = new Worker('./cache-worker.worker.ts', { type: 'module' });
    // }

    // this.webWorker.onmessage = ({ data }) => {
    //   this.requestMemo = data;
    // }; 
  }
 
  get(url, searchParams?: SearchParams): Observable<T[]> {
    
    const requestUrl = `${this.baseUrl}${url}`;
    const params = searchParams ? this.getSearchParams(searchParams) : null;
  
    return this.http.get<T[]>(requestUrl , ({ params })).pipe(
      delay(0)
    );
  }

  getById(url, id: string , searchParams?: SearchParams): Observable<T> {
 
    const requestUrl = `${this.baseUrl}${url}/${id}`;
    const params = searchParams ? this.getSearchParams(searchParams) : null;
  
    // const key = this.mapParamsToKey(url, searchParams);
    return this.http.get<T>(requestUrl , ({ params })).pipe(
      delay(0)
    );; 
  }

  save(endPointUrl , requestBody: T){
    // requestBody.id = this.create_UUID();
    const params: T = {
      id: this.create_UUID(),
      ...requestBody
    };

    const requestUrl = `${this.baseUrl}${endPointUrl}/`; 
    return this.http.post(requestUrl , params).pipe(
      tap(() => this.notificationService.success('Saved successfully'))
    );
  }

  update(endPointUrl , id: string, requestBody: T) {
 
    const requestUrl = `${this.baseUrl}${endPointUrl}/${id}`; 
    return this.http.put(requestUrl , requestBody).pipe(
      tap(() => this.notificationService.success('Updated successfully'))
    );
  }
 
  delete(endPointUrl , id: string) {
 
    const requestUrl = `${this.baseUrl}${endPointUrl}/${id}`; 
    return this.http.delete(requestUrl).pipe(
      tap(() => this.notificationService.success('Item removed'))
    );
  }

  mapParamsToKey(url: string , searchParams: SearchParams): string {

    let request = url;

    if(searchParams){
      for(const prop in searchParams) {
        if(searchParams[prop]) { 
          request = `${request}${searchParams[prop]}`;
        }
      }
    }

    return request
  }

  getSearchParams(searchParams: SearchParams): HttpParams {
    let params = new HttpParams();

    for(const prop in searchParams) {
      if(searchParams[prop]) {
        params = params.set(prop, searchParams[prop].toString());
      }
    }

    return params;
  }

  create_UUID(){
    // var dt = new Date().getTime();
    // var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    //     var r = (dt + Math.random()*16)%16 | 0;
    //     dt = Math.floor(dt/16);
    //     return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    // });
    // return uuid;
    return uuidv4();
}

  ngOnDestroy() {
    this.webWorker.terminate();
  }
}
