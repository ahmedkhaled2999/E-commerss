import { platform } from 'node:os';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { conactent } from '../../../shred/constant/constatent';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartapiService {
  private cartapi: string = 'api/v1/cart';
  numberofcartIitem: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    private _httpClient: HttpClient,
    @Inject(PLATFORM_ID) private _platform: object
  ) {
    if (isPlatformBrowser(_platform)) {
      this.getcartinfo().subscribe({
        next: (res) => {
          this.numberofcartIitem.next(res.numOfCartItems);
        },
      });
    }
  }

  getcart(productId: string): Observable<any> {
    return this._httpClient.post(`${conactent.baseUrl}/${this.cartapi}`, {
      productId,
    });
  }

  getcartinfo(): Observable<any> {
    return this._httpClient.get(`${conactent.baseUrl}/${this.cartapi}`);
  }

  deletespaecific(id: string): Observable<any> {
    return this._httpClient.delete(
      `${conactent.baseUrl}/${this.cartapi}/${id}`
    );
  }

  cartplus(id: string, count: string): Observable<any> {
    return this._httpClient.put(`${conactent.baseUrl}/${this.cartapi}/${id}`, {
      count,
    });
  }

  Clearcart(): Observable<any> {
    return this._httpClient.delete(`${conactent.baseUrl}/${this.cartapi}`);
  }
}
