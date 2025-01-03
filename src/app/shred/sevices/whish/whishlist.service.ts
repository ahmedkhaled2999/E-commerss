import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { constants } from "buffer";
import { BehaviorSubject, Observable } from "rxjs";
import { conactent } from "../../constant/constatent";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
    providedIn: "root",
})
export class WhishlistService {
    countwhish: BehaviorSubject<number> = new BehaviorSubject(0);

    constructor(
        private _httpClient: HttpClient,
        @Inject(PLATFORM_ID) private _platform: object
    ) {
        if (isPlatformBrowser(_platform)) {
            this.getallwhishlist().subscribe({
                next: (res) => {
                    this.countwhish.next(res.count);
                    console.log(this.countwhish);
                },
            });
        }
    }

    addwhish(productId: string): Observable<any> {
        return this._httpClient.post(
            `https://ecommerce.routemisr.com/api/v1/wishlist`,
            { productId }
        );
    }

    deletwhish(id: string) {
        return this._httpClient.delete(
            `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`
        );
    }

    getallwhishlist(): Observable<any> {
        return this._httpClient.get(`${conactent.baseUrl}/api/v1/wishlist`);
    }
}
