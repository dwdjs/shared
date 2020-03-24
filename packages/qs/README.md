# qs

处理 url query-string 等功能

独立包，无依赖，语义化，使用简单

功能列表

- copy
  - alias: `deepCopy` `clone`
- urlfix
- parse
- stringify
- compact
- compactObject

## 使用

```js
import { clone, stringify, compactObject } from '@deepjs/qs'

const obj = {a: 1, b: 0, c: null};
console.log(clone(obj))
console.log(stringify(obj))
console.log(compactObject(obj))
```
