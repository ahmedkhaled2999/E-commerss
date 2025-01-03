import { Component } from '@angular/core';
import { ProductsService } from '../../core/services/productsapi/products.service';
import { Product } from '../../shred/interfacess/products/product';
import { ReceentproductsComponent } from '../../shred/componets/bussinscomponets/receentproducts/receentproducts.component';
import { GAtogerresComponent } from './componets/gatogrei/gatogerres/gatogerres.component';
import { MainsliderComponent } from './componets/mainslider/mainslider/mainslider.component';
import { CartapiService } from '../../core/services/cart/cartapi.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReceentproductsComponent, GAtogerresComponent, MainsliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {}
}
