# storage

适用于 web，封装 localStorage, sessionStorage，简单好用

独立包，无依赖，语义化，使用简单

功能列表

- localStorage/sessionStorage
- storage
  - set
  - get
  - remove
  - clear

## 使用

```js
import { storage, session } from '@deepjs/storage';

storage.set('name', 'cloudyan', 5);
storage.get('name');

setTimeout(() => {
  storage.get('name');
  storage.remove('name');
  storage.clear();
}, 6000);
```
