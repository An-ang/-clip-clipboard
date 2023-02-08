# clipboard
## a tool for copying images
## install
``` javaScript
npm i clipboard-img -S
```
## use
``` javaScript
import {copy} from 'clipboard-img'
```
## support
``` javaScript
copy('可以是一个图片链接').then()
copy('可以是一个图片Dom元素(img标签)').then()
copy('可以是一个包含多个dom的dom元素').then()
copy('可以是一个base64编码的图片').then()
```
## Simple example

``` javaScript
<div id="con">
    <img src="" />
    <h1>复制复制</h1>
</div>

// 脚本中
copy(document.getElementById('con')).then()

```
## compatibility
[浏览器兼容]<https://caniuse.com/?search=%20Navigator%20API%3Aclipboard>