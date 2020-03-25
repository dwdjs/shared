# cache

底层为 [lru-cache](https://www.npmjs.com/package/lru-cache) 独立包，功能强大，使用简单

## 使用

https://github.com/isaacs/node-lru-cache

```js
import { cache, LRU } from '@deepjs/cache'

const options = {
  max: 500,
  length: function (n, key) { return n * 2 + key.length },
  dispose: function (key, n) { n.close() },
  maxAge: 1000 * 60 * 60,
}
const cache1 = new LRU(option);
const cache2 = new LRU(50); // sets just the max size

cache1.set("key", "value")
cache1.get("key") // "value"
```
