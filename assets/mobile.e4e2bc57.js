import{s as t,a as E,c as r}from"./index.09c0840a.js";import{V as S,a as _,b as d}from"./constant.150fe093.js";window.addEventListener("message",a=>{if(a.data.type===S){const e=JSON.parse(a.data.value);t(e)}if(a.data.type===_){const{varName:e,varValue:s}=JSON.parse(a.data.value);E(e,s)}a.data.type===d&&r()});