import{u as e,t,p as o,e as n,a as r}from"./use-translate.b583725c.js";import{c as a,w as i}from"./with-install.62f47d2f.js";import{f as s}from"./constant.4d85ecb9.js";import{I as c}from"./index.3af24151.js";import{P as l}from"./index.aa2914ba.js";import{A as p,E as f,H as u,P as d,y as m,e as h,J as v,F as b,s as y,r as w,o as x,a as g,w as O,C as j,i as k,t as C,d as P,b as S}from"./vendor.ef334a89.js";import{u as A}from"./index.e65d868e.js";import{B as T}from"./index.627ee112.js";import{F as E}from"./index.3e32f020.js";import{P as D}from"./index.3a29a39b.js";import{G as L,a as _}from"./index.d73d94a0.js";import{T as M}from"./function-call.b2678465.js";import"./unit.49c29796.js";import"./interceptor.ab1192d4.js";import"./use-expose.33de0944.js";import"./use-touch.ce80657e.js";import"./event.7d40caae.js";import"./index.7e292110.js";import"./utils.b0356070.js";import"./index.253cf6b3.js";import"./use-lazy-render.49349a00.js";import"./on-popup-reopen.522dc00c.js";import"./index.0acb7aaf.js";import"./use-route.3fda2186.js";import"./index.6fa13143.js";import"./number.b01aa591.js";import"./index.550f913c.js";import"./index.49199c0d.js";import"./useParent.0a2f50cb.js";import"./Picker.e16de937.js";import"./deep-clone.ba190482.js";import"./useChildren.a94b5b99.js";import"./mount-component.4a14b4e1.js";function U(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function I(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function R(e){var t=I(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function W(e){return e instanceof I(e).Element||e instanceof Element}function N(e){return e instanceof I(e).HTMLElement||e instanceof HTMLElement}function z(e){return e?(e.nodeName||"").toLowerCase():null}function B(e){return((W(e)?e.ownerDocument:e.document)||window.document).documentElement}function H(e){return I(e).getComputedStyle(e)}function q(e){var t=H(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function F(e,t,o){void 0===o&&(o=!1);var n,r,a=B(t),i=U(e),s=N(t),c={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!o)&&(("body"!==z(t)||q(a))&&(c=(n=t)!==I(n)&&N(n)?{scrollLeft:(r=n).scrollLeft,scrollTop:r.scrollTop}:R(n)),N(t)?((l=U(t)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=function(e){return U(B(e)).left+R(e).scrollLeft}(a))),{x:i.left+c.scrollLeft-l.x,y:i.top+c.scrollTop-l.y,width:i.width,height:i.height}}function V(e){return"html"===z(e)?e:e.assignedSlot||e.parentNode||(t=e,"undefined"!=typeof ShadowRoot&&(t instanceof I(t).ShadowRoot||t instanceof ShadowRoot)?e.host:null)||B(e);var t}function X(e){return["html","body","#document"].indexOf(z(e))>=0?e.ownerDocument.body:N(e)&&q(e)?e:X(V(e))}function Y(e,t){var o;void 0===t&&(t=[]);var n=X(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),a=I(n),i=r?[a].concat(a.visualViewport||[],q(n)?n:[]):n,s=t.concat(i);return r?s:s.concat(Y(V(i)))}function G(e){return["table","td","th"].indexOf(z(e))>=0}function J(e){return N(e)&&"fixed"!==H(e).position?e.offsetParent:null}function K(e){for(var t=I(e),o=J(e);o&&G(o)&&"static"===H(o).position;)o=J(o);return o&&("html"===z(o)||"body"===z(o)&&"static"===H(o).position)?t:o||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&N(e)&&"fixed"===H(e).position)return null;for(var o=V(e);N(o)&&["html","body"].indexOf(z(o))<0;){var n=H(o);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return o;o=o.parentNode}return null}(e)||t}var Q="top",Z="right",$="left",ee=[].concat([Q,"bottom",Z,$],["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),te=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function oe(e){var t=new Map,o=new Set,n=[];function r(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var n=t.get(e);n&&r(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||r(e)})),n}function ne(e){return e.split("-")[0]}var re=Math.round;var ae={placement:"bottom",modifiers:[],strategy:"absolute"};function ie(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function se(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,n=void 0===o?[]:o,r=t.defaultOptions,a=void 0===r?ae:r;return function(e,t,o){void 0===o&&(o=a);var r,i,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ae,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,p={state:s,setOptions:function(o){f(),s.options=Object.assign({},a,s.options,o),s.scrollParents={reference:W(e)?Y(e):e.contextElement?Y(e.contextElement):[],popper:Y(t)};var r,i,l=function(e){var t=oe(e);return te.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}((r=[].concat(n,s.options.modifiers),i=r.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{}),Object.keys(i).map((function(e){return i[e]}))));return s.orderedModifiers=l.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,n=void 0===o?{}:o,r=e.effect;if("function"==typeof r){var a=r({state:s,name:t,instance:p,options:n}),i=function(){};c.push(a||i)}})),p.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,o=e.popper;if(ie(t,o)){var n,r,a,i;s.rects={reference:F(t,K(o),"fixed"===s.options.strategy),popper:(n=o,r=U(n),a=n.offsetWidth,i=n.offsetHeight,Math.abs(r.width-a)<=1&&(a=r.width),Math.abs(r.height-i)<=1&&(i=r.height),{x:n.offsetLeft,y:n.offsetTop,width:a,height:i})},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var c=0;c<s.orderedModifiers.length;c++)if(!0!==s.reset){var f=s.orderedModifiers[c],u=f.fn,d=f.options,m=void 0===d?{}:d,h=f.name;"function"==typeof u&&(s=u({state:s,options:m,name:h,instance:p})||s)}else s.reset=!1,c=-1}}},update:(r=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return i||(i=new Promise((function(e){Promise.resolve().then((function(){i=void 0,e(r())}))}))),i}),destroy:function(){f(),l=!0}};if(!ie(e,t))return p;function f(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(o).then((function(e){!l&&o.onFirstUpdate&&o.onFirstUpdate(e)})),p}}var ce={passive:!0};var le={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pe(e){var t,o=e.popper,n=e.popperRect,r=e.placement,a=e.offsets,i=e.position,s=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,p=!0===l?function(e){var t=e.x,o=e.y,n=window.devicePixelRatio||1;return{x:re(re(t*n)/n)||0,y:re(re(o*n)/n)||0}}(a):"function"==typeof l?l(a):a,f=p.x,u=void 0===f?0:f,d=p.y,m=void 0===d?0:d,h=a.hasOwnProperty("x"),v=a.hasOwnProperty("y"),b=$,y=Q,w=window;if(c){var x=K(o),g="clientHeight",O="clientWidth";x===I(o)&&"static"!==H(x=B(o)).position&&(g="scrollHeight",O="scrollWidth"),x=x,r===Q&&(y="bottom",m-=x[g]-n.height,m*=s?1:-1),r===$&&(b=Z,u-=x[O]-n.width,u*=s?1:-1)}var j,k=Object.assign({position:i},c&&le);return s?Object.assign({},k,((j={})[y]=v?"0":"",j[b]=h?"0":"",j.transform=(w.devicePixelRatio||1)<2?"translate("+u+"px, "+m+"px)":"translate3d("+u+"px, "+m+"px, 0)",j)):Object.assign({},k,((t={})[y]=v?m+"px":"",t[b]=h?u+"px":"",t.transform="",t))}var fe=se({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,a=void 0===r||r,i=n.resize,s=void 0===i||i,c=I(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach((function(e){e.addEventListener("scroll",o.update,ce)})),s&&c.addEventListener("resize",o.update,ce),function(){a&&l.forEach((function(e){e.removeEventListener("scroll",o.update,ce)})),s&&c.removeEventListener("resize",o.update,ce)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=function(e){var t,o=e.reference,n=e.element,r=e.placement,a=r?ne(r):null,i=r?function(e){return e.split("-")[1]}(r):null,s=o.x+o.width/2-n.width/2,c=o.y+o.height/2-n.height/2;switch(a){case Q:t={x:s,y:o.y-n.height};break;case"bottom":t={x:s,y:o.y+o.height};break;case Z:t={x:o.x+o.width,y:c};break;case $:t={x:o.x-n.width,y:c};break;default:t={x:o.x,y:o.y}}var l=a?function(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}(a):null;if(null!=l){var p="y"===l?"height":"width";switch(i){case"start":t[l]=t[l]-(o[p]/2-n[p]/2);break;case"end":t[l]=t[l]+(o[p]/2-n[p]/2)}}return t}({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=void 0===n||n,a=o.adaptive,i=void 0===a||a,s=o.roundOffsets,c=void 0===s||s,l={placement:ne(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,pe(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,pe(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];N(r)&&z(r)&&(Object.assign(r.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});N(n)&&z(n)&&(Object.assign(n.style,a),Object.keys(r).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]}]});var ue={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.offset,a=void 0===r?[0,0]:r,i=ee.reduce((function(e,o){return e[o]=function(e,t,o){var n=ne(e),r=[$,Q].indexOf(n)>=0?-1:1,a="function"==typeof o?o(Object.assign({},t,{placement:e})):o,i=a[0],s=a[1];return i=i||0,s=(s||0)*r,[$,Z].indexOf(n)>=0?{x:s,y:i}:{x:i,y:s}}(o,t.rects,a),e}),{}),s=i[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=i}};const[de,me]=a("popover"),he=["show","overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"];const ve=i(p({name:de,props:{show:Boolean,overlay:Boolean,duration:[Number,String],iconPrefix:String,overlayClass:e,overlayStyle:Object,closeOnClickAction:t,closeOnClickOverlay:t,closeOnClickOutside:t,offset:{type:Array,default:()=>[0,8]},theme:{type:String,default:"light"},trigger:{type:String,default:"click"},actions:{type:Array,default:()=>[]},placement:{type:String,default:"bottom"},teleport:{type:[String,Object],default:"body"},showArrow:{type:Boolean,default:!0}},emits:["select","touchstart","update:show"],setup(e,{emit:t,slots:r,attrs:a}){let i;const p=f(),w=f(),x=()=>{y((()=>{e.show&&(i?i.setOptions({placement:e.placement}):i=p.value&&w.value?fe(p.value,w.value.popupRef.value,{placement:e.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},n({},ue,{options:{offset:e.offset}})]}):null)}))},g=e=>t("update:show",e),O=()=>{"click"===e.trigger&&g(!e.show)},j=e=>{e.stopPropagation(),t("touchstart",e)},k=(o,n)=>{const{icon:r,text:a,color:i,disabled:l,className:p}=o;return h("div",{role:"menuitem",class:[me("action",{disabled:l,"with-icon":r}),p],style:{color:i},onClick:()=>((o,n)=>{o.disabled||(t("select",o,n),e.closeOnClickAction&&g(!1))})(o,n)},[r&&h(c,{name:r,classPrefix:e.iconPrefix,class:me("action-icon")},null),h("div",{class:[me("action-text"),s]},[a])])};return u(x),d((()=>{i&&(i.destroy(),i=null)})),m((()=>[e.show,e.placement]),x),A(p,(()=>{!e.closeOnClickOutside||e.overlay&&!e.closeOnClickOverlay||g(!1)}),{eventName:"touchstart"}),()=>{var t;return h(b,null,[h("span",{ref:p,class:me("wrapper"),onClick:O},[null==(t=r.reference)?void 0:t.call(r)]),h(l,v({ref:w,class:me([e.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,onTouchstart:j},a,o(e,he),{"onUpdate:show":g}),{default:()=>[e.showArrow&&h("div",{class:me("arrow")},null),h("div",{role:"menu",class:me("content")},[r.default?r.default():e.actions.map(k)])]})])}}}));const be={class:"demo-popover-box"},ye=P("div",{class:"demo-popover-refer"},null,-1),we=p({setup(e){const t=r({"zh-CN":{actions:[{text:"选项一"},{text:"选项二"},{text:"选项三"}],shortActions:[{text:"选项一"},{text:"选项二"}],actionsWithIcon:[{text:"选项一",icon:"add-o"},{text:"选项二",icon:"music-o"},{text:"选项三",icon:"more-o"}],actionsDisabled:[{text:"选项一",disabled:!0},{text:"选项二",disabled:!0},{text:"选项三"}],showIcon:"展示图标",placement:"弹出位置",darkTheme:"深色风格",lightTheme:"浅色风格",showPopover:"点击弹出气泡",actionOptions:"选项配置",customContent:"自定义内容",disableAction:"禁用选项",choosePlacement:"选择弹出位置"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement"}}),o=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],n=f({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1}),a=f(!1),i=f("top"),s=e=>{setTimeout((()=>{n.value.placement=!0,i.value=e}))},c=e=>M(e.text);return(e,r)=>{const p=w("demo-block");return x(),g(b,null,[h(p,{title:j(t)("basicUsage")},{default:O((()=>[h(j(ve),{show:n.value.lightTheme,"onUpdate:show":r[0]||(r[0]=e=>n.value.lightTheme=e),actions:j(t)("actions"),placement:"bottom-start",onSelect:c},{reference:O((()=>[h(j(T),{type:"primary"},{default:O((()=>[k(C(j(t)("lightTheme")),1)])),_:1})])),_:1},8,["show","actions"]),h(j(ve),{show:n.value.darkTheme,"onUpdate:show":r[1]||(r[1]=e=>n.value.darkTheme=e),theme:"dark",actions:j(t)("actions"),onSelect:c},{reference:O((()=>[h(j(T),{type:"primary"},{default:O((()=>[k(C(j(t)("darkTheme")),1)])),_:1})])),_:1},8,["show","actions"])])),_:1},8,["title"]),h(p,{title:j(t)("placement")},{default:O((()=>[h(j(E),{"is-link":"",readonly:"",name:"picker",label:j(t)("choosePlacement"),onClick:r[2]||(r[2]=e=>a.value=!0)},null,8,["label"]),h(j(l),{show:a.value,"onUpdate:show":r[4]||(r[4]=e=>a.value=e),round:"",position:"bottom","get-container":"body"},{default:O((()=>[P("div",be,[h(j(ve),{show:n.value.placement,"onUpdate:show":r[3]||(r[3]=e=>n.value.placement=e),theme:"dark",actions:j(t)("shortActions"),placement:i.value,onSelect:c},{reference:O((()=>[ye])),_:1},8,["show","actions","placement"])]),h(j(D),{columns:o,"show-toolbar":!1,onChange:s})])),_:1},8,["show"])])),_:1},8,["title"]),h(p,{title:j(t)("actionOptions")},{default:O((()=>[h(j(ve),{show:n.value.showIcon,"onUpdate:show":r[5]||(r[5]=e=>n.value.showIcon=e),actions:j(t)("actionsWithIcon"),placement:"bottom-start",onSelect:c},{reference:O((()=>[h(j(T),{type:"primary"},{default:O((()=>[k(C(j(t)("showIcon")),1)])),_:1})])),_:1},8,["show","actions"]),h(j(ve),{show:n.value.disableAction,"onUpdate:show":r[6]||(r[6]=e=>n.value.disableAction=e),actions:j(t)("actionsDisabled"),onSelect:c},{reference:O((()=>[h(j(T),{type:"primary"},{default:O((()=>[k(C(j(t)("disableAction")),1)])),_:1})])),_:1},8,["show","actions"])])),_:1},8,["title"]),h(p,{title:j(t)("customContent")},{default:O((()=>[h(j(ve),{show:n.value.customContent,"onUpdate:show":r[8]||(r[8]=e=>n.value.customContent=e),placement:"top-start",onSelect:c},{reference:O((()=>[h(j(T),{type:"primary"},{default:O((()=>[k(C(j(t)("customContent")),1)])),_:1})])),default:O((()=>[h(j(L),{square:"",clickable:"",border:!1,"column-num":"3",style:{width:"240px"}},{default:O((()=>[(x(),g(b,null,S(6,(e=>h(j(_),{key:e,icon:"photo-o",text:j(t)("option"),onClick:r[7]||(r[7]=e=>n.value.customContent=!1)},null,8,["text"]))),64))])),_:1})])),_:1},8,["show"])])),_:1},8,["title"])],64)}}});export{we as default};