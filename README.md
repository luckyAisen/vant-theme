## 简介

`vant-theme`是一个 `vant` 组件库**在线主题预览工具**，如果你有`vant`组件库**定制主题、动态切换主题**的需求，可以使用此工具。

`vant-theme`可以修改`vant`组件库所提供的**样式变量**，并且可以及时反馈修改过后样式。

**目前只支持 `3.x`版本。**

## 如何使用

当修改完样式后，点击**下载主题文件**按钮，会得到一份`css`文件。将这份`css`文件引入到项目中，就可以覆盖 `vant` 官方默认样式了。具体请查看官方文档：[定制主题](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/config-provider#ding-zhi-zhu-ti) 。目前暂不支持 [ConfigProvider](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/config-provider#tong-guo-configprovider-fu-gai) 这种方式，后面在下载主题文件时会加入。

下载主题文件按钮所在的位置：

![download button](https://user-images.githubusercontent.com/19791710/128593885-e51dbdae-23d6-418d-a1f2-d16abf16b695.png)

下载后得到的样式文件内容：

![download content](https://user-images.githubusercontent.com/19791710/128594117-613584aa-62e5-4fa3-81d4-ced450c9fabf.png)

## 实现思路

`vant` 在 `3.x`版本使用了 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式。`vant-theme`就是通过样式覆盖的形式实现的。

## 预览

![theme](https://user-images.githubusercontent.com/19791710/128590193-93931af6-f5fb-4407-ac51-4d8a82c2b6bb.png)

![base](https://user-images.githubusercontent.com/19791710/128590868-fed772db-038f-485a-a2de-82a43acfe4c0.gif)

![button](https://user-images.githubusercontent.com/19791710/128592800-554eafc6-bc0b-42c3-a76e-20c65b2c12be.gif)

## 关于 2.x 版本的主题预览思路

`vant-theme`**目前只支持 `3.x`版本。**

如果你想自己做一个`2.x`版本的主题预览，这里提供一个思路：可以在后端把所有组件的样式进行编译，编译完成后把编译结果（字符串）返回到到前端，前端进行样式替换。类似于 [elementUI](https://element.eleme.cn/#/zh-CN/theme/preview) 的做法