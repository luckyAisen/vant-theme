import{F as g}from"./index.75dacfff.js";import{P as j}from"./index.9369b636.js";import{c as J,e as L,a as K}from"./use-translate.c063e05d.js";import{b as X,t as S,m as Q,n as W,w as Z}from"./with-install.3e872450.js";import{H as q}from"./constant.80c6de18.js";import{T as G,a as Y}from"./index.a2381e46.js";import{I as U}from"./index.e4144f06.js";import{z as N,D as T,x as $,e as a,Q as M,q as H,H as B,C as R,r as I,o as _,a as ee,w as b,B as e,d as te,t as le,F as oe}from"./vue-libs.84e059bd.js";import{d as ue}from"./deep-clone.fcffebda.js";import"./index.61e5d56d.js";import"./use-route.841a0e09.js";import"./use-id.28dc46a0.js";import"./use-expose.147062de.js";import"./interceptor.897e55bf.js";import"./use-touch.a752672a.js";import"./use-lazy-render.0b8d6da1.js";import"./on-popup-reopen.b9a88023.js";import"./index.392981b6.js";import"./index.a80c4822.js";import"./use-refs.a0d96d45.js";import"./index.b37227f9.js";function ae(v){return typeof v=="function"||Object.prototype.toString.call(v)==="[object Object]"&&!M(v)}const[se,w,ne]=J("cascader"),ie={title:String,options:X(),closeable:S,swipeable:S,closeIcon:Q("cross"),showHeader:S,modelValue:W,fieldNames:Object,placeholder:String,activeColor:String};var re=N({name:se,props:ie,emits:["close","change","finish","click-tab","update:modelValue"],setup(v,{slots:o,emit:f}){const i=T([]),c=T(0),{text:h,value:C,children:p}=L({text:"text",value:"value",children:"children"},v.fieldNames),V=(u,s)=>{for(const d of u){if(d[C]===s)return[d];if(d[p]){const n=V(d[p],s);if(n)return[d,...n]}}},y=()=>{const{options:u,modelValue:s}=v;if(s!==void 0){const d=V(u,s);if(d){let n=u;i.value=d.map(m=>{const F={options:n,selected:m},E=n.find(O=>O[C]===m[C]);return E&&(n=E[p]),F}),n&&i.value.push({options:n,selected:null}),H(()=>{c.value=i.value.length-1});return}}i.value=[{options:u,selected:null}]},A=(u,s)=>{if(u.disabled)return;if(i.value[s].selected=u,i.value.length>s+1&&(i.value=i.value.slice(0,s+1)),u[p]){const m={options:u[p],selected:null};i.value[s+1]?i.value[s+1]=m:i.value.push(m),H(()=>{c.value++})}const d=i.value.map(m=>m.selected).filter(Boolean);f("update:modelValue",u[C]);const n={value:u[C],tabIndex:s,selectedOptions:d};f("change",n),u[p]||f("finish",n)},x=()=>f("close"),t=({name:u,title:s})=>f("click-tab",u,s),r=()=>v.showHeader?a("div",{class:w("header")},[a("h2",{class:w("title")},[o.title?o.title():v.title]),v.closeable?a(U,{name:v.closeIcon,class:[w("close-icon"),q],onClick:x},null):null]):null,l=(u,s,d)=>{const{disabled:n}=u,m=!!(s&&u[C]===s[C]),F=u.color||(m?v.activeColor:void 0),E=o.option?o.option({option:u,selected:m}):a("span",null,[u[h]]);return a("li",{role:"menuitemradio",class:[w("option",{selected:m,disabled:n}),u.className],style:{color:F},tabindex:n?void 0:m?0:-1,"aria-checked":m,"aria-disabled":n||void 0,onClick:()=>A(u,d)},[E,m?a(U,{name:"success",class:w("selected-icon")},null):null])},D=(u,s,d)=>a("ul",{role:"menu",class:w("options")},[u.map(n=>l(n,s,d))]),z=(u,s)=>{const{options:d,selected:n}=u,m=v.placeholder||ne("select"),F=n?n[h]:m;return a(Y,{title:F,titleClass:w("tab",{unselected:!n})},{default:()=>{var E,O;return[(E=o["options-top"])==null?void 0:E.call(o,{tabIndex:s}),D(d,n,s),(O=o["options-bottom"])==null?void 0:O.call(o,{tabIndex:s})]}})},P=()=>{let u;return a(G,{active:c.value,"onUpdate:active":s=>c.value=s,shrink:!0,animated:!0,class:w("tabs"),color:v.activeColor,swipeable:v.swipeable,"onClick-tab":t},ae(u=i.value.map(z))?u:{default:()=>[u]})};return y(),$(()=>v.options,y,{deep:!0}),$(()=>v.modelValue,u=>{u!==void 0&&i.value.map(d=>{var n;return(n=d.selected)==null?void 0:n[C]}).includes(u)||y()}),()=>a("div",{class:w()},[r(),P()])}});const k=Z(re);var de=[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[{text:"\u676D\u5DDE\u5E02",value:"330100",children:[{text:"\u4E0A\u57CE\u533A",value:"330102"},{text:"\u4E0B\u57CE\u533A",value:"330103"},{text:"\u6C5F\u5E72\u533A",value:"330104"}]},{text:"\u5B81\u6CE2\u5E02",value:"330200",children:[{text:"\u6D77\u66D9\u533A",value:"330203"},{text:"\u6C5F\u5317\u533A",value:"330205"},{text:"\u5317\u4ED1\u533A",value:"330206"}]},{text:"\u6E29\u5DDE\u5E02",value:"330300",children:[{text:"\u9E7F\u57CE\u533A",value:"330302"},{text:"\u9F99\u6E7E\u533A",value:"330303"},{text:"\u74EF\u6D77\u533A",value:"330304"}]}]},{text:"\u6C5F\u82CF\u7701",value:"320000",children:[{text:"\u5357\u4EAC\u5E02",value:"320100",children:[{text:"\u7384\u6B66\u533A",value:"320102"},{text:"\u79E6\u6DEE\u533A",value:"320104"},{text:"\u5EFA\u90BA\u533A",value:"320105"}]},{text:"\u65E0\u9521\u5E02",value:"320200",children:[{text:"\u9521\u5C71\u533A",value:"320205"},{text:"\u60E0\u5C71\u533A",value:"320206"},{text:"\u6EE8\u6E56\u533A",value:"320211"}]},{text:"\u5F90\u5DDE\u5E02",value:"320300",children:[{text:"\u9F13\u697C\u533A",value:"320302"},{text:"\u4E91\u9F99\u533A",value:"320303"},{text:"\u8D3E\u6C6A\u533A",value:"320305"}]}]}],ve=[{text:"Zhejiang",value:"330000",children:[{text:"Hangzhou",value:"330100",children:[{text:"Shangcheng",value:"330102"},{text:"Xiacheng",value:"330103"},{text:"Jianggan",value:"330104"}]},{text:"Ningbo",value:"330200",children:[{text:"Haishu",value:"330203"},{text:"Jiangbei",value:"330205"},{text:"Beilun",value:"330206"}]},{text:"Wenzhou",value:"330300",children:[{text:"Lucheng",value:"330302"},{text:"Longwan",value:"330303"},{text:"Ouhai",value:"330304"}]}]},{text:"Jiangsu",value:"320000",children:[{text:"Nanjing",value:"320100",children:[{text:"Xuanwu",value:"320102"},{text:"Qinghuai",value:"320104"},{text:"Jianye",value:"320105"}]},{text:"Wuxi",value:"320200",children:[{text:"Xishan",value:"320205"},{text:"Huishan",value:"320206"},{text:"Binhu",value:"320211"}]},{text:"Xuzhou",value:"320300",children:[{text:"Gulou",value:"320302"},{text:"Yunlong",value:"320303"},{text:"Jiawang",value:"320305"}]}]}];const ce={class:"current-level"},Ne=N({setup(v){const o=K({"zh-CN":{area:"\u5730\u533A",options:de,selectArea:"\u8BF7\u9009\u62E9\u5730\u533A",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncOptions:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879",asyncOptions1:[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[]}],asyncOptions2:[{text:"\u676D\u5DDE\u5E02",value:"330100"},{text:"\u5B81\u6CE2\u5E02",value:"330200"}],currentLevel:x=>`\u5F53\u524D\u4E3A\u7B2C ${x} \u7EA7`,customContent:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9",customFieldNames:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"},"en-US":{area:"Area",options:ve,selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",asyncOptions1:[{text:"Zhejiang",value:"330000",children:[]}],asyncOptions2:[{text:"Hangzhou",value:"330100"},{text:"Ningbo",value:"330200"}],currentLevel:x=>`Current level is ${x}`,customContent:"Custom Content",customFieldNames:"Custom Field Names"}}),f=B({show:!1,value:"",result:""}),i=B({show:!1,value:void 0,result:""}),c=B({show:!1,value:void 0,result:"",options:o("asyncOptions1")}),h=B({show:!1,value:void 0,result:""}),C={text:"name",value:"code",children:"items"},p=B({show:!1,value:void 0,result:""}),V=R(()=>{const x=ue(o("options")),t=r=>{"text"in r&&(r.name=r.text,delete r.text),"value"in r&&(r.code=r.value,delete r.value),"children"in r&&(r.items=r.children,delete r.children,r.items.forEach(t))};return x.forEach(t),x}),y=({value:x})=>{x==="330000"&&setTimeout(()=>{c.options[0].children=o("asyncOptions2")},500)},A=(x,{value:t,selectedOptions:r})=>{const l=r.map(D=>D.text||D.name).join("/");x.show=!1,x.value=t,x.result=l};return(x,t)=>{const r=I("demo-block");return _(),ee(oe,null,[a(r,{card:"",title:e(o)("basicUsage")},{default:b(()=>[a(e(g),{modelValue:e(f).result,"onUpdate:modelValue":t[0]||(t[0]=l=>e(f).result=l),"is-link":"",readonly:"",label:e(o)("area"),placeholder:e(o)("selectArea"),onClick:t[1]||(t[1]=l=>e(f).show=!0)},null,8,["modelValue","label","placeholder"]),a(e(j),{show:e(f).show,"onUpdate:show":t[5]||(t[5]=l=>e(f).show=l),round:"",teleport:"body",position:"bottom"},{default:b(()=>[a(e(k),{modelValue:e(f).value,"onUpdate:modelValue":t[2]||(t[2]=l=>e(f).value=l),title:e(o)("selectArea"),options:e(o)("options"),onClose:t[3]||(t[3]=l=>e(f).show=!1),onFinish:t[4]||(t[4]=l=>A(e(f),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),a(r,{card:"",title:e(o)("customColor")},{default:b(()=>[a(e(g),{modelValue:e(i).result,"onUpdate:modelValue":t[6]||(t[6]=l=>e(i).result=l),"is-link":"",readonly:"",label:e(o)("area"),placeholder:e(o)("selectArea"),onClick:t[7]||(t[7]=l=>e(i).show=!0)},null,8,["modelValue","label","placeholder"]),a(e(j),{show:e(i).show,"onUpdate:show":t[11]||(t[11]=l=>e(i).show=l),round:"",teleport:"body",position:"bottom"},{default:b(()=>[a(e(k),{modelValue:e(i).value,"onUpdate:modelValue":t[8]||(t[8]=l=>e(i).value=l),title:e(o)("selectArea"),options:e(o)("options"),"active-color":"#1989fa",onClose:t[9]||(t[9]=l=>e(i).show=!1),onFinish:t[10]||(t[10]=l=>A(e(i),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),a(r,{card:"",title:e(o)("asyncOptions")},{default:b(()=>[a(e(g),{modelValue:e(c).result,"onUpdate:modelValue":t[12]||(t[12]=l=>e(c).result=l),"is-link":"",readonly:"",label:e(o)("area"),placeholder:e(o)("selectArea"),onClick:t[13]||(t[13]=l=>e(c).show=!0)},null,8,["modelValue","label","placeholder"]),a(e(j),{show:e(c).show,"onUpdate:show":t[17]||(t[17]=l=>e(c).show=l),round:"",teleport:"body",position:"bottom"},{default:b(()=>[a(e(k),{modelValue:e(c).value,"onUpdate:modelValue":t[14]||(t[14]=l=>e(c).value=l),title:e(o)("selectArea"),options:e(c).options,onClose:t[15]||(t[15]=l=>e(c).show=!1),onChange:y,onFinish:t[16]||(t[16]=l=>A(e(c),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),a(r,{card:"",title:e(o)("customFieldNames")},{default:b(()=>[a(e(g),{modelValue:e(h).result,"onUpdate:modelValue":t[18]||(t[18]=l=>e(h).result=l),"is-link":"",readonly:"",label:e(o)("area"),placeholder:e(o)("selectArea"),onClick:t[19]||(t[19]=l=>e(h).show=!0)},null,8,["modelValue","label","placeholder"]),a(e(j),{show:e(h).show,"onUpdate:show":t[23]||(t[23]=l=>e(h).show=l),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:b(()=>[a(e(k),{modelValue:e(h).value,"onUpdate:modelValue":t[20]||(t[20]=l=>e(h).value=l),title:e(o)("selectArea"),options:e(V),"field-names":C,onClose:t[21]||(t[21]=l=>e(h).show=!1),onFinish:t[22]||(t[22]=l=>A(e(h),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),a(r,{card:"",title:e(o)("customContent")},{default:b(()=>[a(e(g),{modelValue:e(p).result,"onUpdate:modelValue":t[24]||(t[24]=l=>e(p).result=l),"is-link":"",readonly:"",label:e(o)("area"),placeholder:e(o)("selectArea"),onClick:t[25]||(t[25]=l=>e(p).show=!0)},null,8,["modelValue","label","placeholder"]),a(e(j),{show:e(p).show,"onUpdate:show":t[29]||(t[29]=l=>e(p).show=l),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:b(()=>[a(e(k),{modelValue:e(p).value,"onUpdate:modelValue":t[26]||(t[26]=l=>e(p).value=l),title:e(o)("selectArea"),options:e(V),"field-names":C,onClose:t[27]||(t[27]=l=>e(p).show=!1),onFinish:t[28]||(t[28]=l=>A(e(p),l))},{"options-top":b(({tabIndex:l})=>[te("div",ce,le(e(o)("currentLevel",l)),1)]),_:1},8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{Ne as default};
