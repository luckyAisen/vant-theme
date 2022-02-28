var xo=Object.defineProperty;var _t=Object.getOwnPropertySymbols;var yo=Object.prototype.hasOwnProperty,Co=Object.prototype.propertyIsEnumerable;var zt=(e,t,o)=>t in e?xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,It=(e,t)=>{for(var o in t||(t={}))yo.call(t,o)&&zt(e,o,t[o]);if(_t)for(var o of _t(t))Co.call(t,o)&&zt(e,o,t[o]);return e};import{k as m,r as P,E as wo,d as E,h as s,l as ee,M as ze,p as pe,G as de,H as Ut,T as Ot,w as lt,n as So,J as Lt,O as ko,I as Ro,i as ne,o as Y,A as J,S as _,x as G,t as X,B as Se,u as O,V as Ee,z as ge,X as _o,Y as zo,y as Xe,U as Io,q as $o,Z as Ao,c as rt,v as $t,_ as At}from"./vendor.f4b8216c.js";import{i as Po,N as Ht,g as Eo,h as De,j as st,V as No,k as To,l as Fo,p as Bo,m as Mo,n as Do,o as Vo,C as Uo,f as nt,e as Oo,q as jt,r as Lo,a as gt,b as Ho,c as jo}from"./index.710b6a16.js";import{V as qo,f as Ko,g as Go,a as Wo}from"./constant.150fe093.js";import{b as p,h as I,j as b,e as ye,q as Yo,a as Ze,c as Ue,y as Xo,U as ce,V as ae,W as ue,X as be,Y as le,Z as Re,_ as xe,g as Oe,$ as Be,a0 as dt,a1 as ct,a2 as ut,B as Zo,d as M,R as Qo,u as Z,l as pt,f as Qe,i as Jo,x as W,z as Me,K as Ge,H as ke,P as er,n as tr,m as or}from"./Button.b0d1f7a7.js";import{i as rr,o as Ie,l as $e,x as nr,w as ir,I as Ye,V as ar,y as lr,A as sr,N as qt,e as dr,r as _e,g as bt,k as it,f as cr}from"./context.c301a8f2.js";import{a as ur,b as Kt,l as pr,p as vr,f as hr,N as Pt}from"./Layout.11ba1072.js";import"./index.fc9d9e1b.js";function fr(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(o=>{if(o==="")return;const[r,n]=o.split(":");n===void 0?t[""]=r:t[r]=n}),t}function Ne(e,t){var o;if(e==null)return;const r=fr(e);if(t===void 0)return r[""];if(typeof t=="string")return(o=r[t])!==null&&o!==void 0?o:r[""];if(Array.isArray(t)){for(let n=t.length-1;n>=0;--n){const i=t[n];if(i in r)return r[i]}return r[""]}else{let n,i=-1;return Object.keys(r).forEach(a=>{const l=Number(a);!Number.isNaN(l)&&t>=l&&l>=i&&(i=l,n=r[a])}),n}}function Gt(e,t,o){t/=100,o/=100;const r=t*Math.min(o,1-o)+o;return[e,r?(2-2*o/r)*100:0,r*100]}function We(e,t,o){t/=100,o/=100;const r=o-o*t/2,n=Math.min(r,1-r);return[e,n?(o-r)/n*100:0,r*100]}function se(e,t,o){t/=100,o/=100;let r=(n,i=(n+e/60)%6)=>o-o*t*Math.max(Math.min(i,4-i,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function vt(e,t,o){e/=255,t/=255,o/=255;let r=Math.max(e,t,o),n=r-Math.min(e,t,o),i=n&&(r==e?(t-o)/n:r==t?2+(o-e)/n:4+(e-t)/n);return[60*(i<0?i+6:i),r&&n/r*100,r*100]}function ht(e,t,o){e/=255,t/=255,o/=255;let r=Math.max(e,t,o),n=r-Math.min(e,t,o),i=1-Math.abs(r+r-n-1),a=n&&(r==e?(t-o)/n:r==t?2+(o-e)/n:4+(e-t)/n);return[60*(a<0?a+6:a),i?n/i*100:0,(r+r-n)*50]}function ft(e,t,o){t/=100,o/=100;let r=t*Math.min(o,1-o),n=(i,a=(i+e/30)%12)=>o-r*Math.max(Math.min(a-3,9-a,1),-1);return[n(0)*255,n(8)*255,n(4)*255]}const mr={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function gr(e){return`(min-width: ${e}px)`}const Te={};function br(e=mr){if(!rr)return m(()=>[]);if(typeof window.matchMedia!="function")return m(()=>[]);const t=P({}),o=Object.keys(e),r=(n,i)=>{n.matches?t.value[i]=!0:t.value[i]=!1};return o.forEach(n=>{const i=e[n];let a,l;Te[i]===void 0?(a=window.matchMedia(gr(i)),a.addEventListener?a.addEventListener("change",d=>{l.forEach(f=>{f(d,n)})}):a.addListener&&a.addListener(d=>{l.forEach(f=>{f(d,n)})}),l=new Set,Te[i]={mql:a,cbs:l}):(a=Te[i].mql,l=Te[i].cbs),l.add(r),a.matches&&l.forEach(d=>{d(a,n)})}),wo(()=>{o.forEach(n=>{const{cbs:i}=Te[e[n]];i.has(r)&&i.delete(r)})}),m(()=>{const{value:n}=t;return o.filter(i=>n[i])})}var xr=E({name:"ChevronDownFilled",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),yr=p("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[I(">",[p("input",[I("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),I("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),p("button",[I("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[b("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),I("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[b("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),I("*",[I("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[I(">",[p("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),p("base-selection",[p("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),p("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),I("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[I(">",[p("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),p("base-selection",[p("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),p("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),b("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const Cr={};var wr=E({name:"InputGroup",props:Cr,setup(e){const{mergedClsPrefixRef:t}=ye(e);return Yo("-input-group",yr,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:`${e}-input-group`},this.$slots)}});const Sr=e=>{const{fontSize:t,boxShadow2:o,popoverColor:r,textColor2:n,borderRadius:i,borderColor:a,heightSmall:l,heightMedium:d,heightLarge:f,fontSizeSmall:A,fontSizeMedium:x,fontSizeLarge:y,dividerColor:z}=e;return{panelFontSize:t,boxShadow:o,color:r,textColor:n,borderRadius:i,border:`1px solid ${a}`,heightSmall:l,heightMedium:d,heightLarge:f,fontSizeSmall:A,fontSizeMedium:x,fontSizeLarge:y,dividerColor:z}},kr=Ze({name:"ColorPicker",common:Ue,peers:{Input:Po,Button:Xo},self:Sr});var Rr=kr;function _r(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Ve(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function zr(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Ir(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const $r={rgb:{hex(e){return ce(ae(e))},hsl(e){const[t,o,r,n]=ae(e);return ue([...ht(t,o,r),n])},hsv(e){const[t,o,r,n]=ae(e);return be([...vt(t,o,r),n])}},hex:{rgb(e){return le(ae(e))},hsl(e){const[t,o,r,n]=ae(e);return ue([...ht(t,o,r),n])},hsv(e){const[t,o,r,n]=ae(e);return be([...vt(t,o,r),n])}},hsl:{hex(e){const[t,o,r,n]=Re(e);return ce([...ft(t,o,r),n])},rgb(e){const[t,o,r,n]=Re(e);return le([...ft(t,o,r),n])},hsv(e){const[t,o,r,n]=Re(e);return be([...Gt(t,o,r),n])}},hsv:{hex(e){const[t,o,r,n]=xe(e);return ce([...se(t,o,r),n])},rgb(e){const[t,o,r,n]=xe(e);return le([...se(t,o,r),n])},hsl(e){const[t,o,r,n]=xe(e);return ue([...We(t,o,r),n])}}};function Wt(e,t,o){return o=o||Ve(e),o?o===t?e:$r[o][t](e):null}const we="12px",Ar=12,fe="6px",Pr=6,Er="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";var Nr=E({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=P(null);function o(i){!t.value||(Ie("mousemove",document,r),Ie("mouseup",document,n),r(i))}function r(i){const{value:a}=t;if(!a)return;const{width:l,left:d}=a.getBoundingClientRect(),f=zr((i.clientX-d-Pr)/(l-Ar)*360);e.onUpdateHue(f)}function n(){var i;$e("mousemove",document,r),$e("mouseup",document,n),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,style:{height:we,borderRadius:fe}},s("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Er,height:we,borderRadius:fe,position:"relative"},onMousedown:this.handleMouseDown},s("div",{style:{position:"absolute",left:fe,right:fe,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${fe})`,borderRadius:fe,width:we,height:we}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:fe,width:we,height:we}})))))}});const Fe="12px",Tr=12,me="6px";var Fr=E({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=P(null);function o(i){!t.value||!e.rgba||(Ie("mousemove",document,r),Ie("mouseup",document,n),r(i))}function r(i){const{value:a}=t;if(!a)return;const{width:l,left:d}=a.getBoundingClientRect(),f=(i.clientX-d)/(l-Tr);e.onUpdateAlpha(Ir(f))}function n(){var i;$e("mousemove",document,r),$e("mouseup",document,n),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:t,railBackgroundImage:m(()=>{const{rgba:i}=e;return i?`linear-gradient(to right, rgba(${i[0]}, ${i[1]}, ${i[2]}, 0) 0%, rgba(${i[0]}, ${i[1]}, ${i[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:Fe,borderRadius:me},onMousedown:this.handleMouseDown},s("div",{style:{borderRadius:me,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},s("div",{class:`${e}-color-picker-checkboard`}),s("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&s("div",{style:{position:"absolute",left:me,right:me,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${me})`,borderRadius:me,width:Fe,height:Fe}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:le(this.rgba),borderRadius:me,width:Fe,height:Fe}}))))}});const je="12px",qe="6px";var Br=E({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=P(null);function o(i){!t.value||(Ie("mousemove",document,r),Ie("mouseup",document,n),r(i))}function r(i){const{value:a}=t;if(!a)return;const{width:l,height:d,left:f,bottom:A}=a.getBoundingClientRect(),x=(A-i.clientY)/d,y=(i.clientX-f)/l,z=100*(y>1?1:y<0?0:y),R=100*(x>1?1:x<0?0:x);e.onUpdateSV(z,R)}function n(){var i;$e("mousemove",document,r),$e("mouseup",document,n),(i=e.onComplete)===null||i===void 0||i.call(e)}return{palleteRef:t,handleColor:m(()=>{const{rgba:i}=e;return i?`rgb(${i[0]}, ${i[1]}, ${i[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},s("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),s("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&s("div",{class:`${e}-color-picker-handle`,style:{width:je,height:je,borderRadius:qe,left:`calc(${this.displayedSv[0]}% - ${qe})`,bottom:`calc(${this.displayedSv[1]}% - ${qe})`}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:qe,width:je,height:je}})))}});const xt=Oe("n-color-picker");function Mr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function Dr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Vr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Ur(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Or(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}const Lr={paddingSmall:"0 4px"};var Et=E({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=P(""),{themeRef:o}=ee(xt,null);ze(()=>{t.value=r()});function r(){const{value:a}=e;if(a===null)return"";const{label:l}=e;return l==="HEX"?a:l==="A"?`${Math.floor(a*100)}%`:String(Math.floor(a))}function n(a){t.value=a}function i(a){let l,d;switch(e.label){case"HEX":d=Ur(a),d&&e.onUpdateValue(a),t.value=r();break;case"H":l=Dr(a),l?e.onUpdateValue(l):t.value=r();break;case"S":case"L":case"V":l=Vr(a),l?e.onUpdateValue(l):t.value=r();break;case"A":l=Or(a),l?e.onUpdateValue(l):t.value=r();break;case"R":case"G":case"B":l=Mr(a),l?e.onUpdateValue(l):t.value=r();break}}return{mergedTheme:o,inputValue:t,handleInputChange:i,handleInputUpdateValue:n}},render(){const{mergedTheme:e}=this;return s(Ht,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Lr,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Hr=E({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:r}=e;if(e.mode==="hex"){e.onUpdateValue((r?ce:Be)(o));return}let n;switch(e.valueArr===null?n=[0,0,0,0]:n=Array.from(e.valueArr),e.mode){case"hsv":n[t]=o,e.onUpdateValue((r?be:ut)(n));break;case"rgb":n[t]=o,e.onUpdateValue((r?le:ct)(n));break;case"hsl":n[t]=o,e.onUpdateValue((r?ue:dt)(n));break}}}},render(){const{clsPrefix:e,modes:t}=this;return s("div",{class:`${e}-color-picker-input`},s("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),s(wr,null,{default:()=>{const{mode:o,valueArr:r,showAlpha:n}=this;if(o==="hex"){let i=null;try{i=r===null?null:(n?ce:Be)(r)}catch{}return s(Et,{label:"HEX",showAlpha:n,value:i,onUpdateValue:a=>{this.handleUnitUpdateValue(0,a)}})}return(o+(n?"a":"")).split("").map((i,a)=>s(Et,{label:i.toUpperCase(),value:r===null?null:r[a],onUpdateValue:l=>{this.handleUnitUpdateValue(a,l)}}))}}))}}),jr=E({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=ee(xt,null);return()=>{const{hsla:r,value:n,clsPrefix:i,onClick:a,disabled:l}=e,d=t.label||o.value;return s("div",{class:[`${i}-color-picker-trigger`,l&&`${i}-color-picker-trigger--disabled`],onClick:l?void 0:a},s("div",{class:`${i}-color-picker-trigger__fill`},s("div",{class:`${i}-color-picker-checkboard`}),s("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:r?ue(r):""}}),n&&r?s("div",{class:`${i}-color-picker-trigger__value`,style:{color:r[2]>50||r[3]<.5?"black":"white"}},d?d(n):n):null))}}});function qr(e,t){if(t==="hsv"){const[o,r,n,i]=xe(e);return le([...se(o,r,n),i])}return e}function Kr(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}var Gr=E({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=m(()=>e.swatches.map(i=>{const a=Ve(i);return{value:i,mode:a,legalValue:qr(i,a)}}));function o(i){const{mode:a}=e;let{value:l,mode:d}=i;return d||(d="hex",/^[a-zA-Z]+$/.test(l)?l=Kr(l):(Zo("color-picker",`color ${l} in swatches is invalid.`),l="#000000")),d===a?l:Wt(l,a,d)}function r(i){e.onUpdateColor(o(i))}function n(i,a){i.key==="Enter"&&r(a)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:n}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>s("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(t),onKeydown:o=>this.handleSwatchKeyDown(o,t)},s("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Wr=E({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=Ve(e);return Boolean(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var r;const n=o.target.value;(r=e.onUpdateColor)===null||r===void 0||r.call(e,Wt(n.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-preview__preview`},s("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),s("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Yr=I([p("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),p("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[nr(),p("input",`
 text-align: center;
 `)]),p("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[I("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),p("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[b("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),I("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),p("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[b("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),p("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[b("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[M("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),p("color-picker-preview",`
 display: flex;
 `,[b("sliders",`
 flex: 1 0 auto;
 `),b("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),b("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),b("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),p("color-picker-input",`
 display: flex;
 align-items: center;
 `,[p("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),b("mode",`
 width: 72px;
 text-align: center;
 `)]),p("color-picker-control",`
 padding: 12px;
 `),p("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[p("button","margin-left: 8px;")]),p("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[b("value",`
 white-space: nowrap;
 position: relative;
 `),b("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),M("disabled","cursor: not-allowed"),p("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[I("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),p("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[p("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[b("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),I("&:focus",`
 outline: none;
 `,[b("fill",[I("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const Xr=Object.assign(Object.assign({},Z.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:{type:Boolean,default:!1},defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:st.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var Zr=E({name:"ColorPicker",props:Xr,setup(e,{slots:t}){const o=P(null);let r=null;const n=Qo(e),{mergedSizeRef:i,mergedDisabledRef:a}=n,{localeRef:l}=Eo("global"),{mergedClsPrefixRef:d,namespaceRef:f,inlineThemeDisabled:A}=ye(e),x=Z("ColorPicker","-color-picker",Yr,Rr,e,d);pe(xt,{themeRef:x,renderLabelRef:de(e,"renderLabel"),colorPickerSlots:t});const y=P(e.defaultShow),z=De(de(e,"show"),y);function R(c){const{onUpdateShow:T,"onUpdate:show":D}=e;T&&W(T,c),D&&W(D,c),y.value=c}const{defaultValue:v}=e,S=P(v===void 0?_r(e.modes,e.showAlpha):v),u=De(de(e,"value"),S),k=P([u.value]),w=P(0),$=m(()=>Ve(u.value)),{modes:q}=e,F=P(Ve(u.value)||q[0]||"rgb");function N(){const{modes:c}=e,{value:T}=F,D=c.findIndex(U=>U===T);~D?F.value=c[(D+1)%c.length]:F.value="rgb"}let C,h,B,j,te,oe,re,g;const Pe=m(()=>{const{value:c}=u;if(!c)return null;switch($.value){case"hsv":return xe(c);case"hsl":return[C,h,B,g]=Re(c),[...Gt(C,h,B),g];case"rgb":case"hex":return[te,oe,re,g]=ae(c),[...vt(te,oe,re),g]}}),ve=m(()=>{const{value:c}=u;if(!c)return null;switch($.value){case"rgb":case"hex":return ae(c);case"hsv":return[C,h,j,g]=xe(c),[...se(C,h,j),g];case"hsl":return[C,h,B,g]=Re(c),[...ft(C,h,B),g]}}),Je=m(()=>{const{value:c}=u;if(!c)return null;switch($.value){case"hsl":return Re(c);case"hsv":return[C,h,j,g]=xe(c),[...We(C,h,j),g];case"rgb":case"hex":return[te,oe,re,g]=ae(c),[...ht(te,oe,re),g]}}),io=m(()=>{switch(F.value){case"rgb":case"hex":return ve.value;case"hsv":return Pe.value;case"hsl":return Je.value}}),He=P(0),et=P(1),tt=P([0,0]);function ao(c,T){const{value:D}=Pe,U=He.value,L=D?D[3]:1;tt.value=[c,T];const{showAlpha:V}=e;switch(F.value){case"hsv":H((V?be:ut)([U,c,T,L]),"cursor");break;case"hsl":H((V?ue:dt)([...We(U,c,T),L]),"cursor");break;case"rgb":H((V?le:ct)([...se(U,c,T),L]),"cursor");break;case"hex":H((V?ce:Be)([...se(U,c,T),L]),"cursor");break}}function lo(c){He.value=c;const{value:T}=Pe;if(!T)return;const[,D,U,L]=T,{showAlpha:V}=e;switch(F.value){case"hsv":H((V?be:ut)([c,D,U,L]),"cursor");break;case"rgb":H((V?le:ct)([...se(c,D,U),L]),"cursor");break;case"hex":H((V?ce:Be)([...se(c,D,U),L]),"cursor");break;case"hsl":H((V?ue:dt)([...We(c,D,U),L]),"cursor");break}}function so(c){switch(F.value){case"hsv":[C,h,j]=Pe.value,H(be([C,h,j,c]),"cursor");break;case"rgb":[te,oe,re]=ve.value,H(le([te,oe,re,c]),"cursor");break;case"hex":[te,oe,re]=ve.value,H(ce([te,oe,re,c]),"cursor");break;case"hsl":[C,h,B]=Je.value,H(ue([C,h,B,c]),"cursor");break}et.value=c}function H(c,T){T==="cursor"?r=c:r=null;const{nTriggerFormChange:D,nTriggerFormInput:U}=n,{onUpdateValue:L,"onUpdate:value":V}=e;L&&W(L,c),V&&W(V,c),D(),U(),S.value=c}function co(c){H(c,"input"),So(Ce)}function Ce(c=!0){const{value:T}=u;if(T){const{nTriggerFormChange:D,nTriggerFormInput:U}=n,{onComplete:L}=e;L&&L(T);const{value:V}=k,{value:Q}=w;c&&(V.splice(Q+1,V.length,T),w.value=Q+1),D(),U()}}function uo(){const{value:c}=w;c-1<0||(H(k.value[c-1],"input"),Ce(!1),w.value=c-1)}function po(){const{value:c}=w;c<0||c+1>=k.value.length||(H(k.value[c+1],"input"),Ce(!1),w.value=c+1)}function vo(){R(!1)}const ho=m(()=>w.value>=1),fo=m(()=>{const{value:c}=k;return c.length>1&&w.value<c.length-1});Ut(z,c=>{c||(k.value=[u.value],w.value=0)}),ze(()=>{if(!(r&&r===u.value)){const{value:c}=Pe;c&&(He.value=c[0],et.value=c[3],tt.value=[c[1],c[2]])}r=null});const ot=m(()=>{const{value:c}=i,{common:{cubicBezierEaseInOut:T},self:{textColor:D,color:U,panelFontSize:L,boxShadow:V,border:Q,borderRadius:K,dividerColor:he,[pt("height",c)]:go,[pt("fontSize",c)]:bo}}=x.value;return{"--n-bezier":T,"--n-text-color":D,"--n-color":U,"--n-panel-font-size":L,"--n-font-size":bo,"--n-box-shadow":V,"--n-border":Q,"--n-border-radius":K,"--n-height":go,"--n-divider-color":he}}),ie=A?Qe("color-picker",m(()=>i.value[0]),ot,e):void 0;function mo(){var c;const{value:T}=ve,{value:D}=He,{internalActions:U,modes:L,actions:V}=e,{value:Q}=x,{value:K}=d;return s("div",{class:[`${K}-color-picker-panel`,ie==null?void 0:ie.themeClass.value],onDragstart:he=>{he.preventDefault()},style:A?void 0:ot.value},s("div",{class:`${K}-color-picker-control`},s(Br,{clsPrefix:K,rgba:T,displayedHue:D,displayedSv:tt.value,onUpdateSV:ao,onComplete:Ce}),s("div",{class:`${K}-color-picker-preview`},s("div",{class:`${K}-color-picker-preview__sliders`},s(Nr,{clsPrefix:K,hue:D,onUpdateHue:lo,onComplete:Ce}),e.showAlpha?s(Fr,{clsPrefix:K,rgba:T,alpha:et.value,onUpdateAlpha:so,onComplete:Ce}):null),e.showPreview?s(Wr,{clsPrefix:K,mode:F.value,color:ve.value&&Be(ve.value),onUpdateColor:he=>H(he,"input")}):null),s(Hr,{clsPrefix:K,showAlpha:e.showAlpha,mode:F.value,modes:L,onUpdateMode:N,value:u.value,valueArr:io.value,onUpdateValue:co}),((c=e.swatches)===null||c===void 0?void 0:c.length)&&s(Gr,{clsPrefix:K,mode:F.value,swatches:e.swatches,onUpdateColor:he=>H(he,"input")})),(V==null?void 0:V.length)?s("div",{class:`${K}-color-picker-action`},V.includes("confirm")&&s(Me,{size:"small",onClick:vo,theme:Q.peers.Button,themeOverrides:Q.peerOverrides.Button},{default:()=>l.value.confirm})):null,t.action?s("div",{class:`${K}-color-picker-action`},{default:t.action}):U?s("div",{class:`${K}-color-picker-action`},U.includes("undo")&&s(Me,{size:"small",onClick:uo,disabled:!ho.value,theme:Q.peers.Button,themeOverrides:Q.peerOverrides.Button},{default:()=>l.value.undo}),U.includes("redo")&&s(Me,{size:"small",onClick:po,disabled:!fo.value,theme:Q.peers.Button,themeOverrides:Q.peerOverrides.Button},{default:()=>l.value.redo})):null)}return{mergedClsPrefix:d,namespace:f,selfRef:o,hsla:Je,rgba:ve,mergedShow:z,mergedDisabled:a,isMounted:Jo(),adjustedTo:st(e),mergedValue:u,handleTriggerClick(){R(!0)},handleClickOutside(c){var T;((T=o.value)===null||T===void 0?void 0:T.contains(c.target))||R(!1)},renderPanel:mo,cssVars:A?void 0:ot,themeClass:ie==null?void 0:ie.themeClass,onRender:ie==null?void 0:ie.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),s("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},s(No,null,{default:()=>[s(To,null,{default:()=>s(jr,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),s(Fo,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===st.tdkey,to:this.adjustedTo},{default:()=>s(Ot,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?lt(this.renderPanel(),[[ir,this.handleClickOutside]]):null})})]}))}}),Qr={padding:"8px 14px"};const Jr=e=>{const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},Qr),{borderRadius:t,boxShadow:o,color:"rgba(0, 0, 0, .85)",textColor:r})},en=Ze({name:"Tooltip",common:Ue,peers:{Popover:Bo},self:Jr});var yt=en;const tn=Ze({name:"Ellipsis",common:Ue,peers:{Tooltip:yt}});var on=tn;const rn=Object.assign(Object.assign({},Do),Z.props);var Yt=E({name:"Tooltip",props:rn,__popover__:!0,setup(e){const t=Z("Tooltip","-tooltip",void 0,yt,e),o=P(null);return Object.assign(Object.assign({},{syncPosition(){o.value.syncPosition()},setShow(n){o.value.setShow(n)}}),{popoverRef:o,mergedTheme:t,popoverThemeOverrides:m(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return s(Mo,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),nn=p("ellipsis",{overflow:"hidden"},[Ge("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),M("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),M("cursor-pointer",`
 cursor: pointer;
 `)]);function Nt(e){return`${e}-ellipsis--line-clamp`}function Tt(e,t){return`${e}-ellipsis--cursor-${t}`}const an=Object.assign(Object.assign({},Z.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}});var Xt=E({name:"Ellipsis",inheritAttrs:!1,props:an,setup(e,{slots:t,attrs:o}){const{mergedClsPrefixRef:r}=ye(e),n=Z("Ellipsis","-ellipsis",nn,on,e,r),i=P(null),a=P(null),l=P(!1),d=m(()=>{const{lineClamp:v}=e,{value:S}=l;return v!==void 0?{textOverflow:"","-webkit-line-clamp":S?"":v}:{textOverflow:S?"":"ellipsis","-webkit-line-clamp":""}});function f(){let v=!1;const{value:S}=l;if(S)return!0;const{value:u}=i;if(u){const{lineClamp:k}=e;y(u),k!==void 0?v=u.scrollHeight<=u.offsetHeight:v=u.scrollWidth<=u.offsetWidth,z(u,v)}return v}const A=m(()=>e.expandTrigger==="click"?()=>{var v;const{value:S}=l;S&&((v=a.value)===null||v===void 0||v.setShow(!1)),l.value=!S}:void 0),x=()=>s("span",Object.assign({},Lt(o,{class:[`${r.value}-ellipsis`,e.lineClamp!==void 0?Nt(r.value):void 0,e.expandTrigger==="click"?Tt(r.value,"pointer"):void 0],style:d.value}),{ref:"triggerRef",onClick:A.value,onMouseenter:e.expandTrigger==="click"?f:void 0}),t);function y(v){if(!v)return;const S=d.value,u=Nt(r.value);e.lineClamp!==void 0?R(v,u,"add"):R(v,u,"remove");for(const k in S)v.style[k]!==S[k]&&(v.style[k]=S[k])}function z(v,S){const u=Tt(r.value,"pointer");e.expandTrigger==="click"&&!S?R(v,u,"add"):R(v,u,"remove")}function R(v,S,u){u==="add"?v.classList.contains(S)||v.classList.add(S):v.classList.contains(S)&&v.classList.remove(S)}return{mergedTheme:n,triggerRef:i,tooltipRef:a,handleClick:A,renderTrigger:x,getTooltipDisabled:f}},render(){var e;const{tooltip:t,renderTrigger:o,$slots:r}=this;if(t){const{mergedTheme:n}=this;return s(Yt,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip}),{trigger:o,default:(e=r.tooltip)!==null&&e!==void 0?e:r.default})}else return o()}});const Ft=1,Zt=Oe("n-grid"),Qt=1,ln={span:{type:[Number,String],default:Qt},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}};var Bt=E({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:ln,setup(){const{xGapRef:e,itemStyleRef:t,overflowRef:o}=ee(Zt),r=ko();return{overflow:o,itemStyle:t,deriveStyle:()=>{const{privateSpan:n=Qt,privateShow:i=!0,privateColStart:a=void 0,privateOffset:l=0}=r.vnode.props,{value:d}=e,f=Ye(d||0);return{display:i?"":"none",gridColumn:`${a!=null?a:`span ${n}`} / span ${n}`,marginLeft:l?`calc((100% - (${n} - 1) * ${f}) / ${n} * ${l} + ${f} * ${l})`:""}}}},render(){var e,t;return s("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}});const sn={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Jt=24,dn={responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Jt},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}};var Mt=E({name:"Grid",inheritAttrs:!1,props:dn,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:o}=ye(e),r=/^\d+$/,n=P(void 0),i=br((o==null?void 0:o.value)||sn),a=ke(()=>!!(e.itemResponsive||!r.test(e.cols.toString())||!r.test(e.xGap.toString())||!r.test(e.yGap.toString()))),l=m(()=>{if(!!a.value)return e.responsive==="self"?n.value:i.value}),d=ke(()=>{var v;return(v=Number(Ne(e.cols.toString(),l.value)))!==null&&v!==void 0?v:Jt}),f=ke(()=>Ne(e.xGap.toString(),l.value)),A=ke(()=>Ne(e.yGap.toString(),l.value)),x=v=>{n.value=v.contentRect.width},y=v=>{Vo(x,v)},z=P(!1),R=m(()=>{if(e.responsive==="self")return y});return pe(Zt,{itemStyleRef:de(e,"itemStyle"),xGapRef:f,overflowRef:z}),{mergedClsPrefix:t,style:m(()=>({width:"100%",display:"grid",gridTemplateColumns:`repeat(${d.value}, minmax(0, 1fr))`,columnGap:Ye(f.value),rowGap:Ye(A.value)})),isResponsive:a,responsiveQuery:l,responsiveCols:d,handleResize:R,overflow:z}},render(){const e=()=>{var t,o,r,n,i,a;this.overflow=!1;const l=lr(sr(this)),d=[],{collapsed:f,collapsedRows:A,responsiveCols:x,responsiveQuery:y}=this;l.forEach(u=>{var k,w,$;if(((k=u==null?void 0:u.type)===null||k===void 0?void 0:k.__GRID_ITEM__)!==!0)return;const q=Ro(u),F=Number(($=Ne((w=q.props)===null||w===void 0?void 0:w.span,y))!==null&&$!==void 0?$:Ft);F!==0&&d.push({child:q,rawChildSpan:F})});let z=0;const R=(t=d[d.length-1])===null||t===void 0?void 0:t.child;if(R==null?void 0:R.props){const u=(o=R.props)===null||o===void 0?void 0:o.suffix;u!==void 0&&u!==!1&&(z=(n=(r=R.props)===null||r===void 0?void 0:r.span)!==null&&n!==void 0?n:Ft,R.props.privateSpan=z,R.props.privateColStart=x+1-z,R.props.privateShow=!0)}let v=0,S=!1;for(const{child:u,rawChildSpan:k}of d){if(S&&(this.overflow=!0),!S){const w=Number((a=Ne((i=u.props)===null||i===void 0?void 0:i.offset,y))!==null&&a!==void 0?a:0),$=Math.min(k+w,x)||1;if(u.props?(u.props.privateSpan=$,u.props.privateOffset=w):u.props={privateSpan:$,privateOffset:w},f){const q=v%x;$+q>x&&(v+=x-q),$+v+z>A*x?S=!0:v+=$}}S&&(u.props?u.props.privateShow!==!0&&(u.props.privateShow=!1):u.props={privateShow:!1})}return s("div",Lt({class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),d.map(({child:u})=>u))};return this.isResponsive&&this.responsive==="self"?s(ar,{onResize:this.handleResize},{default:e}):e()}});function cn(e,t,o){return{itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorActiveInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorChildActiveInverted:t,itemIconColorCollapsedInverted:e,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorActiveInverted:t,groupTextColorInverted:o}}const un=e=>{const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:n,primaryColorHover:i,textColor1:a,fontSize:l,dividerColor:d}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorActive:er(r,{alpha:.1}),itemColorActiveCollapsed:"#0000",itemTextColor:n,itemTextColorHover:i,itemTextColorChildActive:r,itemTextColorActive:r,itemIconColor:a,itemIconColorHover:i,itemIconColorActive:r,itemIconColorChildActive:r,itemIconColorCollapsed:a,itemHeight:"42px",arrowColor:n,arrowColorHover:i,arrowColorChildActive:r,arrowColorActive:r,colorInverted:"#0000",itemColorActiveInverted:r,itemColorActiveCollapsedInverted:r,borderColorHorizontal:"#0000",fontSize:l,dividerColor:d},cn("#BBB","#FFF","#AAA"))},pn=Ze({name:"Menu",common:Ue,peers:{Tooltip:yt},self:un});var vn=pn;const hn=e=>{const{opacityDisabled:t,heightTiny:o,heightSmall:r,heightMedium:n,heightLarge:i,heightHuge:a,primaryColor:l,fontSize:d}=e;return{fontSize:d,textColor:l,sizeTiny:o,sizeSmall:r,sizeMedium:n,sizeLarge:i,sizeHuge:a,color:l,opacitySpinning:t}},fn={name:"Spin",common:Ue,self:hn};var mn=fn,gn=p("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[M("bordered",[b("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),b("left-placement",[M("bordered",[b("border",`
 right: 0;
 `)])]),M("right-placement",`
 justify-content: flex-start;
 `,[M("bordered",[b("border",`
 left: 0;
 `)]),M("collapsed",[p("layout-toggle-button",[p("base-icon",`
 transform: rotate(180deg);
 `)]),p("layout-toggle-bar",[I("&:hover",[b("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),p("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[p("base-icon",`
 transform: rotate(0);
 `)]),p("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[I("&:hover",[b("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),M("collapsed",[p("layout-toggle-bar",[I("&:hover",[b("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),p("layout-toggle-button",[p("base-icon",`
 transform: rotate(0);
 `)])]),p("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[p("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),p("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[b("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),b("bottom",`
 position: absolute;
 top: 34px;
 `),I("&:hover",[b("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),b("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),I("&:hover",[b("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),b("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),p("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),M("show-content",[p("layout-sider-scroll-container",{opacity:1})]),M("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),bn=E({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},s(qt,{clsPrefix:e},{default:()=>s(Uo,null)}))}}),xn=E({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},s("div",{class:`${e}-layout-toggle-bar__top`}),s("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const yn={position:vr,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var Cn=E({name:"LayoutSider",props:Object.assign(Object.assign({},Z.props),yn),setup(e){const t=ee(ur),o=P(null),r=P(null),n=m(()=>nt(d.value?e.collapsedWidth:e.width)),i=m(()=>e.collapseMode!=="transform"?{}:{minWidth:nt(e.width)}),a=m(()=>t?t.siderPlacement:"left"),l=P(e.defaultCollapsed),d=De(de(e,"collapsed"),l);function f(k,w){if(e.nativeScrollbar){const{value:$}=o;$&&(w===void 0?$.scrollTo(k):$.scrollTo(k,w))}else{const{value:$}=r;$&&$.scrollTo(k,w)}}function A(){const{"onUpdate:collapsed":k,onUpdateCollapsed:w,onExpand:$,onCollapse:q}=e,{value:F}=d;w&&W(w,!F),k&&W(k,!F),l.value=!F,F?$&&W($):q&&W(q)}pe(Kt,{collapsedRef:d,collapseModeRef:de(e,"collapseMode")});const{mergedClsPrefixRef:x,inlineThemeDisabled:y}=ye(e),z=Z("Layout","-layout-sider",gn,pr,e,x);function R(k){var w,$;k.propertyName==="max-width"&&(d.value?(w=e.onAfterLeave)===null||w===void 0||w.call(e):($=e.onAfterEnter)===null||$===void 0||$.call(e))}const v={scrollTo:f},S=m(()=>{const{common:{cubicBezierEaseInOut:k},self:w}=z.value,{siderToggleButtonColor:$,siderToggleButtonBorder:q,siderToggleBarColor:F,siderToggleBarColorHover:N}=w,C={"--n-bezier":k,"--n-toggle-button-color":$,"--n-toggle-button-border":q,"--n-toggle-bar-color":F,"--n-toggle-bar-color-hover":N};return e.inverted?(C["--n-color"]=w.siderColorInverted,C["--n-text-color"]=w.textColorInverted,C["--n-border-color"]=w.siderBorderColorInverted,C["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColorInverted,C.__invertScrollbar=w.__invertScrollbar):(C["--n-color"]=w.siderColor,C["--n-text-color"]=w.textColor,C["--n-border-color"]=w.siderBorderColor,C["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColor),C}),u=y?Qe("layout-sider",m(()=>e.inverted?"a":"b"),S,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:x,mergedTheme:z,styleMaxWidth:n,mergedCollapsed:d,scrollContainerStyle:i,siderPlacement:a,handleTransitionend:R,handleTriggerClick:A,inlineThemeDisabled:y,cssVars:S,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender},v)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:nt(this.width)}]},this.nativeScrollbar?s("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.onScroll,style:[this.scrollContainerStyle,this.contentStyle,{overflow:"auto"}],ref:"scrollableElRef"},this.$slots):s(dr,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?s(xn,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):s(bn,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?s("div",{class:`${t}-layout-sider__border`}):null)}});const Le=Oe("n-menu"),Ct=Oe("n-submenu"),wt=Oe("n-menu-item-group"),Ke=8;function St(e){const t=ee(Le),{props:o,mergedCollapsedRef:r}=t,n=ee(Ct,null),i=ee(wt,null),a=m(()=>o.mode==="horizontal"),l=m(()=>a.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=m(()=>{var y;return Math.max((y=o.collapsedIconSize)!==null&&y!==void 0?y:o.iconSize,o.iconSize)}),f=m(()=>{var y;return!a.value&&e.root&&r.value&&(y=o.collapsedIconSize)!==null&&y!==void 0?y:o.iconSize}),A=m(()=>{if(a.value)return;const{collapsedWidth:y,indent:z,rootIndent:R}=o,{root:v,isGroup:S}=e,u=R===void 0?z:R;if(v)return r.value?y/2-d.value/2:u;if(i)return z/2+i.paddingLeftRef.value;if(n)return(S?z/2:z)+n.paddingLeftRef.value}),x=m(()=>{const{collapsedWidth:y,indent:z,rootIndent:R}=o,{value:v}=d,{root:S}=e;return a.value||!S||!r.value?Ke:(R===void 0?z:R)+v+Ke-(y+v)/2});return{dropdownPlacement:l,activeIconSize:f,maxIconSize:d,paddingLeft:A,iconMarginRight:x,NMenu:t,NSubmenu:n}}const kt={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},eo=Object.assign(Object.assign({},kt),{tmNodes:{type:Array,required:!0}}),wn=E({name:"MenuOptionGroup",props:eo,setup(e){pe(Ct,null);const t=St(e);pe(wt,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=ee(Le);return function(){const{value:n}=o,i=t.paddingLeft.value;return s("div",{class:`${n}-menu-item-group`,role:"group"},s("span",{class:`${n}-menu-item-group-title`,style:i!==void 0?`padding-left: ${i}px;`:void 0},_e(e.title),e.extra?s(ne,null," ",_e(e.extra)):null),s("div",null,e.tmNodes.map(a=>Rt(a,r))))}}});var to=E({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=ee(Le);return{menuProps:t,style:m(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:m(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:n}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${n}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:n,expandIcon:i}}=this,a=o?o(t.rawNode):_e(this.icon);return s("div",{onClick:this.onClick,role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},a&&s("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[a]),s("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(t.rawNode):_e(this.title),this.extra||n?s("span",{class:`${e}-menu-item-content-header__extra`}," ",n?n(t.rawNode):_e(this.extra)):null),this.showArrow?s(qt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):s(xr,null)}):null)}});const oo=Object.assign(Object.assign({},kt),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Sn=E({name:"Submenu",props:oo,setup(e){const t=St(e),{NMenu:o,NSubmenu:r}=t,{props:n,mergedCollapsedRef:i}=o,a=m(()=>{const{disabled:x}=e;return(r==null?void 0:r.mergedDisabledRef.value)||n.disabled?!0:x}),l=P(!1);pe(Ct,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:a}),pe(wt,null);function d(){const{onClick:x}=e;x&&x()}function f(){a.value||(i.value||o.toggleExpand(e.internalKey),d())}function A(x){l.value=x}return{menuProps:n,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:l,paddingLeft:t.paddingLeft,mergedDisabled:a,mergedValue:o.mergedValueRef,childActive:ke(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:m(()=>n.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:m(()=>!a.value&&(n.mode==="horizontal"||i.value)),handlePopoverShowChange:A,handleClick:f}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,n=()=>{const{isHorizontal:a,paddingLeft:l,collapsed:d,mergedDisabled:f,maxIconSize:A,activeIconSize:x,title:y,childActive:z,icon:R,handleClick:v,dropdownShow:S,iconMarginRight:u,tmNode:k}=this;return s(to,{tmNode:k,paddingLeft:l,collapsed:d,disabled:f,iconMarginRight:u,maxIconSize:A,activeIconSize:x,title:y,showArrow:!a,childActive:z,clsPrefix:t,icon:R,hover:S,onClick:v})},i=()=>s(tr,null,{default:()=>{const{tmNodes:a,collapsed:l}=this;return l?null:s("div",{class:`${t}-submenu-children`,role:"menu"},a.map(d=>Rt(d,this.menuProps)))}});return this.root?s(Oo,Object.assign({},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,size:"large",trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>s("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),this.isHorizontal?null:i())}):s("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),i())}}),ro=Object.assign(Object.assign({},kt),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),kn=E({name:"MenuOption",props:ro,setup(e){const t=St(e),{NSubmenu:o,NMenu:r}=t,{props:n,mergedClsPrefixRef:i,mergedCollapsedRef:a}=r,l=o?o.mergedDisabledRef:{value:!1},d=m(()=>l.value||e.disabled);function f(x){const{onClick:y}=e;y&&y(x)}function A(x){d.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),f(x))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:n,dropdownEnabled:ke(()=>e.root&&a.value&&n.mode!=="horizontal"&&!d.value),selected:m(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:A}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r}}=this;return s("div",{role:"menuitem",class:[`${e}-menu-item`,this.selected&&`${e}-menu-item--selected`,this.mergedDisabled&&`${e}-menu-item--disabled`]},s(Yt,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):_e(this.title),trigger:()=>s(to,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var Rn=E({name:"MenuDivider",setup(){const e=ee(Le),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:s("div",{class:`${t.value}-menu-divider`})}});const _n=bt(eo),zn=bt(ro),In=bt(oo);function $n(e){return e.type==="divider"||e.type==="render"}function An(e){return e.type==="divider"}function Rt(e,t){const{rawNode:o}=e;if($n(o))return An(o)?s(Rn,Object.assign({key:e.key},o.props)):void 0;const{labelField:r}=t,{key:n,level:i,isGroup:a}=e,l=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:n,internalKey:n,level:i,root:i===0,isGroup:a});return e.children?e.isGroup?s(wn,it(l,_n,{tmNodes:e.children,key:n})):s(Sn,it(l,In,{key:n,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):s(kn,it(l,zn,{key:n,tmNode:e}))}var Pn=I([p("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[M("horizontal",{display:"inline-flex",paddingBottom:0},[p("submenu",{margin:0}),p("menu-item",{margin:0},[I("&::before",{backgroundColor:"#0000 !important"}),M("selected",[p("menu-item-content",{borderBottom:"2px solid var(--n-border-color-horizontal)"})])]),p("menu-item-content",{padding:"0 20px",borderBottom:"2px solid #0000"},[M("child-active",{borderBottom:"2px solid var(--n-border-color-horizontal)"}),Ge("disabled",[Dt({borderBottom:"2px solid var(--n-border-color-horizontal)"},null)])])]),M("collapsed",[p("menu-item",[M("selected",[I("&::before",{backgroundColor:"var(--n-item-color-active-collapsed) !important"})])]),p("menu-item-content",[p("menu-item-content-header",{opacity:0}),b("arrow",{opacity:0}),b("icon",{color:"var(--n-item-icon-color-collapsed)"})])]),p("menu-item",`
 transition: background-color .3s var(--n-bezier);
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `,[I("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Ge("disabled",[I("&:active::before",{backgroundColor:"var(--n-item-color-active)"})]),M("selected",[I("&::before",{backgroundColor:"var(--n-item-color-active)"}),p("menu-item-content",[b("arrow",{color:"var(--n-arrow-color-active)"}),b("icon",{color:"var(--n-item-icon-color-active)"}),p("menu-item-content-header",{color:"var(--n-item-text-color-active)"},[b("extra",{color:"var(--n-item-text-color-active)"})])])])]),p("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 z-index: auto;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[M("disabled",{opacity:".45",cursor:"not-allowed"}),M("collapsed",[b("arrow",{transform:"rotate(0)"})]),M("child-active",[p("menu-item-content-header",{color:"var(--n-item-text-color-child-active)"},[b("extra",{color:"var(--n-item-text-color-child-active)"})]),b("arrow",{color:"var(--n-arrow-color-child-active)"}),b("icon",{color:"var(--n-item-icon-color-child-active)"})]),Ge("disabled",[Dt(null,[b("arrow",{color:"var(--n-arrow-color-hover)"}),b("icon",{color:"var(--n-item-icon-color-hover)"}),p("menu-item-content-header",{color:"var(--n-item-text-color-hover)"},[b("extra",{color:"var(--n-item-text-color-hover)"})])])]),b("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),b("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),p("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[I("a",`
 text-decoration: none;
 color: inherit;
 `,[I("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),p("submenu",{cursor:"pointer",position:"relative",marginTop:"6px"},[p("menu-item-content",`
 height: var(--n-item-height);
 `),p("submenu-children",{overflow:"hidden",padding:0},[hr({duration:".2s"})])]),p("menu-item-group",[p("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),p("menu-tooltip",[I("a",`
 color: inherit;
 text-decoration: none;
 `)]),p("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Dt(e,t){return[M("hover",e,t),I("&:hover",e,t)]}const En=Object.assign(Object.assign({},Z.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownPlacement:{type:String,default:"bottom"},dropdownProps:Object,accordion:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array});var Nn=E({name:"Menu",props:En,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ye(e),r=Z("Menu","-menu",Pn,vn,e,t),n=ee(Kt,null),i=m(()=>{var N;const{collapsed:C}=e;if(C!==void 0)return C;if(n){const{collapseModeRef:h,collapsedRef:B}=n;if(h.value==="width")return(N=B.value)!==null&&N!==void 0?N:!1}return!1}),a=m(()=>{const{keyField:N,childrenField:C}=e;return Lo(e.items||e.options,{getChildren(h){return h[C]},getKey(h){var B;return(B=h[N])!==null&&B!==void 0?B:h.name}})}),l=m(()=>new Set(a.value.treeNodes.map(N=>N.key))),{watchProps:d}=e,f=P(null);(d==null?void 0:d.includes("defaultValue"))?ze(()=>{f.value=e.defaultValue}):f.value=e.defaultValue;const A=de(e,"value"),x=De(A,f),y=P([]),z=()=>{y.value=e.defaultExpandAll?a.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||a.value.getPath(x.value,{includeSelf:!1}).keyPath};(d==null?void 0:d.includes("defaultExpandedKeys"))?ze(z):z();const R=jt(e,["expandedNames","expandedKeys"]),v=De(R,y),S=m(()=>a.value.treeNodes),u=m(()=>a.value.getPath(x.value).keyPath);pe(Le,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:x,mergedExpandedKeysRef:v,activePathRef:u,mergedClsPrefixRef:t,isHorizontalRef:m(()=>e.mode==="horizontal"),invertedRef:de(e,"inverted"),doSelect:k,toggleExpand:$});function k(N,C){const{"onUpdate:value":h,onUpdateValue:B,onSelect:j}=e;B&&W(B,N,C),h&&W(h,N,C),j&&W(j,N,C),f.value=N}function w(N){const{"onUpdate:expandedKeys":C,onUpdateExpandedKeys:h,onExpandedNamesChange:B,onOpenNamesChange:j}=e;C&&W(C,N),h&&W(h,N),B&&W(B,N),j&&W(j,N),y.value=N}function $(N){const C=Array.from(v.value),h=C.findIndex(B=>B===N);if(~h)C.splice(h,1);else{if(e.accordion&&l.value.has(N)){const B=C.findIndex(j=>l.value.has(j));B>-1&&C.splice(B,1)}C.push(N)}w(C)}const q=m(()=>{const{inverted:N}=e,{common:{cubicBezierEaseInOut:C},self:h}=r.value,{borderRadius:B,borderColorHorizontal:j,fontSize:te,itemHeight:oe,dividerColor:re}=h,g={"--n-divider-color":re,"--n-bezier":C,"--n-font-size":te,"--n-border-color-horizontal":j,"--n-border-radius":B,"--n-item-height":oe};return N?(g["--n-group-text-color"]=h.groupTextColorInverted,g["--n-color"]=h.colorInverted,g["--n-item-text-color"]=h.itemTextColorInverted,g["--n-arrow-color"]=h.arrowColorInverted,g["--n-arrow-color-hover"]=h.arrowColorHoverInverted,g["--n-arrow-color-active"]=h.arrowColorActiveInverted,g["--n-arrow-color-child-active"]=h.arrowColorChildActiveInverted,g["--n-item-icon-color"]=h.itemIconColorInverted,g["--n-item-text-color-hover"]=h.itemTextColorHoverInverted,g["--n-item-icon-color-hover"]=h.itemIconColorHoverInverted,g["--n-item-text-color-active"]=h.itemTextColorActiveInverted,g["--n-item-icon-color-active"]=h.itemIconColorActiveInverted,g["--n-item-icon-color-collapsed"]=h.itemIconColorCollapsedInverted,g["--n-item-color-active"]=h.itemColorActiveInverted,g["--n-item-color-active-collapsed"]=h.itemColorActiveCollapsedInverted,g["--n-item-text-color-child-active"]=h.itemTextColorChildActiveInverted,g["--n-item-icon-color-child-active"]=h.itemIconColorChildActiveInverted):(g["--n-group-text-color"]=h.groupTextColor,g["--n-color"]=h.color,g["--n-item-text-color"]=h.itemTextColor,g["--n-arrow-color"]=h.arrowColor,g["--n-arrow-color-hover"]=h.arrowColorHover,g["--n-arrow-color-active"]=h.arrowColorActive,g["--n-arrow-color-child-active"]=h.arrowColorChildActive,g["--n-item-icon-color"]=h.itemIconColor,g["--n-item-text-color-hover"]=h.itemTextColorHover,g["--n-item-icon-color-hover"]=h.itemIconColorHover,g["--n-item-text-color-active"]=h.itemTextColorActive,g["--n-item-icon-color-active"]=h.itemIconColorActive,g["--n-item-icon-color-collapsed"]=h.itemIconColorCollapsed,g["--n-item-color-active"]=h.itemColorActive,g["--n-item-color-active-collapsed"]=h.itemColorActiveCollapsed,g["--n-item-text-color-child-active"]=h.itemTextColorChildActive,g["--n-item-icon-color-child-active"]=h.itemIconColorChildActive),g}),F=o?Qe("menu",m(()=>e.inverted?"a":"b"),q,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:R,uncontrolledExpanededKeys:y,mergedExpandedKeys:v,uncontrolledValue:f,mergedValue:x,activePath:u,tmNodes:S,mergedTheme:r,mergedCollapsed:i,cssVars:o?void 0:q,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;return r==null||r(),s("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(n=>Rt(n,this.$props)))}}),Tn=I([I("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),p("spin-container",{position:"relative"},[p("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[cr()])]),p("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),p("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[M("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),p("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),p("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[M("spinning",`
 user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);const Fn={small:20,medium:18,large:16},Bn=Object.assign(Object.assign({},Z.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}});var Mn=E({name:"Spin",props:Bn,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ye(e),r=Z("Spin","-spin",Tn,mn,e,t),n=m(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:l},self:d}=r.value,{opacitySpinning:f,color:A,textColor:x}=d,y=typeof a=="number"?Ye(a):d[pt("size",a)];return{"--n-bezier":l,"--n-opacity-spinning":f,"--n-size":y,"--n-color":A,"--n-text-color":x}}),i=o?Qe("spin",m(()=>{const{size:a}=e;return typeof a=="number"?String(a):a[0]}),n,e):void 0;return{mergedClsPrefix:t,compitableShow:jt(e,["spinning","show"]),mergedStrokeWidth:m(()=>{const{strokeWidth:a}=e;if(a!==void 0)return a;const{size:l}=e;return Fn[typeof l=="number"?"medium":l]}),cssVars:o?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,t;const{$slots:o,mergedClsPrefix:r,description:n}=this,i=o.icon&&this.rotate,a=(n||o.description)&&s("div",{class:`${r}-spin-description`},n||((e=o.description)===null||e===void 0?void 0:e.call(o))),l=o.icon?s("div",{class:[`${r}-spin-body`,this.themeClass]},s("div",{class:[`${r}-spin`,i&&`${r}-spin--rotate`],style:o.default?"":this.cssVars},o.icon()),a):s("div",{class:[`${r}-spin-body`,this.themeClass]},s(or,{clsPrefix:r,style:o.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),a);return(t=this.onRender)===null||t===void 0||t.call(this),o.default?s("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},s("div",{class:[`${r}-spin-content`,this.compitableShow&&`${r}-spin-content--spinning`]},o),s(Ot,{name:"fade-in-transition"},{default:()=>this.compitableShow?l:null})):l}});let mt=[],no=!1;window.top===window&&window.addEventListener("message",e=>{if(e.data.type==="iframeReady"){no=!0;const t=document.querySelector("iframe");if(t&&t.contentDocument){const o=document.createElement("style");o.textContent=".demo-nav__back { display: none; }",t.contentDocument.head.appendChild(o),mt.forEach(r=>r()),mt=[]}}});function Vt(e){no?e():mt.push(e)}function at(e,t="*"){const o=document.querySelector("iframe");o&&o.contentWindow&&o.contentWindow.postMessage(e,t)}var Dn=(e,t)=>{const o=e.__vccOpts||e;for(const[r,n]of t)o[r]=n;return o};const Ae=e=>(_o("data-v-724cb32e"),e=e(),zo(),e),Vn={class:"vant-block"},Un=Ae(()=>_("h1",null,"\u989C\u8272",-1)),On={class:"vant-block"},Ln=Ae(()=>_("h1",null,"\u5185\u8FB9\u8DDD",-1)),Hn={class:"vant-block"},jn=Ae(()=>_("h1",null,"\u5B57\u4F53",-1)),qn={class:"vant-block"},Kn=Ae(()=>_("h1",null,"\u884C\u9AD8",-1)),Gn=Ae(()=>_("div",{class:"vant-block"},[_("h1",null,"\u8FB9\u6846"),_("div",{class:"block-border-width"},[_("div",{class:"border-width-item"})])],-1)),Wn={class:"vant-block"},Yn=Ae(()=>_("h1",null,"\u5706\u89D2",-1)),Xn=E({setup(e){const t=[{value:"var(--van-red)",describe:"\u7EA2\u8272\u3001\u9ED8\u8BA4\u8272"},{value:"var(--van-gray-1)",describe:"\u80CC\u666F\u8272"},{value:"var(--van-gray-2)",describe:"\u80CC\u666F\u8272"},{value:"var(--van-gray-3)",describe:"\u8FB9\u6846\u3001\u7EBF\u8272"},{value:"var(--van-gray-4)",describe:"\u8FB9\u6846\u3001\u7EBF\u8272"},{value:"var(--van-gray-5)",describe:"\u6587\u5B57\u8272\uFF0C\u6307 disable\u3001\u63D0\u793A\u6587\u5B57\u7B49"},{value:"var(--van-gray-6)",describe:"\u6587\u5B57\u8272\uFF0C\u6307\u8F85\u52A9\u3001\u8BF4\u660E\u6587\u5B57"},{value:"var(--van-gray-7)",describe:"\u6587\u5B57\u8272\uFF0C\u6307\u4E3B\u6587\u5B572"},{value:"var(--van-gray-8)",describe:"\u6587\u5B57\u8272\uFF0C\u6307\u4E3B\u6587\u5B571"},{value:"var(--van-red)",describe:"\u7EA2\u8272"},{value:"var(--van-blue)",describe:"\u84DD\u8272"},{value:"var(--van-orange)",describe:"\u6A59\u8272"},{value:"var(--van-orange-dark)",describe:"\u6DF1\u6A59\u8272"},{value:"var(--van-orange-light)",describe:"\u6D45\u6A59\u8272"},{value:"var(--van-green)",describe:"\u7EFF\u8272"},{value:"var(--van-gradient-red)",describe:"\u6E10\u53D8\u7EA2\u8272",style:{background:"var(--van-gradient-red)"}},{value:"var(--van-gradient-orange)",describe:"\u6E10\u53D8\u6A59\u8272",style:{background:"var(--van-gradient-orange)"}},{value:"var(--van-primary-color)",describe:"\u4E3B\u8981\u8272"},{value:"var(--van-success-color)",describe:"\u6210\u529F\u8272"},{value:"var(--van-danger-color)",describe:"\u5371\u9669\u8272"},{value:"var(--van-warning-color)",describe:"\u8B66\u544A\u8272"},{value:"var(--van-text-color)",describe:"\u5B57\u4F53\u8272"},{value:"var(--van-active-color)",describe:"\u6FC0\u6D3B\u8272"},{value:"var(--van-text-link-color)",describe:"\u6587\u5B57\u94FE\u989C\u8272"}],o=[{value:"var(--van-padding-base)",describe:"\u57FA\u7840"},{value:"var(--van-padding-xs)",describe:"\u8D85\u5C0F"},{value:"var(--van-padding-sm)",describe:"\u5C0F"},{value:"var(--van-padding-md)",describe:"\u4E2D\u7B49"},{value:"var(--van-padding-lg)",describe:"\u5927"}],r=[{value:"var(--van-font-size-xs)",describe:"\u8D85\u5C0F"},{value:"var(--van-font-size-sm)",describe:"\u5C0F"},{value:"var(--van-font-size-md)",describe:"\u4E2D\u7B49"},{value:"var(--van-font-size-lg)",describe:"\u5927"},{value:"var(--van-font-size-xs)",describe:"\u8D85\u5C0F"},{value:"var(--van-font-weight-bold)",describe:"\u7C97\u7EC6\u7A0B\u5EA6"}],n=[{value:"var(--van-line-height-xs)",describe:"\u8D85\u5C0F"},{value:"var(--van-line-height-sm)",describe:"\u5C0F"},{value:"var(--van-line-height-md)",describe:"\u4E2D\u7B49"},{value:"var(--van-line-height-lg)",describe:"\u5927"}],i=[{value:"var(--van-border-radius-sm)",describe:"\u5C0F"},{value:"var(--van-border-radius-md)",describe:"\u4E2D\u7B49"},{value:"var(--van-border-radius-lg)",describe:"\u5927"},{value:"var(--van-border-radius-max)",describe:"\u6700\u5927"}];return(a,l)=>(Y(),J(ne,null,[_("div",Vn,[Un,G(O(Mt),{"x-gap":"24",cols:4,class:"block-color"},{default:X(()=>[(Y(),J(ne,null,Se(t,d=>G(O(Bt),{key:d.value,class:"block-color-item"},{default:X(()=>[_("div",{style:Ee(It({backgroundColor:d.value},d.style))},[_("p",null,ge(d.describe),1)],4)]),_:2},1024)),64))]),_:1})]),_("div",On,[Ln,(Y(),J(ne,null,Se(o,d=>_("div",{class:"block-padding",key:d.value},[_("p",{style:Ee({paddingLeft:d.value})},ge(d.describe),5)])),64))]),_("div",Hn,[jn,(Y(),J(ne,null,Se(r,(d,f)=>_("div",{class:"block-font",key:d.value},[_("p",{style:Ee({[f===r.length-1?"fontWeight":"fontSize"]:d.value})},ge(d.describe),5)])),64))]),_("div",qn,[Kn,(Y(),J(ne,null,Se(n,d=>_("div",{class:"block-line-height",key:d.value},[_("p",{style:Ee({lineHeight:d.value})},ge(d.describe),5)])),64))]),Gn,_("div",Wn,[Yn,G(O(Mt),{"x-gap":"24",cols:6,class:"block-border-radius"},{default:X(()=>[(Y(),J(ne,null,Se(i,d=>G(O(Bt),{key:d.value,class:"block-border-radius-item"},{default:X(()=>[_("div",{style:Ee({borderRadius:d.value})},[_("p",null,ge(d.describe),1)],4)]),_:2},1024)),64))]),_:1})])],64))}});var Zn=Dn(Xn,[["__scopeId","data-v-724cb32e"]]);const Qn=E({props:{index:null,varName:null,varValue:null},emits:["complete"],setup(e,{emit:t}){const o=e,r=gt(),n=P(o.varValue),i=async a=>{const{index:l,varName:d}=o,f={index:l,varName:d,varValue:a};await r.setComponentConsoleStyle(f),t("complete",f)};return ze(()=>{n.value=o.varValue}),(a,l)=>(Y(),J(ne,null,[G(O(Xt),{class:"console-component-title"},{default:X(()=>[Xe(ge(e.varName),1)]),_:1}),G(O(Zr),{modes:["hex","rgb"],value:n.value,"onUpdate:value":l[0]||(l[0]=d=>n.value=d),onComplete:i},null,8,["value"])],64))}}),Jn=E({props:{index:null,varName:null,varValue:null},emits:["complete"],setup(e,{emit:t}){const o=e,r=gt(),n=P(o.varValue),i=async a=>{const{index:l,varName:d}=o,f={index:l,varName:d,varValue:a};await r.setComponentConsoleStyle(f),t("complete",f)};return ze(()=>{n.value=o.varValue}),(a,l)=>(Y(),J(ne,null,[G(O(Xt),{class:"console-component-title"},{default:X(()=>[Xe(ge(e.varName),1)]),_:1}),G(O(Ht),{type:"text",value:n.value,"onUpdate:value":l[0]||(l[0]=d=>n.value=d),onChange:i},null,8,["value"])],64))}}),ei={class:"page-preview"},ti={class:"page-preview-component-container"},oi={class:"page-preview-component"},ri={class:"page-preview-iframe-container"},ni={class:"page-preview-console-container"},ii={class:"console-wrapper"},ai={class:"console-operation"},li={class:"btn-container"},si=Xe("\u91CD\u7F6E\u6240\u6709"),di=Xe("\u4E0B\u8F7D"),ci={class:"console-container"},ui={key:1,class:"console-component-no-data-text"},yi=E({setup(e){const t=gt(),o=Ho(),r=jo(),{menuActive:n,themePreviewConfig:i,componentConsoleStyle:a}=Io(t),l=P(null),d="../mobile-v3/index.html",f=P(!0);t.getThemePreviewConfig();const A=async v=>{t.menuChange(v)},x=Ut(n,v=>{Vt(async()=>{f.value=!0,v!=="Base"&&at({type:Go,value:v}),await t.getComponentConsoleStyle(v),f.value=!1})},{immediate:!0}),y=()=>{o.error({title:"\u6211\u662F\u4E00\u4E2A\u63D0\u9192",content:"\u8981\u91CD\u7F6E\u5168\u90E8\u5DF2\u66F4\u6539\u7684\u6837\u5F0F\u561B\uFF1F\u6CA1\u6709\u540E\u6094\u836F\u54E6~",positiveText:"\u662F\u7684",negativeText:"\u4E0D\u4E86",maskClosable:!1,onPositiveClick:()=>{t.resetTheme(),r.success("\u597D\u4E86\uFF0C\u73B0\u5728\u6211\u53D8\u56DE\u539F\u6765\u7684\u6211\u4E86")}})},z=async()=>{const v=await t.getCurrentThemeInfo();await t.downloadTheme(v),r.success("\u4E0B\u8F7D\u597D\u4E86")},R=async v=>{const{varName:S,varValue:u}=v;at({type:Wo,value:JSON.stringify({varName:S,varValue:u})})};return $o(()=>{Vt(()=>{at({type:qo,value:JSON.stringify(i.value)})})}),Ao(()=>{document.documentElement.setAttribute("style",""),t.menuChange("Base"),x()}),(v,S)=>(Y(),rt(O(Pt),{"has-sider":"",position:"absolute",style:{top:"64px"}},{default:X(()=>[G(O(Cn),{bordered:"","show-trigger":"","collapse-mode":"transform","collapsed-width":0,width:270,"native-scrollbar":!1},{default:X(()=>[G(O(Nn),{options:O(Ko),"default-expand-all":"",width:270,value:O(n),"onUpdate:value":A},null,8,["options","value"])]),_:1}),G(O(Pt),null,{default:X(()=>[_("div",ei,[_("div",ti,[_("div",oi,[lt(_("div",null,[G(Zn)],512),[[$t,O(n)==="Base"]]),lt(_("div",ri,[G(O(Mn),{size:"large",show:f.value},{default:X(()=>[_("iframe",{src:d,frameborder:"0",style:{height:"640px"},ref_key:"iframeEl",ref:l},null,512)]),_:1},8,["show"])],512),[[$t,O(n)!=="Base"]])])]),_("div",ni,[_("div",ii,[_("div",ai,[_("div",li,[G(O(Me),{type:"error",onClick:y},{default:X(()=>[si]),_:1}),G(O(Me),{type:"info",onClick:z},{default:X(()=>[di]),_:1})])]),_("div",ci,[O(a).length>0?(Y(!0),J(ne,{key:0},Se(O(a),(u,k)=>(Y(),J("div",{class:"console-component-item",key:u.varName+k},[u.component==="n-color-picker"?(Y(),rt(Qn,{key:0,index:k,"var-name":u.varName,"var-value":u.varValue,onComplete:R},null,8,["index","var-name","var-value"])):At("",!0),u.component==="n-input"?(Y(),rt(Jn,{key:1,index:k,"var-name":u.varName,"var-value":u.varValue,onComplete:R},null,8,["index","var-name","var-value"])):At("",!0)]))),128)):(Y(),J("div",ui," \u6CA1\u6709\u6837\u5F0F\u53D8\u91CF "))])])])])]),_:1})]),_:1}))}});export{yi as default};
