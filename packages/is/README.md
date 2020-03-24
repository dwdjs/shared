# is 判断

独立包，无依赖，语义化，使用简单

功能列表

- hasOwn
- isUnDef
- isDef
- isNumber
- isInteger
- isString
- isArray
- isObject
- isEmptyObject
- isFunction
  - alias: isFn
- isEmptyObject
- isPromise
- looseEqual
  - alias: isEqual

## 使用

```js
import { isUnDef, isObject, isEmptyObject } from '@deepjs/is'

const obj = {};
console.log(isUnDef(obj.name))
console.log(isObject(obj))
console.log(isEmptyObject(obj))
```
