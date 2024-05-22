/*! For license information please see 1987.332018b2.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["1987"],{35546:function(s,n,t){"use strict";t.r(n);var d=t("80681");let a=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,d.wg)(),(0,d.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>AddressList \u5730\u5740\u5217\u8868</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5C55\u793A\u5730\u5740\u4FE1\u606F\u5217\u8868\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">AddressList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">AddressList</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-address-list</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;chosenAddressId&quot;</span>\n  <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span>\n  <span class="hljs-attr">:disabled-list</span>=<span class="hljs-string">&quot;disabledList&quot;</span>\n  <span class="hljs-attr">disabled-text</span>=<span class="hljs-string">&quot;\u4EE5\u4E0B\u5730\u5740\u8D85\u51FA\u914D\u9001\u8303\u56F4&quot;</span>\n  <span class="hljs-attr">default-tag-text</span>=<span class="hljs-string">&quot;\u9ED8\u8BA4&quot;</span>\n  @<span class="hljs-attr">add</span>=<span class="hljs-string">&quot;onAdd&quot;</span>\n  @<span class="hljs-attr">edit</span>=<span class="hljs-string">&quot;onEdit&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> chosenAddressId = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);\n    <span class="hljs-keyword">const</span> list = [\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;1&#x27;</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5F20\u4E09&#x27;</span>,\n        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#x27;13000000000&#x27;</span>,\n        <span class="hljs-attr">address</span>: <span class="hljs-string">&#x27;\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u6587\u4E09\u8DEF 138 \u53F7\u4E1C\u65B9\u901A\u4FE1\u5927\u53A6 7 \u697C 501 \u5BA4&#x27;</span>,\n        <span class="hljs-attr">isDefault</span>: <span class="hljs-literal">true</span>,\n      },\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;2&#x27;</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u674E\u56DB&#x27;</span>,\n        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#x27;1310000000&#x27;</span>,\n        <span class="hljs-attr">address</span>: <span class="hljs-string">&#x27;\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A\u83AB\u5E72\u5C71\u8DEF 50 \u53F7&#x27;</span>,\n      },\n    ];\n    <span class="hljs-keyword">const</span> disabledList = [\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;3&#x27;</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u738B\u4E94&#x27;</span>,\n        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#x27;1320000000&#x27;</span>,\n        <span class="hljs-attr">address</span>: <span class="hljs-string">&#x27;\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u6EE8\u6C5F\u533A\u6C5F\u5357\u5927\u9053 15 \u53F7&#x27;</span>,\n      },\n    ];\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;\u65B0\u589E\u5730\u5740&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params">item, index</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;\u7F16\u8F91\u5730\u5740:&#x27;</span> + index);\n\n    <span class="hljs-keyword">return</span> {\n      list,\n      onAdd,\n      onEdit,\n      disabledList,\n      chosenAddressId,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>\u5F53\u524D\u9009\u4E2D\u5730\u5740\u7684 id</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>list</td>\n<td>\u5730\u5740\u5217\u8868</td>\n<td><em>AddressListAddress[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>disabled-list</td>\n<td>\u4E0D\u53EF\u914D\u9001\u5730\u5740\u5217\u8868</td>\n<td><em>AddressListAddress[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>disabled-text</td>\n<td>\u4E0D\u53EF\u914D\u9001\u63D0\u793A\u6587\u6848</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>switchable</td>\n<td>\u662F\u5426\u5141\u8BB8\u5207\u6362\u5730\u5740</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-add-button</td>\n<td>\u662F\u5426\u663E\u793A\u5E95\u90E8\u6309\u94AE</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>add-button-text</td>\n<td>\u5E95\u90E8\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u65B0\u589E\u5730\u5740</code></td>\n</tr>\n<tr>\n<td>default-tag-text</td>\n<td>\u9ED8\u8BA4\u5730\u5740\u6807\u7B7E\u6587\u5B57</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>right-icon <code>v4.5.0</code></td>\n<td>\u53F3\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>edit</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>add</td>\n<td>\u70B9\u51FB\u65B0\u589E\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>edit</td>\n<td>\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td><em>item: AddressListAddress, index: number</em></td>\n</tr>\n<tr>\n<td>select</td>\n<td>\u5207\u6362\u9009\u4E2D\u7684\u5730\u5740\u65F6\u89E6\u53D1</td>\n<td><em>item: AddressListAddress, index: number</em></td>\n</tr>\n<tr>\n<td>edit-disabled</td>\n<td>\u7F16\u8F91\u4E0D\u53EF\u914D\u9001\u7684\u5730\u5740\u65F6\u89E6\u53D1</td>\n<td><em>item: AddressListAddress, index: number</em></td>\n</tr>\n<tr>\n<td>select-disabled</td>\n<td>\u9009\u4E2D\u4E0D\u53EF\u914D\u9001\u7684\u5730\u5740\u65F6\u89E6\u53D1</td>\n<td><em>item: AddressListAddress, index: number</em></td>\n</tr>\n<tr>\n<td>click-item</td>\n<td>\u70B9\u51FB\u4EFB\u610F\u5730\u5740\u65F6\u89E6\u53D1</td>\n<td><em>item: AddressListAddress, index: number, { event }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="addresslistaddress-shu-ju-jie-gou" tabindex="-1">AddressListAddress \u6570\u636E\u7ED3\u6784</h3>\n<table>\n<thead>\n<tr>\n<th>\u952E\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>\u6BCF\u6761\u5730\u5740\u7684\u552F\u4E00\u6807\u8BC6</td>\n<td><em>number | string</em></td>\n</tr>\n<tr>\n<td>name</td>\n<td>\u59D3\u540D</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>tel</td>\n<td>\u624B\u673A\u53F7</td>\n<td><em>number | string</em></td>\n</tr>\n<tr>\n<td>address</td>\n<td>\u8BE6\u7EC6\u5730\u5740</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>isDefault</td>\n<td>\u662F\u5426\u4E3A\u9ED8\u8BA4\u5730\u5740</td>\n<td><em>boolean</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u5728\u5217\u8868\u4E0B\u65B9\u63D2\u5165\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>top</td>\n<td>\u5728\u9876\u90E8\u63D2\u5165\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>item-bottom</td>\n<td>\u5728\u5217\u8868\u9879\u5E95\u90E8\u63D2\u5165\u5185\u5BB9</td>\n<td><em>item: AddressListAddress</em></td>\n</tr>\n<tr>\n<td>tag</td>\n<td>\u81EA\u5B9A\u4E49\u5217\u8868\u9879\u6807\u7B7E\u5185\u5BB9</td>\n<td><em>item: AddressListAddress</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AddressListProps</span>, <span class="hljs-title class_">AddressListAddress</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-address-list-padding</td>\n<td><em>var(--van-padding-sm) var(--van-padding-sm) 80px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-disabled-text-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-disabled-text-padding</td>\n<td><em>var(--van-padding-base) * 5 0 var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-disabled-text-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-disabled-text-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-add-button-z-index</td>\n<td><em>999</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-item-padding</td>\n<td><em>var(--van-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-item-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-item-disabled-text-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-item-font-size</td>\n<td><em>13px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-item-line-height</td>\n<td><em>var(--van-line-height-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-radio-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-list-edit-icon-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,a))}}}]);