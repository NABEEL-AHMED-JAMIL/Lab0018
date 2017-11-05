/**
 * Duck typed to match the header in the CSV
 *
 * The accompanying CSV is ordered by rank. The top 32 items are hand picked
 * based on the relative popularity of the currency and the rest ordered alphabetically by
 * their code name.
 */
export interface ICurrencyCode {
    name: string;
    code: string;
    numericCode: number;
    rank: number;  // favourite ordering
    symbol: string;
}

import * as currencyCodes from './currencies.csv';

/**
 * This value needs to match the top N hand picked values on the spreadsheet.
 */
export const TopN = 32;

export const CurrencyCodes = <ICurrencyCode[]> currencyCodes;

export interface Currency {
    value: number;
    code: string;
};
