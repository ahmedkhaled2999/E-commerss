import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CartapiService } from '../../core/services/cart/cartapi.service';
import { Cart } from '../../shred/interfacess/cart/cart';
import { error } from 'console';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartinfo: Cart = {} as Cart;

  mess: string = '';

  route = inject(Router);
  constructor(private _cartapiService: CartapiService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getcartinfo();
  }

  getcartinfo() {
    this._cartapiService.getcartinfo().subscribe({
      next: (res) => {
        console.log(res);

        this.cartinfo = res;
      },
    });
  }

  delete(id: string) {
    console.log(id);
    this._cartapiService.deletespaecific(id).subscribe({
      next: (res) => {
        console.log(res);
        this._cartapiService.numberofcartIitem.next(res.numOfCartItems);

        this.cartinfo = res;
      },
      error: (erroe) => {
        console.log(erroe);
      },
    });
  }

  updateproduct(id: string, count: number) {
    console.log(id, count);
    this._cartapiService.cartplus(id, `${count}`).subscribe({
      next: (res) => {
        console.log(res);
        this._cartapiService.numberofcartIitem.next(res.numOfCartItems);
        this.cartinfo = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  clearallcart() {
    this._cartapiService.Clearcart().subscribe({
      next: (res) => {
        console.log(res);
        this.mess = res.message;
        this._cartapiService.numberofcartIitem.next(res.numOfCartItems);
        this.route.navigate(['/home']);
        // this.cartinfo = res;
      },
    });
  }
}
