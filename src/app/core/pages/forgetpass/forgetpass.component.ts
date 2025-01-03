import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { validateHeaderValue } from 'http';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.css',
})
export class ForgetpassComponent {
  rout = inject(Router);
  pagesteps:string ='forgetpass'




  constructor(
    private _authService: AuthService,
    private _tostar: ToastrService
  ) {}

  steps: number = 1;

  verfiyEmail: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  emailsubmit(form: FormGroup) {
    console.log(form.value);
    this._authService.verfyEmail(form.value).subscribe({
      next: (res) => {
        console.log(res);
        this._tostar.success(res.message);
        this.pagesteps='verfiyCode'
        this.steps = 2;
      },
    });
  }

  verfiyCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{6}$/),
    ]),
  });
  codesubmit(form: FormGroup) {
    console.log(form.value);
    this._authService.verfycode(form.value).subscribe({
      next: (res) => {
        console.log(res);
        this._tostar.success(res.status);
        this.pagesteps='sing in'
        this.steps = 3;
      },
    });
  }

  resetpassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,5}$/),
    ]),
  });

  restsubmit(form: FormGroup) {
    this._authService.verfyubdate(form.value).subscribe({
      next: (res) => {
        console.log(res);
        this.rout.navigate(['/login']);
      },
    });
  }
}
