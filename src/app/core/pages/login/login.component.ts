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
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  errormessege: string = '';

  isloadin: boolean = false;
  callingapi: boolean = false;
  constructor(private _auth: AuthService, private _router: Router) {}

  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,5}$/),
    ]),
  });



  sendData() {
    if (this.loginform.valid) {
      this.callingapi = true;
      this.isloadin = true;
      console.log(this.loginform);
      this._auth.signIN(this.loginform.value).subscribe({
        next: (res) => {
          console.log(res.token);
          localStorage.setItem('usertoken', res.token);
          this._auth.userinfo();
          this._router.navigate(['/home']);
          this.callingapi = false;
          this.isloadin = false;
        },
        error: (ero) => {
          console.log(ero.error.message);
          this.errormessege = ero.error.message;
          this.isloadin = false;
          this.callingapi = false;
        },
      });
    } else {
      this.loginform.markAllAsTouched();
    }
  }
}
