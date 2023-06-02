<!--
 * Author  rhys.zhao
 * Date  2023-06-02 09:53:34
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-02 19:30:32
 * Description
-->

# useRef

提起 `useRef`，很多人都会把它跟 DOM 联系起来。其实 useRef 不止可以用来存储 DOM 元素。它的定义是：
**如果希望组件记住某些信息，但又不想让这些信息触发新的渲染，可以使用 useRef。**
比如下面这个例子：

```js
import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

function Counter() {
  const [count, setCount] = useState(0);

  const onStop = () => {
    clearInterval(timer);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.counter}>
      <h1>{count}</h1>
      <button onClick={onStop}>停止</button>
    </div>
  );
}
```

## 使用 ref 操作 DOM
