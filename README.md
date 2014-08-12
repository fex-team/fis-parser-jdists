fis-parser-region
=================

fis 插件 - 处理区块裁剪

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

## 使用

安装 `npm install fis-parse-region`

```javascript
fis.config.set('modules.parser.js', 'fis-parser-region');
fis.config.set('settings.parser', [{
  "remove-region": ["debug"]
}]);
```
