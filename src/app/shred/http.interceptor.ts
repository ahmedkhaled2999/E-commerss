import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
   req = req.clone({
     setHeaders: { token: localStorage.getItem('usertoken') || "" },
   });

  return next(req);
};
