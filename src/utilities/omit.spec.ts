import { omit } from './omit';

describe('omit', () => {
  it('should omit a single property', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
  });

  it('should omit multiple properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  it('should return the original object if props are empty', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, [])).toEqual(obj);
  });

  it('should handle non-existent properties gracefully', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['d'])).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should not mutate the original object', () => {
    const obj = { a: 1, b: 2 };
    const newObj = omit(obj, ['b']);
    expect(newObj).toEqual({ a: 1 });
    expect(obj).toEqual({ a: 1, b: 2 });
  });
});
