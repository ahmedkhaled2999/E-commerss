import { error } from 'console';
import { AuthService } from '../../core/services/auth/auth.service';

import { OrederService } from '../../shred/sevices/order/oreder.service';
import { Component } from '@angular/core';
import { Root2 } from '../../shred/interfacess/product/orderuser';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  userid!: string;

  constructor(private _oreder: OrederService, private _auth: AuthService) {
    this._auth.userdata.subscribe(() => {
      this.userid = this._auth.userdata.getValue().id;
    });
  }

  ngOnInit(): void {
    this.userorder(this.userid);
  }

  allproductusers!: Root2[];

  userorder(userid: string) {
    this._oreder.getorderuser(userid).subscribe({
      next: (res) => {
        this.allproductusers = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
