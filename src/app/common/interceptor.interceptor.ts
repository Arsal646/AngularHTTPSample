import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  userToken='Token 3c3d07949ba833e76120d51fedbffb6af0195e2c'


  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   request = request.clone({
  //     setHeaders: {
  //         Authorization: `Token ${this.userToken}`
  //     }
  // });
  request=request.clone({
    setHeaders:{
      'Authorization':this.userToken
    }
  })
    return next.handle(request);
  }
}
