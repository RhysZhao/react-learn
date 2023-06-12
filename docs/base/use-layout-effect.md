<!--
 * Author  rhys.zhao
 * Date  2023-06-02 18:16:33
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-12 09:04:40
 * Description
-->

# useLayoutEffect

useLayoutEffect 跟 useEffect 唯一的不同就是二者的**执行时机不同。**

前面说过，对于一次更新有三个阶段：**触发**、**渲染(render)** 和 **提交(commit)**。

render 阶段主要是组件函数执行，jsx 转化为 Fiber 等工作。

commit 阶段主要是把更改反映到浏览器上，类似 `document.appendChild()`之类的操作。

**useEffect 在 commit 阶段完成后执行。**

**useLayoutEffect 在 commit 阶段之前执行。**

由于 commit 阶段主要是页面更新的操作，因此`useLayoutEffect` 会阻塞页面更新。

比如这个[例子](https://codesandbox.io/s/use-layout-effect-4q52gd?file=/src/App.js):

```js
import { useState, useEffect, useLayoutEffect } from 'react';

export default function App() {
  const [text, setText] = useState('11111');

  useEffect(() => {
    console.log('useEffect');
    let i = 0;
    while (i < 100000000) {
      i++;
    }
    setText('00000');
  }, []);

  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect");
  //   let i = 0;
  //   while (i < 100000000) {
  //     i++;
  //   }
  //   setText("00000");
  // }, []);

  return <h1>{text}</h1>;
}
```

使用 `useEffect` 页面会有明显的从 `11111` 变成 `00000` 的过程。使用 `useLayoutEffect` 则不会。

让我们梳理下执行流程：

```
useEffect: render => commit(反映到页面上) => useEffect => render => commit(反映到页面上)

useLayoutEffect: render => useLayoutEffect => render => commit(反映到页面上)
```

`useLayoutEffect` 执行后发现 state 更新，就不再把 `11111` 反映到页面上了，直接再次执行 react 渲染。因此我们没有看到从 `11111` 闪烁成 `00000` 的过程。
