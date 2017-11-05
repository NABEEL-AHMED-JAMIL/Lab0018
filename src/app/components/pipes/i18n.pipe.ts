import {
  Pipe, PipeTransform
} from '@angular/core';

import { CookieService } from 'ngx-cookie';
import * as lang from '@btas/lang';


@Pipe({
  name: 'i18n'
})
export class I18NPipe implements PipeTransform {

  constructor(private cookie: CookieService) {}

  public transform(value: string | Function): any {
    if (value instanceof Function) {
      return value(this.cookie.get('locale'));
    }
    return value;
  }

}


@Pipe({
  name: 'i18nStatic'
})
export class I18NStaticPipe implements PipeTransform {

  constructor(private cookie: CookieService) {}

  public transform(value: string): any {
    return lang[this.cookie.get('locale')][value] || value;
  }

}
