(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["component-grid"],{"0764":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var c=n("0f4b"),u=n("22e8"),o=n("7e83"),r=n("6440");function l(t){var e=Object(u["a"])(t)+".";return function(t){for(var n=r["a"].messages(),u=Object(c["b"])(n,e+t)||Object(c["b"])(n,t),l=arguments.length,i=new Array(l>1?l-1:0),a=1;a<l;a++)i[a-1]=arguments[a];return Object(o["b"])(u)?u.apply(void 0,i):u}}},"22e8":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return o}));n("ac1f"),n("5319");var c=/-(\w)/g;function u(t){return t.replace(c,(function(t,e){return e.toUpperCase()}))}function o(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"")}},5802:function(t,e,n){"use strict";n.r(e);var c=n("7a23");function u(t,e,n,u,o,r){var l=Object(c["L"])("van-grid-item"),i=Object(c["L"])("van-grid"),a=Object(c["L"])("demo-block"),b=Object(c["L"])("van-image");return Object(c["C"])(),Object(c["h"])(c["a"],null,[Object(c["k"])(a,{title:u.t("basicUsage")},{default:Object(c["V"])((function(){return[Object(c["k"])(i,null,{default:Object(c["V"])((function(){return[(Object(c["C"])(),Object(c["h"])(c["a"],null,Object(c["J"])(4,(function(t){return Object(c["k"])(l,{key:t,icon:"photo-o",text:u.t("text")},null,8,["text"])})),64))]})),_:1})]})),_:1},8,["title"]),Object(c["k"])(a,{title:u.t("columnNum")},{default:Object(c["V"])((function(){return[Object(c["k"])(i,{"column-num":3},{default:Object(c["V"])((function(){return[(Object(c["C"])(),Object(c["h"])(c["a"],null,Object(c["J"])(6,(function(t){return Object(c["k"])(l,{key:t,icon:"photo-o",text:u.t("text")},null,8,["text"])})),64))]})),_:1})]})),_:1},8,["title"]),Object(c["k"])(a,{title:u.t("customContent")},{default:Object(c["V"])((function(){return[Object(c["k"])(i,{border:!1,"column-num":3},{default:Object(c["V"])((function(){return[Object(c["k"])(l,null,{default:Object(c["V"])((function(){return[Object(c["k"])(b,{fit:"contain",src:"https://img.yzcdn.cn/vant/apple-1.jpg"})]})),_:1}),Object(c["k"])(l,null,{default:Object(c["V"])((function(){return[Object(c["k"])(b,{fit:"contain",src:"https://img.yzcdn.cn/vant/apple-2.jpg"})]})),_:1}),Object(c["k"])(l,null,{default:Object(c["V"])((function(){return[Object(c["k"])(b,{fit:"contain",src:"https://img.yzcdn.cn/vant/apple-3.jpg"})]})),_:1})]})),_:1})]})),_:1},8,["title"]),Object(c["k"])(a,{title:u.t("square")},{default:Object(c["V"])((function(){return[Object(c["k"])(i,{square:""},{default:Object(c["V"])((function(){return[(Object(c["C"])(),Object(c["h"])(c["a"],null,Object(c["J"])(8,(function(t){return Object(c["k"])(l,{key:t,icon:"photo-o",text:u.t("text")},null,8,["text"])})),64))]})),_:1})]})),_:1},8,["title"]),Object(c["k"])(a,{title:u.t("gutter")},{default:Object(c["V"])((function(){return[Object(c["k"])(i,{gutter:10},{default:Object(c["V"])((function(){return[(Object(c["C"])(),Object(c["h"])(c["a"],null,Object(c["J"])(8,(function(t){return Object(c["k"])(l,{key:t,icon:"photo-o",text:u.t("text")},null,8,["text"])})),64))]})),_:1})]})),_:1},8,["title"]),Object(c["k"])(a,{title:u.t("horizontal")},{default:Object(c["V"])((function(){return[Object(c["k"])(i,{direction:"horizontal","column-num":3},{default:Object(c["V"])((function(){return[Object(c["k"])(l,{icon:"photo-o",text:u.t("text")},null,8,["text"]),Object(c["k"])(l,{icon:"photo-o",text:u.t("text")},null,8,["text"]),Object(c["k"])(l,{icon:"photo-o",text:u.t("text")},null,8,["text"])]})),_:1})]})),_:1},8,["title"]),Object(c["k"])(a,{title:u.t("route")},{default:Object(c["V"])((function(){return[Object(c["k"])(i,{clickable:"","column-num":2},{default:Object(c["V"])((function(){return[Object(c["k"])(l,{icon:"home-o",text:u.t("vueRoute"),to:"/"},null,8,["text"]),Object(c["k"])(l,{icon:"search",text:u.t("urlRoute"),url:"/vant/mobile.html"},null,8,["text"])]})),_:1})]})),_:1},8,["title"]),Object(c["k"])(a,{title:u.t("showBadge")},{default:Object(c["V"])((function(){return[Object(c["k"])(i,{"column-num":2},{default:Object(c["V"])((function(){return[Object(c["k"])(l,{icon:"home-o",text:u.t("text"),dot:""},null,8,["text"]),Object(c["k"])(l,{icon:"search",text:u.t("text"),badge:"99+"},null,8,["text"])]})),_:1})]})),_:1},8,["title"])],64)}var o=n("dee8"),r={"zh-CN":{text:"文字",route:"页面导航",gutter:"格子间距",square:"正方形格子",columnNum:"自定义列数",customContent:"自定义内容",urlRoute:"URL 跳转",vueRoute:"路由跳转",showBadge:"徽标提示",horizontal:"内容横排"},"en-US":{text:"Text",route:"Route",gutter:"Gutter",square:"Square",columnNum:"Column Num",customContent:"Custom Content",urlRoute:"URL",vueRoute:"Vue Router",showBadge:"Show Badge",horizontal:"Horizontal"}},l={setup:function(){var t=Object(o["a"])(r);return{t:t}}};n("7545");l.render=u;e["default"]=l},7545:function(t,e,n){"use strict";n("d74c")},d74c:function(t,e,n){},dee8:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n("ade3"),u=(n("159b"),n("b64b"),n("6440")),o=n("22e8"),r=n("0764"),l=0;function i(t){var e="demo-i18n-".concat(l++);if(t){var n={},i=Object(o["a"])(e);Object.keys(t).forEach((function(e){n[e]=Object(c["a"])({},i,t[e])})),u["a"].add(n)}return Object(r["a"])(e)}}}]);
//# sourceMappingURL=component-grid.3379685c.js.map