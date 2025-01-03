import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { conactent } from '../../../shred/constant/constatent';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  products(): Observable<any> {
    return this._httpClient.get(`${conactent.baseUrl}/api/v1/products`);
  }
  productsdetails(id: string): Observable<any> {
    return this._httpClient.get(`${conactent.baseUrl}/api/v1/products/${id}`);
  }
}
