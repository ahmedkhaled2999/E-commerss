import { FlowbitService } from './shred/sevices/flowbit/flowbit.service';
import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shred/layout/navbar/navbar.component';
import { FooterComponent } from './shred/layout/footer/footer.component';
import { initFlowbite } from 'flowbite';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CartapiService } from './core/services/cart/cartapi.service';
import { isPlatformBrowser } from '@angular/common';
import { platform } from 'os';
import { WhishlistService } from './shred/sevices/whish/whishlist.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'E-commers';
  constructor(
    private _flowbitService: FlowbitService,
    private _cartapiService: CartapiService,
    @Inject(PLATFORM_ID) private _platform: object,
    private _whishlistService: WhishlistService
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this._platform)) {
      if (localStorage.getItem('usertoken')) {
        this.getcartNumber();
        this.getwhishnumber();
      }
    }

    this._flowbitService.loadFlowbite((flowbite) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });

  }

  getcartNumber() {
    this._cartapiService.getcartinfo().subscribe({
      next: (res) => {},
    });
  }
  getwhishnumber() {
    this._whishlistService.getallwhishlist().subscribe({ next: (res) => {} });
  }
}
