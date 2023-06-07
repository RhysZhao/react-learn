import{_ as t,o as e,c as o,a as s,b as n,d as c,F as l,e as a,r as u}from"./app.18fad17a.js";const r={},i=a('<h1 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h1><p>useMemo \u5141\u8BB8\u6211\u4EEC<strong>\u7F13\u5B58\u4E00\u4E2A\u51FD\u6570</strong>\u3002\u5F53\u518D\u6B21\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u8FD4\u56DE\u4E0A\u4E00\u6B21\u7684\u51FD\u6570\u800C\u4E0D\u662F\u91CD\u65B0\u5B9A\u4E49\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p><code>const cachedFn = useCallback(fn, dependencies)</code></p><ul><li><p><code>fn</code>: \u7F13\u5B58\u7684\u51FD\u6570\u3002</p></li><li><p><code>dependencies</code>: \u4F9D\u8D56\u9879\u3002\u5F53\u4F9D\u8D56\u9879\u53D8\u5316\u65F6\uFF0C\u91CD\u65B0\u8BA1\u7B97\u7ED3\u679C\u3002</p></li></ul><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><ol><li>\u9632\u6B62\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3</li></ol>',7),k={href:"https://codesandbox.io/s/usecallback-uurypx?file=/src/App.js:0-592",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> memo<span class="token punctuation">,</span> useMemo<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Hello <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text<span class="token punctuation">,</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B50\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1 onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onAddCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChangeText</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onAddCount<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Hello text<span class="token operator">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>onChangeText<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u5F53\u6211\u4EEC\u70B9\u51FB count \u4F1A\u9020\u6210\u5B50\u7EC4\u4EF6\u7684\u6E32\u67D3\uFF0C\u8FD9\u662F\u56E0\u4E3A onChangeText \u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u6BCF\u6B21\u7236\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u5B83\u90FD\u88AB\u91CD\u65B0\u5B9A\u4E49\u3002\u8FD9\u5BFC\u81F4\u4E86\u6BCF\u6B21 props \u90FD\u53D1\u751F\u4E86\u53D8\u5316\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 useCallback \u6765\u7F13\u5B58 onChangeText:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F7F\u7528useCallback\u6765\u7F13\u5B58onChangeText</span>
<span class="token keyword">const</span> onChangeText <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F7F\u7528 useMemo \u4E5F\u53EF\u4EE5\u5B9E\u73B0\u76F8\u540C\u7684\u7ED3\u679C\uFF0C\u53EA\u4E0D\u8FC7\u9700\u8981\u518D\u591A\u5305\u4E00\u5C42\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F7F\u7528useMemo\u7F13\u5B58onChangeText</span>
<span class="token keyword">const</span> onChangeText <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li>\u4F18\u5316\u81EA\u5B9A\u4E49 hook \u5982\u679C\u60A8\u6B63\u5728\u7F16\u5199\u81EA\u5B9A\u4E49 Hook\uFF0C\u5EFA\u8BAE\u5C06\u5B83\u8FD4\u56DE\u7684\u4EFB\u4F55\u51FD\u6570\u5305\u88C5\u5230 useCallback\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> dispatch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>RouterStateContext<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;navigate&#39;</span><span class="token punctuation">,</span> url <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>dispatch<span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> goBack <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;back&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dispatch<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    navigate<span class="token punctuation">,</span>
    goBack
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u8FD9\u786E\u4FDD\u4E86 Hook \u7684\u4F7F\u7528\u8005\u53EF\u4EE5\u5728\u9700\u8981\u65F6\u4F18\u5316\u4ED6\u4EEC\u81EA\u5DF1\u7684\u4EE3\u7801\u3002</p><h2 id="\u4E89\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u4E89\u8BAE" aria-hidden="true">#</a> \u4E89\u8BAE</h2><p>\u6709\u4EBA\u8BA4\u4E3A\u5E94\u5F53\u7ED9\u6240\u6709\u7684\u51FD\u6570\u5305\u4E0A useCallback, \u6211\u5E76\u4E0D\u8BA4\u540C\u3002\u4E3B\u8981\u662F\u51FA\u4E8E\u4EE5\u4E0B\u4E24\u4E2A\u8003\u8651\uFF1A</p><ol><li>\u4F7F\u7528 useCallback \u540E\u4EE3\u7801\u53EF\u8BFB\u6027\u53D8\u5DEE</li><li>\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u7684\u6027\u80FD\u6D88\u8017\u51E0\u4E4E\u53EF\u4EE5\u5FFD\u7565\u4E0D\u6025\uFF0C\u4E0D\u5E94\u4F5C\u4E3A\u4F18\u5316\u70B9</li></ol>`,11);function d(m,g){const p=u("ExternalLinkIcon");return e(),o(l,null,[i,s("p",null,[n("\u5F53\u6211\u4EEC\u4F20\u7ED9\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027\u6709\u51FD\u6570\u7684\u65F6\u5019,\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A"),s("a",k,[n("\u4F8B\u5B50"),c(p)]),n("\uFF1A")]),b],64)}var f=t(r,[["render",d],["__file","use-callback.html.vue"]]);export{f as default};
