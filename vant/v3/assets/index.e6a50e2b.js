import{C as s}from"./index.935763b3.js";import{I as g}from"./index.a6ba9341.js";import{N as u}from"./function-call.b7940eeb.js";import{u as k}from"./use-translate.b8dd01c6.js";import{z as j,C as b,r as E,o as w,a as A,e,w as l,A as t,d as N,t as B,F as x}from"./vue-libs.311a0de3.js";import"./with-install.b43d27ad.js";import"./use-route.fbe6f823.js";import"./mount-component.c1f7730b.js";import"./use-expose.a6a25a51.js";import"./index.3f3c7397.js";import"./constant.80c6de18.js";import"./interceptor.14c08b72.js";import"./use-touch.41b8a2c4.js";import"./index.e4a9f28d.js";import"./utils.39620306.js";import"./index.2702a97e.js";import"./use-lazy-render.a1d3dbed.js";import"./on-popup-reopen.179515e2.js";import"./index.40018584.js";const L=j({setup(v){const p=u.Component,o=k({"zh-CN":{primary:"\u4E3B\u8981\u901A\u77E5",success:"\u6210\u529F\u901A\u77E5",danger:"\u5371\u9669\u901A\u77E5",warning:"\u8B66\u544A\u901A\u77E5",content:"\u901A\u77E5\u5185\u5BB9",notifyType:"\u901A\u77E5\u7C7B\u578B",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customNotify:"\u81EA\u5B9A\u4E49\u914D\u7F6E",componentCall:"\u7EC4\u4EF6\u8C03\u7528",customDuration:"\u81EA\u5B9A\u4E49\u65F6\u957F"},"en-US":{primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",componentCall:"Component Call",customDuration:"Custom Duration"}}),a=b(!1),d=()=>{u(o("content"))},C=()=>{u({color:"#ad0000",message:o("customColor"),background:"#ffe1e1"})},f=()=>{u({message:o("customDuration"),duration:1e3})},r=c=>{u({message:o("content"),type:c})},y=()=>{a.value=!0,setTimeout(()=>{a.value=!1},2e3)};return(c,n)=>{const m=E("demo-block");return w(),A(x,null,[e(m,{card:"",title:t(o)("basicUsage")},{default:l(()=>[e(t(s),{"is-link":"",title:t(o)("basicUsage"),onClick:d},null,8,["title"])]),_:1},8,["title"]),e(m,{card:"",title:t(o)("notifyType")},{default:l(()=>[e(t(s),{"is-link":"",title:t(o)("primary"),onClick:n[0]||(n[0]=i=>r("primary"))},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("success"),onClick:n[1]||(n[1]=i=>r("success"))},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("danger"),onClick:n[2]||(n[2]=i=>r("danger"))},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("warning"),onClick:n[3]||(n[3]=i=>r("warning"))},null,8,["title"])]),_:1},8,["title"]),e(m,{card:"",title:t(o)("customNotify")},{default:l(()=>[e(t(s),{"is-link":"",title:t(o)("customColor"),onClick:C},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("customDuration"),onClick:f},null,8,["title"])]),_:1},8,["title"]),e(m,{card:"",title:t(o)("componentCall")},{default:l(()=>[e(t(s),{"is-link":"",title:t(o)("componentCall"),onClick:y},null,8,["title"]),e(t(p),{show:a.value,"onUpdate:show":n[4]||(n[4]=i=>a.value=i),type:"success"},{default:l(()=>[e(t(g),{name:"bell",style:{"margin-right":"4px"}}),N("span",null,B(t(o)("content")),1)]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{L as default};
