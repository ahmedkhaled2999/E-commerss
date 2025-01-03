import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from 'buffer';
import { conactent } from '../../constant/constatent';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Oreder } from '../../interfacess/oredri/oreder';

@Injectable({
  providedIn: 'root',
})
export class OrederService {
  constructor(private _httpClient: HttpClient) {}
  private header = {
    token: localStorage.getItem('usertoken') || '',
  };
  getorder(id: string, shippingAddress: Oreder): Observable<any> {
    return this._httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${id}`,
      { shippingAddress },
      {
        headers: this.header,
      }
    );
  }

  getorderuser(id: string): Observable<any> {
    return this._httpClient.get(
      `${conactent.baseUrl}/api/v1/orders/user/${id}`
    );
  }

  checkoutsession(id: string, shippingAddress: Oreder): Observable<any> {
    return this._httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      { shippingAddress },
      { headers: this.header }
    );
  }
}
