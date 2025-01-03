import { Component, Input, output, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../interfacess/products/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-producitem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './producitem.component.html',
  styleUrl: './producitem.component.css',
})
export class ProducitemComponent {
  @Output() productemitter: EventEmitter<string> = new EventEmitter();
  @Output() whishemitter: EventEmitter<string> = new EventEmitter();

  @Input() product!: Product;

  @Input() islading!: boolean;
  @Input() cartide!: string;
  @Input() redwhish!: boolean;
  @Input() whishid!:string

  addcart(id: string) {
    this.productemitter.emit(id);
  }

  addwhish(idwhish: string) {
    this.whishemitter.emit(idwhish);
  }
}
