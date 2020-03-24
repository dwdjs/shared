# uni-storage

封装 uni-app 的 storage，同步取，异步存

独立包，无依赖，语义化，使用简单

## 使用

```js
import storage from '@deepjs/uni-storage';

storage.set('name', 'cloudyan', 5);
storage.get('name');

setTimeout(() => {
  storage.get('name');
}, 6000);
```
