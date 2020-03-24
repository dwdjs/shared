# 前端开发工具库

将之前的 utils 库拆分来同时支持 `web端`和`小程序端`

- 按照最小化处理原则，将工具进行细粒度拆分
  - is
  - qs
  - date
  - stat
  - cache
  - device 浏览器bom 端，提供 BOM 部分相关操作
  - bridge
  - uni 基于 uni-app 提供小程序端操作
- 使用 lerna 来管理

开发维护

```bash
lerna init
```
