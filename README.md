# 前端开发工具库

将之前的 utils 库拆分来同时支持 `web端`和`小程序端`

- 按照最小化处理原则，将工具进行细粒度拆分
- 使用 lerna 来管理

模块列表

- common
  - [ ] bridge
  - [x] cache   [lru-cache]
  - [x] date
  - [x] html-parser
  - [x] is
  - [x] qs
  - [ ] stat
  - [x] utils
  - [x] version
- web 专用
  - [x] cookie  [js-cookie]
  - [ ] device
  - [x] storage
- uni-app 专用
  - [x] uni-pull
  - [x] uni-storage

第三方

- url-parse URL解析
- lru-cache 缓存功能, 使用替换策略——最久未使用算法

**commit message:**

- feat: 新增功能
- fix: 修复bug
- docs: 修改文档
- refactor: 代码重构，未新增任何功能和修复任何bug
- build: 改变构建流程，新增依赖库、工具等（例如webpack修改）
- style: 仅仅修改了空格、缩进等，不改变代码逻辑
- perf: 改善性能和体现的修改
- chore: 非src和test的修改
- test: 测试用例的修改
- ci: 自动化流程配置修改
- revert: 回滚到上一个版本

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
