import { MinutesToHourPipe } from './minutes-to-hour.pipe';

describe('MinutesToHourPipe', () => {
  const pipe: MinutesToHourPipe = new MinutesToHourPipe();

  it('transforms "120" to "2"', () => {
    expect(pipe.transform(120)).toEqual(2);
  });

  it('transforms "150" to "1.5"', () => {
    expect(pipe.transform(150)).toEqual(2.5);
  });

  it('transforms all values from 0 to 120 minutes so that they can be transformed back', () => {
    for (let i = 0; i <= 120; ++i) {
      expect(Math.round(60 * pipe.transform(i))).toEqual(i);
    }
  });

  it('transforms all values from 0 to 120 minutes so that they can be transformed back', () => {
    expect(pipe.transform(0.3)).toEqual(pipe.transform(Math.round(0.3)), 'did not work with ' + 0.3);
    expect(pipe.transform(0.4)).toEqual(pipe.transform(Math.round(0.4)), 'did not work with ' + 0.4);
  });
});
