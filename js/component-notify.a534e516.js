(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["component-notify"],{"0566":function(t,n,e){"use strict";e.r(n);var o=e("7a23");function c(t,n,e,c,i,l){var r=Object(o["L"])("van-cell"),u=Object(o["L"])("demo-block"),s=Object(o["L"])("van-icon"),a=Object(o["L"])("van-notify");return Object(o["C"])(),Object(o["h"])(o["a"],null,[Object(o["k"])(u,{card:"",title:c.t("basicUsage")},{default:Object(o["V"])((function(){return[Object(o["k"])(r,{"is-link":"",title:c.t("basicUsage"),onClick:c.showNotify},null,8,["title","onClick"])]})),_:1},8,["title"]),Object(o["k"])(u,{card:"",title:c.t("notifyType")},{default:Object(o["V"])((function(){return[Object(o["k"])(r,{"is-link":"",title:c.t("primary"),onClick:n[1]||(n[1]=function(t){return c.showType("primary")})},null,8,["title"]),Object(o["k"])(r,{"is-link":"",title:c.t("success"),onClick:n[2]||(n[2]=function(t){return c.showType("success")})},null,8,["title"]),Object(o["k"])(r,{"is-link":"",title:c.t("danger"),onClick:n[3]||(n[3]=function(t){return c.showType("danger")})},null,8,["title"]),Object(o["k"])(r,{"is-link":"",title:c.t("warning"),onClick:n[4]||(n[4]=function(t){return c.showType("warning")})},null,8,["title"])]})),_:1},8,["title"]),Object(o["k"])(u,{card:"",title:c.t("customNotify")},{default:Object(o["V"])((function(){return[Object(o["k"])(r,{"is-link":"",title:c.t("customColor"),onClick:c.showCustomColor},null,8,["title","onClick"]),Object(o["k"])(r,{"is-link":"",title:c.t("customDuration"),onClick:c.showCustomDuration},null,8,["title","onClick"])]})),_:1},8,["title"]),Object(o["k"])(u,{card:"",title:c.t("componentCall")},{default:Object(o["V"])((function(){return[Object(o["k"])(r,{"is-link":"",title:c.t("componentCall"),onClick:c.showComponentCall},null,8,["title","onClick"]),Object(o["k"])(a,{show:c.show,"onUpdate:show":n[5]||(n[5]=function(t){return c.show=t}),type:"success"},{default:Object(o["V"])((function(){return[Object(o["k"])(s,{name:"bell",style:{"margin-right":"4px"}}),Object(o["k"])("span",null,Object(o["O"])(c.t("content")),1)]})),_:1},8,["show"])]})),_:1},8,["title"])],64)}var i,l,r=e("dee8"),u=e("20db"),s=e("dca7d"),a=e("3835"),f=(e("a9e3"),e("98d9")),b=e("c3be"),p=Object(u["c"])("notify"),d=Object(a["a"])(p,2),O=d[0],k=d[1],m=Object(o["l"])({name:O,props:Object(u["d"])({},b["b"],{color:String,message:[Number,String],className:u["s"],background:String,lockScroll:Boolean,type:{type:String,default:"danger"}}),setup:function(t,n){var e=n.slots;return function(){var n={color:t.color,background:t.background};return Object(o["k"])(f["a"],{show:t.show,class:[k([t.type]),t.className],style:n,overlay:!1,position:"top",duration:.2,lockScroll:t.lockScroll},{default:function(){return[e.default?e.default():t.message]}})}}});function j(t){return Object(u["l"])(t)?t:{message:t}}function C(){var t=Object(s["a"])({setup:function(){var t=Object(s["b"])(),n=t.state,e=t.toggle;return function(){return Object(o["k"])(m,Object(o["s"])(n,{"onUpdate:show":e}),null)}}});l=t.instance}function g(t){if(u["g"])return l||C(),t=Object(u["d"])({},g.currentOptions,j(t)),l.open(t),clearTimeout(i),t.duration>0&&(i=window.setTimeout(g.clear,t.duration)),l}function y(){return{type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,className:"",lockScroll:!1,background:void 0}}g.clear=function(){l&&l.toggle(!1)},g.currentOptions=y(),g.setDefaultOptions=function(t){Object(u["d"])(g.currentOptions,t)},g.resetDefaultOptions=function(){g.currentOptions=y()},g.install=function(t){t.use(Object(u["t"])(m)),t.config.globalProperties.$notify=g},g.Component=Object(u["t"])(m);var w={"zh-CN":{primary:"主要通知",success:"成功通知",danger:"危险通知",warning:"警告通知",content:"通知内容",notifyType:"通知类型",customColor:"自定义颜色",customNotify:"自定义配置",componentCall:"组件调用",customDuration:"自定义时长"},"en-US":{primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",componentCall:"Component Call",customDuration:"Custom Duration"}},h={setup:function(){var t=Object(r["a"])(w),n=Object(o["I"])(!1),e=function(){g(t("content"))},c=function(){g({color:"#ad0000",message:t("customColor"),background:"#ffe1e1"})},i=function(){g({message:t("customDuration"),duration:1e3})},l=function(n){g({message:t("content"),type:n})},u=function(){n.value=!0,setTimeout((function(){n.value=!1}),2e3)};return{t:t,show:n,showType:l,showNotify:e,showCustomColor:c,showComponentCall:u,showCustomDuration:i}}};h.render=c;n["default"]=h}}]);
//# sourceMappingURL=component-notify.a534e516.js.map