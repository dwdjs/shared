# utils

工具函数杂项

功能列表

- guid
- uuid
- random        随机
- randomRange   [min, max] 之间随机整数
- arrayToHeavy  数组去重
- throttle      节流
- debounce      防抖
- sleep         延迟执行
- promisify     promise 化

## 使用

```js
import { isMobile, randomBy } from '@deepjs/utils';

isMobile('11889342345') // false
isMobile('13889342345') // true
isMobile(013324973375)  // 要测试 string，不能是数字

randomBy(0, 9)
guid()
uuid()
```
