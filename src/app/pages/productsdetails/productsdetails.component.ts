import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import e from 'express';
import { ProductsService } from '../../core/services/productsapi/products.service';
import { Product } from '../../shred/interfacess/products/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartapiService } from '../../core/services/cart/cartapi.service';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { WhishlistService } from '../../shred/sevices/whish/whishlist.service';
import { WhishList } from '../../shred/interfacess/whishlist';
@Component({
  selector: 'app-productsdetails',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './productsdetails.component.html',
  styleUrl: './productsdetails.component.css',
})
export class ProductsdetailsComponent {
  addwhishred: boolean = false;
  switc: boolean = true;
  whishListiteam!: WhishList[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };
  isloading: boolean = false;
  productid!: string;

  productdetails!: Product;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService,
    private readonly _cartapiService: CartapiService,
    private _whishlistService: WhishlistService
  ) {
    _activatedRoute.params.subscribe({
      next: (res: any) => {
        this.productid = res.id;
      },
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getproductdetails();
  }

  getproductdetails() {
    this._productsService.productsdetails(this.productid).subscribe({
      next: (res) => {
        console.log(res);
        this.productdetails = res.data;
      },
    });
  }
  toster = inject(ToastrService);

  addproducttocart(id: string) {
    if (this.isloading) return;
    this.isloading = true;

    this._cartapiService.getcart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._cartapiService.numberofcartIitem.next(res.numOfCartItems);
        this.toster.success(res.message);
        this.isloading = false;
      },
      error: (error) => {
        console.log(error);
        this.isloading = false;
      },
    });
  }

  addwhich(id: string) {
    this._whishlistService.addwhish(id).subscribe({
      next: (res) => {
        console.log(res);
        this.whishListiteam = res.data;
        this._whishlistService.countwhish.next(this.whishListiteam.length);
        this.addwhishred = true;
        this.switc = false;
      },
    });
  }

  deletwhish(id: string) {
    this._whishlistService.deletwhish(id).subscribe({
      next: (res) => {
        console.log(res);

        this.addwhishred = false;

        this.switc = true;
      },
    });
  }
  adddelete(ID: string) {
    if (this.switc == true) {
      this.addwhich(ID);
    } else if (this.switc == false) this.deletwhish(ID);
  }
}
