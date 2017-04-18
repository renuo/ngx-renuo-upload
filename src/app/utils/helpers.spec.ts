import { sum } from './helpers';

describe('helpers', () => {
  describe('sum', () => {
    describe('number array', () => {
      it('works with an empty array', () => {
        expect(sum([])).toEqual(0);
      });

      it('works with one element', () => {
        expect(sum([1])).toEqual(1);
      });

      it('works with one element', () => {
        expect(sum([1, 10, 15, 3, 7])).toEqual(1 + 10 + 15 + 3 + 7);
      });
    });

    describe('object array', () => {
      it('works with an empty array', () => {
        expect(sum([], item => item.price)).toEqual(0);
      });

      it('works with one element', () => {
        expect(sum([{price: 1}], item => item.price)).toEqual(1);
      });

      it('works with one element', () => {
        expect(sum(
          [{price: 1}, {price: 10}, {price: 15}, {price: 3}, {price: 7}],
          item => item.price)).toEqual(1 + 10 + 15 + 3 + 7);
      });
    });
  });
});
