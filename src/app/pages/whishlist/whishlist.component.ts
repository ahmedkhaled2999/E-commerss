import { Component } from '@angular/core';
import { WhishlistService } from '../../shred/sevices/whish/whishlist.service';
import { WhishitemComponent } from './componet/whishitem/whishitem.component';
import { WhishList } from '../../shred/interfacess/whishlist';
import { CartapiService } from '../../core/services/cart/cartapi.service';

@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [WhishitemComponent],
  templateUrl: './whishlist.component.html',
  styleUrl: './whishlist.component.css',
})
export class WhishlistComponent {
  whishListiteam!: WhishList[];
  indexlist!: number;

  constructor(
    private _whishlistService: WhishlistService,
    private _cartapiService: CartapiService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getallWhish();
  }

  getallWhish() {
    this._whishlistService.getallwhishlist().subscribe({
      next: (res) => {
        console.log(res);
        this.whishListiteam = res.data;
      },
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  destroy() {
    this._whishlistService.getallwhishlist().subscribe().unsubscribe();
  }

  addtocartwish(id: string) {
    console.log(id);
    this._cartapiService.getcart(id).subscribe({
      next: (res) => {
        this._cartapiService.numberofcartIitem.next(res.numOfCartItems);
        console.log(res);
      },
    });
  }

  findindex(index: number) {
    this.indexlist = index;
    console.log(this.indexlist);
    return index;
  }

  deletespicific(id: string) {
    this._whishlistService.deletwhish(id).subscribe({
      next: (res) => {
        console.log(this.whishListiteam.length);

        this.whishListiteam.splice(this.indexlist, 1);
        this._whishlistService.countwhish.next(this.whishListiteam.length);
      },
    });
  }
}
