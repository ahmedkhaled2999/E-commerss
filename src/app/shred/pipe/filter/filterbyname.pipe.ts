import { Product } from './../../interfacess/products/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbyname',
  standalone: true,
})
export class FilterbynamePipe implements PipeTransform {
  transform(Product: Product[], searchkey: string): Product[] {
    return Product.filter((ele) =>
      ele.title.toLowerCase().includes(searchkey.toLowerCase())
    );
  }
}
