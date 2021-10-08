import{c as h,h as x,u as E}from"./use-translate.789845f9.js";import{m as y,n as F,w as v}from"./with-install.c13b505f.js";import{e,z as f,D as _,r as b,o as D,a as j,w as o,B as t,h as k,t as C,F as w}from"./vue-libs.1dda7261.js";import{T as $,a as p}from"./index.15407be1.js";import{B}from"./index.2e0d9cdf.js";import"./use-route.dfb37f70.js";import"./index.a047f0f1.js";import"./use-touch.b0c07ae6.js";import"./use-expose.d54fed8a.js";import"./on-popup-reopen.1b0dc8ad.js";import"./utils.39620306.js";import"./index.904c4b4d.js";import"./useChildren.ed284d59.js";import"./useParent.5e3d1dfb.js";import"./constant.4d85ecb9.js";import"./interceptor.4e67a670.js";import"./use-refs.2bafdad1.js";import"./index.45ab6c22.js";import"./index.0749451f.js";import"./index.83a50000.js";import"./index.423a1a17.js";const i="van-empty-network-",n=(s,r,l)=>e("stop",{"stop-color":s,offset:`${r}%`,"stop-opacity":l},null),z=e("svg",{viewBox:"0 0 160 160"},[e("defs",null,[e("linearGradient",{id:`${i}1`,x1:"64.022%",y1:"100%",x2:"64.022%",y2:"0%"},[n("#FFF",0,.5),n("#F2F3F5",100)]),e("linearGradient",{id:`${i}2`,x1:"50%",y1:"0%",x2:"50%",y2:"84.459%"},[n("#EBEDF0",0),n("#DCDEE0",100,0)]),e("linearGradient",{id:`${i}3`,x1:"100%",y1:"0%",x2:"100%",y2:"100%"},[n("#EAEDF0",0),n("#DCDEE0",100)]),e("linearGradient",{id:`${i}4`,x1:"100%",y1:"100%",x2:"100%",y2:"0%"},[n("#EAEDF0",0),n("#DCDEE0",100)]),e("linearGradient",{id:`${i}5`,x1:"0%",y1:"43.982%",x2:"100%",y2:"54.703%"},[n("#EAEDF0",0),n("#DCDEE0",100)]),e("linearGradient",{id:`${i}6`,x1:"94.535%",y1:"43.837%",x2:"5.465%",y2:"54.948%"},[n("#EAEDF0",0),n("#DCDEE0",100)]),e("radialGradient",{id:`${i}7`,cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54835 0 .5 -.5)"},[n("#EBEDF0",0),n("#FFF",100,0)])]),e("g",{fill:"none","fill-rule":"evenodd"},[e("g",{opacity:".8"},[e("path",{d:"M0 124V46h20v20h14v58H0z",fill:`url(#${i}1)`,transform:"matrix(-1 0 0 1 36 7)"},null),e("path",{d:"M121 8h22.231v14H152v77.37h-31V8z",fill:`url(#${i}1)`,transform:"translate(2 7)"},null)]),e("path",{fill:`url(#${i}7)`,d:"M0 139h160v21H0z"},null),e("path",{d:"M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",fill:`url(#${i}2)`,"fill-rule":"nonzero",transform:"translate(43 36)"},null),e("g",{opacity:".6","stroke-linecap":"round","stroke-width":"7"},[e("path",{d:"M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:`url(#${i}3)`,transform:"translate(43 36)"},null),e("path",{d:"M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",stroke:`url(#${i}3)`,transform:"translate(43 36)"},null),e("path",{d:"M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:`url(#${i}4)`,transform:"rotate(-180 76.483 42.257)"},null),e("path",{d:"M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",stroke:`url(#${i}4)`,transform:"rotate(-180 89.791 42.146)"},null)]),e("g",{transform:"translate(31 105)","fill-rule":"nonzero"},[e("rect",{fill:`url(#${i}5)`,width:"98",height:"34",rx:"2"},null),e("rect",{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.114"},null),e("rect",{fill:`url(#${i}6)`,x:"15",y:"12",width:"18",height:"6",rx:"1.114"},null)])])]),[S,c]=h("empty"),A=["error","search","default"];var T=f({name:S,props:{image:y("default"),imageSize:F,description:String},setup(s,{slots:r}){const l=()=>{if(r.image)return r.image();let{image:a}=s;return a==="network"?z:(A.includes(a)&&(a=`https://img.yzcdn.cn/vant/empty-image-${a}.png`),e("img",{src:a},null))},m=()=>{const a=r.description?r.description():s.description;if(a)return e("p",{class:c("description")},[a])},u=()=>{if(r.default)return e("div",{class:c("bottom")},[r.default()])};return()=>e("div",{class:c()},[e("div",{class:c("image"),style:x(s.imageSize)},[l()]),m(),u()])}});const d=v(T);const re=f({setup(s){const r=E({"zh-CN":{error:"\u901A\u7528\u9519\u8BEF",search:"\u641C\u7D22\u63D0\u793A",network:"\u7F51\u7EDC\u9519\u8BEF",imageType:"\u56FE\u7247\u7C7B\u578B",description:"\u63CF\u8FF0\u6587\u5B57",customImage:"\u81EA\u5B9A\u4E49\u56FE\u7247",bottomContent:"\u5E95\u90E8\u5185\u5BB9"},"en-US":{error:"Error",search:"Search",network:"Network",imageType:"Image Type",description:"Description",customImage:"Custom Image",bottomContent:"Bottom Content"}}),l=_("error");return(m,u)=>{const a=b("demo-block");return D(),j(w,null,[e(a,{title:t(r)("basicUsage")},{default:o(()=>[e(t(d),{description:t(r)("description")},null,8,["description"])]),_:1},8,["title"]),e(a,{title:t(r)("imageType")},{default:o(()=>[e(t($),{active:l.value,"onUpdate:active":u[0]||(u[0]=g=>l.value=g)},{default:o(()=>[e(t(p),{name:"error",title:t(r)("error")},{default:o(()=>[e(t(d),{image:"error",description:t(r)("description")},null,8,["description"])]),_:1},8,["title"]),e(t(p),{name:"network",title:t(r)("network")},{default:o(()=>[e(t(d),{image:"network",description:t(r)("description")},null,8,["description"])]),_:1},8,["title"]),e(t(p),{name:"search",title:t(r)("search")},{default:o(()=>[e(t(d),{image:"search",description:t(r)("description")},null,8,["description"])]),_:1},8,["title"])]),_:1},8,["active"])]),_:1},8,["title"]),e(a,{title:t(r)("customImage")},{default:o(()=>[e(t(d),{class:"custom-image",image:"https://img.yzcdn.cn/vant/custom-empty-image.png",description:t(r)("description")},null,8,["description"])]),_:1},8,["title"]),e(a,{title:t(r)("bottomContent")},{default:o(()=>[e(t(d),{description:t(r)("description")},{default:o(()=>[e(t(B),{round:"",type:"danger",class:"bottom-button"},{default:o(()=>[k(C(t(r)("button")),1)]),_:1})]),_:1},8,["description"])]),_:1},8,["title"])],64)}}});export{re as default};
