<!--
 * Author  rhys.zhao
 * Date  2023-06-02 18:15:33
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-08 18:27:12
 * Description
-->

# 自定义 hook

自定义 hook 是一个函数，它允许我们在组件之间共享逻辑。

在使用自定义 hook 之前，我们复用的最小单元是组件。使用自定义 hook 之后，我们可以方便的复用组件里的逻辑。

## 基本使用

编写自定义 hook 需要遵循以下规则：

1. 命名必须是 use 后跟大写字母，比如`useLogin`, `useForceUpdate`

2. 自定义 hook 中至少要使用一个其他 hook

比如我们写一个强制刷新的 hook:

```js
import { useState } from 'react';
function useForceUpdate() {
  const [, setForceState] = useState({});
  return () => setForceState({});
}
```

在组件里使用：

```js
export default function App() {
  const forceUpdate = useForceUpdate();
  console.log('render');
  return <button onClick={forceUpdate}>强制刷新</button>;
}
```

当我们点击 `强制刷新` 按钮的时候，会打印 render。也就是`App`组件重新渲染了。

## 何时使用

就个人理解，我觉得有两种情况比较适合使用自定义 hook:

1. 有经常复用的组件逻辑时

2. 使用自定义 hook 能够让代码逻辑，数据流向更清晰
