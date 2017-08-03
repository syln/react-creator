### 基于create-react-app修改的脚手架
---

#### 命令

```
npm start  运行

npm run build  打包
```

#### 配置

在package.json配置选项

打包后静态资源主机路径
```json

package.json

{
  "homepage":"./"
}
```

设置代理

```json

package.json

{
  "proxy":""
}

```

#### 目录

src/pages     页面目录

src/assets  静态资源目录

src/components  自定义组件目录

#### 其他

**此脚手架为多页面配置，如果需要开发单页应用，请直接用官方[create-react-app](https://github.com/facebookincubator/create-react-app)**

**脚手架内置css编译语法为less**


