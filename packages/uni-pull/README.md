# uni-app 小程序上拉加载 && 下拉刷新

独立包，使用简单

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
import { pullUp, pullDown } from '@deepjs/uni-pull'

export default {
  mixins: [
    pullUp,
    pullDown,
  ],
}
</script>
```
