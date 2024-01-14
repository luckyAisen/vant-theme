**vant-theme 正在进行 next 版本的升级，旧版本代码请查看 [website](https://github.com/Aisen60/vant-theme/tree/website) 分支。**

## 简介

`vant-theme` 是一个 `vant` 组件库**在线主题预览工具**，**支持 `Vant` 所有版本。**

如果你有**定制主题、动态切换主题**的需求，可以使用此工具。

`vant-theme` 通过 `vant` 提供的**样式变量**进行修改，它能够及时反馈修改后的样式。

在线预览：https://aisen60.github.io/vant-theme 或者 https://aisen60.gitee.io/vant-theme

仓库地址：https://github.com/Aisen60/vant-theme

`vant-theme` 最初的目的是为了解决以下问题：

- 在线快速预览，快速的效果反馈，所见即所得。你不在需要在编辑器中重复的进行配置，你只需要在 `vant-theme` 中把你需要自定义的组件样式配置好，下载到本地后引入即可。

- 你可以分享给你公司的设计师，让 TA 在设计页面时，就能根据你团队的设计规范来设计组件了。当设计师交付设计稿给前端时，顺便把下载后的文件交付给你。可以省去一些相关的沟通和人力工作。

## 预览

<img width="1440" alt="theme" src="https://user-images.githubusercontent.com/19791710/159396139-4d336e45-3db6-4ec7-ac2b-9edd48549478.png">

<img width="1440" alt="theme" src="https://user-images.githubusercontent.com/19791710/159396492-4bc23e86-dcee-4d67-8954-ce0f14355dc0.png">

<img width="1440" alt="console" src="https://user-images.githubusercontent.com/19791710/159396755-7b0c2f5e-c671-4a9f-af5a-81372d1a2795.png">

<img width="1440" alt="console" src="https://user-images.githubusercontent.com/19791710/159396961-c4d63d0f-a06e-4462-9c98-d0d8641a6de6.png">

<video src="https://user-images.githubusercontent.com/19791710/159398423-f183a57d-3768-47e2-a6e8-7c7890a82842.mov" controls="controls">
</video>

### 支持深色模式

<img width="1440" alt="theme" src="https://user-images.githubusercontent.com/19791710/160244842-30cbb748-327f-4c94-a9df-d1cce7a6a2bd.png">

<img width="1440" alt="theme" src="https://user-images.githubusercontent.com/19791710/160244816-4b57fe79-1ee3-45cc-8715-e21dcd593d8c.png">

<img width="1440" alt="console" src="https://user-images.githubusercontent.com/19791710/160244821-2eecea82-5544-41f7-8d25-52d6a558a68a.png">

## 如何使用

当修改完样式后，点击**下载主题**按钮，会下载一份压缩包，压缩包中包含了 `vant-theme.json`、`variables.css`、`config-provider.json` 这三个文件。其中 `vant-theme.json` 是 `vant-theme` 配置文件，你可以通过**导入主题**的方式将主题进行导入。`variables.css`、`config-provider.json` 是样式变量配置文件，你可以通过 [CSS 覆盖 ](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/config-provider#tong-guo-css-fu-gai)的方式，或者 [ConfigProvider 覆盖 ](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/config-provider#tong-guo-configprovider-fu-gai)的方式来配置你的主题。具体请查看官方文档：[定制主题](https://vant-contrib.gitee.io/vant/#/zh-CN/config-provider#ding-zhi-zhu-ti) 。

<img width="1440" alt="console" src="https://user-images.githubusercontent.com/19791710/159399640-e3101455-bc1e-472a-aaaa-157ce26007d1.png">

`vant-theme.json`文件内容：

<img width="1440" alt="vant-theme.json content" src="https://user-images.githubusercontent.com/19791710/159399918-78246cf0-b402-427c-a68c-8679f4875e88.png">

`variables.css`文件内容：

<img width="1440" alt="variables.css content" src="https://user-images.githubusercontent.com/19791710/159399997-1e8c296a-47b9-4787-a043-7f81b1446fad.png">

`config-provider.json`文件内容：

<img width="1440" alt="config-provider.json content" src="https://user-images.githubusercontent.com/19791710/159399982-20762726-1ddd-4c2f-a62f-8a31a00ece0d.png">

## 其他

如果这个工具对你有帮助哈，希望给个 star 鼓励一下哈~
