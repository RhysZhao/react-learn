<!--
 * Author  rhys.zhao
 * Date  2023-06-02 10:18:33
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-21 11:43:59
 * Description
-->

# JSX

## JSX 的本质

我们都知道 React 中独特的 JSX 结构，可以像写 js 一样写 html 结构。那么 JSX 到底是什么呢？

```js
const element = <div title='hello'>hello world!</div>;
```

使用 babel 在线编译的地址[https://www.babeljs.cn/repl](https://www.babeljs.cn/repl)
测试，我们会发现 JSX 被编译成了 `React.createElement`

```js
const element = /*#__PURE__*/ React.createElement(
  'div',
  {
    title: 'hello'
  },
  'hello world!'
);
```

其实, JSX 就是 `React.createElement` 的语法糖。

我们手写 React 的第一步就是实现 `React.createElement` 函数。

## React.createElement 做了什么

通过打印 element，我们可以发现 element 是一个 object。也就是说，`React.createElement`执行后返回了一个对象。

我们可以看到，`React.createElement` 接收了三个参数 type，props 和 ...children, 最终返回了一个对象。对象里面有多个属性，我们这里只关心 type 和 props。
返回结构里，children 成为了 props 的一个属性。

## 手写 React.createElement

我们在 src 下新建 `mini-react` 目录，并创建两个文件 `react.js` 和 `react-dom.js`。将来我们手写 React 相关的方法会放到这两个文件里面。

在 react.js 添加如下内容：

```js
// react.js
function createElement(type, props, ...children) {
  return {
    type,
    props: { ...props, children }
  };
}

export default { createElement };
```

这里，我们创建了一个对象，且把 children 属性添加到了 props 里。可是， children 可能存在纯文本的情况。DOM 针对标签元素和文本元素的处理方式不太一样(在 render 原理会深入讲解)，因此我们做个区分：文本元素类型是 `TEXT_ELEMENT`，且有一个 `nodeValue` 属性，是它本身这个字符串。

然后我们再完善下代码，如下：

```js
// react.js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (typeof child === 'object' ? child : createTextElement(child)))
    }
  };
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  };
}

export default { createElement };
```

在 `src/index.js` 里引用 `mini-react`，并使用魔法注释 `/** @jsx miniReact.createElement */`。这句注释能够让 babel 编译下面的 JSX 的时候，使用我们的`miniReact.createElement`方法。

```js{4-5,7}
import React from 'react';
import ReactDOM from 'react-dom';

import miniReact from './mini-react/react';
import miniReactDOM from './mini-react/react-dom';

/** @jsx miniReact.createElement */
const element = <div title='hello'>hello world!</div>;
console.log(element);

const container = document.getElementById('root');
// ReactDOM.render(element, container);
```

此时，查看我们打印的 element,它的结构应如下：

```js
{
    "type": "div",
    "props": {
        "title": "hello",
        "children": [
            {
                "type": "TEXT_ELEMENT",
                "props": {
                    "nodeValue": "hello world!",
                    "children": []
                }
            }
        ]
    }
}
```

至此，我们完成了 `React.createElement`函数的手写。
