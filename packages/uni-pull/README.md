# uni-app 小程序上拉加载 && 下拉刷新

适用于 uni-app，独立包，无依赖，使用简单

**思考**

- 如何将配置分离？如 page_num page_limit 等等
  - 导出函数，

## 使用

uni-app 页面混入即可

```vue
<template>
  <view class="list">
    <view v-for="item in listData" :key="item.id">
      <list-item :item="item"></list-item>
    </view>
    <cc-load-more :status="listStatus" />
  </view>
</template>

<script>
import { pullUp, pullDown } from '@deepjs/uni-pull';

export default {
  mixins: [pullUp, pullDown],

}
</script>
```
