import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  const pipe: TimeAgoPipe = new TimeAgoPipe();
  const createdAt = new Date(2017, 1, 1, 12, 6, 0);

  it('shows hours if work was published some hours before and rounds', () => {
    jasmine.clock().mockDate(new Date(2017, 1, 1, 16, 10, 0));
    expect(pipe.transform(createdAt)).toEqual('Vor 4 Stunden erstellt');
  });

  it('shows days if work was published yesterday', () => {
    jasmine.clock().mockDate(new Date(2017, 1, 2, 16, 6, 0));
    expect(pipe.transform(createdAt)).toEqual('Vor einem Tag erstellt');
  });

  it('shows a number if work was published a lot of days before', () => {
    jasmine.clock().mockDate(new Date(2017, 1, 20, 16, 6, 0));
    expect(pipe.transform(createdAt)).toEqual('Vor 19 Tagen erstellt');
  });
});
