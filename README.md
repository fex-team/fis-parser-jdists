fis-parser-jdists
=================

[![Build Status](https://img.shields.io/travis/fex-team/fis-parser-jdists/master.svg)](https://travis-ci.org/fex-team/fis-parser-jdists)
[![NPM version](https://img.shields.io/npm/v/fis-parser-jdists.svg)](http://badge.fury.io/js/fis-parser-jdists)

fis 插件 - jdists 代码块预处理

## 背景

一般的项目会在多个地方进行发布，比如线上环境、内网环境、本地环境，除了配置以外。我们还希望能将特定的代码区块裁剪掉。

## 定义

### js 区域定义

```javascript
/*<debug>*/
console.log(debug);
/*</debug>*/
```

### css 区域定义

```css
#panel {
/*<debug>*/
  background-color: red;
/*</debug>*/
}
```

### html 区域定义

```html
<!--debug-->
<span>测试版本，请勿对外公开</span>
<!--/debug-->
```

### 函数注释字符 区域定义

```js
function() {/*!
<div>
  <a href="#{url}">#{title}</a>
  <button>cancel</button><button>download</button>
</div>
  */}
```

## 使用

### fis2

安装 `npm install fis-parser-jdists`

```javascript
fis.config.set('modules.parser.js', 'fis-parser-jdists');
fis.config.set('settings.parser', [{
  "remove": "debug,test"
}]);
```

### fis3 

```
fis.match('*.js', {
  parser: fis.plugin('jdists', {
    remove: "debug,test"
  })
})
```

更详细的用法请参考：https://github.com/zswang/jdists
