# cookie

底层为 [js-cookie](https://www.npmjs.com/package/js-cookie) 独立包，无依赖，使用简单

## 使用

https://github.com/js-cookie/js-cookie

```js
import { cookie } from '@deepjs/cookie'

cookie.set('name', 'cloudyan', { expires: 7, path: '' });
cookie.get('name');

setTimeout(() => {
  cookie.get('name');
  cookie.remove('name');
}, 6000);
```
