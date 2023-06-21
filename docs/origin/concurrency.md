<!--
 * Author  rhys.zhao
 * Date  2023-06-02 10:19:04
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-21 14:56:33
 * Description
-->

# 并发

前面我们好像已经完成了 React 的基本功能。然而，这部分代码不够好。

我们浏览器一般都是 60HZ 的，也就是说，一秒钟会有 60 帧。换算下来，每帧画面只有 16.6ms 的时间。也就是说，这 16.6ms 需要 执行 js 脚本、计算样式、绘制等工作。

倘若我们 js 的执行时间超过 16.6ms，就没有时间来进行其他的工作了。这就会造成**卡帧**。

前面我们的 render 方法是递归实现的。一旦我们开始执行 render，将无法中止，直到执行完毕。**对于 React 来说，整个应用都是一棵 JSX 树**。如果我们递归执行，整棵树的 render 是需要很长时间的。

这也就意味着我们要卡帧很长时间，这部分时间如果浏览器需要做高优先级的事情，比如处理用户输入或保持动画流畅，它必须等到渲染完成。

所以我们要把工作分解成小的单元，当我们完成每个单元后，如果还有其他高优先级的事情，我们会让浏览器中断渲染。

## requestIdleCallback

window 下有个方法 `requestIdleCallback`,里面有个回调函数。会在浏览器空闲时执行这个回调。

```js
function performUnitOfWork(nextWorkUnit) {}

let nextWorkUnit = null;

// 工作循环，有空闲时间就执行下一个工作单元
function workLoop(deadline) {
  while (nextWorkUnit && deadline.timeRemaining() > 1) {
    nextWorkUnit = performUnitOfWork(nextWorkUnit);
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);
```

> React 并没有 `requestIdleCallback`,它使用的是调度器 Scheduler。这里使用 `requestIdleCallback` 并不影响我们理解它的原理。

接下来，我们还需要将工作拆分成一个个小单元(Fiber)，并实现 `performUnitOfWork`函数。
