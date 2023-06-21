<!--
 * Author  rhys.zhao
 * Date  2023-06-02 10:18:48
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-21 14:15:24
 * Description
-->

# render 原理

## render 函数分析

render 函数无外乎是把我们 React.createElement 生成的对象**转换成真实的 DOM 结构，并添加到容器 DOM 中去**。

拿 `<div title='hello'>hello world!</div>` 举例，我们的`miniReact.createElement`生成的对象，结构如下：

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

那我们的 `render(element, container)` 函数要做的有四步：

1. 将 element 转换成真实的 dom

2. 将 element 的 children 转换为真实 dom 并添加到 element 生成的 dom 中上

3. 将 element 的非 children 属性添加到真实 dom 上

4. 将 element 生成的 dom 添加到 container 中

element 是个树形结构，我们不仅要 element 把转换成真实的 DOM 结构，添加到容器 DOM 中去，还要把他的 children 转换为真实 dom 并添加到 element 生成的 dom 中去。很明显可以看出步骤 2 就是 render 函数本身。也就是**递归调用**。我们把需要做的事情写出来：

```js
// react-dom.js
/**
 * 将 element 转换成真实 dom 并添加到 container 中
 * @param {object} element ReactElement对象
 * @param {*} container 容器 dom
 */
function render(element, container) {
  // todo: 将element转换成真实的dom
  // todo: 将element的children转换为真实dom并添加到container中
  // todo: 将element的非children属性添加到真实dom上
  // todo: 将element生成的dom添加到container中
}

export default { render };
```

## 手写 render

接下来，我们把这个 4 个步骤的代码补上就行了。

```js{9,12-14,17-21,25}
// react-dom.js
/**
 * 将 element 转换成真实 dom 并添加到 container 中
 * @param {object} element ReactElement对象
 * @param {*} container 容器 dom
 */
function render(element, container) {
  // 将element转换成真实的dom
  const dom = element.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(element.type);

  // 将element的children转换为真实dom并添加到container中
  element.props.children.forEach((child) => {
    render(child, dom);
  });

  // 将element的非children属性添加到真实dom上
  Object.keys(element.props).forEach((key) => {
    if (key !== 'children') {
      dom[key] = element.props[key];
    }
  });

  // 将element生成的dom添加到container中

  container.appendChild(dom);
}

export default { render };
```

## 测试效果

把 render 函数修改成我们刚完成的：

```js{9}
import miniReact from './mini-react/react';
import miniReactDOM from './mini-react/react-dom';

/** @jsx miniReact.createElement */
const element = <div title='hello'>hello world!</div>;
console.log(element);

const container = document.getElementById('root');
miniReactDOM.render(element, container);
```

不出意外的话，浏览器能够正常显示 `hello world!` 了。
