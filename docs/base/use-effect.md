<!--
 * Author  rhys.zhao
 * Date  2023-06-02 09:54:22
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-08 17:29:11
 * Description
-->

# useEffect

useEffect 是使用频率仅低于 useState 的 hook。很多人把 useEffect 当做监听器来使用。这是不太妥当的。

useEffect 是用来处理**由渲染本身而不是点击事件引起的副作用**。

## 基本用法

`useEffect(setup, dependencies?)`

- `setup` 函数式逻辑处理。可以返回一个清理函数

- `dependencies` 是依赖项，当依赖项变化会执行, 会执行`setup`函数

## 值得注意的几个问题

### 1. useEffect 的执行时机

- **useEffect 在组件挂载完成后，也就是说 DOM 更新完毕后，按照定义的顺序执行。**

比如这个[例子](https://codesandbox.io/s/use-effect-order-0p5s30):

```js
import React, { useState, useEffect } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('-- 空依赖1，useEffect执行 --');
  }, []);

  useEffect(() => {
    console.log('-- 非空依赖，useEffect执行 --', number);
  }, [number]);

  useEffect(() => {
    console.log('-- 空依赖2，useEffect执行 --');
  }, []);

  console.log('渲染');

  return (
    <>
      <h1>{number}</h1>
    </>
  );
}
```

结果打印为：

```
渲染
-- 空依赖1，useEffect执行 --
-- 非空依赖，useEffect执行 -- 0
-- 空依赖2，useEffect执行 --
```

执行顺序依次为：

所有 DOM 更新完毕 => 空依赖 1 useEffect 执行 => 非空依赖 useEffect 执行 => 空依赖 2 useEffect 执行

- **useEffect 的清理函数在组件卸载期间调用或者下次运行之前调用。** 比如下面这个[例子](https://codesandbox.io/s/use-effect-clear-7w6f9d):

```js
import React, { useState, useEffect } from 'react';

function Title() {
  const [title, setTitle] = useState('这里是标题');

  useEffect(() => {
    console.log('空依赖，useEffect执行');
    return () => console.log('空依赖，useEffect清理函数执行');
  }, []);

  useEffect(() => {
    console.log('非空依赖，useEffect执行');
    return () => console.log('非空依赖，useEffect清理函数执行');
  }, [title]);

  return <h1 onClick={() => setTitle((title) => `${title}1`)}>{title}</h1>;
}

export default function App() {
  const [titleVisible, setTitleVisible] = useState(true);

  return (
    <>
      {titleVisible && <Title />}
      <button onClick={() => setTitleVisible(!titleVisible)}>{`${titleVisible ? '隐藏' : '显示'}标题`}</button>
    </>
  );
}
```

由前面我们知道，组件挂载完成后才会按照顺序执行 useEffect, 因此打印结果是：

```
空依赖，useEffect执行
非空依赖，useEffect执行
```

然后点击标题，会打印：

```
非空依赖，useEffect清理函数执行
非空依赖，useEffect执行
```

最后，我们点击 隐藏标题 按钮，会打印：

```
空依赖，useEffect清理函数执行
非空依赖，useEffect清理函数执行
```

也就是说：

**空依赖的 useEffect 只会在组件挂载完成后执行，它的清理函数只会在组件卸载后执行。**

**非空依赖的 useEffect 不仅会在组件挂载完成后执行，还会在依赖发生变化时候执行。它的清理函数不仅会在组件卸载后执行，还会在依赖变化，下次运行之前调用。**

### 2. 依赖项

- 依赖项为空，则只会在组件挂载完成后执行一次。当组件再次更新时候，不会执行。

- 如果 React 的所有依赖项都具有与上次渲染期间相同的值，则 React 将跳过 Effect

- 您不能“选择”您的依赖项。它们由 Effect 中的代码决定。

- 依赖项需要是能够触发组件更新的变量，比如 state 或者 props

## 不需要 effect 的情况

effect 是 React 的应急方案。它允许我们能够与一些外部系统同步，比如 ajax 请求和浏览器 DOM。如果不涉及外部系统，则不需要 effect。删除不必要的 effect 可以使代码更容易理解，运行速度更快并且不容易出错。

下面是几种常见的不需要 effect 的情况：

1. 如果您可以在渲染期间计算某些东西，则不需要 Effect。
2. 要缓存昂贵的计算，请添加 useMemo 而不是 useEffect.
3. 要重置整个组件树的状态，请将不同的传递 key 给它。
4. 要重置特定位的状态以响应道具更改，请在渲染期间设置它。
5. 因为显示组件而运行的代码应该在 Effects 中，其余的应该在事件中。
6. 如果您需要更新多个组件的状态，最好在单个事件期间执行。
7. 每当您尝试同步不同组件中的状态变量时，请考虑提升状态。
8. 您可以使用 Effects 获取数据，但您需要实施清理以避免竞争条件。

具体例子可以参考官网[https://react.docschina.org/learn/you-might-not-need-an-effect#caching-expensive-calculations](https://react.docschina.org/learn/you-might-not-need-an-effect#caching-expensive-calculations)

我的理解就是，尽可能少用 useEffect，除非不用不行的情况。
