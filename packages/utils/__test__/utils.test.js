import {
  isMobile,
  randomRange,
  guid,
  uuid,
  // upperFirst,
  // kebabCase,
  // camelCase,
  // sleep,
  // merge,
} from '../src';

// const testStr =
// '_~0123456789' + 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

test('isMobile', () => {
  expect(isMobile('13324973375')).toBe(true);
  expect(isMobile('18812341234')).toBe(true);
  expect(isMobile('133249733751')).toBe(false);
  expect(isMobile('11324973375')).toBe(false);
  expect(isMobile('013324973375')).toBe(false);
  // expect(randomRange(1, 2)).toBe(1);
});

test('randomRange', () => {
  expect(randomRange(1)).toBe(1);
  // expect(randomRange(1, 2)).toBe(1);
});

test('guid', () => {
  expect(guid().length).toBe(36);
  // expect(randomRange(1, 2)).toBe(1);
});

test('uuid', () => {
  expect(uuid().length).toBe(21);
  // expect(randomRange(1, 2)).toBe(1);
});

// // 首字母大写
// test('upperFirst', () => {
//   expect(upperFirst('abc')).toBe('Abc');
//   expect(upperFirst('order-detail')).toBe('Order-detail');
// });

// // kebabCase 连字符命名 eg: kebab-case
// test('kebabCase', () => {
//   expect(kebabCase('abc')).toBe('abc');
//   expect(kebabCase('orderDetail')).toBe('order-detail');
// });

// // camelCase 小驼峰命名
// test('camelCase', () => {
//   expect(camelCase('abc')).toBe('abc');
//   expect(camelCase('order-detail')).toBe('orderDetail');
// });

// test('sleep', async () => {
//   const sleepTimes = await sleep(100);
//   expect(sleepTimes).toBe(100);
// });

// test('merge', () => {
//   const result = JSON.stringify(merge({ a: 1, b: 2 }, { a: 3, c: 4 }));
//   expect(result).toBe(`{\"a\":3,\"b\":2,\"c\":4}`);
// });
