import { platform } from 'node:os';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MytranslateService {
  savlang!: any;
  platform = inject(PLATFORM_ID);
  constructor(
    private _translateService: TranslateService,

  ) {
    _translateService.setDefaultLang('en');
    this.change();
  }
  change() {
    if (isPlatformBrowser(platform)) {
      let savlang = localStorage.getItem('lang')!;
      this._translateService.use(savlang);
      if (savlang == 'en') {
        document.documentElement.dir = 'ltr';
      } else if (savlang == 'en') {
        document.documentElement.dir = 'rtl';
      }
    }
  }
}
