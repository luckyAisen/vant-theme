import{b as M,i as l,r as _,l as b,m as ee,U as Ce,p as fe,L as me,M as Rt,T as Pt,w as no,n as io,O as ao,j as Le,o as ne,t as Re,D as Q,C as ie,E as Oe,G as $t,u as q,A as lo,X as so,c as Xe,x as J,H as co,Z as bt}from"./vendor.eaef4322.js";import{u as dt,V as At,c as Ve,a as xt,d as Ze,s as yt,b as uo,g as po,e as Ct}from"./theme.f44e92e7.js";import{f as c,n as R,o as f,h as ke,M as mo,e as He,b as Te,U as ho,al as le,am as oe,an as se,ao as he,ap as re,aq as xe,ar as ve,I as we,K as Se,j as je,as as Pe,at as et,au as tt,av as ot,$ as vo,a2 as fo,g as U,ah as go,u as W,ag as Ae,t as rt,i as Ke,m as bo,aw as nt,ax as xo,ay as yo,az as Co,a1 as wo,T as K,D as $e,aA as So,G as ko,aB as zo,aC as Io,af as De,ad as Ro,w as _t,aD as Po,z as $o,a8 as Je,r as ye,ai as Tt,x as Ao,C as _o,A as ct,k as Qe,aE as Mt,aF as To,l as Mo,v as No,aG as Vo}from"./context.a7ef65c1.js";import{i as Uo,N as Nt,b as Eo,u as Fo,a as Do}from"./use-message.0408bf82.js";import{a as Bo,b as Vt,l as Lo,p as Oo,f as Ho,N as wt}from"./Layout.d4923a8e.js";import"./modulepreload-polyfill.b7f2da20.js";function Ut(e,t,o){t/=100,o/=100;const r=t*Math.min(o,1-o)+o;return[e,r?(2-2*o/r)*100:0,r*100]}function Be(e,t,o){t/=100,o/=100;const r=o-o*t/2,n=Math.min(r,1-r);return[e,n?(o-r)/n*100:0,r*100]}function ae(e,t,o){t/=100,o/=100;let r=(n,i=(n+e/60)%6)=>o-o*t*Math.max(Math.min(i,4-i,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function it(e,t,o){e/=255,t/=255,o/=255;let r=Math.max(e,t,o),n=r-Math.min(e,t,o),i=n&&(r==e?(t-o)/n:r==t?2+(o-e)/n:4+(e-t)/n);return[60*(i<0?i+6:i),r&&n/r*100,r*100]}function at(e,t,o){e/=255,t/=255,o/=255;let r=Math.max(e,t,o),n=r-Math.min(e,t,o),i=1-Math.abs(r+r-n-1),a=n&&(r==e?(t-o)/n:r==t?2+(o-e)/n:4+(e-t)/n);return[60*(a<0?a+6:a),i?n/i*100:0,(r+r-n)*50]}function lt(e,t,o){t/=100,o/=100;let r=t*Math.min(o,1-o),n=(i,a=(i+e/30)%12)=>o-r*Math.max(Math.min(a-3,9-a,1),-1);return[n(0)*255,n(8)*255,n(4)*255]}var jo=M({name:"ChevronDownFilled",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ko=c("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[R(">",[c("input",[R("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),R("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),c("button",[R("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[f("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),R("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[f("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),R("*",[R("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[R(">",[c("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),c("base-selection",[c("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),c("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),f("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),R("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[R(">",[c("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),c("base-selection",[c("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),c("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),f("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const qo={};var Wo=M({name:"InputGroup",props:qo,setup(e){const{mergedClsPrefixRef:t}=ke(e);return mo("-input-group",Ko,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return l("div",{class:`${e}-input-group`},this.$slots)}});const Go=e=>{const{fontSize:t,boxShadow2:o,popoverColor:r,textColor2:n,borderRadius:i,borderColor:a,heightSmall:s,heightMedium:p,heightLarge:k,fontSizeSmall:T,fontSizeMedium:w,fontSizeLarge:C,dividerColor:N}=e;return{panelFontSize:t,boxShadow:o,color:r,textColor:n,borderRadius:i,border:`1px solid ${a}`,heightSmall:s,heightMedium:p,heightLarge:k,fontSizeSmall:T,fontSizeMedium:w,fontSizeLarge:C,dividerColor:N}},Yo=He({name:"ColorPicker",common:Te,peers:{Input:Uo,Button:ho},self:Go});var Xo=Yo;function Zo(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function _e(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Jo(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Qo(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const er={rgb:{hex(e){return le(oe(e))},hsl(e){const[t,o,r,n]=oe(e);return se([...at(t,o,r),n])},hsv(e){const[t,o,r,n]=oe(e);return he([...it(t,o,r),n])}},hex:{rgb(e){return re(oe(e))},hsl(e){const[t,o,r,n]=oe(e);return se([...at(t,o,r),n])},hsv(e){const[t,o,r,n]=oe(e);return he([...it(t,o,r),n])}},hsl:{hex(e){const[t,o,r,n]=xe(e);return le([...lt(t,o,r),n])},rgb(e){const[t,o,r,n]=xe(e);return re([...lt(t,o,r),n])},hsv(e){const[t,o,r,n]=xe(e);return he([...Ut(t,o,r),n])}},hsv:{hex(e){const[t,o,r,n]=ve(e);return le([...ae(t,o,r),n])},rgb(e){const[t,o,r,n]=ve(e);return re([...ae(t,o,r),n])},hsl(e){const[t,o,r,n]=ve(e);return se([...Be(t,o,r),n])}}};function Et(e,t,o){return o=o||_e(e),o?o===t?e:er[o][t](e):null}const be="12px",tr=12,ue="6px",or=6,rr="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";var nr=M({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=_(null);function o(i){!t.value||(we("mousemove",document,r),we("mouseup",document,n),r(i))}function r(i){const{value:a}=t;if(!a)return;const{width:s,left:p}=a.getBoundingClientRect(),k=Jo((i.clientX-p-or)/(s-tr)*360);e.onUpdateHue(k)}function n(){var i;Se("mousemove",document,r),Se("mouseup",document,n),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-slider`,style:{height:be,borderRadius:ue}},l("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:rr,height:be,borderRadius:ue,position:"relative"},onMousedown:this.handleMouseDown},l("div",{style:{position:"absolute",left:ue,right:ue,top:0,bottom:0}},l("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${ue})`,borderRadius:ue,width:be,height:be}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:ue,width:be,height:be}})))))}});const Ie="12px",ir=12,pe="6px";var ar=M({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=_(null);function o(i){!t.value||!e.rgba||(we("mousemove",document,r),we("mouseup",document,n),r(i))}function r(i){const{value:a}=t;if(!a)return;const{width:s,left:p}=a.getBoundingClientRect(),k=(i.clientX-p)/(s-ir);e.onUpdateAlpha(Qo(k))}function n(){var i;Se("mousemove",document,r),Se("mouseup",document,n),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:t,railBackgroundImage:b(()=>{const{rgba:i}=e;return i?`linear-gradient(to right, rgba(${i[0]}, ${i[1]}, ${i[2]}, 0) 0%, rgba(${i[0]}, ${i[1]}, ${i[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:Ie,borderRadius:pe},onMousedown:this.handleMouseDown},l("div",{style:{borderRadius:pe,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},l("div",{class:`${e}-color-picker-checkboard`}),l("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&l("div",{style:{position:"absolute",left:pe,right:pe,top:0,bottom:0}},l("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${pe})`,borderRadius:pe,width:Ie,height:Ie}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:re(this.rgba),borderRadius:pe,width:Ie,height:Ie}}))))}});const Ue="12px",Ee="6px";var lr=M({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=_(null);function o(i){!t.value||(we("mousemove",document,r),we("mouseup",document,n),r(i))}function r(i){const{value:a}=t;if(!a)return;const{width:s,height:p,left:k,bottom:T}=a.getBoundingClientRect(),w=(T-i.clientY)/p,C=(i.clientX-k)/s,N=100*(C>1?1:C<0?0:C),V=100*(w>1?1:w<0?0:w);e.onUpdateSV(N,V)}function n(){var i;Se("mousemove",document,r),Se("mouseup",document,n),(i=e.onComplete)===null||i===void 0||i.call(e)}return{palleteRef:t,handleColor:b(()=>{const{rgba:i}=e;return i?`rgb(${i[0]}, ${i[1]}, ${i[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},l("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),l("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&l("div",{class:`${e}-color-picker-handle`,style:{width:Ue,height:Ue,borderRadius:Ee,left:`calc(${this.displayedSv[0]}% - ${Ee})`,bottom:`calc(${this.displayedSv[1]}% - ${Ee})`}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Ee,width:Ue,height:Ue}})))}});const ut=je("n-color-picker");function sr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function dr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function cr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function ur(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function pr(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}const mr={paddingSmall:"0 4px"};var St=M({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=_(""),{themeRef:o}=ee(ut,null);Ce(()=>{t.value=r()});function r(){const{value:a}=e;if(a===null)return"";const{label:s}=e;return s==="HEX"?a:s==="A"?`${Math.floor(a*100)}%`:String(Math.floor(a))}function n(a){t.value=a}function i(a){let s,p;switch(e.label){case"HEX":p=ur(a),p&&e.onUpdateValue(a),t.value=r();break;case"H":s=dr(a),s?e.onUpdateValue(s):t.value=r();break;case"S":case"L":case"V":s=cr(a),s?e.onUpdateValue(s):t.value=r();break;case"A":s=pr(a),s?e.onUpdateValue(s):t.value=r();break;case"R":case"G":case"B":s=sr(a),s?e.onUpdateValue(s):t.value=r();break}}return{mergedTheme:o,inputValue:t,handleInputChange:i,handleInputUpdateValue:n}},render(){const{mergedTheme:e}=this;return l(Nt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:mr,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),hr=M({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:r}=e;if(e.mode==="hex"){e.onUpdateValue((r?le:Pe)(o));return}let n;switch(e.valueArr===null?n=[0,0,0,0]:n=Array.from(e.valueArr),e.mode){case"hsv":n[t]=o,e.onUpdateValue((r?he:ot)(n));break;case"rgb":n[t]=o,e.onUpdateValue((r?re:tt)(n));break;case"hsl":n[t]=o,e.onUpdateValue((r?se:et)(n));break}}}},render(){const{clsPrefix:e,modes:t}=this;return l("div",{class:`${e}-color-picker-input`},l("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),l(Wo,null,{default:()=>{const{mode:o,valueArr:r,showAlpha:n}=this;if(o==="hex"){let i=null;try{i=r===null?null:(n?le:Pe)(r)}catch{}return l(St,{label:"HEX",showAlpha:n,value:i,onUpdateValue:a=>{this.handleUnitUpdateValue(0,a)}})}return(o+(n?"a":"")).split("").map((i,a)=>l(St,{label:i.toUpperCase(),value:r===null?null:r[a],onUpdateValue:s=>{this.handleUnitUpdateValue(a,s)}}))}}))}}),vr=M({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=ee(ut,null);return()=>{const{hsla:r,value:n,clsPrefix:i,onClick:a,disabled:s}=e,p=t.label||o.value;return l("div",{class:[`${i}-color-picker-trigger`,s&&`${i}-color-picker-trigger--disabled`],onClick:s?void 0:a},l("div",{class:`${i}-color-picker-trigger__fill`},l("div",{class:`${i}-color-picker-checkboard`}),l("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:r?se(r):""}}),n&&r?l("div",{class:`${i}-color-picker-trigger__value`,style:{color:r[2]>50||r[3]<.5?"black":"white"}},p?p(n):n):null))}}});function fr(e,t){if(t==="hsv"){const[o,r,n,i]=ve(e);return re([...ae(o,r,n),i])}return e}function gr(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}var br=M({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=b(()=>e.swatches.map(i=>{const a=_e(i);return{value:i,mode:a,legalValue:fr(i,a)}}));function o(i){const{mode:a}=e;let{value:s,mode:p}=i;return p||(p="hex",/^[a-zA-Z]+$/.test(s)?s=gr(s):(vo("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),p===a?s:Et(s,a,p)}function r(i){e.onUpdateColor(o(i))}function n(i,a){i.key==="Enter"&&r(a)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:n}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>l("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(t),onKeydown:o=>this.handleSwatchKeyDown(o,t)},l("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),xr=M({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=_e(e);return Boolean(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var r;const n=o.target.value;(r=e.onUpdateColor)===null||r===void 0||r.call(e,Et(n.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-preview__preview`},l("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),l("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),yr=R([c("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),c("color-picker-panel",`
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
 `,[fo(),c("input",`
 text-align: center;
 `)]),c("color-picker-checkboard",`
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
 `)]),c("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[f("image",`
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
 `)]),c("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[f("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),c("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[f("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[U("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),c("color-picker-preview",`
 display: flex;
 `,[f("sliders",`
 flex: 1 0 auto;
 `),f("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),f("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),f("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),c("color-picker-input",`
 display: flex;
 align-items: center;
 `,[c("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),f("mode",`
 width: 72px;
 text-align: center;
 `)]),c("color-picker-control",`
 padding: 12px;
 `),c("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[c("button","margin-left: 8px;")]),c("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[f("value",`
 white-space: nowrap;
 position: relative;
 `),f("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),U("disabled","cursor: not-allowed"),c("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[R("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),c("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[c("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[f("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),R("&:focus",`
 outline: none;
 `,[f("fill",[R("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const Cr=Object.assign(Object.assign({},W.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:{type:Boolean,default:!1},defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:nt.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var wr=M({name:"ColorPicker",props:Cr,setup(e,{slots:t}){const o=_(null);let r=null;const n=go(e),{mergedSizeRef:i,mergedDisabledRef:a}=n,{localeRef:s}=Eo("global"),{mergedClsPrefixRef:p,namespaceRef:k,inlineThemeDisabled:T}=ke(e),w=W("ColorPicker","-color-picker",yr,Xo,e,p);fe(ut,{themeRef:w,renderLabelRef:me(e,"renderLabel"),colorPickerSlots:t});const C=_(e.defaultShow),N=Ae(me(e,"show"),C);function V(d){const{onUpdateShow:A,"onUpdate:show":F}=e;A&&K(A,d),F&&K(F,d),C.value=d}const{defaultValue:x}=e,z=_(x===void 0?Zo(e.modes,e.showAlpha):x),g=Ae(me(e,"value"),z),P=_([g.value]),I=_(0),E=b(()=>_e(g.value)),{modes:S}=e,y=_(_e(g.value)||S[0]||"rgb");function h(){const{modes:d}=e,{value:A}=y,F=d.findIndex(B=>B===A);~F?y.value=d[(F+1)%d.length]:y.value="rgb"}let m,u,$,L,Y,X,Z,v;const ze=b(()=>{const{value:d}=g;if(!d)return null;switch(E.value){case"hsv":return ve(d);case"hsl":return[m,u,$,v]=xe(d),[...Ut(m,u,$),v];case"rgb":case"hex":return[Y,X,Z,v]=oe(d),[...it(Y,X,Z),v]}}),de=b(()=>{const{value:d}=g;if(!d)return null;switch(E.value){case"rgb":case"hex":return oe(d);case"hsv":return[m,u,L,v]=ve(d),[...ae(m,u,L),v];case"hsl":return[m,u,$,v]=xe(d),[...lt(m,u,$),v]}}),qe=b(()=>{const{value:d}=g;if(!d)return null;switch(E.value){case"hsl":return xe(d);case"hsv":return[m,u,L,v]=ve(d),[...Be(m,u,L),v];case"rgb":case"hex":return[Y,X,Z,v]=oe(d),[...at(Y,X,Z),v]}}),Kt=b(()=>{switch(y.value){case"rgb":case"hex":return de.value;case"hsv":return ze.value;case"hsl":return qe.value}}),Ne=_(0),We=_(1),Ge=_([0,0]);function qt(d,A){const{value:F}=ze,B=Ne.value,O=F?F[3]:1;Ge.value=[d,A];const{showAlpha:D}=e;switch(y.value){case"hsv":H((D?he:ot)([B,d,A,O]),"cursor");break;case"hsl":H((D?se:et)([...Be(B,d,A),O]),"cursor");break;case"rgb":H((D?re:tt)([...ae(B,d,A),O]),"cursor");break;case"hex":H((D?le:Pe)([...ae(B,d,A),O]),"cursor");break}}function Wt(d){Ne.value=d;const{value:A}=ze;if(!A)return;const[,F,B,O]=A,{showAlpha:D}=e;switch(y.value){case"hsv":H((D?he:ot)([d,F,B,O]),"cursor");break;case"rgb":H((D?re:tt)([...ae(d,F,B),O]),"cursor");break;case"hex":H((D?le:Pe)([...ae(d,F,B),O]),"cursor");break;case"hsl":H((D?se:et)([...Be(d,F,B),O]),"cursor");break}}function Gt(d){switch(y.value){case"hsv":[m,u,L]=ze.value,H(he([m,u,L,d]),"cursor");break;case"rgb":[Y,X,Z]=de.value,H(re([Y,X,Z,d]),"cursor");break;case"hex":[Y,X,Z]=de.value,H(le([Y,X,Z,d]),"cursor");break;case"hsl":[m,u,$]=qe.value,H(se([m,u,$,d]),"cursor");break}We.value=d}function H(d,A){A==="cursor"?r=d:r=null;const{nTriggerFormChange:F,nTriggerFormInput:B}=n,{onUpdateValue:O,"onUpdate:value":D}=e;O&&K(O,d),D&&K(D,d),F(),B(),z.value=d}function Yt(d){H(d,"input"),io(ge)}function ge(d=!0){const{value:A}=g;if(A){const{nTriggerFormChange:F,nTriggerFormInput:B}=n,{onComplete:O}=e;O&&O(A);const{value:D}=P,{value:G}=I;d&&(D.splice(G+1,D.length,A),I.value=G+1),F(),B()}}function Xt(){const{value:d}=I;d-1<0||(H(P.value[d-1],"input"),ge(!1),I.value=d-1)}function Zt(){const{value:d}=I;d<0||d+1>=P.value.length||(H(P.value[d+1],"input"),ge(!1),I.value=d+1)}function Jt(){V(!1)}const Qt=b(()=>I.value>=1),eo=b(()=>{const{value:d}=P;return d.length>1&&I.value<d.length-1});Rt(N,d=>{d||(P.value=[g.value],I.value=0)}),Ce(()=>{if(!(r&&r===g.value)){const{value:d}=ze;d&&(Ne.value=d[0],We.value=d[3],Ge.value=[d[1],d[2]])}r=null});const Ye=b(()=>{const{value:d}=i,{common:{cubicBezierEaseInOut:A},self:{textColor:F,color:B,panelFontSize:O,boxShadow:D,border:G,borderRadius:j,dividerColor:ce,[rt("height",d)]:oo,[rt("fontSize",d)]:ro}}=w.value;return{"--n-bezier":A,"--n-text-color":F,"--n-color":B,"--n-panel-font-size":O,"--n-font-size":ro,"--n-box-shadow":D,"--n-border":G,"--n-border-radius":j,"--n-height":oo,"--n-divider-color":ce}}),te=T?Ke("color-picker",b(()=>i.value[0]),Ye,e):void 0;function to(){var d;const{value:A}=de,{value:F}=Ne,{internalActions:B,modes:O,actions:D}=e,{value:G}=w,{value:j}=p;return l("div",{class:[`${j}-color-picker-panel`,te==null?void 0:te.themeClass.value],onDragstart:ce=>{ce.preventDefault()},style:T?void 0:Ye.value},l("div",{class:`${j}-color-picker-control`},l(lr,{clsPrefix:j,rgba:A,displayedHue:F,displayedSv:Ge.value,onUpdateSV:qt,onComplete:ge}),l("div",{class:`${j}-color-picker-preview`},l("div",{class:`${j}-color-picker-preview__sliders`},l(nr,{clsPrefix:j,hue:F,onUpdateHue:Wt,onComplete:ge}),e.showAlpha?l(ar,{clsPrefix:j,rgba:A,alpha:We.value,onUpdateAlpha:Gt,onComplete:ge}):null),e.showPreview?l(xr,{clsPrefix:j,mode:y.value,color:de.value&&Pe(de.value),onUpdateColor:ce=>H(ce,"input")}):null),l(hr,{clsPrefix:j,showAlpha:e.showAlpha,mode:y.value,modes:O,onUpdateMode:h,value:g.value,valueArr:Kt.value,onUpdateValue:Yt}),((d=e.swatches)===null||d===void 0?void 0:d.length)&&l(br,{clsPrefix:j,mode:y.value,swatches:e.swatches,onUpdateColor:ce=>H(ce,"input")})),D!=null&&D.length?l("div",{class:`${j}-color-picker-action`},D.includes("confirm")&&l($e,{size:"small",onClick:Jt,theme:G.peers.Button,themeOverrides:G.peerOverrides.Button},{default:()=>s.value.confirm})):null,t.action?l("div",{class:`${j}-color-picker-action`},{default:t.action}):B?l("div",{class:`${j}-color-picker-action`},B.includes("undo")&&l($e,{size:"small",onClick:Xt,disabled:!Qt.value,theme:G.peers.Button,themeOverrides:G.peerOverrides.Button},{default:()=>s.value.undo}),B.includes("redo")&&l($e,{size:"small",onClick:Zt,disabled:!eo.value,theme:G.peers.Button,themeOverrides:G.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:p,namespace:k,selfRef:o,hsla:qe,rgba:de,mergedShow:N,mergedDisabled:a,isMounted:bo(),adjustedTo:nt(e),mergedValue:g,handleTriggerClick(){V(!0)},handleClickOutside(d){var A;!((A=o.value)===null||A===void 0)&&A.contains(d.target)||V(!1)},renderPanel:to,cssVars:T?void 0:Ye,themeClass:te==null?void 0:te.themeClass,onRender:te==null?void 0:te.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),l("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},l(xo,null,{default:()=>[l(yo,null,{default:()=>l(vr,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),l(Co,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===nt.tdkey,to:this.adjustedTo},{default:()=>l(Pt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?no(this.renderPanel(),[[wo,this.handleClickOutside]]):null})})]}))}}),Sr={padding:"8px 14px"};const kr=e=>{const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},Sr),{borderRadius:t,boxShadow:o,color:ko(r,"rgba(0, 0, 0, .85)"),textColor:r})},zr=He({name:"Tooltip",common:Te,peers:{Popover:So},self:kr});var pt=zr;const Ir=He({name:"Ellipsis",common:Te,peers:{Tooltip:pt}});var Rr=Ir;const Pr=Object.assign(Object.assign({},Io),W.props);var Ft=M({name:"Tooltip",props:Pr,__popover__:!0,setup(e){const t=W("Tooltip","-tooltip",void 0,pt,e),o=_(null);return Object.assign(Object.assign({},{syncPosition(){o.value.syncPosition()},setShow(n){o.value.setShow(n)}}),{popoverRef:o,mergedTheme:t,popoverThemeOverrides:b(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return l(zo,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),$r=c("ellipsis",{overflow:"hidden"},[De("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),U("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),U("cursor-pointer",`
 cursor: pointer;
 `)]);function kt(e){return`${e}-ellipsis--line-clamp`}function zt(e,t){return`${e}-ellipsis--cursor-${t}`}const Ar=Object.assign(Object.assign({},W.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}});var Dt=M({name:"Ellipsis",inheritAttrs:!1,props:Ar,setup(e,{slots:t,attrs:o}){const{mergedClsPrefixRef:r}=ke(e),n=W("Ellipsis","-ellipsis",$r,Rr,e,r),i=_(null),a=_(null),s=_(!1),p=b(()=>{const{lineClamp:x}=e,{value:z}=s;return x!==void 0?{textOverflow:"","-webkit-line-clamp":z?"":x}:{textOverflow:z?"":"ellipsis","-webkit-line-clamp":""}});function k(){let x=!1;const{value:z}=s;if(z)return!0;const{value:g}=i;if(g){const{lineClamp:P}=e;C(g),P!==void 0?x=g.scrollHeight<=g.offsetHeight:x=g.scrollWidth<=g.offsetWidth,N(g,x)}return x}const T=b(()=>e.expandTrigger==="click"?()=>{var x;const{value:z}=s;z&&((x=a.value)===null||x===void 0||x.setShow(!1)),s.value=!z}:void 0),w=()=>l("span",Object.assign({},ao(o,{class:[`${r.value}-ellipsis`,e.lineClamp!==void 0?kt(r.value):void 0,e.expandTrigger==="click"?zt(r.value,"pointer"):void 0],style:p.value}),{ref:"triggerRef",onClick:T.value,onMouseenter:e.expandTrigger==="click"?k:void 0}),t);function C(x){if(!x)return;const z=p.value,g=kt(r.value);e.lineClamp!==void 0?V(x,g,"add"):V(x,g,"remove");for(const P in z)x.style[P]!==z[P]&&(x.style[P]=z[P])}function N(x,z){const g=zt(r.value,"pointer");e.expandTrigger==="click"&&!z?V(x,g,"add"):V(x,g,"remove")}function V(x,z,g){g==="add"?x.classList.contains(z)||x.classList.add(z):x.classList.contains(z)&&x.classList.remove(z)}return{mergedTheme:n,triggerRef:i,tooltipRef:a,handleClick:T,renderTrigger:w,getTooltipDisabled:k}},render(){var e;const{tooltip:t,renderTrigger:o,$slots:r}=this;if(t){const{mergedTheme:n}=this;return l(Ft,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip}),{trigger:o,default:(e=r.tooltip)!==null&&e!==void 0?e:r.default})}else return o()}});function _r(e,t,o){return{itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorActiveInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorChildActiveInverted:t,itemIconColorCollapsedInverted:e,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorActiveInverted:t,groupTextColorInverted:o}}const Tr=e=>{const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:n,primaryColorHover:i,textColor1:a,fontSize:s,dividerColor:p}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorActive:Ro(r,{alpha:.1}),itemColorActiveCollapsed:"#0000",itemTextColor:n,itemTextColorHover:i,itemTextColorChildActive:r,itemTextColorActive:r,itemIconColor:a,itemIconColorHover:i,itemIconColorActive:r,itemIconColorChildActive:r,itemIconColorCollapsed:a,itemHeight:"42px",arrowColor:n,arrowColorHover:i,arrowColorChildActive:r,arrowColorActive:r,colorInverted:"#0000",itemColorActiveInverted:r,itemColorActiveCollapsedInverted:r,borderColorHorizontal:"#0000",fontSize:s,dividerColor:p},_r("#BBB","#FFF","#AAA"))},Mr=He({name:"Menu",common:Te,peers:{Tooltip:pt},self:Tr});var Nr=Mr;const Vr=e=>{const{opacityDisabled:t,heightTiny:o,heightSmall:r,heightMedium:n,heightLarge:i,heightHuge:a,primaryColor:s,fontSize:p}=e;return{fontSize:p,textColor:s,sizeTiny:o,sizeSmall:r,sizeMedium:n,sizeLarge:i,sizeHuge:a,color:s,opacitySpinning:t}},Ur={name:"Spin",common:Te,self:Vr};var Er=Ur,Fr=c("layout-sider",`
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
`,[U("bordered",[f("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),f("left-placement",[U("bordered",[f("border",`
 right: 0;
 `)])]),U("right-placement",`
 justify-content: flex-start;
 `,[U("bordered",[f("border",`
 left: 0;
 `)]),U("collapsed",[c("layout-toggle-button",[c("base-icon",`
 transform: rotate(180deg);
 `)]),c("layout-toggle-bar",[R("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),c("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[c("base-icon",`
 transform: rotate(0);
 `)]),c("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[R("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),U("collapsed",[c("layout-toggle-bar",[R("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),c("layout-toggle-button",[c("base-icon",`
 transform: rotate(0);
 `)])]),c("layout-toggle-button",`
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
 `,[c("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),c("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[f("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),f("bottom",`
 position: absolute;
 top: 34px;
 `),R("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),R("&:hover",[f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),f("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),c("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),U("show-content",[c("layout-sider-scroll-container",{opacity:1})]),U("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Dr=M({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},l(_t,{clsPrefix:e},{default:()=>l(Po,null)}))}}),Br=M({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},l("div",{class:`${e}-layout-toggle-bar__top`}),l("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const Lr={position:Oo,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var Or=M({name:"LayoutSider",props:Object.assign(Object.assign({},W.props),Lr),setup(e){const t=ee(Bo),o=_(null),r=_(null),n=b(()=>Je(p.value?e.collapsedWidth:e.width)),i=b(()=>e.collapseMode!=="transform"?{}:{minWidth:Je(e.width)}),a=b(()=>t?t.siderPlacement:"left"),s=_(e.defaultCollapsed),p=Ae(me(e,"collapsed"),s);function k(P,I){if(e.nativeScrollbar){const{value:E}=o;E&&(I===void 0?E.scrollTo(P):E.scrollTo(P,I))}else{const{value:E}=r;E&&E.scrollTo(P,I)}}function T(){const{"onUpdate:collapsed":P,onUpdateCollapsed:I,onExpand:E,onCollapse:S}=e,{value:y}=p;I&&K(I,!y),P&&K(P,!y),s.value=!y,y?E&&K(E):S&&K(S)}fe(Vt,{collapsedRef:p,collapseModeRef:me(e,"collapseMode")});const{mergedClsPrefixRef:w,inlineThemeDisabled:C}=ke(e),N=W("Layout","-layout-sider",Fr,Lo,e,w);function V(P){var I,E;P.propertyName==="max-width"&&(p.value?(I=e.onAfterLeave)===null||I===void 0||I.call(e):(E=e.onAfterEnter)===null||E===void 0||E.call(e))}const x={scrollTo:k},z=b(()=>{const{common:{cubicBezierEaseInOut:P},self:I}=N.value,{siderToggleButtonColor:E,siderToggleButtonBorder:S,siderToggleBarColor:y,siderToggleBarColorHover:h}=I,m={"--n-bezier":P,"--n-toggle-button-color":E,"--n-toggle-button-border":S,"--n-toggle-bar-color":y,"--n-toggle-bar-color-hover":h};return e.inverted?(m["--n-color"]=I.siderColorInverted,m["--n-text-color"]=I.textColorInverted,m["--n-border-color"]=I.siderBorderColorInverted,m["--n-toggle-button-icon-color"]=I.siderToggleButtonIconColorInverted,m.__invertScrollbar=I.__invertScrollbar):(m["--n-color"]=I.siderColor,m["--n-text-color"]=I.textColor,m["--n-border-color"]=I.siderBorderColor,m["--n-toggle-button-icon-color"]=I.siderToggleButtonIconColor),m}),g=C?Ke("layout-sider",b(()=>e.inverted?"a":"b"),z,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:w,mergedTheme:N,styleMaxWidth:n,mergedCollapsed:p,scrollContainerStyle:i,siderPlacement:a,handleTransitionend:V,handleTriggerClick:T,inlineThemeDisabled:C,cssVars:z,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},x)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Je(this.width)}]},this.nativeScrollbar?l("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.onScroll,style:[this.scrollContainerStyle,this.contentStyle,{overflow:"auto"}],ref:"scrollableElRef"},this.$slots):l($o,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?l(Br,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):l(Dr,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?l("div",{class:`${t}-layout-sider__border`}):null)}});const Me=je("n-menu"),mt=je("n-submenu"),ht=je("n-menu-item-group"),Fe=8;function vt(e){const t=ee(Me),{props:o,mergedCollapsedRef:r}=t,n=ee(mt,null),i=ee(ht,null),a=b(()=>o.mode==="horizontal"),s=b(()=>a.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),p=b(()=>{var C;return Math.max((C=o.collapsedIconSize)!==null&&C!==void 0?C:o.iconSize,o.iconSize)}),k=b(()=>{var C;return!a.value&&e.root&&r.value&&(C=o.collapsedIconSize)!==null&&C!==void 0?C:o.iconSize}),T=b(()=>{if(a.value)return;const{collapsedWidth:C,indent:N,rootIndent:V}=o,{root:x,isGroup:z}=e,g=V===void 0?N:V;if(x)return r.value?C/2-p.value/2:g;if(i)return N/2+i.paddingLeftRef.value;if(n)return(z?N/2:N)+n.paddingLeftRef.value}),w=b(()=>{const{collapsedWidth:C,indent:N,rootIndent:V}=o,{value:x}=p,{root:z}=e;return a.value||!z||!r.value?Fe:(V===void 0?N:V)+x+Fe-(C+x)/2});return{dropdownPlacement:s,activeIconSize:k,maxIconSize:p,paddingLeft:T,iconMarginRight:w,NMenu:t,NSubmenu:n}}const ft={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Bt=Object.assign(Object.assign({},ft),{tmNodes:{type:Array,required:!0}}),Hr=M({name:"MenuOptionGroup",props:Bt,setup(e){fe(mt,null);const t=vt(e);fe(ht,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=ee(Me);return function(){const{value:n}=o,i=t.paddingLeft.value;return l("div",{class:`${n}-menu-item-group`,role:"group"},l("span",{class:`${n}-menu-item-group-title`,style:i!==void 0?`padding-left: ${i}px;`:void 0},ye(e.title),e.extra?l(Le,null," ",ye(e.extra)):null),l("div",null,e.tmNodes.map(a=>gt(a,r))))}}});var Lt=M({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=ee(Me);return{menuProps:t,style:b(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:b(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:n}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${n}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:n,expandIcon:i}}=this,a=o?o(t.rawNode):ye(this.icon);return l("div",{onClick:this.onClick,role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},a&&l("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[a]),l("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(t.rawNode):ye(this.title),this.extra||n?l("span",{class:`${e}-menu-item-content-header__extra`}," ",n?n(t.rawNode):ye(this.extra)):null),this.showArrow?l(_t,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):l(jo,null)}):null)}});const Ot=Object.assign(Object.assign({},ft),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),jr=M({name:"Submenu",props:Ot,setup(e){const t=vt(e),{NMenu:o,NSubmenu:r}=t,{props:n,mergedCollapsedRef:i}=o,a=b(()=>{const{disabled:w}=e;return r!=null&&r.mergedDisabledRef.value||n.disabled?!0:w}),s=_(!1);fe(mt,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:a}),fe(ht,null);function p(){const{onClick:w}=e;w&&w()}function k(){a.value||(i.value||o.toggleExpand(e.internalKey),p())}function T(w){s.value=w}return{menuProps:n,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:a,mergedValue:o.mergedValueRef,childActive:Tt(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:b(()=>n.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!a.value&&(n.mode==="horizontal"||i.value)),handlePopoverShowChange:T,handleClick:k}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,n=()=>{const{isHorizontal:a,paddingLeft:s,collapsed:p,mergedDisabled:k,maxIconSize:T,activeIconSize:w,title:C,childActive:N,icon:V,handleClick:x,dropdownShow:z,iconMarginRight:g,tmNode:P}=this;return l(Lt,{tmNode:P,paddingLeft:s,collapsed:p,disabled:k,iconMarginRight:g,maxIconSize:T,activeIconSize:w,title:C,showArrow:!a,childActive:N,clsPrefix:t,icon:V,hover:z,onClick:x})},i=()=>l(Ao,null,{default:()=>{const{tmNodes:a,collapsed:s}=this;return s?null:l("div",{class:`${t}-submenu-children`,role:"menu"},a.map(p=>gt(p,this.menuProps)))}});return this.root?l(_o,Object.assign({},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,size:"large",trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>l("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),this.isHorizontal?null:i())}):l("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),i())}}),Ht=Object.assign(Object.assign({},ft),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Kr=M({name:"MenuOption",props:Ht,setup(e){const t=vt(e),{NSubmenu:o,NMenu:r}=t,{props:n,mergedClsPrefixRef:i,mergedCollapsedRef:a}=r,s=o?o.mergedDisabledRef:{value:!1},p=b(()=>s.value||e.disabled);function k(w){const{onClick:C}=e;C&&C(w)}function T(w){p.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),k(w))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:n,dropdownEnabled:Tt(()=>e.root&&a.value&&n.mode!=="horizontal"&&!p.value),selected:b(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:p,handleClick:T}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r}}=this;return l("div",{role:"menuitem",class:[`${e}-menu-item`,this.selected&&`${e}-menu-item--selected`,this.mergedDisabled&&`${e}-menu-item--disabled`]},l(Ft,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):ye(this.title),trigger:()=>l(Lt,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var qr=M({name:"MenuDivider",setup(){const e=ee(Me),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:l("div",{class:`${t.value}-menu-divider`})}});const Wr=ct(Bt),Gr=ct(Ht),Yr=ct(Ot);function Xr(e){return e.type==="divider"||e.type==="render"}function Zr(e){return e.type==="divider"}function gt(e,t){const{rawNode:o}=e;if(Xr(o))return Zr(o)?l(qr,Object.assign({key:e.key},o.props)):void 0;const{labelField:r}=t,{key:n,level:i,isGroup:a}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:n,internalKey:n,level:i,root:i===0,isGroup:a});return e.children?e.isGroup?l(Hr,Qe(s,Wr,{tmNodes:e.children,key:n})):l(jr,Qe(s,Yr,{key:n,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):l(Kr,Qe(s,Gr,{key:n,tmNode:e}))}var Jr=R([c("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[U("horizontal",{display:"inline-flex",paddingBottom:0},[c("submenu",{margin:0}),c("menu-item",{margin:0},[R("&::before",{backgroundColor:"#0000 !important"}),U("selected",[c("menu-item-content",{borderBottom:"2px solid var(--n-border-color-horizontal)"})])]),c("menu-item-content",{padding:"0 20px",borderBottom:"2px solid #0000"},[U("child-active",{borderBottom:"2px solid var(--n-border-color-horizontal)"}),De("disabled",[It({borderBottom:"2px solid var(--n-border-color-horizontal)"},null)])])]),U("collapsed",[c("menu-item",[U("selected",[R("&::before",{backgroundColor:"var(--n-item-color-active-collapsed) !important"})])]),c("menu-item-content",[c("menu-item-content-header",{opacity:0}),f("arrow",{opacity:0}),f("icon",{color:"var(--n-item-icon-color-collapsed)"})])]),c("menu-item",`
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
 `),De("disabled",[R("&:active::before",{backgroundColor:"var(--n-item-color-active)"})]),U("selected",[R("&::before",{backgroundColor:"var(--n-item-color-active)"}),c("menu-item-content",[f("arrow",{color:"var(--n-arrow-color-active)"}),f("icon",{color:"var(--n-item-icon-color-active)"}),c("menu-item-content-header",{color:"var(--n-item-text-color-active)"},[f("extra",{color:"var(--n-item-text-color-active)"})])])])]),c("menu-item-content",`
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
 `,[U("disabled",{opacity:".45",cursor:"not-allowed"}),U("collapsed",[f("arrow",{transform:"rotate(0)"})]),U("child-active",[c("menu-item-content-header",{color:"var(--n-item-text-color-child-active)"},[f("extra",{color:"var(--n-item-text-color-child-active)"})]),f("arrow",{color:"var(--n-arrow-color-child-active)"}),f("icon",{color:"var(--n-item-icon-color-child-active)"})]),De("disabled",[It(null,[f("arrow",{color:"var(--n-arrow-color-hover)"}),f("icon",{color:"var(--n-item-icon-color-hover)"}),c("menu-item-content-header",{color:"var(--n-item-text-color-hover)"},[f("extra",{color:"var(--n-item-text-color-hover)"})])])]),f("icon",`
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
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),c("menu-item-content-header",`
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
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),c("submenu",{cursor:"pointer",position:"relative",marginTop:"6px"},[c("menu-item-content",`
 height: var(--n-item-height);
 `),c("submenu-children",{overflow:"hidden",padding:0},[Ho({duration:".2s"})])]),c("menu-item-group",[c("menu-item-group-title",`
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
 `)])]),c("menu-tooltip",[R("a",`
 color: inherit;
 text-decoration: none;
 `)]),c("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function It(e,t){return[U("hover",e,t),R("&:hover",e,t)]}const Qr=Object.assign(Object.assign({},W.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownPlacement:{type:String,default:"bottom"},dropdownProps:Object,accordion:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array});var en=M({name:"Menu",props:Qr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ke(e),r=W("Menu","-menu",Jr,Nr,e,t),n=ee(Vt,null),i=b(()=>{var h;const{collapsed:m}=e;if(m!==void 0)return m;if(n){const{collapseModeRef:u,collapsedRef:$}=n;if(u.value==="width")return(h=$.value)!==null&&h!==void 0?h:!1}return!1}),a=b(()=>{const{keyField:h,childrenField:m}=e;return To(e.items||e.options,{getChildren(u){return u[m]},getKey(u){var $;return($=u[h])!==null&&$!==void 0?$:u.name}})}),s=b(()=>new Set(a.value.treeNodes.map(h=>h.key))),{watchProps:p}=e,k=_(null);p!=null&&p.includes("defaultValue")?Ce(()=>{k.value=e.defaultValue}):k.value=e.defaultValue;const T=me(e,"value"),w=Ae(T,k),C=_([]),N=()=>{C.value=e.defaultExpandAll?a.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||a.value.getPath(w.value,{includeSelf:!1}).keyPath};p!=null&&p.includes("defaultExpandedKeys")?Ce(N):N();const V=Mt(e,["expandedNames","expandedKeys"]),x=Ae(V,C),z=b(()=>a.value.treeNodes),g=b(()=>a.value.getPath(w.value).keyPath);fe(Me,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:w,mergedExpandedKeysRef:x,activePathRef:g,mergedClsPrefixRef:t,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:me(e,"inverted"),doSelect:P,toggleExpand:E});function P(h,m){const{"onUpdate:value":u,onUpdateValue:$,onSelect:L}=e;$&&K($,h,m),u&&K(u,h,m),L&&K(L,h,m),k.value=h}function I(h){const{"onUpdate:expandedKeys":m,onUpdateExpandedKeys:u,onExpandedNamesChange:$,onOpenNamesChange:L}=e;m&&K(m,h),u&&K(u,h),$&&K($,h),L&&K(L,h),C.value=h}function E(h){const m=Array.from(x.value),u=m.findIndex($=>$===h);if(~u)m.splice(u,1);else{if(e.accordion&&s.value.has(h)){const $=m.findIndex(L=>s.value.has(L));$>-1&&m.splice($,1)}m.push(h)}I(m)}const S=b(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:m},self:u}=r.value,{borderRadius:$,borderColorHorizontal:L,fontSize:Y,itemHeight:X,dividerColor:Z}=u,v={"--n-divider-color":Z,"--n-bezier":m,"--n-font-size":Y,"--n-border-color-horizontal":L,"--n-border-radius":$,"--n-item-height":X};return h?(v["--n-group-text-color"]=u.groupTextColorInverted,v["--n-color"]=u.colorInverted,v["--n-item-text-color"]=u.itemTextColorInverted,v["--n-arrow-color"]=u.arrowColorInverted,v["--n-arrow-color-hover"]=u.arrowColorHoverInverted,v["--n-arrow-color-active"]=u.arrowColorActiveInverted,v["--n-arrow-color-child-active"]=u.arrowColorChildActiveInverted,v["--n-item-icon-color"]=u.itemIconColorInverted,v["--n-item-text-color-hover"]=u.itemTextColorHoverInverted,v["--n-item-icon-color-hover"]=u.itemIconColorHoverInverted,v["--n-item-text-color-active"]=u.itemTextColorActiveInverted,v["--n-item-icon-color-active"]=u.itemIconColorActiveInverted,v["--n-item-icon-color-collapsed"]=u.itemIconColorCollapsedInverted,v["--n-item-color-active"]=u.itemColorActiveInverted,v["--n-item-color-active-collapsed"]=u.itemColorActiveCollapsedInverted,v["--n-item-text-color-child-active"]=u.itemTextColorChildActiveInverted,v["--n-item-icon-color-child-active"]=u.itemIconColorChildActiveInverted):(v["--n-group-text-color"]=u.groupTextColor,v["--n-color"]=u.color,v["--n-item-text-color"]=u.itemTextColor,v["--n-arrow-color"]=u.arrowColor,v["--n-arrow-color-hover"]=u.arrowColorHover,v["--n-arrow-color-active"]=u.arrowColorActive,v["--n-arrow-color-child-active"]=u.arrowColorChildActive,v["--n-item-icon-color"]=u.itemIconColor,v["--n-item-text-color-hover"]=u.itemTextColorHover,v["--n-item-icon-color-hover"]=u.itemIconColorHover,v["--n-item-text-color-active"]=u.itemTextColorActive,v["--n-item-icon-color-active"]=u.itemIconColorActive,v["--n-item-icon-color-collapsed"]=u.itemIconColorCollapsed,v["--n-item-color-active"]=u.itemColorActive,v["--n-item-color-active-collapsed"]=u.itemColorActiveCollapsed,v["--n-item-text-color-child-active"]=u.itemTextColorChildActive,v["--n-item-icon-color-child-active"]=u.itemIconColorChildActive),v}),y=o?Ke("menu",b(()=>e.inverted?"a":"b"),S,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:V,uncontrolledExpanededKeys:C,mergedExpandedKeys:x,uncontrolledValue:k,mergedValue:w,activePath:g,tmNodes:z,mergedTheme:r,mergedCollapsed:i,cssVars:o?void 0:S,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;return r==null||r(),l("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(n=>gt(n,this.$props)))}}),tn=R([R("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",{position:"relative"},[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Mo()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[U("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[U("spinning",`
 user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);const on={small:20,medium:18,large:16},rn=Object.assign(Object.assign({},W.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}});var nn=M({name:"Spin",props:rn,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ke(e),r=W("Spin","-spin",tn,Er,e,t),n=b(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:s},self:p}=r.value,{opacitySpinning:k,color:T,textColor:w}=p,C=typeof a=="number"?Vo(a):p[rt("size",a)];return{"--n-bezier":s,"--n-opacity-spinning":k,"--n-size":C,"--n-color":T,"--n-text-color":w}}),i=o?Ke("spin",b(()=>{const{size:a}=e;return typeof a=="number"?String(a):a[0]}),n,e):void 0;return{mergedClsPrefix:t,compitableShow:Mt(e,["spinning","show"]),mergedStrokeWidth:b(()=>{const{strokeWidth:a}=e;if(a!==void 0)return a;const{size:s}=e;return on[typeof s=="number"?"medium":s]}),cssVars:o?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,t;const{$slots:o,mergedClsPrefix:r,description:n}=this,i=o.icon&&this.rotate,a=(n||o.description)&&l("div",{class:`${r}-spin-description`},n||((e=o.description)===null||e===void 0?void 0:e.call(o))),s=o.icon?l("div",{class:[`${r}-spin-body`,this.themeClass]},l("div",{class:[`${r}-spin`,i&&`${r}-spin--rotate`],style:o.default?"":this.cssVars},o.icon()),a):l("div",{class:[`${r}-spin-body`,this.themeClass]},l(No,{clsPrefix:r,style:o.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),a);return(t=this.onRender)===null||t===void 0||t.call(this),o.default?l("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},l("div",{class:[`${r}-spin-content`,this.compitableShow&&`${r}-spin-content--spinning`]},o),l(Pt,{name:"fade-in-transition"},{default:()=>this.compitableShow?s:null})):s}});const an=M({props:{index:null,varName:null,varValue:null},emits:["complete"],setup(e,{emit:t}){const o=e,r=_(o.varValue),n=async i=>{const{index:a,varName:s}=o;t("complete",{index:a,varName:s,varValue:i})};return Ce(()=>{r.value=o.varValue}),(i,a)=>(ne(),Re(Le,null,[Q(q(Dt),{class:"console-component-title"},{default:ie(()=>[Oe($t(e.varName),1)]),_:1}),Q(q(wr),{modes:["hex","rgb"],value:r.value,"onUpdate:value":a[0]||(a[0]=s=>r.value=s),onComplete:n},null,8,["value"])],64))}}),ln=M({props:{index:null,varName:null,varValue:null},emits:["complete"],setup(e,{emit:t}){const o=e,r=dt(),n=_(o.varValue),i=async a=>{const{index:s,varName:p}=o,k={index:s,varName:p,varValue:a};await r.setComponentConsoleStyle(k),t("complete",k)};return Ce(()=>{n.value=o.varValue}),(a,s)=>(ne(),Re(Le,null,[Q(q(Dt),{class:"console-component-title"},{default:ie(()=>[Oe($t(e.varName),1)]),_:1}),Q(q(Nt),{type:"text",value:n.value,"onUpdate:value":s[0]||(s[0]=p=>n.value=p),onChange:i},null,8,["value"])],64))}});let st=[],jt=!1;function sn(e){jt?e():st.push(e)}window.top===window&&window.addEventListener("message",e=>{if(e.data.type==="iframeReady"){jt=!0;const t=document.querySelector("iframe");if(t&&t.contentDocument){const o=document.createElement("style");o.textContent=".demo-nav__back { display: none; }",t.contentDocument.head.appendChild(o)}st.forEach(o=>o()),st=[]}if(e.data.type===At){const t=dt(),o=e.data.value==="/zh-CN"||e.data.value==="/en-US"?"base":e.data.value;t.menuChange(o)}});function dn(e){const t=document.querySelector("iframe");t&&sn(()=>{var o;(o=t==null?void 0:t.contentWindow)==null||o.postMessage(e,"*")})}const cn={class:"page-preview"},un={class:"page-preview-console-container"},pn={class:"console-wrapper"},mn={class:"console-operation"},hn={class:"btn-container"},vn=Oe("\u91CD\u7F6E\u6240\u6709"),fn=Oe("\u4E0B\u8F7D"),gn={class:"console-container"},bn={key:1,class:"console-component-no-data-text"},xn={class:"page-preview-component-container"},yn={class:"page-preview-component"},Cn={class:"page-preview-iframe-container"},wn=["src"],$n=M({setup(e){const t=dt(),o=Fo(),r=Do(),{menuActive:n,previewConfig:i}=lo(t),a=_([]),s=_([]),p=t.getMobilePath(),k=_(!1);let T;const w=()=>{C(()=>{const S=Ze;yt(i.value,S),T=Rt(n,y=>{x(),z(),dn({type:At,value:y})},{immediate:!0})})},C=S=>{const y=t.getVersionKey(),h=uo[y],m=document.createElement("link");m.id=xt,m.rel="stylesheet",m.type="text/css",m.href=h,document.querySelector("head").appendChild(m),m.onload=async()=>{S()}},N=()=>{const S=document.querySelector(`#${xt}`);S.parentElement.removeChild(S)},V=()=>{var y,h,m;const S=(m=(h=(y=document.querySelector("iframe"))==null?void 0:y.contentWindow)==null?void 0:h.document)==null?void 0:m.body;yt(i.value,S)},x=async()=>{const S=await t.getVersionMenus();a.value=S},z=async()=>{const S=await t.getComponentConsoleStyle(n.value);if(S){const y=po(S.styles);s.value=y}else s.value=[]},g=async S=>{t.menuChange(S)},P=async S=>{var u,$,L;const{index:y,varName:h,varValue:m}=S;s.value[y].varValue=m,Ct(h,m,document.body),Ct(h,m,(L=($=(u=document.querySelector("iframe"))==null?void 0:u.contentWindow)==null?void 0:$.document)==null?void 0:L.body),await t.setComponentConsoleStyle(S)},I=()=>{o.error({title:"\u63D0\u793A",content:"\u786E\u5B9A\u8981\u91CD\u7F6E\u5168\u90E8\u5DF2\u66F4\u6539\u7684\u6837\u5F0F\u561B\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",maskClosable:!1,onPositiveClick:async()=>{var S,y,h;t.resetTheme(),Ve(Ze),Ve((h=(y=(S=document.querySelector("iframe"))==null?void 0:S.contentWindow)==null?void 0:y.document)==null?void 0:h.body),await z(),r.success("\u6210\u529F")}})},E=async()=>{const S=await t.getCurrentThemeInfo();S&&await t.downloadTheme(S),r.success("\u4E0B\u8F7D\u6210\u529F")};return w(),so(()=>{var S,y,h;N(),T(),Ve(Ze),Ve((h=(y=(S=document.querySelector("iframe"))==null?void 0:S.contentWindow)==null?void 0:y.document)==null?void 0:h.body),g("base")}),(S,y)=>(ne(),Xe(q(wt),{"has-sider":"",position:"absolute",style:{top:"64px"}},{default:ie(()=>[Q(q(Or),{bordered:"","collapse-mode":"transform","collapsed-width":0,width:300,"native-scrollbar":!1},{default:ie(()=>[Q(q(en),{options:a.value,"default-expand-all":"",width:270,value:q(n),"onUpdate:value":g},null,8,["options","value"])]),_:1}),Q(q(wt),null,{default:ie(()=>[J("div",cn,[J("div",un,[J("div",pn,[J("div",mn,[J("div",hn,[Q(q($e),{type:"error",onClick:I},{default:ie(()=>[vn]),_:1}),Q(q($e),{type:"info",onClick:E},{default:ie(()=>[fn]),_:1})])]),J("div",gn,[s.value.length>0?(ne(!0),Re(Le,{key:0},co(s.value,(h,m)=>(ne(),Re("div",{class:"console-component-item",key:h.varName+m},[h.component==="n-color-picker"?(ne(),Xe(an,{key:0,index:m,"var-name":h.varName,"var-value":h.varValue,onComplete:P},null,8,["index","var-name","var-value"])):bt("",!0),h.component==="n-input"?(ne(),Xe(ln,{key:1,index:m,"var-name":h.varName,"var-value":h.varValue,onComplete:P},null,8,["index","var-name","var-value"])):bt("",!0)]))),128)):(ne(),Re("div",bn," \u6CA1\u6709\u6837\u5F0F\u53D8\u91CF "))])])]),J("div",xn,[J("div",yn,[J("div",Cn,[Q(q(nn),{size:"large",show:k.value},{default:ie(()=>[J("iframe",{src:q(p),frameborder:"0",style:{height:"640px"},onLoad:V},null,40,wn)]),_:1},8,["show"])])])])])]),_:1})]),_:1}))}});export{$n as default};
