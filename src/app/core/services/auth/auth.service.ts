import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Fromdatregester,
  signtinter,
} from '../../../shred/interfacess/fromdatregester';
import { jwtDecode } from 'jwt-decode';

import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _http: HttpClient,
    @Inject(PLATFORM_ID) private platform: object
  ) {
    if (isPlatformBrowser(platform)) {
      if (localStorage.getItem('usertoken')) {
        this.userinfo();
      }
    }
  }

  // sign up
  register(formdata: Fromdatregester): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      formdata
    );
  }
  // log in
  signIN(formdata: signtinter): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      formdata
    );
  }

  userdata: BehaviorSubject<any> = new BehaviorSubject(null);
  // info
  userinfo() {
    let decoded = jwtDecode(
      <string>JSON.stringify(localStorage.getItem('usertoken'))
    );
    this.userdata.next(decoded);
  }

  verfyEmail(eimal: any): Observable<any> {
    return this._http.post(
      `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
      eimal
    );
  }
  verfycode(resetCode: any): Observable<any> {
    return this._http.post(
      `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
      resetCode
    );
  }
  verfyubdate(date: any): Observable<any> {
    return this._http.put(
      `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
      date
    );
  }
}
