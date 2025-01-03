import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const gurdcomponetsGuard: CanActivateFn = (route, state) => {


let platform = inject(PLATFORM_ID);
 let _reoute= inject(Router)
if(isPlatformBrowser(platform)){
  if(localStorage.getItem('usertoken')){
   return true
  }else{
   _reoute.navigate(['/login'])
   return false
 }
}else{
  return false
}


};
