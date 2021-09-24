## 简介

`vant-theme`是一个 `vant` 组件库**在线主题预览工具**，如果你有`vant`组件库**定制主题、动态切换主题**的需求，可以使用此工具。`vant-theme`可以修改`vant`组件库所提供的**样式变量**，它能够及时反馈和呈现修改过后的内容。

`vant` 在 `3.x`版本使用了 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式。**`vant-theme`就是通过样式覆盖的形式实现的。**

**目前只支持 `3.x`版本，在不久后将支持 `2.x`版本。 **

在线预览：https://aisen60.github.io/vant-theme 或者 https://aisen60.gitee.io/vant-theme

仓库地址：https://github.com/Aisen60/vant-theme

## 为什么要做这个工具？

它能解决以下两个问题：

1、在线快速预览，快速的效果反馈，所见即所得。你不在需要在编辑器中重复的进行配置，你只需要在`vant-theme` 中把你需要自定义的组件样式配置好，下载到本地后引入即可。

2、你可以分享给你公司的设计师，让 TA 在设计页面时，就能根据你团队的设计规范来设计组件了。当设计师交付设计稿给前端时，顺便把下载后的文件交付给你。可以省去一些相关的沟通和人力工作。


## 预览

首页：

<img width="1440" alt="index" src="https://user-images.githubusercontent.com/19791710/132115824-6b46e9a2-d90a-4a6c-beaf-dd56fc43aec7.png">

主题列表页：

<img width="1440" alt="theme" src="https://user-images.githubusercontent.com/19791710/132115934-3bdd2b68-9690-48b4-9c6c-b56670ec5ad2.png">

预览页：

<img width="1440" alt="theme" src="https://user-images.githubusercontent.com/19791710/132117276-c8e0bd76-ed5c-482e-8929-15a249c740b2.gif">

<img width="1440" alt="theme" src="https://user-images.githubusercontent.com/19791710/132117574-23a899c8-8d7b-4145-841f-1712b32b2d3f.gif">


## 如何使用

当修改完样式后，点击**下载主题文件**按钮，会得到一份`css`文件和一份`json`文件。

[通过 CSS 覆盖](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/config-provider#tong-guo-css-fu-gai)的方式，将下载后的`css`文件引入到项目中，就可以覆盖 `vant` 官方默认样式了。

或者[通过 ConfigProvider 覆盖](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/config-provider#tong-guo-configprovider-fu-gai)的方式，将下载后的`json`文件中的内容配置到`van-config-provider`组件的`theme-vars`中。

具体请查看官方文档：[定制主题](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/config-provider#ding-zhi-zhu-ti) 。

下载主题文件按钮所在的位置：

![download button](https://user-images.githubusercontent.com/19791710/132115673-0bbee24f-181e-4367-94bf-33c733cf7991.png)


下载后的`css`文件内容：

<img alt="css content" src="https://user-images.githubusercontent.com/19791710/132115723-e7d01e32-6374-4d02-ac78-705ec8a9667a.png">

下载后的`json`文件内容：

<img alt="json content" src="https://user-images.githubusercontent.com/19791710/132115735-d9056c5d-645e-48a3-8ebb-7db53f5b516a.png">


## Todo

- [ ] 使用无头浏览器自动抓取官网样式变量，实现与官方的**样式变量**保持同步。
- [ ] 支持 `vant UI 2.x` 版本。
- [ ] 修改记录的撤销、回退。

