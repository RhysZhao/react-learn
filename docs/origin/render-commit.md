<!--
 * Author  rhys.zhao
 * Date  2023-06-20 14:08:15
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-21 20:12:22
 * Description
-->

# render & commit

## 分析

前面我们已经把 render 从递归修改成了 fiber 架构。

每次我们处理一个 fiber 时，我们都会向 DOM 添加一个新节点。也就是说，在我们完成渲染整棵树之前，浏览器随时会中断我们的工作。在这种情况下，用户将看到一个不完整的 UI。这对于用户体验是极不友好的。

因此，我们把 dom 添加到 parent 这部分内容单独提取出来，等工作单元执行结束时，再统一添加。这样浏览器就会一次性把所有 UI 绘制出来，而不是不完整的 UI。

然后，让我们整理下需要做的工作：

```js
function render(element, container) {
  // todo: 使用wipRoot保存根fiber   wipRoot: workInProgressRoot
  nextWorkUnit = {
    dom: container,
    props: { children: [element] }
  };
}

// ...
function commitRoot() {
  // todo: 将根fiber下的所有fiber的dom 递归 添加到其父fiber的dom中去
}

// ...
function workLoop(deadline) {
  while (nextWorkUnit && deadline.timeRemaining() > 1) {
    nextWorkUnit = performUnitOfWork(nextWorkUnit);
  }

  // todo: 当工作单元为空时，执行commitRoot

  requestIdleCallback(workLoop);
}
```

## 实现

接下来，我们完善下代码：

```js
function render(element, container) {
  // 使用wipRoot保存根fiber   wipRoot: workInProgressRoot
  wipRoot = {
    dom: container,
    props: { children: [element] }
  };
  nextWorkUnit = wipRoot;
}

function commitRoot() {
  commitWork(wipRoot.child);
  wipRoot = null;
}

// 将fiber的dom 递归 添加到其父fiber的dom中去
function commitWork(fiber) {
  if (!fiber) {
    return;
  }
  const domParent = fiber.parent.dom;
  domParent.appendChild(fiber.dom);
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function workLoop(deadline) {
  while (nextWorkUnit && deadline.timeRemaining() > 1) {
    nextWorkUnit = performUnitOfWork(nextWorkUnit);
  }

  // 当工作单元为空时，执行commitRoot
  if (!nextWorkUnit && wipRoot) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
}
```

我们再修改下 src/index.js 里的代码，把 jsx 写复杂一些。

```js
import miniReact from './mini-react/react';
import miniReactDOM from './mini-react/react-dom';

/** @jsx miniReact.createElement */
const element = (
  <div title='hello'>
    <h1>hello</h1>
    <p>hello world!</p>
  </div>
);

const container = document.getElementById('root');
miniReactDOM.render(element, container);
```

不出意外，正常显示 hello 与 hello world!

## 疑问

这里，可能有人会疑问：前面因为递归渲染慢的问题，我们拆分成了一个个工作单元，怎么这里又递归添加 dom 了呢？

实际上，浏览器执行 createElement、appendChild 等函数是非常快的。比如下面这个例子：

```js
const root = document.getElementById('root');

console.time('createElement');
for (let i = 0; i < 1000; i++) {
  const node = document.createElement('div');
  const textNode = document.createTextNode('');
  textNode.nodeValue = 'hello';
  node.appendChild(textNode);

  root.appendChild(node);
}

console.timeEnd('createElement');
```

我们创建了 1000 个 `div` 节点，每个 `div` 节点里添加上文本节点，每个文本节点的 `nodeValue` 是'hello'字符串。其实就是模拟我们 `commitRoot` 的过程, 只不过这里多了 createElement、createTextNode 操作。

```
createElement: 2.30126953125 ms
```

结果仅用了 2.3ms。

因此，我们大可不必担心 `commitRoot` 会带来浏览器卡顿。真正耗时的是 React 的 render 操作。不过已经被我们拆分成一个个工作单元了。
