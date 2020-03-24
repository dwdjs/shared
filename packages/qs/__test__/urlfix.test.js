import { urlfix } from '../src';

describe('urlfix', () => {
  test('test1', () => {
    const result = urlfix('url', 'id=123');
    expect(result).toBe('url?id=123');
  });
  test('test1', () => {
    const result = urlfix('url?xx=xxx', 'id=123');
    expect(result).toBe('url?xx=xxx&id=123');
  });
})
