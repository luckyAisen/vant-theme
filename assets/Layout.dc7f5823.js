import{h as b,o as S,a as B,c as I,p as $,b as C,d as T,g as x,u as v,e as O,f as j}from"./constant.66cd4d59.js";import{s as z,e as E}from"./context.2275cf9c.js";import{d as L,r as y,p as R,i as w,h as p}from"./vendor.ce1c87cf.js";const{cubicBezierEaseInOut:l,cubicBezierEaseOut:P,cubicBezierEaseIn:F}=S;function J({overflow:a="hidden",duration:e=".3s",originalTransition:o="",leavingDelay:t="0s",foldPadding:s=!1,enterToProps:n=void 0,leaveToProps:i=void 0,reverse:h=!1}={}){const d=h?"leave":"enter",r=h?"enter":"leave";return[b(`&.fade-in-height-expand-transition-${r}-from,
 &.fade-in-height-expand-transition-${d}-to`,Object.assign(Object.assign({},n),{opacity:1})),b(`&.fade-in-height-expand-transition-${r}-to,
 &.fade-in-height-expand-transition-${d}-from`,Object.assign(Object.assign({},i),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:s?"0 !important":void 0,paddingBottom:s?"0 !important":void 0})),b(`&.fade-in-height-expand-transition-${r}-active`,`
 overflow: ${a};
 transition:
 max-height ${e} ${l} ${t},
 opacity ${e} ${P} ${t},
 margin-top ${e} ${l} ${t},
 margin-bottom ${e} ${l} ${t},
 padding-top ${e} ${l} ${t},
 padding-bottom ${e} ${l} ${t}
 ${o?","+o:""}
 `),b(`&.fade-in-height-expand-transition-${d}-active`,`
 overflow: ${a};
 transition:
 max-height ${e} ${l},
 opacity ${e} ${F},
 margin-top ${e} ${l},
 margin-bottom ${e} ${l},
 padding-top ${e} ${l},
 padding-bottom ${e} ${l}
 ${o?","+o:""}
 `)]}const H=a=>{const{baseColor:e,textColor2:o,bodyColor:t,cardColor:s,dividerColor:n,actionColor:i,scrollbarColor:h,scrollbarColorHover:d,invertedColor:r}=a;return{textColor:o,textColorInverted:"#FFF",color:t,colorEmbedded:i,headerColor:s,headerColorInverted:r,footerColor:i,footerColorInverted:r,headerBorderColor:n,headerBorderColorInverted:r,footerBorderColor:n,footerBorderColorInverted:r,siderBorderColor:n,siderBorderColorInverted:r,siderColor:s,siderColorInverted:r,siderToggleButtonBorder:`1px solid ${n}`,siderToggleButtonColor:e,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:$(t,h),siderToggleBarColorHover:$(t,d),__invertScrollbar:"true"}},V=B({name:"Layout",common:I,peers:{Scrollbar:z},self:H});var K=V,N=C("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[C("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),T("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);const Q=x("n-layout-sider"),_={type:String,default:"static"},k={embedded:Boolean,position:_,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},M=x("n-layout");function W(a){return L({name:a?"LayoutContent":"Layout",props:Object.assign(Object.assign({},v.props),k),setup(e){const o=y(null),t=y(null),{mergedClsPrefixRef:s,inlineThemeDisabled:n}=O(e),i=v("Layout","-layout",N,K,e,s);function h(m,c){if(e.nativeScrollbar){const{value:f}=o;f&&(c===void 0?f.scrollTo(m):f.scrollTo(m,c))}else{const{value:f}=t;f&&f.scrollTo(m,c)}}R(M,e);const d={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},r={scrollTo:h},g=w(()=>{const{common:{cubicBezierEaseInOut:m},self:c}=i.value;return{"--n-bezier":m,"--n-color":e.embedded?c.colorEmbedded:c.color,"--n-text-color":c.textColor}}),u=n?j("layout",void 0,g,e):void 0;return Object.assign({mergedClsPrefix:s,scrollableElRef:o,scrollbarInstRef:t,hasSiderStyle:d,mergedTheme:i,cssVars:n?void 0:g,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender},r)},render(){var e;const{mergedClsPrefix:o,hasSider:t}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=t?this.hasSiderStyle:void 0,n=[this.themeClass,a&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return p("div",{class:n,style:this.cssVars},this.nativeScrollbar?p("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,s],onScroll:this.onScroll},this.$slots):p(E,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,s]}),this.$slots))}})}var U=W(!1);export{U as N,M as a,Q as b,J as f,K as l,_ as p};
