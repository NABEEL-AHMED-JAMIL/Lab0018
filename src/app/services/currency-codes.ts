import { Injectable } from '@angular/core';

import { ICurrencyCode, CurrencyCodes, TopN } from '@btas/common/currency';


@Injectable()
export class CurrencyCodesService {
  private cache = new Map<number, ICurrencyCode[]>();

  private symbolMap = CurrencyCodes.reduce((acc, m) => {
    acc[m.code] = m.symbol;
    return acc;
  }, {});

  public getTopN(): number {
      return TopN;
  }

  public getCurrencyCodes(topN?: number): ICurrencyCode[] {
    if (!topN) {
      return CurrencyCodes;
    } else {
      return this.getCurrencyCodesFromCache(topN);
    }
  }

  public getCurrencySymbol(code: string): string {
    return this.symbolMap[code];
  }

  public getDefaultCurrency(): string {
    return CurrencyCodes && CurrencyCodes.length && CurrencyCodes[0].code;
  }

  private getCurrencyCodesFromCache(topN: number): ICurrencyCode[] {
    let res = this.cache.get(topN);
    if (!res) {
    // assumes csv is pre-sorted by rank
      res = CurrencyCodes.slice(0, topN)
          .concat(CurrencyCodes.slice(topN).sort(
          (a, b) => a.code > b.code ? 1 : a.code === b.code ? 0 : -1));
      this.cache.set(topN, res);
    }
    return res;
  }
}
