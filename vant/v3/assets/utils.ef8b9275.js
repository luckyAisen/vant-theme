import{e as a}from"./use-translate.b8dd01c6.js";import{p as n}from"./Picker.daddb5b4.js";const c=a({},n,{filter:Function,columnsOrder:Array,formatter:{type:Function,default:(e,t)=>t}}),p=Object.keys(n);function d(e,t){let r=-1;const s=Array(e);for(;++r<e;)s[r]=t(r);return s}function u(e){if(!e)return 0;for(;Number.isNaN(parseInt(e,10));)if(e.length>1)e=e.slice(1);else return 0;return parseInt(e,10)}const f=(e,t)=>32-new Date(e,t-1,32).getDate();export{u as a,f as g,p,c as s,d as t};
