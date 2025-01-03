import { GatogoreService } from '../../shred/sevices/gategoreapi/gatogore.service';
import { Gatogrei } from './../../shred/interfacess/gatores/gatogrei';
import { Component } from '@angular/core';
import { GAtogerresComponent } from "../home/componets/gatogrei/gatogerres/gatogerres.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gategories',
  standalone: true,
  imports: [GAtogerresComponent,RouterLink],
  templateUrl: './gategories.component.html',
  styleUrl: './gategories.component.css',
})
export class GategoriesComponent {
  constructor(private _gatogrei: GatogoreService) {}
  allgategry!:Gatogrei[]




  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.allgate()
  }


  allgate(){
    this._gatogrei.getgatogre().subscribe({next:(res)=>{
      console.log(res)
      this.allgategry=res.data
    }})
  }
 ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.destroy()
 }

  destroy(){

    this._gatogrei.getgatogre().subscribe().unsubscribe()
    console.log('destroy gat')
  }

}
