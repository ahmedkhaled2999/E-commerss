import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from '../../../shred/sevices/brands/brands.service';
import { Brand } from '../../../shred/interfacess/product/orderuser';
import { Brands } from '../../../shred/interfacess/brands/brands';

@Component({
  selector: 'app-branddetails',
  standalone: true,
  imports: [],
  templateUrl: './branddetails.component.html',
  styleUrl: './branddetails.component.css',
})
export class BranddetailsComponent {

idbrand:string=""

branddetails!:Brands

  constructor(private _activatedRoute: ActivatedRoute,private _brandsService:BrandsService) {
    _activatedRoute.params.subscribe({
      next: (res: any) => {
        console.log(res.id);
        this.idbrand=res.id
      },
    });
  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.showbrandid()
}

showbrandid(){
  this._brandsService.getbarndid(this.idbrand).subscribe({next:(res)=>{
    console.log(res)
    this.branddetails=res.data
  }})
}

}
