import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { httpInterceptor } from './shred/http.interceptor';
import { erroInterceptor } from './shred/erro.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loderInterceptor } from './shred/loder.interceptor';





export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([httpInterceptor, erroInterceptor,loderInterceptor
      ])
    ),
    importProvidersFrom(HttpClientModule),
    provideToastr(),
    importProvidersFrom(NgxSpinnerModule.forRoot()),
  ],
};
