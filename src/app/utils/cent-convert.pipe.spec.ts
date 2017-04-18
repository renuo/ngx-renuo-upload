import { CentConvertPipe } from './cent-convert.pipe';

describe('CentConvertPipe', () => {
  const pipe: CentConvertPipe = new CentConvertPipe();

  it('transforms "1900" to "19"', () => {
    expect(pipe.transform(1900)).toEqual(19);
  });

  it('transforms "1900.00001" to "19"', () => {
    expect(pipe.transform(1900.00001)).toEqual(19);
  });

  it('transforms "1899.99999" to "19"', () => {
    expect(pipe.transform(1899.99999)).toEqual(19);
  });

  it('transforms "1920" to "19.2"', () => {
    expect(pipe.transform(1920)).toEqual(19.2);
  });

  it('transforms "1920.001" to "19.2"', () => {
    expect(pipe.transform(1920.001)).toEqual(19.2);
  });
});
