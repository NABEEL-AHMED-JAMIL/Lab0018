import {
  Pipe, PipeTransform
} from '@angular/core';
import { CurrencyCodesService } from '@btas/services/currency-codes';


@Pipe({
  name: 'myCurrencySymbol'
})
export class CurrencySymbolPipe implements PipeTransform {
    constructor(private svc: CurrencyCodesService) {
    }

    public transform(value: string, ...args: any[]): string {
      return this.svc.getCurrencySymbol(value);
    }
}
