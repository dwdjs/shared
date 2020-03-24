# 轻量级语义版本比较

独立包，无依赖，语义化，使用简单

## 使用

```js
import { Version } from '@deepjs/version'

const v = '3.8.5';
const version = new Version(v);

version.eq('3.8.5')
version.eq('3')
version.gt('3.8.4')
version.gte('3.8.5')
version.lt('3.8.6')
version.lte('3.8.5')
```
