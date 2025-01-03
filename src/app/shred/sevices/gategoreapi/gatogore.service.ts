import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { conactent } from "../../constant/constatent";
import { Gatogrei } from "../../interfacess/gatores/gatogrei";

@Injectable({
    providedIn: "root",
})
export class GatogoreService {


  
    constructor(private _httpClient: HttpClient) {}

    getgatogre(): Observable<any> {
        return this._httpClient.get(`${conactent.baseUrl}/api/v1/categories`);
    }

    specifiecgate(id: string): Observable<any> {
        return this._httpClient.get(
            `${conactent.baseUrl}/api/v1/categories/${id}`
        );
    }
}
