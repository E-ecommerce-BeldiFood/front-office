import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve access token from local storage
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    // Add the access token to the request headers if it exists
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${JSON.parse(accessToken)}`
        }
      });
    }

    return next.handle(request);
  }
}
