import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { error } from 'console';
import { ToastRef, ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const erroInterceptor: HttpInterceptorFn = (req, next) => {
  let toster = inject(ToastrService);

  return next(req).pipe(
    catchError((err: any) => {
      toster.error(err.error.message);
      return throwError(err);
    })
  );
};
