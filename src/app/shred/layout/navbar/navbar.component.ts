import { signtinter } from './../../interfacess/fromdatregester';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { CartapiService } from '../../../core/services/cart/cartapi.service';
import { isPlatformBrowser } from '@angular/common';
import { WhishlistService } from '../../sevices/whish/whishlist.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  islogin = false;
  cartnumber!: number ;
  wishcartitem!: number;
  constructor(
    private _authService: AuthService,
    private _route: Router,
    private _cartapiService: CartapiService,
    private _whishlistService: WhishlistService
  ) {}

  x = Inject(PLATFORM_ID);
  ngOnInit(): void {
    this._cartapiService.numberofcartIitem.subscribe(() => {
      this.cartnumber = this._cartapiService.numberofcartIitem.getValue();
    });

    this._whishlistService.countwhish.subscribe(() => {
      this.wishcartitem = this._whishlistService.countwhish.getValue();
    });

    this._authService.userdata.subscribe(() => {
      if (this._authService.userdata.getValue() == null) {
        this.islogin = false;
      } else {
        this.islogin = true;
      }
    });
  }

  logOut() {
    localStorage.removeItem('usertoken');
    this._authService.userdata.next(null);
    this._route.navigate(['/login']);
  }
}
