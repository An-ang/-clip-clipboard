# clipboard
## 一个用来复制图片的工具包,采用promise封装
## 安装
```
npm i clipboard-img -S
```
## 使用
```
import {copy} from 'clipboard-img'
```
## 支持情况
```
copy('可以是一个图片链接').then()
copy('可以是一个图片Dom元素(img标签)').then()
copy('可以是一个包含多个dom的dom元素').then()
copy('可以是一个base64编码的图片').then()
```
