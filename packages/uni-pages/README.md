# uni-pages

通过插件扩展，为 uni-app 提供获取 pages.json 配置的能力

支持所有小程序，使用简单

计划功能列表

- uniPages
  - allPages    所有小程序页面
  - tabPages    tabs 页面
  - defaultPage 默认页面/首页
  - getJson     获取原始配置

## 使用

可以在 vue.config.js 中使用

```js
const uniPages require('@deepjs/uni-pages');

// vue.config.js
module.exports = {
  // configureWebpack: config => {
  configureWebpack: {
    plugins: [
      // 借助 webpack.DefinePlugin 轻松注入全局变量。ROUTES 及可全局使用
      new webpack.DefinePlugin({
        CC_PAGES: JSON.stringify(uniPages),
      })
    ]
  }
}
```
