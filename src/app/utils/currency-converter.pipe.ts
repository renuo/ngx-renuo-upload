import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Converts a number in cents to currency format
 * Usage:
 *   value | myCurrencyConverter
 * Example:
 *   {{1920 | myCurrencyConverter:'CHF'}}
 *   formats to: CHF19.20
 */
@Pipe({name: 'myCurrencyConverter'})
export class CurrencyConverterPipe extends CurrencyPipe implements PipeTransform {

  transform(value: number, currency: string, inCent: boolean = true): string {
    const amount = inCent ? Math.round(value) / 100 : value;
    // default pipe has a different white space character, therefore the replace
    return super.transform(amount, currency, true, '1.2-2').replace(/\s/, ' ');
  }
}
