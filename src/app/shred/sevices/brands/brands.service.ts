import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { constants } from "buffer";
import { Observable } from "rxjs";
import { conactent } from "../../constant/constatent";

@Injectable({
    providedIn: "root",
})
export class BrandsService {
    constructor(private _httpClient: HttpClient) {}

    getbrands(): Observable<any> {
        return this._httpClient.get(`${conactent.baseUrl}/api/v1/brands`);
    }

    getbarndid(id: string): Observable<any> {
        return this._httpClient.get(`${conactent.baseUrl}/api/v1/brands/${id}`);
    }
}
