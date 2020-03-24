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

- `lerna init` 初始化项目
- `lerna bootstrap` 安装依赖
  - 默认是npm, 而且每个子package都有自己的node_modules
  - 配置 `yarn+workspaces` 后，只有顶层有一个node_modules
  - TIP: 直接最外层运行，并不会把每个包的依赖都按照好，需要进去安装
- `lerna list` 列出所有的包
- `lerna create <name> [loc]` 创建一个包 默认放在 `workspaces[0]`所指位置
- `lerna run <script>` 运行所有包里面的有这个script的命令
- `lerna exec` 运行任意命令在每个包
- `lerna clean` 删除所有包的node_modules目录
- `lerna changed` 列出下次发版lerna publish 要更新的包。
- `lerna publish` 会打tag，上传git,上传npm。
  - 需要在packages.json添加 "publishConfig": { "access": "public" },

配置 yarn + workspaces

```bash
# package.json 文件加入
"private": true,
"workspaces": [
  "packages/*"
],

# lerna.json 文件加入
"useWorkspaces": true,
"npmClient": "yarn",
```
