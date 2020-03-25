# qs

处理 url query-string 等功能

独立包，无依赖，语义化，使用简单

功能列表

- copy
  - alias: `deepCopy` `clone`
- urlfix
- parse
- stringify
- compact       0.1.1 计划废弃，可使用 filter 替代
- compactObject 0.1.1 计划废弃，可使用 reduce 替代
- decodeQuery


```js
const invalid = ['', undefined, null];
// compact
const temp1 = arr.filter(v => !invalid.includes(v))

// compactObject
const temp = Object.keys[obj].reduce((o, key) => {
  if (!invalid.includes(obj[key] && utmKeys.includes(key)) {
    o[key] = obj[key];
  }
  return o;
}, {})
```

## 使用

```js
import { clone, stringify } from '@deepjs/qs'

const obj = {a: 1, b: 0, c: null};
console.log(clone(obj))
console.log(stringify(obj))
```
