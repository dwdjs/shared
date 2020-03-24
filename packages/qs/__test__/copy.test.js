import { copy } from '../src';

const obj = {a: 1, b: 0, c: null}
const obj2 = {a: 1, b: 0, c: {a: 2}}

describe('copy', () => {
  test('test1', () => {
    const result = copy(obj);
    expect(result).not.toBe(obj);
  });
  test('test2', () => {
    const result = copy(obj2.c);
    expect(result).not.toBe(obj2.c);
  });
})
