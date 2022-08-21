---
home: true
heroImage: /assets/svg/icon.svg
actions:
  - text: 开始学习
    link: /guide/
    type: primary
    size: large

  - text: 代码仓库
    link: https://github.com/rmdocs
    type: primary
    ghost: true
    size: large
features:
- title: 🚗前端教程
  details: 从基础内容过渡到实践项目以及前端框架，实现全体系课程学习！
- title: 🚛后端教程
  details: 含有Python,C++,Java以及Node等语言的编程教程！包括神经网络的学习课程！持续更新中...
- title: 🚌技能学习以及素材
  details: 建模，修图，剪辑，PPT以及Linux系统的命令使用教程！
footerWrap: 
- headline: 🌿生态系统
  items:
  - title: AntDocs
    link: https://github.com/zpfz/vuepress-theme-antdocs/
    details: 本站 Antd-VuePress 主题
  - title: VuePress-Creator
    link: https://zpfz.github.io/vuepress-creator/
    details: VuePress CLI
  - title: 本站源码仓库
    link: https://github.com/rmdocs/full-stack-blog
    details: 本站源代码，打包了多个UI组件及模块
- headline: ⚓资源链接
  items:
  - title: VuePress
    link: https://vuepress.vuejs.org/zh/
    details: Vuepress官方文档
  - title: Ant Design
    link: https://1x.antdv.com/docs/vue/introduce-cn/
    details: 本站Antd主题文档
  - title: Vercel
    link: https://vercel.com/
    details: 托管本站平台
- headline: ☕作者博客
  items:
  - title: 掘金
    link: https://juejin.cn/user/1943592291286535
    details: 一个帮助开发者成长的社区
  - title: CSDN
    link: https://blog.csdn.net/X2222212
    details: 专业IT技术社区
footer: MIT Licensed | Copyright © 2022-present icbugcoder.
---

# 快速上手

## 安装主题

使用 `yarn` 安装 `AntDocs` 主题：
```bash
yarn add vuepress-theme-antdocs
```
或者使用 `npm` 安装它：
```bash
npm i vuepress-theme-antdocs
```
如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 引用主题

打开 `.vuepress/config.js` 文件，然后在合适位置引用它：

```js
module.exports = {
  theme: 'antdocs',
  // ...
}
```
如果你对 VuePress 主题配置不是很了解，请点这里：[使用主题](https://vuepress.vuejs.org/zh/theme/using-a-theme.html#%E4%B8%BB%E9%A2%98%E7%9A%84%E7%BC%A9%E5%86%99)  

配置完毕后，你就可以直接 `yarn run docs:dev` 或 `npm run docs:dev` 查看效果。

## 效果预览

<p align="center"><img src="https://s2.ax1x.com/2020/02/28/3B3lOf.png"/></p>

## 贡献者

<p></p>

<a-tooltip placement="bottom">
  <template slot="title">
    icbugcoder
  </template>
  <a-avatar src="https://img.recode.fun/img-2022/微信图片_20220821202544.jpg" :size="54"/>
</a-tooltip>
&ensp;

<Msg />
<mention-sucess />