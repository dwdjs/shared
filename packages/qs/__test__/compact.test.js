import { compact } from '../src';

const compact2 = function(arr, filter = ['', 0, undefined, false, NaN]) {
  return arr.filter(v => !filter.includes(v))
}

// 默认
// filter1 =  ['', 0, undefined, false, NaN]
const test1 = [1, 'test', '', 0, -0, +0, undefined, false, null, NaN];
const result1 = [1, 'test', null];

const filter2 = [null, NaN];
const result2 = [1, 'test', '', 0, -0, +0, undefined, false];

const filter3 = [0, undefined, false];
const result3 = [1, 'test', '', null, NaN];

describe('compact', () => {
  test('test1', () => {
    const result = compact(test1);
    expect(JSON.stringify(result)).toBe(JSON.stringify(result1));
  });
  test('test11', () => {
    const result = compact2(test1);
    expect(JSON.stringify(result)).toBe(JSON.stringify(result1));
  });

  test('test2', () => {
    const result = compact(test1, filter2);
    expect(JSON.stringify(result)).toBe(JSON.stringify(result2));
  });
  test('test21', () => {
    const result = compact2(test1, filter2);
    expect(JSON.stringify(result)).toBe(JSON.stringify(result2));
  });

  test('test3', () => {
    const result = compact(test1, filter3);
    expect(JSON.stringify(result)).toBe(JSON.stringify(result3));
  });
  test('test31', () => {
    const result = compact2(test1, filter3);
    expect(JSON.stringify(result)).toBe(JSON.stringify(result3));
  });
});
