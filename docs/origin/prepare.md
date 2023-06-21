<!--
 * Author  rhys.zhao
 * Date  2023-06-20 14:06:06
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-21 11:03:53
 * Description
-->

# 准备工作

首先，我们使用 create-react-app 创建一个项目为 `react-demo`

```
npm init react-app react-demo
```

然后，修改 React，ReactDOM 的版本为 16.8

```
npm i react@16.8 react-dom@16.8 -S
```

接着，我们修改 `src/index.js`里的内容，如下：

```js
import React from 'react';
import ReactDOM from 'react-dom';

const element = <div title='hello'>hello world!</div>;
console.log(element);

const container = document.getElementById('root');

ReactDOM.render(element, container);
```

这里我们修改了原有的代码，将 render 改成了 `ReactDOM@16.8` 的用法。此时页面应该会显示 `hello, world!`,并在控制台打印出了 element。

后面我们会在这个项目里手写和测试 React。
