import { error } from 'node:console';

import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-regester',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './regester.component.html',
  styleUrl: './regester.component.css',
})
export class RegesterComponent {
  errormessege: string = '';
  isloadin: boolean = false;
  callingapi: boolean = false;

  constructor(private _auth: AuthService, private _router: Router) {}
  regester: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
      ]),
      rePassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{3,5}$/),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[1250][0-9]{8}$/),
      ]),
    },
    this.confirmrepassowrd
  );

  confirmrepassowrd(repass: any) {
    if (repass.get('password').value == repass.get('rePassword').value) {
      return null;
    } else {
      return { misMatch: true };
    }
  }
  sendData() {
    console.log(this.regester);
    if (this.regester.valid) {
      this.callingapi = true;
      this.isloadin = true;
      this._auth.register(this.regester.value).subscribe({
        next: (res) => {
          this.callingapi = false;
          this._router.navigate(['/login']);
          this.isloadin = false;
        },
        error: (ero) => {
          console.log(ero.error);
          this.errormessege = ero.error.message;

          this.isloadin = false;
          this.callingapi = false;
        },
      });
    } else {
      this.regester.markAllAsTouched();
    }
  }
}
