import {
  Component,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { WhishList } from '../../../../shred/interfacess/whishlist';
import { CurrencyPipe } from '@angular/common';
import { CartapiService } from '../../../../core/services/cart/cartapi.service';

@Component({
  selector: 'app-whishitem',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './whishitem.component.html',
  styleUrl: './whishitem.component.css',
})
export class WhishitemComponent {
  constructor(private _cartapiService: CartapiService) {}

  @Input() wish!: WhishList;
  @Output() idwhich: EventEmitter<string> = new EventEmitter();
  @Output() delelistWish: EventEmitter<string> = new EventEmitter();

  addcartwhish(id: string) {
    this.idwhich.emit(id);
  }
  deleteWhish(id:string){
    this.delelistWish.emit(id)
  }


}
