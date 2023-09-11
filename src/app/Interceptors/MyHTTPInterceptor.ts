import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newParams = new HttpParams({fromString: httpRequest.params.toString()});
    newParams = newParams.append('api_key', '80745f3fe1-a28120e409-s0trie');
 
    const requestClone = httpRequest.clone({
      params: newParams
    });
    return next.handle(requestClone);
  }
}