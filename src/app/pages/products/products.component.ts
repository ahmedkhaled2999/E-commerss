import { Component } from '@angular/core';
import { ReceentproductsComponent } from "../../shred/componets/bussinscomponets/receentproducts/receentproducts.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ReceentproductsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
