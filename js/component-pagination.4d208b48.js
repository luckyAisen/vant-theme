(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["component-pagination"],{"0764":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("0f4b"),c=n("22e8"),a=n("7e83"),u=n("6440");function o(e){var t=Object(c["a"])(e)+".";return function(e){for(var n=u["a"].messages(),c=Object(r["b"])(n,t+e)||Object(r["b"])(n,e),o=arguments.length,i=new Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return Object(a["b"])(c)?c.apply(void 0,i):c}}},"22e8":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));n("ac1f"),n("5319");var r=/-(\w)/g;function c(e){return e.replace(r,(function(e,t){return t.toUpperCase()}))}function a(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"")}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");var r=n("ade3");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"7b51":function(e,t,n){},a429:function(e,t,n){"use strict";n("7b51")},c8aa:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function c(e,t,n,c,a,u){var o=Object(r["L"])("van-pagination"),i=Object(r["L"])("demo-block"),l=Object(r["L"])("van-icon");return Object(r["C"])(),Object(r["h"])(r["a"],null,[Object(r["k"])(i,{title:c.t("basicUsage")},{default:Object(r["V"])((function(){return[Object(r["k"])(o,{modelValue:e.currentPage1,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.currentPage1=t}),"total-items":24,"items-per-page":5,"prev-text":c.t("prevText"),"next-text":c.t("nextText")},null,8,["modelValue","prev-text","next-text"])]})),_:1},8,["title"]),Object(r["k"])(i,{title:c.t("title2")},{default:Object(r["V"])((function(){return[Object(r["k"])(o,{modelValue:e.currentPage2,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.currentPage2=t}),"page-count":12,"prev-text":c.t("prevText"),"next-text":c.t("nextText"),mode:"simple",size:"small"},null,8,["modelValue","prev-text","next-text"])]})),_:1},8,["title"]),Object(r["k"])(i,{title:c.t("title3")},{default:Object(r["V"])((function(){return[Object(r["k"])(o,{modelValue:e.currentPage3,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.currentPage3=t}),"force-ellipses":"","total-items":125,"show-page-size":3,"prev-text":c.t("prevText"),"next-text":c.t("nextText")},null,8,["modelValue","prev-text","next-text"])]})),_:1},8,["title"]),Object(r["k"])(i,{title:c.t("title4")},{default:Object(r["V"])((function(){return[Object(r["k"])(o,{modelValue:e.currentPage4,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.currentPage4=t}),"total-items":125,"show-page-size":5},{"prev-text":Object(r["V"])((function(){return[Object(r["k"])(l,{name:"arrow-left"})]})),"next-text":Object(r["V"])((function(){return[Object(r["k"])(l,{name:"arrow"})]})),page:Object(r["V"])((function(e){var t=e.text;return[Object(r["j"])(Object(r["O"])(t),1)]})),_:1},8,["modelValue"])]})),_:1},8,["title"])],64)}var a=n("5530"),u=n("dee8"),o={"zh-CN":{title2:"简单模式",title3:"显示省略号",title4:"自定义按钮",prevText:"上一页",nextText:"下一页"},"en-US":{title2:"Simple Mode",title3:"Show ellipses",title4:"Custom Button",prevText:"Prev",nextText:"Next"}},i={setup:function(){var e=Object(u["a"])(o),t=Object(r["G"])({currentPage1:1,currentPage2:1,currentPage3:1,currentPage4:1});return Object(a["a"])(Object(a["a"])({},Object(r["Q"])(t)),{},{t:e})}};n("a429");i.render=c;t["default"]=i},dbb4:function(e,t,n){var r=n("23e7"),c=n("83ab"),a=n("56ef"),u=n("fc6a"),o=n("06cf"),i=n("8418");r({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(e){var t,n,r=u(e),c=o.f,l=a(r),b={},f=0;while(l.length>f)n=c(r,t=l[f++]),void 0!==n&&i(b,t,n);return b}})},dee8:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("ade3"),c=(n("159b"),n("b64b"),n("6440")),a=n("22e8"),u=n("0764"),o=0;function i(e){var t="demo-i18n-".concat(o++);if(e){var n={},i=Object(a["a"])(t);Object.keys(e).forEach((function(t){n[t]=Object(r["a"])({},i,e[t])})),c["a"].add(n)}return Object(u["a"])(t)}},e439:function(e,t,n){var r=n("23e7"),c=n("d039"),a=n("fc6a"),u=n("06cf").f,o=n("83ab"),i=c((function(){u(1)})),l=!o||i;r({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(e,t){return u(a(e),t)}})}}]);
//# sourceMappingURL=component-pagination.4d208b48.js.map