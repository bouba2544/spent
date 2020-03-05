import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthHeadersInterceptor implements HttpInterceptor {
   authToken = "51543f1332d18b96b299a8743e33ee8911c99d87";

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('Auth interceptor');
    console.log(request.url,"boubaker");
    const authReq = request.clone({ setHeaders: { Authorization: `Bearer ${this.authToken}` } });
    console.log(authReq,"bouba")
    return next.handle(authReq);
  }
}