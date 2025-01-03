import { Component } from '@angular/core';
import { BranditemComponent } from './branditem/branditem.component';
import { Brands } from '../../../shred/interfacess/brands/brands';
import { BrandsService } from '../../../shred/sevices/brands/brands.service';

@Component({
  selector: 'app-recentbrand',
  standalone: true,
  imports: [BranditemComponent],
  templateUrl: './recentbrand.component.html',
  styleUrl: './recentbrand.component.css',
})
export class RecentbrandComponent {
  allbrands!: Brands[];

  constructor(private _brandsService: BrandsService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getallbarnds();
  }
  getallbarnds() {
    this._brandsService.getbrands().subscribe({
      next: (res) => {
        console.log(res);
        this.allbrands = res.data;
      },
    });
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy()
  }


  destroy(){
    this._brandsService.getbrands().subscribe().unsubscribe()
    console.log('destroy brand')
  }
}
