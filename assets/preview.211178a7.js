import{b as V,i as l,r as $,l as y,m as ee,P as Se,p as fe,S as me,L as At,T as _t,w as co,n as uo,V as Tt,j as ke,o as oe,t as ye,D as W,C as re,E as He,G as Mt,u as H,A as po,X as mo,c as Ze,Z as Je,_ as ho,x as Q,H as vo}from"./vendor.809c7e32.js";import{u as pt,V as Nt,c as Ee,a as Ct,d as Qe,s as wt,b as fo,g as go,e as St}from"./theme.bf68220c.js";import{f as u,n as R,o as b,h as ge,O as bo,e as je,b as Ie,V as xo,aj as le,ak as ne,al as se,am as he,an as ie,ao as Ce,ap as ve,J as ze,L as Re,j as Ke,aq as Ae,ar as rt,as as nt,at as it,a0 as yo,a3 as Co,g as E,af as wo,u as G,ae as Te,t as Oe,i as qe,m as So,au as at,av as ko,aw as zo,ax as Ro,a2 as Io,U as q,E as _e,ay as Po,H as $o,az as Ao,aA as _o,ad as Le,ab as To,w as Vt,aB as Mo,z as No,a6 as et,r as we,ag as Et,x as Vo,D as Eo,A as mt,k as tt,aC as Ut,aD as Uo,aE as lt,l as Bo,v as Fo,C as Lo}from"./context.888d7748.js";import{i as Do,N as Bt,b as Oo,u as Ho,a as jo}from"./use-message.013033ab.js";import{a as Ko,b as Ft,l as qo,p as Wo,f as Go,N as kt}from"./Layout.fd2e24d1.js";import"./modulepreload-polyfill.b7f2da20.js";function Lt(e,t,o){t/=100,o/=100;const r=t*Math.min(o,1-o)+o;return[e,r?(2-2*o/r)*100:0,r*100]}function De(e,t,o){t/=100,o/=100;const r=o-o*t/2,n=Math.min(r,1-r);return[e,n?(o-r)/n*100:0,r*100]}function ae(e,t,o){t/=100,o/=100;let r=(n,i=(n+e/60)%6)=>o-o*t*Math.max(Math.min(i,4-i,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function st(e,t,o){e/=255,t/=255,o/=255;let r=Math.max(e,t,o),n=r-Math.min(e,t,o),i=n&&(r==e?(t-o)/n:r==t?2+(o-e)/n:4+(e-t)/n);return[60*(i<0?i+6:i),r&&n/r*100,r*100]}function dt(e,t,o){e/=255,t/=255,o/=255;let r=Math.max(e,t,o),n=r-Math.min(e,t,o),i=1-Math.abs(r+r-n-1),a=n&&(r==e?(t-o)/n:r==t?2+(o-e)/n:4+(e-t)/n);return[60*(a<0?a+6:a),i?n/i*100:0,(r+r-n)*50]}function ct(e,t,o){t/=100,o/=100;let r=t*Math.min(o,1-o),n=(i,a=(i+e/30)%12)=>o-r*Math.max(Math.min(a-3,9-a,1),-1);return[n(0)*255,n(8)*255,n(4)*255]}let zt=!1;function Yo(){if(typeof window!="undefined"&&!!window.CSS&&!zt&&(zt=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}var Xo=V({name:"ChevronDownFilled",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Zo=u("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[R(">",[u("input",[R("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),R("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),u("button",[R("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[b("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),R("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[b("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),R("*",[R("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[R(">",[u("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),u("base-selection",[u("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),u("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),R("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[R(">",[u("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),u("base-selection",[u("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),u("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),b("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const Jo={};var Qo=V({name:"InputGroup",props:Jo,setup(e){const{mergedClsPrefixRef:t}=ge(e);return bo("-input-group",Zo,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return l("div",{class:`${e}-input-group`},this.$slots)}});const er=e=>{const{fontSize:t,boxShadow2:o,popoverColor:r,textColor2:n,borderRadius:i,borderColor:a,heightSmall:s,heightMedium:p,heightLarge:S,fontSizeSmall:P,fontSizeMedium:C,fontSizeLarge:w,dividerColor:T}=e;return{panelFontSize:t,boxShadow:o,color:r,textColor:n,borderRadius:i,border:`1px solid ${a}`,heightSmall:s,heightMedium:p,heightLarge:S,fontSizeSmall:P,fontSizeMedium:C,fontSizeLarge:w,dividerColor:T}},tr=je({name:"ColorPicker",common:Ie,peers:{Input:Do,Button:xo},self:er});var or=tr;function rr(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Me(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function nr(e){return e=Math.round(e),e>=360?359:e<0?0:e}function ir(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const ar={rgb:{hex(e){return le(ne(e))},hsl(e){const[t,o,r,n]=ne(e);return se([...dt(t,o,r),n])},hsv(e){const[t,o,r,n]=ne(e);return he([...st(t,o,r),n])}},hex:{rgb(e){return ie(ne(e))},hsl(e){const[t,o,r,n]=ne(e);return se([...dt(t,o,r),n])},hsv(e){const[t,o,r,n]=ne(e);return he([...st(t,o,r),n])}},hsl:{hex(e){const[t,o,r,n]=Ce(e);return le([...ct(t,o,r),n])},rgb(e){const[t,o,r,n]=Ce(e);return ie([...ct(t,o,r),n])},hsv(e){const[t,o,r,n]=Ce(e);return he([...Lt(t,o,r),n])}},hsv:{hex(e){const[t,o,r,n]=ve(e);return le([...ae(t,o,r),n])},rgb(e){const[t,o,r,n]=ve(e);return ie([...ae(t,o,r),n])},hsl(e){const[t,o,r,n]=ve(e);return se([...De(t,o,r),n])}}};function Dt(e,t,o){return o=o||Me(e),o?o===t?e:ar[o][t](e):null}const xe="12px",lr=12,ue="6px",sr=6,dr="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";var cr=V({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=$(null);function o(i){!t.value||(ze("mousemove",document,r),ze("mouseup",document,n),r(i))}function r(i){const{value:a}=t;if(!a)return;const{width:s,left:p}=a.getBoundingClientRect(),S=nr((i.clientX-p-sr)/(s-lr)*360);e.onUpdateHue(S)}function n(){var i;Re("mousemove",document,r),Re("mouseup",document,n),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-slider`,style:{height:xe,borderRadius:ue}},l("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:dr,height:xe,borderRadius:ue,position:"relative"},onMousedown:this.handleMouseDown},l("div",{style:{position:"absolute",left:ue,right:ue,top:0,bottom:0}},l("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${ue})`,borderRadius:ue,width:xe,height:xe}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:ue,width:xe,height:xe}})))))}});const $e="12px",ur=12,pe="6px";var pr=V({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=$(null);function o(i){!t.value||!e.rgba||(ze("mousemove",document,r),ze("mouseup",document,n),r(i))}function r(i){const{value:a}=t;if(!a)return;const{width:s,left:p}=a.getBoundingClientRect(),S=(i.clientX-p)/(s-ur);e.onUpdateAlpha(ir(S))}function n(){var i;Re("mousemove",document,r),Re("mouseup",document,n),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:t,railBackgroundImage:y(()=>{const{rgba:i}=e;return i?`linear-gradient(to right, rgba(${i[0]}, ${i[1]}, ${i[2]}, 0) 0%, rgba(${i[0]}, ${i[1]}, ${i[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:$e,borderRadius:pe},onMousedown:this.handleMouseDown},l("div",{style:{borderRadius:pe,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},l("div",{class:`${e}-color-picker-checkboard`}),l("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&l("div",{style:{position:"absolute",left:pe,right:pe,top:0,bottom:0}},l("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${pe})`,borderRadius:pe,width:$e,height:$e}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:ie(this.rgba),borderRadius:pe,width:$e,height:$e}}))))}});const Ue="12px",Be="6px";var mr=V({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=$(null);function o(i){!t.value||(ze("mousemove",document,r),ze("mouseup",document,n),r(i))}function r(i){const{value:a}=t;if(!a)return;const{width:s,height:p,left:S,bottom:P}=a.getBoundingClientRect(),C=(P-i.clientY)/p,w=(i.clientX-S)/s,T=100*(w>1?1:w<0?0:w),M=100*(C>1?1:C<0?0:C);e.onUpdateSV(T,M)}function n(){var i;Re("mousemove",document,r),Re("mouseup",document,n),(i=e.onComplete)===null||i===void 0||i.call(e)}return{palleteRef:t,handleColor:y(()=>{const{rgba:i}=e;return i?`rgb(${i[0]}, ${i[1]}, ${i[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},l("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),l("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&l("div",{class:`${e}-color-picker-handle`,style:{width:Ue,height:Ue,borderRadius:Be,left:`calc(${this.displayedSv[0]}% - ${Be})`,bottom:`calc(${this.displayedSv[1]}% - ${Be})`}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Be,width:Ue,height:Ue}})))}});const ht=Ke("n-color-picker");function hr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function vr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function fr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function gr(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function br(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}const xr={paddingSmall:"0 4px"};var Rt=V({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=$(""),{themeRef:o}=ee(ht,null);Se(()=>{t.value=r()});function r(){const{value:a}=e;if(a===null)return"";const{label:s}=e;return s==="HEX"?a:s==="A"?`${Math.floor(a*100)}%`:String(Math.floor(a))}function n(a){t.value=a}function i(a){let s,p;switch(e.label){case"HEX":p=gr(a),p&&e.onUpdateValue(a),t.value=r();break;case"H":s=vr(a),s?e.onUpdateValue(s):t.value=r();break;case"S":case"L":case"V":s=fr(a),s?e.onUpdateValue(s):t.value=r();break;case"A":s=br(a),s?e.onUpdateValue(s):t.value=r();break;case"R":case"G":case"B":s=hr(a),s?e.onUpdateValue(s):t.value=r();break}}return{mergedTheme:o,inputValue:t,handleInputChange:i,handleInputUpdateValue:n}},render(){const{mergedTheme:e}=this;return l(Bt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:xr,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),yr=V({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:r}=e;if(e.mode==="hex"){e.onUpdateValue((r?le:Ae)(o));return}let n;switch(e.valueArr===null?n=[0,0,0,0]:n=Array.from(e.valueArr),e.mode){case"hsv":n[t]=o,e.onUpdateValue((r?he:it)(n));break;case"rgb":n[t]=o,e.onUpdateValue((r?ie:nt)(n));break;case"hsl":n[t]=o,e.onUpdateValue((r?se:rt)(n));break}}}},render(){const{clsPrefix:e,modes:t}=this;return l("div",{class:`${e}-color-picker-input`},l("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),l(Qo,null,{default:()=>{const{mode:o,valueArr:r,showAlpha:n}=this;if(o==="hex"){let i=null;try{i=r===null?null:(n?le:Ae)(r)}catch{}return l(Rt,{label:"HEX",showAlpha:n,value:i,onUpdateValue:a=>{this.handleUnitUpdateValue(0,a)}})}return(o+(n?"a":"")).split("").map((i,a)=>l(Rt,{label:i.toUpperCase(),value:r===null?null:r[a],onUpdateValue:s=>{this.handleUnitUpdateValue(a,s)}}))}}))}}),Cr=V({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=ee(ht,null);return()=>{const{hsla:r,value:n,clsPrefix:i,onClick:a,disabled:s}=e,p=t.label||o.value;return l("div",{class:[`${i}-color-picker-trigger`,s&&`${i}-color-picker-trigger--disabled`],onClick:s?void 0:a},l("div",{class:`${i}-color-picker-trigger__fill`},l("div",{class:`${i}-color-picker-checkboard`}),l("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:r?se(r):""}}),n&&r?l("div",{class:`${i}-color-picker-trigger__value`,style:{color:r[2]>50||r[3]<.5?"black":"white"}},p?p(n):n):null))}}});function wr(e,t){if(t==="hsv"){const[o,r,n,i]=ve(e);return ie([...ae(o,r,n),i])}return e}function Sr(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}var kr=V({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=y(()=>e.swatches.map(i=>{const a=Me(i);return{value:i,mode:a,legalValue:wr(i,a)}}));function o(i){const{mode:a}=e;let{value:s,mode:p}=i;return p||(p="hex",/^[a-zA-Z]+$/.test(s)?s=Sr(s):(yo("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),p===a?s:Dt(s,a,p)}function r(i){e.onUpdateColor(o(i))}function n(i,a){i.key==="Enter"&&r(a)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:n}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>l("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(t),onKeydown:o=>this.handleSwatchKeyDown(o,t)},l("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),zr=V({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=Me(e);return Boolean(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var r;const n=o.target.value;(r=e.onUpdateColor)===null||r===void 0||r.call(e,Dt(n.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-preview__preview`},l("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),l("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Rr=R([u("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),u("color-picker-panel",`
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
 `,[Co(),u("input",`
 text-align: center;
 `)]),u("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[R("&::after",`
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
 `)]),u("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[b("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),R("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),u("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[b("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),u("color-picker-pallete",`
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
 `,[E("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),u("color-picker-preview",`
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
 `)]),u("color-picker-input",`
 display: flex;
 align-items: center;
 `,[u("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),b("mode",`
 width: 72px;
 text-align: center;
 `)]),u("color-picker-control",`
 padding: 12px;
 `),u("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[u("button","margin-left: 8px;")]),u("color-picker-trigger",`
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
 `),E("disabled","cursor: not-allowed"),u("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[R("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),u("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[u("color-picker-swatch",`
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
 `),R("&:focus",`
 outline: none;
 `,[b("fill",[R("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const Ir=Object.assign(Object.assign({},G.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:{type:Boolean,default:!1},defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:at.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var Pr=V({name:"ColorPicker",props:Ir,setup(e,{slots:t}){const o=$(null);let r=null;const n=wo(e),{mergedSizeRef:i,mergedDisabledRef:a}=n,{localeRef:s}=Oo("global"),{mergedClsPrefixRef:p,namespaceRef:S,inlineThemeDisabled:P}=ge(e),C=G("ColorPicker","-color-picker",Rr,or,e,p);fe(ht,{themeRef:C,renderLabelRef:me(e,"renderLabel"),colorPickerSlots:t});const w=$(e.defaultShow),T=Te(me(e,"show"),w);function M(c){const{onUpdateShow:_,"onUpdate:show":U}=e;_&&q(_,c),U&&q(U,c),w.value=c}const{defaultValue:v}=e,k=$(v===void 0?rr(e.modes,e.showAlpha):v),f=Te(me(e,"value"),k),I=$([f.value]),z=$(0),N=y(()=>Me(f.value)),{modes:j}=e,h=$(Me(f.value)||j[0]||"rgb");function x(){const{modes:c}=e,{value:_}=h,U=c.findIndex(F=>F===_);~U?h.value=c[(U+1)%c.length]:h.value="rgb"}let m,d,A,L,Y,Z,J,g;const Pe=y(()=>{const{value:c}=f;if(!c)return null;switch(N.value){case"hsv":return ve(c);case"hsl":return[m,d,A,g]=Ce(c),[...Lt(m,d,A),g];case"rgb":case"hex":return[Y,Z,J,g]=ne(c),[...st(Y,Z,J),g]}}),de=y(()=>{const{value:c}=f;if(!c)return null;switch(N.value){case"rgb":case"hex":return ne(c);case"hsv":return[m,d,L,g]=ve(c),[...ae(m,d,L),g];case"hsl":return[m,d,A,g]=Ce(c),[...ct(m,d,A),g]}}),We=y(()=>{const{value:c}=f;if(!c)return null;switch(N.value){case"hsl":return Ce(c);case"hsv":return[m,d,L,g]=ve(c),[...De(m,d,L),g];case"rgb":case"hex":return[Y,Z,J,g]=ne(c),[...dt(Y,Z,J),g]}}),Xt=y(()=>{switch(h.value){case"rgb":case"hex":return de.value;case"hsv":return Pe.value;case"hsl":return We.value}}),Ve=$(0),Ge=$(1),Ye=$([0,0]);function Zt(c,_){const{value:U}=Pe,F=Ve.value,D=U?U[3]:1;Ye.value=[c,_];const{showAlpha:B}=e;switch(h.value){case"hsv":O((B?he:it)([F,c,_,D]),"cursor");break;case"hsl":O((B?se:rt)([...De(F,c,_),D]),"cursor");break;case"rgb":O((B?ie:nt)([...ae(F,c,_),D]),"cursor");break;case"hex":O((B?le:Ae)([...ae(F,c,_),D]),"cursor");break}}function Jt(c){Ve.value=c;const{value:_}=Pe;if(!_)return;const[,U,F,D]=_,{showAlpha:B}=e;switch(h.value){case"hsv":O((B?he:it)([c,U,F,D]),"cursor");break;case"rgb":O((B?ie:nt)([...ae(c,U,F),D]),"cursor");break;case"hex":O((B?le:Ae)([...ae(c,U,F),D]),"cursor");break;case"hsl":O((B?se:rt)([...De(c,U,F),D]),"cursor");break}}function Qt(c){switch(h.value){case"hsv":[m,d,L]=Pe.value,O(he([m,d,L,c]),"cursor");break;case"rgb":[Y,Z,J]=de.value,O(ie([Y,Z,J,c]),"cursor");break;case"hex":[Y,Z,J]=de.value,O(le([Y,Z,J,c]),"cursor");break;case"hsl":[m,d,A]=We.value,O(se([m,d,A,c]),"cursor");break}Ge.value=c}function O(c,_){_==="cursor"?r=c:r=null;const{nTriggerFormChange:U,nTriggerFormInput:F}=n,{onUpdateValue:D,"onUpdate:value":B}=e;D&&q(D,c),B&&q(B,c),U(),F(),k.value=c}function eo(c){O(c,"input"),uo(be)}function be(c=!0){const{value:_}=f;if(_){const{nTriggerFormChange:U,nTriggerFormInput:F}=n,{onComplete:D}=e;D&&D(_);const{value:B}=I,{value:X}=z;c&&(B.splice(X+1,B.length,_),z.value=X+1),U(),F()}}function to(){const{value:c}=z;c-1<0||(O(I.value[c-1],"input"),be(!1),z.value=c-1)}function oo(){const{value:c}=z;c<0||c+1>=I.value.length||(O(I.value[c+1],"input"),be(!1),z.value=c+1)}function ro(){M(!1)}const no=y(()=>z.value>=1),io=y(()=>{const{value:c}=I;return c.length>1&&z.value<c.length-1});At(T,c=>{c||(I.value=[f.value],z.value=0)}),Se(()=>{if(!(r&&r===f.value)){const{value:c}=Pe;c&&(Ve.value=c[0],Ge.value=c[3],Ye.value=[c[1],c[2]])}r=null});const Xe=y(()=>{const{value:c}=i,{common:{cubicBezierEaseInOut:_},self:{textColor:U,color:F,panelFontSize:D,boxShadow:B,border:X,borderRadius:K,dividerColor:ce,[Oe("height",c)]:lo,[Oe("fontSize",c)]:so}}=C.value;return{"--n-bezier":_,"--n-text-color":U,"--n-color":F,"--n-panel-font-size":D,"--n-font-size":so,"--n-box-shadow":B,"--n-border":X,"--n-border-radius":K,"--n-height":lo,"--n-divider-color":ce}}),te=P?qe("color-picker",y(()=>i.value[0]),Xe,e):void 0;function ao(){var c;const{value:_}=de,{value:U}=Ve,{internalActions:F,modes:D,actions:B}=e,{value:X}=C,{value:K}=p;return l("div",{class:[`${K}-color-picker-panel`,te==null?void 0:te.themeClass.value],onDragstart:ce=>{ce.preventDefault()},style:P?void 0:Xe.value},l("div",{class:`${K}-color-picker-control`},l(mr,{clsPrefix:K,rgba:_,displayedHue:U,displayedSv:Ye.value,onUpdateSV:Zt,onComplete:be}),l("div",{class:`${K}-color-picker-preview`},l("div",{class:`${K}-color-picker-preview__sliders`},l(cr,{clsPrefix:K,hue:U,onUpdateHue:Jt,onComplete:be}),e.showAlpha?l(pr,{clsPrefix:K,rgba:_,alpha:Ge.value,onUpdateAlpha:Qt,onComplete:be}):null),e.showPreview?l(zr,{clsPrefix:K,mode:h.value,color:de.value&&Ae(de.value),onUpdateColor:ce=>O(ce,"input")}):null),l(yr,{clsPrefix:K,showAlpha:e.showAlpha,mode:h.value,modes:D,onUpdateMode:x,value:f.value,valueArr:Xt.value,onUpdateValue:eo}),((c=e.swatches)===null||c===void 0?void 0:c.length)&&l(kr,{clsPrefix:K,mode:h.value,swatches:e.swatches,onUpdateColor:ce=>O(ce,"input")})),B!=null&&B.length?l("div",{class:`${K}-color-picker-action`},B.includes("confirm")&&l(_e,{size:"small",onClick:ro,theme:X.peers.Button,themeOverrides:X.peerOverrides.Button},{default:()=>s.value.confirm})):null,t.action?l("div",{class:`${K}-color-picker-action`},{default:t.action}):F?l("div",{class:`${K}-color-picker-action`},F.includes("undo")&&l(_e,{size:"small",onClick:to,disabled:!no.value,theme:X.peers.Button,themeOverrides:X.peerOverrides.Button},{default:()=>s.value.undo}),F.includes("redo")&&l(_e,{size:"small",onClick:oo,disabled:!io.value,theme:X.peers.Button,themeOverrides:X.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:p,namespace:S,selfRef:o,hsla:We,rgba:de,mergedShow:T,mergedDisabled:a,isMounted:So(),adjustedTo:at(e),mergedValue:f,handleTriggerClick(){M(!0)},handleClickOutside(c){var _;!((_=o.value)===null||_===void 0)&&_.contains(c.target)||M(!1)},renderPanel:ao,cssVars:P?void 0:Xe,themeClass:te==null?void 0:te.themeClass,onRender:te==null?void 0:te.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),l("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},l(ko,null,{default:()=>[l(zo,null,{default:()=>l(Cr,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),l(Ro,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===at.tdkey,to:this.adjustedTo},{default:()=>l(_t,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?co(this.renderPanel(),[[Io,this.handleClickOutside]]):null})})]}))}}),$r={padding:"8px 14px"};const Ar=e=>{const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},$r),{borderRadius:t,boxShadow:o,color:$o(r,"rgba(0, 0, 0, .85)"),textColor:r})},_r=je({name:"Tooltip",common:Ie,peers:{Popover:Po},self:Ar});var vt=_r;const Tr=je({name:"Ellipsis",common:Ie,peers:{Tooltip:vt}});var Mr=Tr;const Nr=Object.assign(Object.assign({},_o),G.props);var Ot=V({name:"Tooltip",props:Nr,__popover__:!0,setup(e){const t=G("Tooltip","-tooltip",void 0,vt,e),o=$(null);return Object.assign(Object.assign({},{syncPosition(){o.value.syncPosition()},setShow(n){o.value.setShow(n)}}),{popoverRef:o,mergedTheme:t,popoverThemeOverrides:y(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return l(Ao,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Vr=u("ellipsis",{overflow:"hidden"},[Le("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),E("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),E("cursor-pointer",`
 cursor: pointer;
 `)]);function It(e){return`${e}-ellipsis--line-clamp`}function Pt(e,t){return`${e}-ellipsis--cursor-${t}`}const Er=Object.assign(Object.assign({},G.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}});var Ht=V({name:"Ellipsis",inheritAttrs:!1,props:Er,setup(e,{slots:t,attrs:o}){const{mergedClsPrefixRef:r}=ge(e),n=G("Ellipsis","-ellipsis",Vr,Mr,e,r),i=$(null),a=$(null),s=$(!1),p=y(()=>{const{lineClamp:v}=e,{value:k}=s;return v!==void 0?{textOverflow:"","-webkit-line-clamp":k?"":v}:{textOverflow:k?"":"ellipsis","-webkit-line-clamp":""}});function S(){let v=!1;const{value:k}=s;if(k)return!0;const{value:f}=i;if(f){const{lineClamp:I}=e;w(f),I!==void 0?v=f.scrollHeight<=f.offsetHeight:v=f.scrollWidth<=f.offsetWidth,T(f,v)}return v}const P=y(()=>e.expandTrigger==="click"?()=>{var v;const{value:k}=s;k&&((v=a.value)===null||v===void 0||v.setShow(!1)),s.value=!k}:void 0),C=()=>l("span",Object.assign({},Tt(o,{class:[`${r.value}-ellipsis`,e.lineClamp!==void 0?It(r.value):void 0,e.expandTrigger==="click"?Pt(r.value,"pointer"):void 0],style:p.value}),{ref:"triggerRef",onClick:P.value,onMouseenter:e.expandTrigger==="click"?S:void 0}),t);function w(v){if(!v)return;const k=p.value,f=It(r.value);e.lineClamp!==void 0?M(v,f,"add"):M(v,f,"remove");for(const I in k)v.style[I]!==k[I]&&(v.style[I]=k[I])}function T(v,k){const f=Pt(r.value,"pointer");e.expandTrigger==="click"&&!k?M(v,f,"add"):M(v,f,"remove")}function M(v,k,f){f==="add"?v.classList.contains(k)||v.classList.add(k):v.classList.contains(k)&&v.classList.remove(k)}return{mergedTheme:n,triggerRef:i,tooltipRef:a,handleClick:P,renderTrigger:C,getTooltipDisabled:S}},render(){var e;const{tooltip:t,renderTrigger:o,$slots:r}=this;if(t){const{mergedTheme:n}=this;return l(Ot,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip}),{trigger:o,default:(e=r.tooltip)!==null&&e!==void 0?e:r.default})}else return o()}});function Ur(e,t,o){return{itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorActiveInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorChildActiveInverted:t,itemIconColorCollapsedInverted:e,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorActiveInverted:t,groupTextColorInverted:o}}const Br=e=>{const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:n,primaryColorHover:i,textColor1:a,fontSize:s,dividerColor:p}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorActive:To(r,{alpha:.1}),itemColorActiveCollapsed:"#0000",itemTextColor:n,itemTextColorHover:i,itemTextColorChildActive:r,itemTextColorActive:r,itemIconColor:a,itemIconColorHover:i,itemIconColorActive:r,itemIconColorChildActive:r,itemIconColorCollapsed:a,itemHeight:"42px",arrowColor:n,arrowColorHover:i,arrowColorChildActive:r,arrowColorActive:r,colorInverted:"#0000",itemColorActiveInverted:r,itemColorActiveCollapsedInverted:r,borderColorHorizontal:"#0000",fontSize:s,dividerColor:p},Ur("#BBB","#FFF","#AAA"))},Fr=je({name:"Menu",common:Ie,peers:{Tooltip:vt},self:Br});var Lr=Fr;const Dr=e=>{const{opacityDisabled:t,heightTiny:o,heightSmall:r,heightMedium:n,heightLarge:i,heightHuge:a,primaryColor:s,fontSize:p}=e;return{fontSize:p,textColor:s,sizeTiny:o,sizeSmall:r,sizeMedium:n,sizeLarge:i,sizeHuge:a,color:s,opacitySpinning:t}},Or={name:"Spin",common:Ie,self:Dr};var Hr=Or,jr=u("layout-sider",`
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
`,[E("bordered",[b("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),b("left-placement",[E("bordered",[b("border",`
 right: 0;
 `)])]),E("right-placement",`
 justify-content: flex-start;
 `,[E("bordered",[b("border",`
 left: 0;
 `)]),E("collapsed",[u("layout-toggle-button",[u("base-icon",`
 transform: rotate(180deg);
 `)]),u("layout-toggle-bar",[R("&:hover",[b("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),u("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[u("base-icon",`
 transform: rotate(0);
 `)]),u("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[R("&:hover",[b("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),E("collapsed",[u("layout-toggle-bar",[R("&:hover",[b("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),u("layout-toggle-button",[u("base-icon",`
 transform: rotate(0);
 `)])]),u("layout-toggle-button",`
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
 `,[u("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),u("layout-toggle-bar",`
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
 `),R("&:hover",[b("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),b("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),R("&:hover",[b("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),b("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),u("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),E("show-content",[u("layout-sider-scroll-container",{opacity:1})]),E("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Kr=V({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},l(Vt,{clsPrefix:e},{default:()=>l(Mo,null)}))}}),qr=V({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},l("div",{class:`${e}-layout-toggle-bar__top`}),l("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const Wr={position:Wo,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var Gr=V({name:"LayoutSider",props:Object.assign(Object.assign({},G.props),Wr),setup(e){const t=ee(Ko),o=$(null),r=$(null),n=y(()=>et(p.value?e.collapsedWidth:e.width)),i=y(()=>e.collapseMode!=="transform"?{}:{minWidth:et(e.width)}),a=y(()=>t?t.siderPlacement:"left"),s=$(e.defaultCollapsed),p=Te(me(e,"collapsed"),s);function S(I,z){if(e.nativeScrollbar){const{value:N}=o;N&&(z===void 0?N.scrollTo(I):N.scrollTo(I,z))}else{const{value:N}=r;N&&N.scrollTo(I,z)}}function P(){const{"onUpdate:collapsed":I,onUpdateCollapsed:z,onExpand:N,onCollapse:j}=e,{value:h}=p;z&&q(z,!h),I&&q(I,!h),s.value=!h,h?N&&q(N):j&&q(j)}fe(Ft,{collapsedRef:p,collapseModeRef:me(e,"collapseMode")});const{mergedClsPrefixRef:C,inlineThemeDisabled:w}=ge(e),T=G("Layout","-layout-sider",jr,qo,e,C);function M(I){var z,N;I.propertyName==="max-width"&&(p.value?(z=e.onAfterLeave)===null||z===void 0||z.call(e):(N=e.onAfterEnter)===null||N===void 0||N.call(e))}const v={scrollTo:S},k=y(()=>{const{common:{cubicBezierEaseInOut:I},self:z}=T.value,{siderToggleButtonColor:N,siderToggleButtonBorder:j,siderToggleBarColor:h,siderToggleBarColorHover:x}=z,m={"--n-bezier":I,"--n-toggle-button-color":N,"--n-toggle-button-border":j,"--n-toggle-bar-color":h,"--n-toggle-bar-color-hover":x};return e.inverted?(m["--n-color"]=z.siderColorInverted,m["--n-text-color"]=z.textColorInverted,m["--n-border-color"]=z.siderBorderColorInverted,m["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColorInverted,m.__invertScrollbar=z.__invertScrollbar):(m["--n-color"]=z.siderColor,m["--n-text-color"]=z.textColor,m["--n-border-color"]=z.siderBorderColor,m["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColor),m}),f=w?qe("layout-sider",y(()=>e.inverted?"a":"b"),k,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:C,mergedTheme:T,styleMaxWidth:n,mergedCollapsed:p,scrollContainerStyle:i,siderPlacement:a,handleTransitionend:M,handleTriggerClick:P,inlineThemeDisabled:w,cssVars:k,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender},v)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:et(this.width)}]},this.nativeScrollbar?l("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.onScroll,style:[this.scrollContainerStyle,this.contentStyle,{overflow:"auto"}],ref:"scrollableElRef"},this.$slots):l(No,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?l(qr,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):l(Kr,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?l("div",{class:`${t}-layout-sider__border`}):null)}});const Ne=Ke("n-menu"),ft=Ke("n-submenu"),gt=Ke("n-menu-item-group"),Fe=8;function bt(e){const t=ee(Ne),{props:o,mergedCollapsedRef:r}=t,n=ee(ft,null),i=ee(gt,null),a=y(()=>o.mode==="horizontal"),s=y(()=>a.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),p=y(()=>{var w;return Math.max((w=o.collapsedIconSize)!==null&&w!==void 0?w:o.iconSize,o.iconSize)}),S=y(()=>{var w;return!a.value&&e.root&&r.value&&(w=o.collapsedIconSize)!==null&&w!==void 0?w:o.iconSize}),P=y(()=>{if(a.value)return;const{collapsedWidth:w,indent:T,rootIndent:M}=o,{root:v,isGroup:k}=e,f=M===void 0?T:M;if(v)return r.value?w/2-p.value/2:f;if(i)return T/2+i.paddingLeftRef.value;if(n)return(k?T/2:T)+n.paddingLeftRef.value}),C=y(()=>{const{collapsedWidth:w,indent:T,rootIndent:M}=o,{value:v}=p,{root:k}=e;return a.value||!k||!r.value?Fe:(M===void 0?T:M)+v+Fe-(w+v)/2});return{dropdownPlacement:s,activeIconSize:S,maxIconSize:p,paddingLeft:P,iconMarginRight:C,NMenu:t,NSubmenu:n}}const xt={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},jt=Object.assign(Object.assign({},xt),{tmNodes:{type:Array,required:!0}}),Yr=V({name:"MenuOptionGroup",props:jt,setup(e){fe(ft,null);const t=bt(e);fe(gt,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=ee(Ne);return function(){const{value:n}=o,i=t.paddingLeft.value;return l("div",{class:`${n}-menu-item-group`,role:"group"},l("span",{class:`${n}-menu-item-group-title`,style:i!==void 0?`padding-left: ${i}px;`:void 0},we(e.title),e.extra?l(ke,null," ",we(e.extra)):null),l("div",null,e.tmNodes.map(a=>yt(a,r))))}}});var Kt=V({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=ee(Ne);return{menuProps:t,style:y(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:y(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:n}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${n}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:n,expandIcon:i}}=this,a=o?o(t.rawNode):we(this.icon);return l("div",{onClick:this.onClick,role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},a&&l("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[a]),l("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(t.rawNode):we(this.title),this.extra||n?l("span",{class:`${e}-menu-item-content-header__extra`}," ",n?n(t.rawNode):we(this.extra)):null),this.showArrow?l(Vt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):l(Xo,null)}):null)}});const qt=Object.assign(Object.assign({},xt),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Xr=V({name:"Submenu",props:qt,setup(e){const t=bt(e),{NMenu:o,NSubmenu:r}=t,{props:n,mergedCollapsedRef:i}=o,a=y(()=>{const{disabled:C}=e;return r!=null&&r.mergedDisabledRef.value||n.disabled?!0:C}),s=$(!1);fe(ft,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:a}),fe(gt,null);function p(){const{onClick:C}=e;C&&C()}function S(){a.value||(i.value||o.toggleExpand(e.internalKey),p())}function P(C){s.value=C}return{menuProps:n,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:a,mergedValue:o.mergedValueRef,childActive:Et(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:y(()=>n.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!a.value&&(n.mode==="horizontal"||i.value)),handlePopoverShowChange:P,handleClick:S}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,n=()=>{const{isHorizontal:a,paddingLeft:s,collapsed:p,mergedDisabled:S,maxIconSize:P,activeIconSize:C,title:w,childActive:T,icon:M,handleClick:v,dropdownShow:k,iconMarginRight:f,tmNode:I}=this;return l(Kt,{tmNode:I,paddingLeft:s,collapsed:p,disabled:S,iconMarginRight:f,maxIconSize:P,activeIconSize:C,title:w,showArrow:!a,childActive:T,clsPrefix:t,icon:M,hover:k,onClick:v})},i=()=>l(Vo,null,{default:()=>{const{tmNodes:a,collapsed:s}=this;return s?null:l("div",{class:`${t}-submenu-children`,role:"menu"},a.map(p=>yt(p,this.menuProps)))}});return this.root?l(Eo,Object.assign({},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,size:"large",trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>l("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),this.isHorizontal?null:i())}):l("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),i())}}),Wt=Object.assign(Object.assign({},xt),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Zr=V({name:"MenuOption",props:Wt,setup(e){const t=bt(e),{NSubmenu:o,NMenu:r}=t,{props:n,mergedClsPrefixRef:i,mergedCollapsedRef:a}=r,s=o?o.mergedDisabledRef:{value:!1},p=y(()=>s.value||e.disabled);function S(C){const{onClick:w}=e;w&&w(C)}function P(C){p.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),S(C))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:n,dropdownEnabled:Et(()=>e.root&&a.value&&n.mode!=="horizontal"&&!p.value),selected:y(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:p,handleClick:P}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r}}=this;return l("div",{role:"menuitem",class:[`${e}-menu-item`,this.selected&&`${e}-menu-item--selected`,this.mergedDisabled&&`${e}-menu-item--disabled`]},l(Ot,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):we(this.title),trigger:()=>l(Kt,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var Jr=V({name:"MenuDivider",setup(){const e=ee(Ne),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:l("div",{class:`${t.value}-menu-divider`})}});const Qr=mt(jt),en=mt(Wt),tn=mt(qt);function on(e){return e.type==="divider"||e.type==="render"}function rn(e){return e.type==="divider"}function yt(e,t){const{rawNode:o}=e;if(on(o))return rn(o)?l(Jr,Object.assign({key:e.key},o.props)):void 0;const{labelField:r}=t,{key:n,level:i,isGroup:a}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:n,internalKey:n,level:i,root:i===0,isGroup:a});return e.children?e.isGroup?l(Yr,tt(s,Qr,{tmNodes:e.children,key:n})):l(Xr,tt(s,tn,{key:n,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):l(Zr,tt(s,en,{key:n,tmNode:e}))}var nn=R([u("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[E("horizontal",{display:"inline-flex",paddingBottom:0},[u("submenu",{margin:0}),u("menu-item",{margin:0},[R("&::before",{backgroundColor:"#0000 !important"}),E("selected",[u("menu-item-content",{borderBottom:"2px solid var(--n-border-color-horizontal)"})])]),u("menu-item-content",{padding:"0 20px",borderBottom:"2px solid #0000"},[E("child-active",{borderBottom:"2px solid var(--n-border-color-horizontal)"}),Le("disabled",[$t({borderBottom:"2px solid var(--n-border-color-horizontal)"},null)])])]),E("collapsed",[u("menu-item",[E("selected",[R("&::before",{backgroundColor:"var(--n-item-color-active-collapsed) !important"})])]),u("menu-item-content",[u("menu-item-content-header",{opacity:0}),b("arrow",{opacity:0}),b("icon",{color:"var(--n-item-icon-color-collapsed)"})])]),u("menu-item",`
 transition: background-color .3s var(--n-bezier);
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `,[R("&::before",`
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
 `),Le("disabled",[R("&:active::before",{backgroundColor:"var(--n-item-color-active)"})]),E("selected",[R("&::before",{backgroundColor:"var(--n-item-color-active)"}),u("menu-item-content",[b("arrow",{color:"var(--n-arrow-color-active)"}),b("icon",{color:"var(--n-item-icon-color-active)"}),u("menu-item-content-header",{color:"var(--n-item-text-color-active)"},[b("extra",{color:"var(--n-item-text-color-active)"})])])])]),u("menu-item-content",`
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
 `,[E("disabled",{opacity:".45",cursor:"not-allowed"}),E("collapsed",[b("arrow",{transform:"rotate(0)"})]),E("child-active",[u("menu-item-content-header",{color:"var(--n-item-text-color-child-active)"},[b("extra",{color:"var(--n-item-text-color-child-active)"})]),b("arrow",{color:"var(--n-arrow-color-child-active)"}),b("icon",{color:"var(--n-item-icon-color-child-active)"})]),Le("disabled",[$t(null,[b("arrow",{color:"var(--n-arrow-color-hover)"}),b("icon",{color:"var(--n-item-icon-color-hover)"}),u("menu-item-content-header",{color:"var(--n-item-text-color-hover)"},[b("extra",{color:"var(--n-item-text-color-hover)"})])])]),b("icon",`
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
 `),u("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[R("a",`
 text-decoration: none;
 color: inherit;
 `,[R("&::before",`
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
 `)])]),u("submenu",{cursor:"pointer",position:"relative",marginTop:"6px"},[u("menu-item-content",`
 height: var(--n-item-height);
 `),u("submenu-children",{overflow:"hidden",padding:0},[Go({duration:".2s"})])]),u("menu-item-group",[u("menu-item-group-title",`
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
 `)])]),u("menu-tooltip",[R("a",`
 color: inherit;
 text-decoration: none;
 `)]),u("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function $t(e,t){return[E("hover",e,t),R("&:hover",e,t)]}const an=Object.assign(Object.assign({},G.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownPlacement:{type:String,default:"bottom"},dropdownProps:Object,accordion:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array});var ln=V({name:"Menu",props:an,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ge(e),r=G("Menu","-menu",nn,Lr,e,t),n=ee(Ft,null),i=y(()=>{var x;const{collapsed:m}=e;if(m!==void 0)return m;if(n){const{collapseModeRef:d,collapsedRef:A}=n;if(d.value==="width")return(x=A.value)!==null&&x!==void 0?x:!1}return!1}),a=y(()=>{const{keyField:x,childrenField:m}=e;return Uo(e.items||e.options,{getChildren(d){return d[m]},getKey(d){var A;return(A=d[x])!==null&&A!==void 0?A:d.name}})}),s=y(()=>new Set(a.value.treeNodes.map(x=>x.key))),{watchProps:p}=e,S=$(null);p!=null&&p.includes("defaultValue")?Se(()=>{S.value=e.defaultValue}):S.value=e.defaultValue;const P=me(e,"value"),C=Te(P,S),w=$([]),T=()=>{w.value=e.defaultExpandAll?a.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||a.value.getPath(C.value,{includeSelf:!1}).keyPath};p!=null&&p.includes("defaultExpandedKeys")?Se(T):T();const M=Ut(e,["expandedNames","expandedKeys"]),v=Te(M,w),k=y(()=>a.value.treeNodes),f=y(()=>a.value.getPath(C.value).keyPath);fe(Ne,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:C,mergedExpandedKeysRef:v,activePathRef:f,mergedClsPrefixRef:t,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:me(e,"inverted"),doSelect:I,toggleExpand:N});function I(x,m){const{"onUpdate:value":d,onUpdateValue:A,onSelect:L}=e;A&&q(A,x,m),d&&q(d,x,m),L&&q(L,x,m),S.value=x}function z(x){const{"onUpdate:expandedKeys":m,onUpdateExpandedKeys:d,onExpandedNamesChange:A,onOpenNamesChange:L}=e;m&&q(m,x),d&&q(d,x),A&&q(A,x),L&&q(L,x),w.value=x}function N(x){const m=Array.from(v.value),d=m.findIndex(A=>A===x);if(~d)m.splice(d,1);else{if(e.accordion&&s.value.has(x)){const A=m.findIndex(L=>s.value.has(L));A>-1&&m.splice(A,1)}m.push(x)}z(m)}const j=y(()=>{const{inverted:x}=e,{common:{cubicBezierEaseInOut:m},self:d}=r.value,{borderRadius:A,borderColorHorizontal:L,fontSize:Y,itemHeight:Z,dividerColor:J}=d,g={"--n-divider-color":J,"--n-bezier":m,"--n-font-size":Y,"--n-border-color-horizontal":L,"--n-border-radius":A,"--n-item-height":Z};return x?(g["--n-group-text-color"]=d.groupTextColorInverted,g["--n-color"]=d.colorInverted,g["--n-item-text-color"]=d.itemTextColorInverted,g["--n-arrow-color"]=d.arrowColorInverted,g["--n-arrow-color-hover"]=d.arrowColorHoverInverted,g["--n-arrow-color-active"]=d.arrowColorActiveInverted,g["--n-arrow-color-child-active"]=d.arrowColorChildActiveInverted,g["--n-item-icon-color"]=d.itemIconColorInverted,g["--n-item-text-color-hover"]=d.itemTextColorHoverInverted,g["--n-item-icon-color-hover"]=d.itemIconColorHoverInverted,g["--n-item-text-color-active"]=d.itemTextColorActiveInverted,g["--n-item-icon-color-active"]=d.itemIconColorActiveInverted,g["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsedInverted,g["--n-item-color-active"]=d.itemColorActiveInverted,g["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsedInverted,g["--n-item-text-color-child-active"]=d.itemTextColorChildActiveInverted,g["--n-item-icon-color-child-active"]=d.itemIconColorChildActiveInverted):(g["--n-group-text-color"]=d.groupTextColor,g["--n-color"]=d.color,g["--n-item-text-color"]=d.itemTextColor,g["--n-arrow-color"]=d.arrowColor,g["--n-arrow-color-hover"]=d.arrowColorHover,g["--n-arrow-color-active"]=d.arrowColorActive,g["--n-arrow-color-child-active"]=d.arrowColorChildActive,g["--n-item-icon-color"]=d.itemIconColor,g["--n-item-text-color-hover"]=d.itemTextColorHover,g["--n-item-icon-color-hover"]=d.itemIconColorHover,g["--n-item-text-color-active"]=d.itemTextColorActive,g["--n-item-icon-color-active"]=d.itemIconColorActive,g["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsed,g["--n-item-color-active"]=d.itemColorActive,g["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsed,g["--n-item-text-color-child-active"]=d.itemTextColorChildActive,g["--n-item-icon-color-child-active"]=d.itemIconColorChildActive),g}),h=o?qe("menu",y(()=>e.inverted?"a":"b"),j,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:M,uncontrolledExpanededKeys:w,mergedExpandedKeys:v,uncontrolledValue:S,mergedValue:C,activePath:f,tmNodes:k,mergedTheme:r,mergedCollapsed:i,cssVars:o?void 0:j,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;return r==null||r(),l("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(n=>yt(n,this.$props)))}});const sn=e=>{const{heightSmall:t,heightMedium:o,heightLarge:r,borderRadius:n}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:n,heightSmall:t,heightMedium:o,heightLarge:r}},dn={name:"Skeleton",common:Ie,self:sn};var cn=R([u("skeleton",`
 height: 1em;
 width: 100%;
 transition: background-color .3s var(--n-bezier);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),R("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]);const un=Object.assign(Object.assign({},G.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}});var ot=V({name:"Skeleton",inheritAttrs:!1,props:un,setup(e){Yo();const{mergedClsPrefixRef:t}=ge(e),o=G("Skeleton","-skeleton",cn,dn,e,t);return{mergedClsPrefix:t,style:y(()=>{var r,n;const i=o.value,{common:{cubicBezierEaseInOut:a}}=i,s=i.self,{color:p,colorEnd:S,borderRadius:P}=s;let C;const{circle:w,sharp:T,round:M,width:v,height:k,size:f,text:I,animated:z}=e;f!==void 0&&(C=s[Oe("height",f)]);const N=w?(r=v!=null?v:k)!==null&&r!==void 0?r:C:v,j=(n=w&&v!=null?v:k)!==null&&n!==void 0?n:C;return{display:I?"inline-block":"",verticalAlign:I?"-0.125em":"",borderRadius:w?"50%":M?"4096px":T?"":P,width:typeof N=="number"?lt(N):N,height:typeof j=="number"?lt(j):j,animation:z?"":"none","--n-bezier":a,"--n-color-start":p,"--n-color-end":S}})}},render(){const{repeat:e,style:t,mergedClsPrefix:o,$attrs:r}=this,n=l("div",Tt({class:`${o}-skeleton`,style:t},r));return e>1?l(ke,null,Array.apply(null,{length:e}).map(i=>[n,`
`])):n}}),pn=R([R("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),u("spin-container",{position:"relative"},[u("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Bo()])]),u("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),u("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[E("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),u("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),u("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[E("spinning",`
 user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);const mn={small:20,medium:18,large:16},hn=Object.assign(Object.assign({},G.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}});var vn=V({name:"Spin",props:hn,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ge(e),r=G("Spin","-spin",pn,Hr,e,t),n=y(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:s},self:p}=r.value,{opacitySpinning:S,color:P,textColor:C}=p,w=typeof a=="number"?lt(a):p[Oe("size",a)];return{"--n-bezier":s,"--n-opacity-spinning":S,"--n-size":w,"--n-color":P,"--n-text-color":C}}),i=o?qe("spin",y(()=>{const{size:a}=e;return typeof a=="number"?String(a):a[0]}),n,e):void 0;return{mergedClsPrefix:t,compitableShow:Ut(e,["spinning","show"]),mergedStrokeWidth:y(()=>{const{strokeWidth:a}=e;if(a!==void 0)return a;const{size:s}=e;return mn[typeof s=="number"?"medium":s]}),cssVars:o?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,t;const{$slots:o,mergedClsPrefix:r,description:n}=this,i=o.icon&&this.rotate,a=(n||o.description)&&l("div",{class:`${r}-spin-description`},n||((e=o.description)===null||e===void 0?void 0:e.call(o))),s=o.icon?l("div",{class:[`${r}-spin-body`,this.themeClass]},l("div",{class:[`${r}-spin`,i&&`${r}-spin--rotate`],style:o.default?"":this.cssVars},o.icon()),a):l("div",{class:[`${r}-spin-body`,this.themeClass]},l(Fo,{clsPrefix:r,style:o.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),a);return(t=this.onRender)===null||t===void 0||t.call(this),o.default?l("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},l("div",{class:[`${r}-spin-content`,this.compitableShow&&`${r}-spin-content--spinning`]},o),l(_t,{name:"fade-in-transition"},{default:()=>this.compitableShow?s:null})):s}});const fn=V({props:{index:null,varName:null,varValue:null},emits:["complete"],setup(e,{emit:t}){const o=e,r=$(o.varValue),n=async i=>{const{index:a,varName:s}=o;t("complete",{index:a,varName:s,varValue:i})};return Se(()=>{r.value=o.varValue}),(i,a)=>(oe(),ye(ke,null,[W(H(Ht),{class:"console-component-title"},{default:re(()=>[He(Mt(e.varName),1)]),_:1}),W(H(Pr),{modes:["hex","rgb"],value:r.value,"onUpdate:value":a[0]||(a[0]=s=>r.value=s),onComplete:n},null,8,["value"])],64))}}),gn=V({props:{index:null,varName:null,varValue:null},emits:["complete"],setup(e,{emit:t}){const o=e,r=pt(),n=$(o.varValue),i=async a=>{const{index:s,varName:p}=o,S={index:s,varName:p,varValue:a};await r.setComponentConsoleStyle(S),t("complete",S)};return Se(()=>{n.value=o.varValue}),(a,s)=>(oe(),ye(ke,null,[W(H(Ht),{class:"console-component-title"},{default:re(()=>[He(Mt(e.varName),1)]),_:1}),W(H(Bt),{type:"text",value:n.value,"onUpdate:value":s[0]||(s[0]=p=>n.value=p),onChange:i},null,8,["value"])],64))}});let ut=[],Gt=!1,Yt;const bn=()=>{const e=t=>{if(t.data.type==="iframeReady"){Gt=!0;const o=document.querySelector("iframe");if(o&&o.contentDocument){const r=document.createElement("style");r.textContent=".demo-nav__back { display: none; }",o.contentDocument.head.appendChild(r)}ut.forEach(r=>r()),ut=[]}if(t.data.type===Nt){const o=pt(),r=t.data.value==="/zh-CN"||t.data.value==="/en-US"?"base":t.data.value;o.menuChange(r)}};window.addEventListener("message",e),Yt=e};function xn(e){Gt?e():ut.push(e)}function yn(e,t){const o=document.querySelector("iframe");o&&xn(()=>{var r;(r=o==null?void 0:o.contentWindow)==null||r.postMessage(e,"*"),t()})}const Cn=()=>{window.removeEventListener("message",Yt)},wn={class:"page-preview"},Sn={class:"page-preview-console-container"},kn={class:"console-wrapper"},zn={class:"console-operation"},Rn={class:"btn-container"},In=He("\u91CD\u7F6E\u6240\u6709"),Pn=He("\u4E0B\u8F7D"),$n={class:"console-container"},An={key:1,class:"console-component-no-data-text"},_n={class:"page-preview-component-container"},Tn={class:"page-preview-component"},Mn={class:"page-preview-iframe-container"},Nn=["src"],Dn=V({setup(e){const t=pt(),o=Ho(),r=jo(),{menuActive:n,previewConfig:i}=po(t),a=$([]),s=$([]),p=t.getMobilePath(),S=$(!0),P=$(!0);let C;const w=()=>{T(()=>{bn();const h=Qe;wt(i.value,h),C=At(n,x=>{k(),f(),P.value=!0,yn({type:Nt,value:x},()=>{setTimeout(()=>{P.value=!1},0)})},{immediate:!0}),setTimeout(()=>{S.value=!1},500)})},T=h=>{const x=t.getVersionKey(),m=fo[x],d=document.createElement("link");d.id=Ct,d.rel="stylesheet",d.type="text/css",d.href=m,document.querySelector("head").appendChild(d),d.onload=async()=>{h()}},M=()=>{const h=document.querySelector(`#${Ct}`);h.parentElement.removeChild(h)},v=()=>{var x,m,d;const h=(d=(m=(x=document.querySelector("iframe"))==null?void 0:x.contentWindow)==null?void 0:m.document)==null?void 0:d.body;wt(i.value,h)},k=async()=>{const h=await t.getVersionMenus();a.value=h},f=async()=>{const h=await t.getComponentConsoleStyle(n.value);if(h){const x=go(h.styles);s.value=x}else s.value=[]},I=async h=>{t.menuChange(h)},z=async h=>{var A,L,Y;const{index:x,varName:m,varValue:d}=h;s.value[x].varValue=d,St(m,d,document.body),St(m,d,(Y=(L=(A=document.querySelector("iframe"))==null?void 0:A.contentWindow)==null?void 0:L.document)==null?void 0:Y.body),await t.setComponentConsoleStyle(h)},N=()=>{o.error({title:"\u63D0\u793A",content:"\u786E\u5B9A\u8981\u91CD\u7F6E\u5168\u90E8\u5DF2\u66F4\u6539\u7684\u6837\u5F0F\u561B\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",maskClosable:!1,onPositiveClick:async()=>{var h,x,m;t.resetTheme(),Ee(Qe),Ee((m=(x=(h=document.querySelector("iframe"))==null?void 0:h.contentWindow)==null?void 0:x.document)==null?void 0:m.body),await f(),r.success("\u6210\u529F")}})},j=async()=>{const h=await t.getCurrentThemeInfo();h&&await t.downloadTheme(h),r.success("\u4E0B\u8F7D\u6210\u529F")};return w(),mo(()=>{var h,x,m;M(),C(),Ee(Qe),Ee((m=(x=(h=document.querySelector("iframe"))==null?void 0:h.contentWindow)==null?void 0:x.document)==null?void 0:m.body),I("base"),Cn()}),(h,x)=>(oe(),ye(ke,null,[S.value?(oe(),Ze(H(Lo),{key:0,vertical:"",class:"preview-layout-skeleton"},{default:re(()=>[W(H(ot),{class:"skeleton-menu"}),W(H(ot),{class:"skeleton-console"}),W(H(ot),{class:"skeleton-mobile"})]),_:1})):Je("",!0),W(H(kt),{class:ho(["preview-layout",{active:!S.value}]),"has-sider":"",position:"absolute",style:{top:"64px"}},{default:re(()=>[W(H(Gr),{bordered:"","collapse-mode":"transform","collapsed-width":0,width:300,"native-scrollbar":!1},{default:re(()=>[W(H(ln),{options:a.value,"default-expand-all":"",width:270,value:H(n),"onUpdate:value":I},null,8,["options","value"])]),_:1}),W(H(kt),null,{default:re(()=>[Q("div",wn,[Q("div",Sn,[Q("div",kn,[Q("div",zn,[Q("div",Rn,[W(H(_e),{type:"error",onClick:N},{default:re(()=>[In]),_:1}),W(H(_e),{type:"info",onClick:j},{default:re(()=>[Pn]),_:1})])]),Q("div",$n,[s.value.length>0?(oe(!0),ye(ke,{key:0},vo(s.value,(m,d)=>(oe(),ye("div",{class:"console-component-item",key:m.varName+d},[m.component==="n-color-picker"?(oe(),Ze(fn,{key:0,index:d,"var-name":m.varName,"var-value":m.varValue,onComplete:z},null,8,["index","var-name","var-value"])):Je("",!0),m.component==="n-input"?(oe(),Ze(gn,{key:1,index:d,"var-name":m.varName,"var-value":m.varValue,onComplete:z},null,8,["index","var-name","var-value"])):Je("",!0)]))),128)):(oe(),ye("div",An," \u6CA1\u6709\u6837\u5F0F\u53D8\u91CF "))])])]),Q("div",_n,[Q("div",Tn,[Q("div",Mn,[W(H(vn),{size:"large",show:P.value},{default:re(()=>[Q("iframe",{src:H(p),frameborder:"0",style:{height:"640px"},onLoad:v},null,40,Nn)]),_:1},8,["show"])])])])])]),_:1})]),_:1},8,["class"])],64))}});export{Dn as default};
