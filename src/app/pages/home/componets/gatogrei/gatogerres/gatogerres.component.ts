import { Observable } from 'rxjs';
import { GatogoreService } from './../../../../../shred/sevices/gategoreapi/gatogore.service';
import { Component, inject } from '@angular/core';
import { resolve } from 'dns/promises';
import { Gatogrei } from '../../../../../shred/interfacess/gatores/gatogrei';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gatogerres',
  standalone: true,
  imports: [CarouselModule, RouterLink],
  templateUrl: './gatogerres.component.html',
  styleUrl: './gatogerres.component.css',
})
export class GAtogerresComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    margin: 10,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 8,
      },
    },
    nav: false,
  };

  gatogrelist!: Gatogrei[];

  _gatogoreService = inject(GatogoreService);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getgato();
  }
  getgato() {
    this._gatogoreService.getgatogre().subscribe({
      next: (res) => {
        this.gatogrelist = res.data;
      },
    });
  }



  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
   this.destroy()
  }

destroy(){
  this._gatogoreService.getgatogre().subscribe().unsubscribe()
  console.log('destroy1')
}


}
