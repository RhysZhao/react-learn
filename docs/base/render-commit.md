<!--
 * Author  rhys.zhao
 * Date  2023-06-12 08:37:06
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-12 09:16:24
 * Description
-->

# 渲染和提交

在 React 应用中一次屏幕更新都会发生以下三个步骤：

**1. 触发**

也就说触发一次渲染。有两种原因会导致组件渲染：

- **组件的初次渲染**: 当应用启动时，会触发初次渲染。也就是 `render` 方法的执行。

```js
import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<Image />); // 初次渲染
```

- **组件或者其祖先的状态发生了改变**

一旦组件被初始渲染后，我们可以通过 `set函数`**更新组件状态**来触发之后的渲染。

**2. 渲染**

在我们触发渲染后，React 会调用组件来确定要在屏幕上显示的内容。`渲染中` 即 React 在调用你的组件函数。

- **在进行初次渲染时, React 会调用根组件。**

- **对于后续的渲染, React 会调用 内部状态更新 触发了渲染 的函数组件。**

**3. 提交**

在渲染（调用）您的组件之后，React 将会修改 DOM。

- 对于初次渲染， React 会使用 `appendChild()` DOM API 将其创建的所有 DOM 节点放在屏幕上。

- 对于再次渲染， React 将应用最少的必要操作（在渲染时计算），以使得 DOM 与最新的渲染输出相互匹配。

  **React 仅在渲染之间存在差异时才会更改 DOM 节点。** 如果渲染结果与上次一样，那么 React 将不会修改 DOM。

在渲染完成并且 React 更新 DOM 之后，浏览器就会重新绘制屏幕。
