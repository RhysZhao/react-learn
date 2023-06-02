<!--
 * Author  rhys.zhao
 * Date  2023-06-02 09:55:29
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-02 18:12:19
 * Description
-->

# useCallback

useMemo 允许我们**缓存一个函数**。当再次渲染的时候，返回上一次的函数而不是重新定义。

## 语法

`const cachedFn = useCallback(fn, dependencies)`

- `fn`: 缓存的函数。

- `dependencies`: 依赖项。当依赖项变化时，重新计算结果。

## 使用场景

1. 防止组件重新渲染

当我们传给子组件的属性有函数的时候,比如下面这个[例子](https://codesandbox.io/s/usecallback-uurypx?file=/src/App.js:0-592)：

```js
import React, { useState, memo, useMemo, useCallback } from 'react';

const Hello = memo(function Hello({ text, onClick }) {
  console.log('子组件重新渲染');
  return <h1 onClick={onClick}>{`hello ${text}!`}</h1>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const onAddCount = () => {
    setCount((count) => count + 1);
  };

  const onChangeText = () => {
    setText('world');
  };

  return (
    <>
      <span>{count}</span>
      <button onClick={onAddCount}>+1</button>

      <Hello text={text} onClick={onChangeText} />
    </>
  );
}
```

当我们点击 count 会造成子组件的渲染，这是因为 onChangeText 是引用类型，每次父组件渲染，它都被重新定义。这导致了每次 props 都发生了变化。我们可以使用 useCallback 来缓存 onChangeText:

```js
// 使用useCallback来缓存onChangeText
const onChangeText = useCallback(() => {
  setText('world');
}, []);
```

使用 useMemo 也可以实现相同的结果，只不过需要再多包一层函数：

```js
// 使用useMemo缓存onChangeText
const onChangeText = useMemo(() => {
  return () => {
    setText('world');
  };
}, []);
```

2. 优化自定义 hook
   如果您正在编写自定义 Hook，建议将它返回的任何函数包装到 useCallback：

```js
function useRouter() {
  const { dispatch } = useContext(RouterStateContext);

  const navigate = useCallback(
    (url) => {
      dispatch({ type: 'navigate', url });
    },
    [dispatch]
  );

  const goBack = useCallback(() => {
    dispatch({ type: 'back' });
  }, [dispatch]);

  return {
    navigate,
    goBack
  };
}
```

这确保了 Hook 的使用者可以在需要时优化他们自己的代码。

## 争议

有人认为应当给所有的函数包上 useCallback, 我并不认同。主要是出于以下两个考虑：

1. 使用 useCallback 后代码可读性变差
2. 创建一个函数的性能消耗几乎可以忽略不急，不应作为优化点
