<!--
 * Author  rhys.zhao
 * Date  2023-06-02 09:53:39
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-02 10:27:14
 * Description
-->

# 纯函数组件

React 官方推荐**全面拥抱 hooks**。这也就意味着，类组件已经是过去式了。这一点从官方文档也可以看出，新的官方文档已经不再介绍和使用类组件了。

部分 JavaScript 函数是存粹的，这类函数被称为纯函数。官方建议**纯函数组件**，也就是要求我们以纯函数来编写组件。

纯函数通常具有以下特征：

- 只负责自己的工作。它不会更改函数调用前就存在的对象或变量。
- 输入相同，则输出相同。给定相同的输入，纯函数总是返回相同的结果。

可简单的理解为，**函数的执行不依赖且不改变外界**。纯函数的优点是没有副作用，可移植性好。在 A 项目能够用，B 项目想要使用直接拿过来就好了。可以通过下面这几个例子感受下纯函数的概念：

```js
// 纯函数
function add(a, b) {
    return a + b;
}

// 非纯函数，函数执行依赖外界变量all
let all = 100;
function plus(a) {
    return 100 - a;
}

// 非纯函数，函数执行改变了外界变量obj
let obj = {};
function fun(a) {
    obj.a = a;
    return a;
}

// 非纯函数，函数的执行依赖外界getCount()
async function(a, b) {
  const c = await getCount(); // 副作用
  return a + b +c;
}
```

一个非纯函数组件的例子：

```js
let guest = 0;

function Cup() {
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```

页面显示的结果是：

```js
Tea cup for guest #2

Tea cup for guest #4

Tea cup for guest #6
```

在上面这个例子中，Cup 是非纯函数组件，它依赖于外界 `guest` 变量。`guest` 是模块作用域变量，长存于内存。因此每次使用 Cup 组件都会产生意想不到的结果。
