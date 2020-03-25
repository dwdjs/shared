/*!
 * @Author: cloudyan <cloudcode@qq.com>
 * @Created at: 2020-03-25 22:21:02
 * 功能说明: 缓存功能, 使用替换策略——最久未使用算法
 */

// https://github.com/isaacs/node-lru-cache
import LRU from 'lru-cache';

export const cache = new LRU({
  // 缓存队列长度
  max: 2000,
  // 缓存有效期 毫秒数
  maxAge: 3600000,
})

export {
  LRU,
}
