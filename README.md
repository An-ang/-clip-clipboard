# clipboard
## 一个用来复制图片的工具包,采用promise封装
## 安装
``` javaScript
npm i clipboard-img -S
```
## 使用
``` javaScript
import {copy} from 'clipboard-img'
```
## 支持情况
``` javaScript
copy('可以是一个图片链接').then()
copy('可以是一个图片Dom元素(img标签)').then()
copy('可以是一个包含多个dom的dom元素').then()
copy('可以是一个base64编码的图片').then()
```
## 简易示例

``` javaScript
<div id="con">
    <img src="" />
    <h1>复制复制</h1>
</div>

// 脚本中
copy(document.getElementById('con')).then()

```
## 兼容性
[浏览器兼容]<https://caniuse.com/?search=%20Navigator%20API%3Aclipboard>