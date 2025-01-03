import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loderInterceptor: HttpInterceptorFn = (req, next) => {
  let lodaer = inject(NgxSpinnerService);
  lodaer.show();
  return next(req).pipe(
    finalize(() => {
      lodaer.hide();
    })
  );
};
