import{C as t}from"./index.550f913c.js";import{a as e}from"./use-translate.b583725c.js";import{T as i}from"./function-call.b2678465.js";import{A as o,r as s,o as l,a as n,e as a,w as c,C as m,F as p}from"./vendor.ef334a89.js";import"./with-install.62f47d2f.js";import"./use-route.3fda2186.js";import"./index.3af24151.js";import"./unit.49c29796.js";import"./mount-component.4a14b4e1.js";import"./use-expose.33de0944.js";import"./index.aa2914ba.js";import"./interceptor.ab1192d4.js";import"./use-touch.ce80657e.js";import"./event.7d40caae.js";import"./index.7e292110.js";import"./utils.b0356070.js";import"./index.253cf6b3.js";import"./use-lazy-render.49349a00.js";import"./on-popup-reopen.522dc00c.js";import"./index.0acb7aaf.js";import"./index.6fa13143.js";const u=o({setup(o){const u=e({"zh-CN":{fail:"失败提示",text:"提示内容",text2:"成功文案",text3:"失败文案",text4:t=>`倒计时 ${t} 秒`,title1:"文字提示",title2:"加载提示",title3:"成功/失败提示",success:"成功提示",customIcon:"自定义图标",customImage:"自定义图片",loadingType:"自定义加载图标",positionTop:"顶部展示",updateMessage:"动态更新提示",positionBottom:"底部展示",customPosition:"自定义位置"},"en-US":{fail:"Fail",text:"Some messages",text2:"Success",text3:"Fail",text4:t=>`${t} seconds`,title1:"Text",title2:"Loading",title3:"Success/Fail",success:"Success",customIcon:"Custom Icon",customImage:"Custom Image",loadingType:"Loading Type",positionTop:"Top",updateMessage:"Update Message",positionBottom:"Bottom",customPosition:"Custom Position"}}),r=t=>{i.loading({forbidClick:!0,message:u("loading"),loadingType:t})},d=()=>{i.success(u("text2"))},g=()=>{i.fail(u("text3"))},f=()=>{i({message:u("positionTop"),position:"top"})},k=()=>{i({message:u("positionBottom"),position:"bottom"})},x=()=>{i({message:u("customIcon"),icon:"like-o"})},j=()=>{i({message:u("customImage"),icon:"https://img.yzcdn.cn/vant/logo.png"})},C=()=>{const t=i.loading({duration:0,forbidClick:!0,message:u("text4",3)});let e=3;const o=setInterval((()=>{e--,e?t.message=u("text4",e):(clearInterval(o),i.clear())}),1e3)};return(e,o)=>{const b=s("demo-block");return l(),n(p,null,[a(b,{card:"",title:m(u)("basicUsage")},{default:c((()=>[a(m(t),{"is-link":"",title:m(u)("title1"),onClick:o[0]||(o[0]=t=>m(i)(m(u)("text")))},null,8,["title"]),a(m(t),{"is-link":"",title:m(u)("title2"),onClick:o[1]||(o[1]=t=>r())},null,8,["title"]),a(m(t),{"is-link":"",title:m(u)("success"),onClick:d},null,8,["title"]),a(m(t),{"is-link":"",title:m(u)("fail"),onClick:g},null,8,["title"])])),_:1},8,["title"]),a(b,{card:"",title:m(u)("customIcon")},{default:c((()=>[a(m(t),{"is-link":"",title:m(u)("customIcon"),onClick:x},null,8,["title"]),a(m(t),{"is-link":"",title:m(u)("customImage"),onClick:j},null,8,["title"]),a(m(t),{"is-link":"",title:m(u)("loadingType"),onClick:o[2]||(o[2]=t=>r("spinner"))},null,8,["title"])])),_:1},8,["title"]),a(b,{card:"",title:m(u)("customPosition")},{default:c((()=>[a(m(t),{"is-link":"",title:m(u)("positionTop"),onClick:f},null,8,["title"]),a(m(t),{"is-link":"",title:m(u)("positionBottom"),onClick:k},null,8,["title"])])),_:1},8,["title"]),a(b,{card:"",title:m(u)("updateMessage")},{default:c((()=>[a(m(t),{"is-link":"",title:m(u)("updateMessage"),onClick:C},null,8,["title"])])),_:1},8,["title"])],64)}}});export{u as default};