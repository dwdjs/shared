# html-parser

将 HTML String转化为 nodes 数组

独立包，无依赖，语义化，使用简单

## 使用

```js
import htmlParser from '@deepjs/html-parser';

const htmlStr = '<p style="color: red; text-align: center;">这是<strong>简单</strong>富文本</p>'
const htmlNodes = htmlParser(htmlStr)
```

来源：

- https://github.com/dcloudio/hello-uniapp/blob/master/common/html-parser.js
