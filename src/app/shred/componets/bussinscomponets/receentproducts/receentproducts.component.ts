import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../../core/services/productsapi/products.service';
import { Product } from '../../../interfacess/products/product';
import { ProducitemComponent } from '../../ui/producitem/producitem.component';
import { CartapiService } from '../../../../core/services/cart/cartapi.service';
import { FilterbynamePipe } from '../../../pipe/filter/filterbyname.pipe';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WhishlistComponent } from '../../../../pages/whishlist/whishlist.component';
import { WhishlistService } from '../../../sevices/whish/whishlist.service';
import { WhishList } from '../../../interfacess/whishlist';

@Component({
  selector: 'app-receentproducts',
  standalone: true,
  imports: [ProducitemComponent, FilterbynamePipe, FormsModule],
  templateUrl: './receentproducts.component.html',
  styleUrl: './receentproducts.component.css',
})
export class ReceentproductsComponent {
  iscallingapi: boolean = false;
  clickedid: string = '';
  searchkey: string = '';
  isred: boolean = false;
  whishclickid: string = '';
  whishListiteam!: string[];

  constructor(
    private _productsService: ProductsService,
    private _cartapiService: CartapiService,
    private _whishlistService: WhishlistService
  ) {}

  prodact!: Product[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productapi();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy()
  }

  productapi() {
    this._productsService.products().subscribe({
      next: (res) => {
        this.prodact = res.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  toster = inject(ToastrService);
  addcart(id: string) {
    this.iscallingapi = true;
    this.clickedid = id;

    this._cartapiService.getcart(id).subscribe({
      next: (res) => {
        this.iscallingapi = false;
        this._cartapiService.numberofcartIitem.next(res.numOfCartItems);
        this.toster.success(res.message);
      },
    });
  }

destroy(){
this._productsService.products().subscribe().unsubscribe()
console.log('destroy')
}



  addwhishitem(idWHICH: string) {
    this.whishclickid = idWHICH;
    this._whishlistService.addwhish(idWHICH).subscribe({
      next: (res) => {
        this.isred = true;
        this.whishListiteam = res.data;
        console.log(this.whishListiteam.length);
        this._whishlistService.countwhish.next(this.whishListiteam.length);
      },
    });
  }
}
