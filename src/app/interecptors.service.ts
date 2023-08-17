import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class InterecptorsService implements HttpInterceptor {
  constructor() {}
  abc!: any;
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Ineterceptor');
    const local = localStorage.getItem('userDetails');
    const modifiedreq = request.clone({
      headers: request.headers.set('authorization', 'Bearer ' + local),
    });
    // console.log(modifiedreq);
    return next.handle(modifiedreq);
  }
}
