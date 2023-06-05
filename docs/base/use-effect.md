<!--
 * Author  rhys.zhao
 * Date  2023-06-02 09:54:22
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-05 18:48:51
 * Description
-->

# useEffect

## 基本用法

effect 是由于渲染本身而不是用户交互导致的.
effect 在每次渲染后运行。
如果 React 的所有依赖项都具有与上次渲染期间相同的值，则 React 将跳过 Effect
您不能“选择”您的依赖项。它们由 Effect 中的代码决定。
空依赖数组 ( []) 对应组件“挂载”，即被添加到屏幕
React 将在 Effect 下次运行之前以及卸载期间调用您的清理函数。

## 不需要 effect 的情况

删除不必要的 Effects 将使您的代码更易于理解、运行速度更快并且更不容易出错。

1. props 或者 state 来更新/重置/调整状态
2. 事件处理函数共享逻辑
3. 需要处理 ajax 请求，避免竞争条件。

总结一下就是，用户交互的不要放到 useEffect 里面。

当然情况还有很多，我这边只是列举了比较典型的几种。其他的情况可以参考官网[https://react.docschina.org/learn/you-might-not-need-an-effect#caching-expensive-calculations](https://react.docschina.org/learn/you-might-not-need-an-effect#caching-expensive-calculations)

## effect 的生命周期
