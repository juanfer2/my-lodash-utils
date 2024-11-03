import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  it('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for a non-empty object', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('should return true for an empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  it('should return false for a non-empty Map', () => {
    const map = new Map();
    map.set('key', 'value');
    expect(isEmpty(map)).toBe(false);
  });

  it('should return true for an empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return false for a non-empty Set', () => {
    const set = new Set([1, 2, 3]);
    expect(isEmpty(set)).toBe(false);
  });

  it('should return true for null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });
});
