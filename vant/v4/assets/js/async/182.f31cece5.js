/*! For license information please see 182.f31cece5.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["182"],{16197:function(n,t,e){"use strict";e.r(t);var a=e("80681");let s=["innerHTML"];t.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Composables</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Vant provide some built-in composition APIs, you can directly use these APIs for development.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Although <code>@vant/use</code> is already included in Vant\'s dependencies, it is still recommended to install this package explicitly:</p>\n<pre><code class="language-shell"><span class="hljs-meta prompt_"># </span><span class="language-bash">with npm</span>\nnpm i @vant/use\n<span class="hljs-meta prompt_">\n# </span><span class="language-bash">with yarn</span>\nyarn add @vant/use\n<span class="hljs-meta prompt_">\n# </span><span class="language-bash">with pnpm</span>\npnpm add @vant/use\n<span class="hljs-meta prompt_">\n# </span><span class="language-bash">with Bun</span>\nbun add @vant/use\n</code></pre>\n</div><div class="van-doc-card"><h3 id="demo" tabindex="-1">Demo</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useWindowSize } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">const</span> { width, height } = <span class="hljs-title function_">useWindowSize</span>();\n\n<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(width.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; window width</span>\n<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(height.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; window height</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="api-list" tabindex="-1">API List</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href="#/en-US/use-click-away" target="_blank">useClickAway</a></td>\n<td>Triggers a callback when user clicks outside of the target element</td>\n</tr>\n<tr>\n<td><a href="#/en-US/use-count-down" target="_blank">useCountDown</a></td>\n<td>Used to manage the countdown</td>\n</tr>\n<tr>\n<td><a href="#/en-US/use-custom-field-value" target="_blank">useCustomFieldValue</a></td>\n<td>Used to custom Field value</td>\n</tr>\n<tr>\n<td><a href="#/en-US/use-event-listener" target="_blank">useEventListener</a></td>\n<td>Used to attach event</td>\n</tr>\n<tr>\n<td><a href="#/en-US/use-page-visibility" target="_blank">usePageVisibility</a></td>\n<td>Get the visible state of the page</td>\n</tr>\n<tr>\n<td><a href="#/en-US/use-rect" target="_blank">useRect</a></td>\n<td>Get the size of an element and its position relative to the viewport</td>\n</tr>\n<tr>\n<td><a href="#/en-US/use-relation" target="_blank">useRelation</a></td>\n<td>Establish the association relationship between parent and child components</td>\n</tr>\n<tr>\n<td><a href="#/en-US/use-scroll-parent" target="_blank">useScrollParent</a></td>\n<td>Get the closest parent element that is scrollable</td>\n</tr>\n<tr>\n<td><a href="#/en-US/use-toggle" target="_blank">useToggle</a></td>\n<td>Used to switch between <code>true</code> and <code>false</code></td>\n</tr>\n<tr>\n<td><a href="#/en-US/use-window-size" target="_blank">useWindowSize</a></td>\n<td>Get the viewport width and height of the browser window</td>\n</tr>\n<tr>\n<td><a href="#/zh-CN/use-raf" target="_blank">useRaf</a></td>\n<td>Used to manage the requestAnimationFrame</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,s))}}}]);