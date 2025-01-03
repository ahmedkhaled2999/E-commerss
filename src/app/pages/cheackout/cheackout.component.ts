import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { OrederService } from '../../shred/sevices/order/oreder.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-cheackout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cheackout.component.html',
  styleUrl: './cheackout.component.css',
})
export class CheackoutComponent {
  errormessege: string = '';
  cartId: string = '';

  constructor(
    private _orederService: OrederService,
    private _activatedRoute: ActivatedRoute,
    private _rout: Router
  ) {
    (this.cartId = this._activatedRoute.snapshot.params?.['cartid']),
      console.log(this.cartId);
  }

  cheackout: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    city: new FormControl(null, [Validators.required]),
  });

  countion() {
    console.log(this.cheackout.value);
    this._orederService.checkoutsession(this.cartId, this.cheackout.value).subscribe({
      next: (res) => {
        console.log(res);
        //  this._rout.navigate(['/allorder']);
          window.location.href =res.session.url
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
