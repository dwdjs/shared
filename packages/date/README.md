# date

日期相关格式处理

独立包，无依赖

功能列表

- formatNum
- formatDate
- formatCountDown

## 使用

```js
import { formatNum, formatDate, formatCountDown } from '@deepjs/date'

formatNum(0) // 00
formatCountDown(10000) // '00:00:10'

const date = +new Date('2018-12-17 19:04:09');
formatDate(date)                  // '2018年12月17日'
formatDate(date, 'M-D')           // '12-17'
formatDate(date, 'Y-M-D H:F:S')   // '2018-12-17 19:04:09'
```
