import{e as t,u as o,t as e,p as n,m as l,b as a}from"./use-translate.b583725c.js";import{c as s,w as c}from"./with-install.62f47d2f.js";import{m as r,u as i}from"./mount-component.4a14b4e1.js";import{a as u,b as m}from"./constant.4d85ecb9.js";import{c as f}from"./interceptor.ab1192d4.js";import{a as d}from"./unit.49c29796.js";import{a as p,p as g,P as B}from"./index.aa2914ba.js";import{B as C}from"./index.627ee112.js";import{b as w,a as h}from"./index.1c8d237b.js";import{A as b,G as v,e as x,J as y}from"./vendor.ef334a89.js";const[O,k,S]=s("dialog"),j=[...p,"transition","closeOnPopstate"];var T=b({name:O,props:t({},g,{title:String,theme:String,width:[Number,String],message:[String,Function],callback:Function,allowHtml:Boolean,className:o,messageAlign:String,closeOnPopstate:e,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showConfirmButton:e,closeOnClickOverlay:Boolean,transition:{type:String,default:"van-dialog-bounce"}}),emits:["confirm","cancel","update:show"],setup(t,{emit:o,slots:e}){const a=v({confirm:!1,cancel:!1}),s=t=>o("update:show",t),c=o=>{s(!1),t.callback&&t.callback(o)},r=e=>()=>{t.show&&(o(e),t.beforeClose?(a[e]=!0,f({interceptor:t.beforeClose,args:[e],done(){c(e),a[e]=!1},canceled(){a[e]=!1}})):c(e))},i=r("cancel"),p=r("confirm"),g=()=>{const o=e.title?e.title():t.title;if(o)return x("div",{class:k("header",{isolated:!t.message&&!e.default})},[o])},b=o=>{const{message:e,allowHtml:n,messageAlign:a}=t,s=k("message",{"has-title":o,[a]:a}),c=l(e)?e():e;return n&&"string"==typeof c?x("div",{class:s,innerHTML:c},null):x("div",{class:s},[c])},O=()=>{if(e.default)return x("div",{class:k("content")},[e.default()]);const{title:o,message:n,allowHtml:l}=t;if(n){const t=!(!o&&!e.title);return x("div",{key:l?1:0,class:k("content",{isolated:!t})},[b(t)])}},T=()=>e.footer?e.footer():"round-button"===t.theme?x(h,{class:k("footer")},{default:()=>[t.showCancelButton&&x(w,{type:"warning",text:t.cancelButtonText||S("cancel"),class:k("cancel"),color:t.cancelButtonColor,loading:a.cancel,onClick:i},null),t.showConfirmButton&&x(w,{type:"danger",text:t.confirmButtonText||S("confirm"),class:k("confirm"),color:t.confirmButtonColor,loading:a.confirm,onClick:p},null)]}):x("div",{class:[m,k("footer")]},[t.showCancelButton&&x(C,{size:"large",text:t.cancelButtonText||S("cancel"),class:k("cancel"),style:{color:t.cancelButtonColor},loading:a.cancel,onClick:i},null),t.showConfirmButton&&x(C,{size:"large",text:t.confirmButtonText||S("confirm"),class:[k("confirm"),{[u]:t.showCancelButton}],style:{color:t.confirmButtonColor},loading:a.confirm,onClick:p},null)]);return()=>{const{width:o,title:e,theme:l,message:a,className:c}=t;return x(B,y({role:"dialog",class:[k([l]),c],style:{width:d(o)},"aria-labelledby":e||a},n(t,j),{"onUpdate:show":s}),{default:()=>[g(),O(),T()]})}}});let P;function H(o){return a?new Promise(((e,n)=>{P||function(){const t={setup(){const{state:t,toggle:o}=i();return()=>x(T,y(t,{"onUpdate:show":o}),null)}};({instance:P}=r(t))}(),P.open(t({},H.currentOptions,o,{callback:t=>{("confirm"===t?e:n)(t)}}))})):Promise.resolve()}H.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1},H.currentOptions=t({},H.defaultOptions),H.alert=H,H.confirm=o=>H(t({showCancelButton:!0},o)),H.close=()=>{P&&P.toggle(!1)},H.setDefaultOptions=o=>{t(H.currentOptions,o)},H.resetDefaultOptions=()=>{H.currentOptions=t({},H.defaultOptions)},H.Component=c(T),H.install=t=>{t.use(H.Component),t.config.globalProperties.$dialog=H};export{H as D};