import{_ as n,e as s}from"./app.fa754546.js";const a={},e=s(`<h1 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> \u51C6\u5907\u5DE5\u4F5C</h1><p>\u9996\u5148\uFF0C\u6211\u4EEC\u4F7F\u7528 create-react-app \u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\u4E3A <code>react-demo</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm init react-app react-demo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\uFF0C\u4FEE\u6539 React\uFF0CReactDOM \u7684\u7248\u672C\u4E3A 16.8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i react@16.8 react-dom@16.8 -S
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u63A5\u7740\uFF0C\u6211\u4EEC\u4FEE\u6539 <code>src/index.js</code>\u91CC\u7684\u5185\u5BB9\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>div title<span class="token operator">=</span><span class="token string">&#39;hello&#39;</span><span class="token operator">&gt;</span>hello world<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u4FEE\u6539\u4E86\u539F\u6709\u7684\u4EE3\u7801\uFF0C\u5C06 render \u6539\u6210\u4E86 <code>ReactDOM@16.8</code> \u7684\u7528\u6CD5\u3002\u6B64\u65F6\u9875\u9762\u5E94\u8BE5\u4F1A\u663E\u793A <code>hello, world!</code>,\u5E76\u5728\u63A7\u5236\u53F0\u6253\u5370\u51FA\u4E86 element\u3002</p><p>\u540E\u9762\u6211\u4EEC\u4F1A\u5728\u8FD9\u4E2A\u9879\u76EE\u91CC\u624B\u5199\u548C\u6D4B\u8BD5 React\u3002</p>`,9);function t(p,o){return e}var r=n(a,[["render",t],["__file","prepare.html.vue"]]);export{r as default};
