import { Component, Input } from '@angular/core';
import { BrandsService } from '../../../../shred/sevices/brands/brands.service';
import { Brands } from '../../../../shred/interfacess/brands/brands';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-branditem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './branditem.component.html',
  styleUrl: './branditem.component.css',
})
export class BranditemComponent {


  @Input() allbran!:Brands
}
