import{_ as e,o,c,a as n,b as s,d as t,F as l,e as p,r as u}from"./app.d35c8f23.js";const i={},r=p('<h1 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h1><p>useEffect \u662F\u4F7F\u7528\u9891\u7387\u4EC5\u4F4E\u4E8E useState \u7684 hook\u3002\u5F88\u591A\u4EBA\u628A useEffect \u5F53\u505A\u76D1\u542C\u5668\u6765\u4F7F\u7528\u3002\u8FD9\u662F\u4E0D\u592A\u59A5\u5F53\u7684\u3002</p><p>useEffect \u662F\u7528\u6765\u5904\u7406<strong>\u7531\u6E32\u67D3\u672C\u8EAB\u800C\u4E0D\u662F\u70B9\u51FB\u4E8B\u4EF6\u5F15\u8D77\u7684\u526F\u4F5C\u7528</strong>\u3002</p><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h2><p><code>useEffect(setup, dependencies?)</code></p><ul><li><p><code>setup</code> \u5904\u7406\u903B\u8F91\uFF0C\u662F\u4E00\u4E2A\u51FD\u6570\u3002\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u6E05\u7406\u51FD\u6570</p></li><li><p><code>dependencies</code> \u662F\u4F9D\u8D56\u9879\uFF0C\u5F53\u4F9D\u8D56\u9879\u53D8\u5316\u4F1A\u6267\u884C, \u4F1A\u6267\u884C<code>setup</code>\u51FD\u6570</p></li></ul><h2 id="\u503C\u5F97\u6CE8\u610F\u7684\u51E0\u4E2A\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u503C\u5F97\u6CE8\u610F\u7684\u51E0\u4E2A\u95EE\u9898" aria-hidden="true">#</a> \u503C\u5F97\u6CE8\u610F\u7684\u51E0\u4E2A\u95EE\u9898</h2><h3 id="_1-useeffect-\u7684\u6267\u884C\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#_1-useeffect-\u7684\u6267\u884C\u65F6\u673A" aria-hidden="true">#</a> 1. useEffect \u7684\u6267\u884C\u65F6\u673A</h3><ul><li><strong>useEffect \u5728\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u540E\uFF0C\u4E5F\u5C31\u662F\u8BF4 DOM \u66F4\u65B0\u5B8C\u6BD5\u540E\uFF0C\u6309\u7167\u5B9A\u4E49\u7684\u987A\u5E8F\u6267\u884C\u3002</strong></li></ul>',9),k={href:"https://codesandbox.io/s/use-effect-order-0p5s30",target:"_blank",rel:"noopener noreferrer"},f=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> setNumber<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;-- \u7A7A\u4F9D\u8D561\uFF0CuseEffect\u6267\u884C --&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;-- \u975E\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6267\u884C --&#39;</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;-- \u7A7A\u4F9D\u8D562\uFF0CuseEffect\u6267\u884C --&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6E32\u67D3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u7ED3\u679C\u6253\u5370\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6E32\u67D3
-- \u7A7A\u4F9D\u8D561\uFF0CuseEffect\u6267\u884C --
-- \u975E\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6267\u884C -- 0
-- \u7A7A\u4F9D\u8D562\uFF0CuseEffect\u6267\u884C --
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6267\u884C\u987A\u5E8F\u4F9D\u6B21\u4E3A\uFF1A</p><p>\u6240\u6709 DOM \u66F4\u65B0\u5B8C\u6BD5 =&gt; \u7A7A\u4F9D\u8D56 1 useEffect \u6267\u884C =&gt; \u975E\u7A7A\u4F9D\u8D56 useEffect \u6267\u884C =&gt; \u7A7A\u4F9D\u8D56 2 useEffect \u6267\u884C</p>`,5),b=n("strong",null,"useEffect \u7684\u6E05\u7406\u51FD\u6570\u5728\u7EC4\u4EF6\u5378\u8F7D\u671F\u95F4\u8C03\u7528\u6216\u8005\u4E0B\u6B21\u8FD0\u884C\u4E4B\u524D\u8C03\u7528\u3002",-1),d={href:"https://codesandbox.io/s/use-effect-clear-7w6f9d",target:"_blank",rel:"noopener noreferrer"},m=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Title</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>title<span class="token punctuation">,</span> setTitle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u91CC\u662F\u6807\u9898&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6267\u884C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6E05\u7406\u51FD\u6570\u6267\u884C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u975E\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6267\u884C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u975E\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6E05\u7406\u51FD\u6570\u6267\u884C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>title<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1 onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">title</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>titleVisible<span class="token punctuation">,</span> setTitleVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>titleVisible <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>Title <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTitleVisible</span><span class="token punctuation">(</span><span class="token operator">!</span>titleVisible<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>titleVisible <span class="token operator">?</span> <span class="token string">&#39;\u9690\u85CF&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;\u663E\u793A&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u6807\u9898</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u7531\u524D\u9762\u6211\u4EEC\u77E5\u9053\uFF0C\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u540E\u624D\u4F1A\u6309\u7167\u987A\u5E8F\u6267\u884C useEffect, \u56E0\u6B64\u6253\u5370\u7ED3\u679C\u662F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6267\u884C
\u975E\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6267\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7136\u540E\u70B9\u51FB\u6807\u9898\uFF0C\u4F1A\u6253\u5370\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u975E\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6E05\u7406\u51FD\u6570\u6267\u884C
\u975E\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6267\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6700\u540E\uFF0C\u6211\u4EEC\u70B9\u51FB \u9690\u85CF\u6807\u9898 \u6309\u94AE\uFF0C\u4F1A\u6253\u5370\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6E05\u7406\u51FD\u6570\u6267\u884C
\u975E\u7A7A\u4F9D\u8D56\uFF0CuseEffect\u6E05\u7406\u51FD\u6570\u6267\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C<strong>\u7A7A\u4F9D\u8D56\u7684 useEffect \u53EA\u4F1A\u5728\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u540E\u6267\u884C\uFF0C\u6E05\u7406\u51FD\u6570\u53EA\u4F1A\u5728\u7EC4\u4EF6\u5378\u8F7D\u540E\u6267\u884C</strong></p><p>\u975E\u7A7A\u4F9D\u8D56\u7684 useEffect \u5219\u6709\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ol><li>\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u540E\u6267\u884C\uFF0C\u6E05\u7406\u51FD\u6570\u5728\u7EC4\u4EF6\u5378\u8F7D\u540E\u6267\u884C</li><li>\u4F9D\u8D56\u53D1\u751F\u53D8\u5316\u65F6\u6267\u884C\uFF0C\u6E05\u7406\u51FD\u6570\u4F1A\u5728<strong>\u4F9D\u8D56\u53D1\u751F\u53D8\u5316\uFF0CuseEffect \u5185\u7684\u903B\u8F91\u6267\u884C\u524D</strong>\u8C03\u7528</li></ol><h3 id="_2-\u4F9D\u8D56\u9879" tabindex="-1"><a class="header-anchor" href="#_2-\u4F9D\u8D56\u9879" aria-hidden="true">#</a> 2. \u4F9D\u8D56\u9879</h3><ul><li><p>\u4F9D\u8D56\u9879\u4E3A\u7A7A\uFF0C\u5219\u53EA\u4F1A\u5728\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u540E\u6267\u884C\u4E00\u6B21\u3002\u5F53\u7EC4\u4EF6\u518D\u6B21\u66F4\u65B0\u65F6\u5019\uFF0C\u4E0D\u4F1A\u6267\u884C\u3002</p></li><li><p>\u5982\u679C React \u7684\u6240\u6709\u4F9D\u8D56\u9879\u90FD\u5177\u6709\u4E0E\u4E0A\u6B21\u6E32\u67D3\u671F\u95F4\u76F8\u540C\u7684\u503C\uFF0C\u5219 React \u5C06\u8DF3\u8FC7 Effect</p></li><li><p>\u60A8\u4E0D\u80FD\u201C\u9009\u62E9\u201D\u60A8\u7684\u4F9D\u8D56\u9879\u3002\u5B83\u4EEC\u7531 Effect \u4E2D\u7684\u4EE3\u7801\u51B3\u5B9A\u3002</p></li><li><p>\u4F9D\u8D56\u9879\u9700\u8981\u662F\u80FD\u591F\u89E6\u53D1\u7EC4\u4EF6\u66F4\u65B0\u7684\u53D8\u91CF\uFF0C\u6BD4\u5982 state \u6216\u8005 props</p></li></ul><h2 id="\u4E0D\u9700\u8981-effect-\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u9700\u8981-effect-\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u4E0D\u9700\u8981 effect \u7684\u60C5\u51B5</h2><p>effect \u662F React \u7684\u5E94\u6025\u65B9\u6848\u3002\u5B83\u5141\u8BB8\u6211\u4EEC\u80FD\u591F\u4E0E\u4E00\u4E9B\u5916\u90E8\u7CFB\u7EDF\u540C\u6B65\uFF0C\u6BD4\u5982 ajax \u8BF7\u6C42\u548C\u6D4F\u89C8\u5668 DOM\u3002\u5982\u679C\u4E0D\u6D89\u53CA\u5916\u90E8\u7CFB\u7EDF\uFF0C\u5219\u4E0D\u9700\u8981 effect\u3002\u5220\u9664\u4E0D\u5FC5\u8981\u7684 effect \u53EF\u4EE5\u4F7F\u4EE3\u7801\u66F4\u5BB9\u6613\u7406\u89E3\uFF0C\u8FD0\u884C\u901F\u5EA6\u66F4\u5FEB\u5E76\u4E14\u4E0D\u5BB9\u6613\u51FA\u9519\u3002</p><p>\u4E0B\u9762\u662F\u51E0\u79CD\u5E38\u89C1\u7684\u4E0D\u9700\u8981 effect \u7684\u60C5\u51B5\uFF1A</p><ol><li>\u5982\u679C\u60A8\u53EF\u4EE5\u5728\u6E32\u67D3\u671F\u95F4\u8BA1\u7B97\u67D0\u4E9B\u4E1C\u897F\uFF0C\u5219\u4E0D\u9700\u8981 Effect\u3002</li><li>\u8981\u7F13\u5B58\u6602\u8D35\u7684\u8BA1\u7B97\uFF0C\u8BF7\u6DFB\u52A0 useMemo \u800C\u4E0D\u662F useEffect.</li><li>\u8981\u91CD\u7F6E\u6574\u4E2A\u7EC4\u4EF6\u6811\u7684\u72B6\u6001\uFF0C\u8BF7\u5C06\u4E0D\u540C\u7684\u4F20\u9012 key \u7ED9\u5B83\u3002</li><li>\u8981\u91CD\u7F6E\u7279\u5B9A\u4F4D\u7684\u72B6\u6001\u4EE5\u54CD\u5E94\u5C5E\u6027\u66F4\u6539\uFF0C\u8BF7\u5728\u6E32\u67D3\u671F\u95F4\u8BBE\u7F6E\u5B83\u3002</li><li>\u56E0\u4E3A\u663E\u793A\u7EC4\u4EF6\u800C\u8FD0\u884C\u7684\u4EE3\u7801\u5E94\u8BE5\u5728 Effects \u4E2D\uFF0C\u5176\u4F59\u7684\u5E94\u8BE5\u5728\u4E8B\u4EF6\u4E2D\u3002</li><li>\u5982\u679C\u60A8\u9700\u8981\u66F4\u65B0\u591A\u4E2A\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u6700\u597D\u5728\u5355\u4E2A\u4E8B\u4EF6\u671F\u95F4\u6267\u884C\u3002</li><li>\u6BCF\u5F53\u60A8\u5C1D\u8BD5\u540C\u6B65\u4E0D\u540C\u7EC4\u4EF6\u4E2D\u7684\u72B6\u6001\u53D8\u91CF\u65F6\uFF0C\u8BF7\u8003\u8651\u63D0\u5347\u72B6\u6001\u3002</li><li>\u60A8\u53EF\u4EE5\u4F7F\u7528 Effects \u83B7\u53D6\u6570\u636E\uFF0C\u4F46\u60A8\u9700\u8981\u5B9E\u65BD\u6E05\u7406\u4EE5\u907F\u514D\u7ADE\u4E89\u6761\u4EF6\u3002</li></ol>`,16),g={href:"https://react.docschina.org/learn/you-might-not-need-an-effect#caching-expensive-calculations",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"\u6211\u7684\u7406\u89E3\u5C31\u662F\uFF0C\u5C3D\u53EF\u80FD\u5C11\u7528 useEffect\uFF0C\u9664\u975E\u4E0D\u7528\u4E0D\u884C\u7684\u60C5\u51B5\u3002",-1);function E(x,_){const a=u("ExternalLinkIcon");return o(),c(l,null,[r,n("p",null,[s("\u6BD4\u5982\u8FD9\u4E2A"),n("a",k,[s("\u4F8B\u5B50"),t(a)]),s(":")]),f,n("ul",null,[n("li",null,[b,s(" \u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A"),n("a",d,[s("\u4F8B\u5B50"),t(a)]),s(":")])]),m,n("p",null,[s("\u5177\u4F53\u4F8B\u5B50\u53EF\u4EE5\u53C2\u8003\u5B98\u7F51"),n("a",g,[s("https://react.docschina.org/learn/you-might-not-need-an-effect#caching-expensive-calculations"),t(a)])]),h],64)}var y=e(i,[["render",E],["__file","use-effect.html.vue"]]);export{y as default};