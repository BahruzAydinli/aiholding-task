import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const language = sessionStorage.getItem('locale');
    const token = localStorage.getItem('access_token');

    if (language) {
      let obj = {
        Authorization: `Bearer ${token}`,
      };
      obj['accept-language'] = language;
      request = request.clone({
        setHeaders: obj,
      });
    }
    return next.handle(request);
  }
}
