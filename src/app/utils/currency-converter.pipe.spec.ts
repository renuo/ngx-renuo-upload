import 'intl';
import 'intl/locale-data/jsonp/de-CH';

import { CurrencyConverterPipe } from './currency-converter.pipe';

describe('CurrencyConverterPipe', () => {
  const pipe: CurrencyConverterPipe = new CurrencyConverterPipe('de-CH');

  it('transforms "1900" to "CHF 19.00"', () => {
    expect(pipe.transform(1900, 'chf')).toEqual('CHF 19.00');
  });

  it('transforms "1900.00001" to "CHF 19.00"', () => {
    expect(pipe.transform(1900.00001, 'chf')).toEqual('CHF 19.00');
  });

  it('transforms "1899.99999" to "€19.00"', () => {
    expect(pipe.transform(1899.99999, 'eur')).toEqual('EUR 19.00');
  });

  it('transforms "19.2" to "CHF 19.20" if it not in cent parameter is passed', () => {
    expect(pipe.transform(19.2, 'chf', false)).toEqual('CHF 19.20');
  });
});
