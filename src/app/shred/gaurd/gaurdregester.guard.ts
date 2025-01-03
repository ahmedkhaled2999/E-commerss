import { platform } from 'node:os';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const gaurdregesterGuard: CanActivateFn = (route, state) => {
  let platform = inject(PLATFORM_ID);
  let _reoute = inject(Router);

  if (isPlatformBrowser(platform)) {
    if (localStorage.getItem('usertoken') == null) {
      return true;
    } else {
      _reoute.navigate(['/notfound']);
      return false;
    }
  } else {
    return false;
  }
};
