<!--
 * Author  rhys.zhao
 * Date  2023-06-02 09:55:21
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-02 16:56:56
 * Description
-->

# memo

在 React 中，**父组件的重新渲染会导致子组件的重新渲染**。memo 允许我们在 props 不变的情况下避免渲染子组件。

## 语法

`memo(Component, arePropsEqual?)`：包装一个组件，并获得改组件的缓存版本。

`Component`: 要包装的组件。
`arePropsEqual(prevProps, nextProps)`: 接收两个参数，前一次的 props 和后一次的 props。返回值是一个布尔类型，`true`表示新旧 props 相等，`false`表示两次 props 不相等。

下面用一个[例子](https://codesandbox.io/s/memo-xzwbym)感受它的用法。

## 缓存子组件的例子

```js
import React, { useState, memo } from 'react';

function Hello({ text }) {
  console.log('子组件重新渲染');
  return <h1>{`hello ${text}!`}</h1>;
}

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

      <Hello text={text} />
      <button onClick={onChangeText}>改变子组件文本</button>
    </>
  );
}
```

当我们点击 `+1`按钮时，会打印 `子组件重新渲染`。也就是说当我们的父组件更新的时候，子组件也会相应更新。

但是如果我们用 memo 来包裹子组件，代码如下：

```js
import React, { useState, memo } from 'react';

const Hello = memo(function Hello() {
  console.log('子组件重新渲染');
  return <h1>Hello, world!</h1>;
});

// ...
```

当我们点击 `+1`按钮时， `子组件重新渲染` 不会再打印。也就说我们通过 `memo` 实现了子组件的缓存。

需要注意的是，**当上下文或者子组件内部状态变化的时，依然会触发更新。** memo 缓存组件只是针对 props 不发生改变的情况。

## prop 是对象、数组或函数的情况

当传递给子组件的 prop 是对象、数组或函数时，由于它们是**引用类型**，父组件重新渲染会导致它们被重新定义。也就是说，props 发生了变化。这种情况下，依然会触发子组件更新。

比如下面这个[例子](https://codesandbox.io/s/memo-yin-yong-lei-xing-gxdfqt)：

```js
import React, { useState, memo } from 'react';

const List = memo(function List({ list }) {
  console.log('子组件重新渲染');
  return (
    <>
      {list.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </>
  );
});

export default function App() {
  const [title, setTitle] = useState('父组件');
  const [todoList, setTodoList] = useState([
    { id: 1, content: '吃饭', isDone: true },
    { id: 2, content: '睡觉', isDone: false },
    { id: 3, content: '洗澡', isDone: true },
    { id: 4, content: '刷牙', isDone: false },
    { id: 5, content: '刷抖音', isDone: false }
  ]);

  const changeTitle = () => {
    setTitle('父组件' + Math.random().toFixed(2));
  };

  const list = todoList.filter((item) => item.isDone);

  return (
    <>
      <h1 onClick={changeTitle}>{title}</h1>
      <List list={list} />
    </>
  );
}
```

点击父组件，依然会触发子组件渲染。这是由于每次父组件渲染都会重新定义一个变量 `list`, 两次的 `list` 不是同一个引用。

这种情况要怎么处理才能避免子组件渲染呢？有两种办法：

**1. 使用比较函数**

我们可以给 memo 添加第二个参数`arePropsEqual`:

```js
// ...
(prevProps, nextProps) => {
  return (
    prevProps.list.length === nextProps.list.length &&
    prevProps.list.every((item) => {
      let allOk = true;
      for (let key in item) {
        if (prevProps[key] !== nextProps[key]) {
          allOk = false;
        }
      }
      return allOk;
    })
  );
};
//   ...
```

这样，当修改 title 时，list 的内容没有变化，并不会触发子组件更新。

> 个人建议，尽可能避免使用比较函数。主要出于两个考虑：一来别人需要阅读你的比较函数来确定你的组件更新规则；二来我们重写比较函数就意味着每次父组件更新都会执行比较函数。如果比较函数比较复杂且耗时，那么使用比较函数就不再是好的选择了。

**2. 使用 useCallback 或者 useMemo 来缓存引用类型**

useCallback 用来缓存一个函数。在这个例子里，使用 useMemo 比较合适。

修改 list 的定义，代码如下：

```js
// ...
// 使用useMemo缓存list, 这样title改变不会再触发子组件渲染
const list = useMemo(() => todoList.filter((item) => item.isDone), [todoList]);
// ...
```

这样，由于我们缓存了 `list`, 当修改 `title` 时，`list` 仍为同一个 `list`，并不会触发子组件更新。
