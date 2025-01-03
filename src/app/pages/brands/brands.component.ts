import { Component } from '@angular/core';
import { BrandsService } from '../../shred/sevices/brands/brands.service';
import { resolve } from 'dns/promises';
import { ReceentproductsComponent } from "../../shred/componets/bussinscomponets/receentproducts/receentproducts.component";
import { RecentbrandComponent } from "./recentbrand/recentbrand.component";

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [ RecentbrandComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {




}
