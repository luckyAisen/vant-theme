import{d as y,r as x,h as d,p as $,i as H,j as Y,k as E,l as W,w as we,v as Le,T as se,n as B,m as Z,q as le,s as je,o as F,c as ce,t as S,x as z,y as ke,z as re,u as C,A as ae,B as Oe,R as ze}from"./vendor.f4b8216c.js";import{T as Se,O as Pe}from"./constant.150fe093.js";import{d as _e,N as $e,a as Ae,b as Ie,u as Re,c as Ne,e as de,I as fe,S as ue,W as he,E as ge,f as J}from"./Space.3069b945.js";import{c as ee,a as Ee,b as m,d as v,u as A,e as K,f as Be,g as D,i as He,h as b,j as k,k as Te,N as Me,l as R,m as Fe,n as We}from"./Button.b0d1f7a7.js";import{k as ve,d as Ke,a as De,c as oe,s as Ve,f as qe,m as pe,r as N,N as me,b as Ue,e as Xe,g as Ge,h as Je}from"./context.c301a8f2.js";import{l as Qe,p as Ye,f as Ze,N as eo}from"./Layout.11ba1072.js";function ne(e,o=[],n){const i={};return Object.getOwnPropertyNames(e).forEach(a=>{o.includes(a)||(i[a]=e[a])}),Object.assign(i,n)}const oo=Object.assign(Object.assign({},_e),{internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function}),no=y({name:"DialogEnvironment",props:Object.assign(Object.assign({},oo),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const o=x(!0);function n(){e.onInternalAfterLeave(e.internalKey)}function i(l){const{onPositiveClick:t}=e;t?Promise.resolve(t(l)).then(u=>{u!==!1&&f()}):f()}function r(l){const{onNegativeClick:t}=e;t?Promise.resolve(t(l)).then(u=>{u!==!1&&f()}):f()}function a(){const{onClose:l}=e;l?Promise.resolve(l()).then(t=>{t!==!1&&f()}):f()}function c(l){const{onMaskClick:t,maskClosable:u}=e;t&&(t(l),u&&f())}function f(){o.value=!1}function s(l){o.value=l}return{show:o,hide:f,handleUpdateShow:s,handleAfterLeave:n,handleCloseClick:a,handleNegativeClick:r,handlePositiveClick:i,handleMaskClick:c}},render(){const{handlePositiveClick:e,handleUpdateShow:o,handleNegativeClick:n,handleCloseClick:i,handleAfterLeave:r,handleMaskClick:a,to:c,maskClosable:f,show:s}=this;return d(Ie,{show:s,onUpdateShow:o,onMaskClick:a,to:c,maskClosable:f,onAfterLeave:r,internalAppear:!0,internalDialog:!0},{default:()=>d($e,Object.assign({},ve(this.$props,Ae),{style:this.internalStyle,onClose:i,onNegativeClick:n,onPositiveClick:e}))})}}),to={injectionKey:String,to:[String,Object]},io=y({name:"DialogProvider",props:to,setup(){const e=x([]),o={};function n(f={}){const s=oe(),l=Y(Object.assign(Object.assign({},f),{key:s,destroy:()=>{o[`n-dialog-${s}`].hide()}}));return e.value.push(l),l}const i=["info","success","warning","error"].map(f=>s=>n(Object.assign(Object.assign({},s),{type:f})));function r(f){const{value:s}=e;s.splice(s.findIndex(l=>l.key===f),1)}function a(){Object.values(o).forEach(f=>f.hide())}const c={create:n,destroyAll:a,info:i[0],success:i[1],warning:i[2],error:i[3]};return $(Ke,c),$(De,{clickedRef:Re(64),clickPositionRef:Ne()}),Object.assign(Object.assign({},c),{dialogList:e,dialogInstRefs:o,handleAfterLeave:r})},render(){var e,o;return d(H,null,[this.dialogList.map(n=>d(no,ne(n,["destroy","style"],{internalStyle:n.style,to:this.to,ref:i=>{i===null?delete this.dialogInstRefs[`n-dialog-${n.key}`]:this.dialogInstRefs[`n-dialog-${n.key}`]=i},internalKey:n.key,onInternalAfterLeave:this.handleAfterLeave}))),(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)])}}),ro=e=>{const{primaryColor:o,errorColor:n}=e;return{colorError:n,colorLoading:o,height:"2px"}},ao={name:"LoadingBar",common:ee,self:ro};var so=ao,lo={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 12px",closeSize:"16px",iconSize:"20px",fontSize:"14px"};const co=e=>{const{textColor2:o,closeColor:n,closeColorHover:i,closeColorPressed:r,infoColor:a,successColor:c,errorColor:f,warningColor:s,popoverColor:l,boxShadow2:t,primaryColor:u,lineHeight:h,borderRadius:p}=e;return Object.assign(Object.assign({},lo),{textColorInfo:o,textColorSuccess:o,textColorError:o,textColorWarning:o,textColorLoading:o,colorInfo:l,colorSuccess:l,colorError:l,colorWarning:l,colorLoading:l,boxShadowInfo:t,boxShadowSuccess:t,boxShadowError:t,boxShadowWarning:t,boxShadowLoading:t,iconColorInfo:a,iconColorSuccess:c,iconColorWarning:s,iconColorError:f,iconColorLoading:u,closeColorInfo:n,closeColorHoverInfo:i,closeColorPressedInfo:r,closeColorSuccess:n,closeColorHoverSuccess:i,closeColorPressedSuccess:r,closeColorError:n,closeColorHoverError:i,closeColorPressedError:r,closeColorWarning:n,closeColorHoverWarning:i,closeColorPressedWarning:r,closeColorLoading:n,closeColorHoverLoading:i,closeColorPressedLoading:r,loadingColor:u,lineHeight:h,borderRadius:p})},fo={name:"Message",common:ee,self:co};var uo=fo,ho={closeMargin:"18px 14px",closeSize:"16px",width:"365px",padding:"16px"};const go=e=>{const{textColor2:o,successColor:n,infoColor:i,warningColor:r,errorColor:a,popoverColor:c,closeColor:f,closeColorHover:s,textColor1:l,textColor3:t,borderRadius:u,fontWeightStrong:h,boxShadow2:p,lineHeight:w,fontSize:O}=e;return Object.assign(Object.assign({},ho),{borderRadius:u,lineHeight:w,fontSize:O,headerFontWeight:h,iconColor:o,iconColorSuccess:n,iconColorInfo:i,iconColorWarning:r,iconColorError:a,color:c,textColor:o,closeColor:f,closeColorHover:s,closeColorPressed:f,headerTextColor:l,descriptionTextColor:t,actionTextColor:o,boxShadow:p})},vo=Ee({name:"Notification",common:ee,peers:{Scrollbar:Ve},self:go});var po=vo,mo=m("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[v("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),v("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]);const bo={position:Ye,inverted:Boolean,bordered:{type:Boolean,default:!1}};var xo=y({name:"LayoutHeader",props:Object.assign(Object.assign({},A.props),bo),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=K(e),i=A("Layout","-layout-header",mo,Qe,e,o),r=E(()=>{const{common:{cubicBezierEaseInOut:c},self:f}=i.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=f.headerColorInverted,s["--n-text-color"]=f.textColorInverted,s["--n-border-color"]=f.headerBorderColorInverted):(s["--n-color"]=f.headerColor,s["--n-text-color"]=f.textColor,s["--n-border-color"]=f.headerBorderColor),s}),a=n?Be("layout-header",E(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:o,cssVars:n?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}});const be=D("n-loading-bar"),yo=D("n-loading-bar-api");var Co=m("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[qe({enterDuration:"0.3s",leaveDuration:"0.8s"}),m("loading-bar",`
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `,[v("starting",`
 background: var(--n-color-loading);
 `),v("finishing",`
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `),v("error",`
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]),Q=globalThis&&globalThis.__awaiter||function(e,o,n,i){function r(a){return a instanceof n?a:new n(function(c){c(a)})}return new(n||(n=Promise))(function(a,c){function f(t){try{l(i.next(t))}catch(u){c(u)}}function s(t){try{l(i.throw(t))}catch(u){c(u)}}function l(t){t.done?a(t.value):r(t.value).then(f,s)}l((i=i.apply(e,o||[])).next())})};function T(e,o){return`${o}-loading-bar ${o}-loading-bar--${e}`}var wo=y({name:"LoadingBar",setup(){const{props:e,mergedClsPrefixRef:o}=W(be),n=x(null),i=x(!1),r=x(!1),a=x(!1),c=x(!1);let f=!1;const s=x(!1),l=E(()=>{const{loadingBarStyle:g}=e;return g?g[s.value?"error":"loading"]:""});function t(){return Q(this,void 0,void 0,function*(){i.value=!1,a.value=!1,f=!1,s.value=!1,c.value=!0,yield B(),c.value=!1})}function u(g=0,L=80,I="starting"){return Q(this,void 0,void 0,function*(){yield t(),a.value=!0,r.value=!0,yield B();const j=n.value;!j||(j.style.maxWidth=`${g}%`,j.style.transition="none",j.offsetWidth,j.className=T(I,o.value),j.style.transition="",j.style.maxWidth=`${L}%`)})}function h(){if(f||s.value||!a.value)return;f=!0;const g=n.value;!g||(g.className=T("finishing",o.value),g.style.maxWidth="100%",g.offsetWidth,a.value=!1)}function p(){if(!(f||s.value))if(!a.value)u(100,100,"error").then(()=>{s.value=!0;const g=n.value;!g||(g.className=T("error",o.value),g.offsetWidth,a.value=!1)});else{s.value=!0;const g=n.value;if(!g)return;g.className=T("error",o.value),g.style.maxWidth="100%",g.offsetWidth,a.value=!1}}function w(){i.value=!0}function O(){i.value=!1}function P(){return Q(this,void 0,void 0,function*(){yield t()})}const _=A("LoadingBar","-loading-bar",Co,so,e,o);return{mergedClsPrefix:o,loadingBarRef:n,started:r,loading:a,entering:i,transitionDisabled:c,start:u,error:p,finish:h,handleEnter:w,handleAfterEnter:O,handleAfterLeave:P,mergedLoadingBarStyle:l,cssVars:E(()=>{const{self:{height:g,colorError:L,colorLoading:I}}=_.value;return{"--n-height":g,"--n-color-loading":I,"--n-color-error":L}})}},render(){if(!this.started)return null;const{mergedClsPrefix:e}=this;return d(se,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>we(d("div",{class:`${e}-loading-bar-container`},d("div",{ref:"loadingBarRef",class:`${e}-loading-bar`,style:[this.cssVars,this.mergedLoadingBarStyle]})),[[Le,this.loading||!this.loading&&this.entering]])})}});const Lo=Object.assign(Object.assign({},A.props),{to:{type:[String,Object],default:void 0},loadingBarStyle:{type:Object}});var jo=y({name:"LoadingBarProvider",props:Lo,setup(e){const o=He(),n=x(null),i={start(){var a;o.value?(a=n.value)===null||a===void 0||a.start():B(()=>{var c;(c=n.value)===null||c===void 0||c.start()})},error(){var a;o.value?(a=n.value)===null||a===void 0||a.error():B(()=>{var c;(c=n.value)===null||c===void 0||c.error()})},finish(){var a;o.value?(a=n.value)===null||a===void 0||a.finish():B(()=>{var c;(c=n.value)===null||c===void 0||c.finish()})}},{mergedClsPrefixRef:r}=K(e);return $(yo,i),$(be,{props:e,mergedClsPrefixRef:r}),Object.assign(i,{loadingBarRef:n})},render(){var e,o,n;return d(H,null,d(Z,{to:(e=this.to)!==null&&e!==void 0?e:"body"},d(wo,{ref:"loadingBarRef"})),(n=(o=this.$slots).default)===null||n===void 0?void 0:n.call(o))}});const xe={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function};var ko=b([m("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[Ze({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),m("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[k("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),k("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["info","success","warning","error","loading"].map(e=>v(`${e}-type`,[b("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),b("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[Te()])]),k("close",`
 font-size: var(--n-close-size);
 margin: var(--n-close-margin);
 transition: color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[b("&:hover",`
 color: var(--n-close-color-hover);
 `),b("&:active",`
 color: var(--n-close-color-pressed);
 `)])]),m("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[v("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),v("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),v("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),v("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),v("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),v("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]);const Oo={info:d(fe,null),success:d(ue,null),warning:d(he,null),error:d(ge,null)};var zo=y({name:"Message",props:Object.assign(Object.assign({},xe),{render:Function}),setup(e){const{props:o,mergedClsPrefixRef:n}=W(pe),i=A("Message","-message",ko,uo,o,n);return{mergedClsPrefix:n,messageProviderProps:o,handleClose(){var r;(r=e.onClose)===null||r===void 0||r.call(e)},cssVars:E(()=>{const{type:r}=e,{common:{cubicBezierEaseInOut:a},self:{padding:c,margin:f,maxWidth:s,iconMargin:l,closeMargin:t,closeSize:u,iconSize:h,fontSize:p,lineHeight:w,borderRadius:O,iconColorInfo:P,iconColorSuccess:_,iconColorWarning:g,iconColorError:L,iconColorLoading:I,[R("textColor",r)]:j,[R("boxShadow",r)]:V,[R("color",r)]:q,[R("closeColor",r)]:U,[R("closeColorPressed",r)]:X,[R("closeColorHover",r)]:G}}=i.value;return{"--n-bezier":a,"--n-margin":f,"--n-padding":c,"--n-max-width":s,"--n-font-size":p,"--n-icon-margin":l,"--n-icon-size":h,"--n-close-size":u,"--n-close-margin":t,"--n-text-color":j,"--n-color":q,"--n-box-shadow":V,"--n-icon-color-info":P,"--n-icon-color-success":_,"--n-icon-color-warning":g,"--n-icon-color-error":L,"--n-icon-color-loading":I,"--n-close-color":U,"--n-close-color-pressed":X,"--n-close-color-hover":G,"--n-line-height":w,"--n-border-radius":O}}),placement:o.placement}},render(){const{render:e,type:o,closable:n,content:i,mergedClsPrefix:r,cssVars:a,icon:c,handleClose:f}=this;return d("div",{class:`${r}-message-wrapper`,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:Object.assign({alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},a)},e?e(this.$props):d("div",{class:`${r}-message ${r}-message--${o}-type`},d("div",{class:`${r}-message__icon ${r}-message__icon--${o}-type`},d(Me,null,{default:()=>[So(c,o,r)]})),d("div",{class:`${r}-message__content`},N(i)),n?d(de,{clsPrefix:r,class:`${r}-message__close`,onClick:f}):null))}});function So(e,o,n){return typeof e=="function"?e():d(me,{clsPrefix:n,key:o},{default:()=>o==="loading"?d(Fe,{clsPrefix:n,strokeWidth:24,scale:.85}):Oo[o]})}var Po=y({name:"MessageEnvironment",props:Object.assign(Object.assign({},xe),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let o=null;const n=x(!0);le(()=>{i()});function i(){const{duration:t}=e;t&&(o=window.setTimeout(c,t))}function r(t){t.currentTarget===t.target&&o!==null&&(window.clearTimeout(o),o=null)}function a(t){t.currentTarget===t.target&&i()}function c(){const{onHide:t}=e;n.value=!1,o&&(window.clearTimeout(o),o=null),t&&t()}function f(){const{onClose:t}=e;t&&t(),c()}function s(){const{onAfterLeave:t,onInternalAfterLeave:u,onAfterHide:h,internalKey:p}=e;t&&t(),u&&u(p),h&&h()}function l(){c()}return{show:n,hide:c,handleClose:f,handleAfterLeave:s,handleMouseleave:a,handleMouseenter:r,deactivate:l}},render(){return d(We,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?d(zo,{content:this.content,type:this.type,icon:this.icon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}});const _o=Object.assign(Object.assign({},A.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]});var $o=y({name:"MessageProvider",props:_o,setup(e){const{mergedClsPrefixRef:o}=K(e),n=x([]),i=x({}),r={info(s,l){return a(s,Object.assign(Object.assign({},l),{type:"info"}))},success(s,l){return a(s,Object.assign(Object.assign({},l),{type:"success"}))},warning(s,l){return a(s,Object.assign(Object.assign({},l),{type:"warning"}))},error(s,l){return a(s,Object.assign(Object.assign({},l),{type:"error"}))},loading(s,l){return a(s,Object.assign(Object.assign({},l),{type:"loading"}))},destroyAll:f};$(pe,{props:e,mergedClsPrefixRef:o}),$(Ue,r);function a(s,l){const t=oe(),u=Y(Object.assign(Object.assign({},l),{content:s,key:t,destroy:()=>{i.value[t].hide()}})),{max:h}=e;return h&&n.value.length>=h&&n.value.shift(),n.value.push(u),u}function c(s){n.value.splice(n.value.findIndex(l=>l.key===s),1),delete i.value[s]}function f(){Object.values(i.value).forEach(s=>{s.hide()})}return Object.assign({mergedClsPrefix:o,messageRefs:i,messageList:n,handleAfterLeave:c},r)},render(){var e,o,n;return d(H,null,(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e),this.messageList.length?d(Z,{to:(n=this.to)!==null&&n!==void 0?n:"body"},d("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(i=>d(Po,Object.assign({ref:r=>{r&&(this.messageRefs[i.key]=r)},internalKey:i.key,onInternalAfterLeave:this.handleAfterLeave},ne(i,["destroy"],void 0),{duration:i.duration===void 0?this.duration:i.duration,keepAliveOnHover:i.keepAliveOnHover===void 0?this.keepAliveOnHover:i.keepAliveOnHover,closable:i.closable===void 0?this.closable:i.closable}))))):null)}});const te=D("n-notification-provider"),Ao=y({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:o}=W(te);return{mergedTheme:e,mergedClsPrefix:o}},render(){const{$slots:e,scrollable:o,mergedClsPrefix:n,mergedTheme:i,placement:r}=this;return d("div",{class:[`${n}-notification-container`,o&&`${n}-notification-container--scrollable`,`${n}-notification-container--${r}`]},o?d(Xe,{theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar},e):e)}}),Io={info:d(fe,null),success:d(ue,null),warning:d(he,null),error:d(ge,null),default:null},ie={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0}},Ro=Ge(ie),No=y({name:"Notification",props:ie,setup(e){const{mergedClsPrefixRef:o,mergedThemeRef:n}=W(te);return{mergedClsPrefix:o,showAvatar:E(()=>e.avatar||e.type!=="default"),handleCloseClick(){e.onClose()},cssVars:E(()=>{const{type:i}=e,{self:{color:r,textColor:a,closeColor:c,closeColorHover:f,closeColorPressed:s,headerTextColor:l,descriptionTextColor:t,actionTextColor:u,borderRadius:h,headerFontWeight:p,boxShadow:w,lineHeight:O,fontSize:P,closeMargin:_,closeSize:g,width:L,padding:I,[R("iconColor",i)]:j},common:{cubicBezierEaseOut:V,cubicBezierEaseIn:q,cubicBezierEaseInOut:U}}=n.value,{left:X,right:G,top:ye,bottom:Ce}=Je(I);return{"--n-color":r,"--n-font-size":P,"--n-text-color":a,"--n-description-text-color":t,"--n-action-text-color":u,"--n-title-text-color":l,"--n-title-font-weight":p,"--n-bezier":U,"--n-bezier-ease-out":V,"--n-bezier-ease-in":q,"--n-border-radius":h,"--n-box-shadow":w,"--n-close-color":c,"--n-close-color-hover":f,"--n-close-color-pressed":s,"--n-line-height":O,"--n-icon-color":j,"--n-close-margin":_,"--n-close-size":g,"--n-width":L,"--n-padding-left":X,"--n-padding-right":G,"--n-padding-top":ye,"--n-padding-bottom":Ce}})}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:[`${e}-notification`,{[`${e}-notification--closable`]:this.closable,[`${e}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?d("div",{class:`${e}-notification__avatar`},this.avatar?N(this.avatar):this.type!=="default"?d(me,{clsPrefix:e},{default:()=>Io[this.type]}):null):null,this.closable?d(de,{clsPrefix:e,class:`${e}-notification__close`,onClick:this.handleCloseClick}):null,d("div",{ref:"bodyRef",class:`${e}-notification-main`},this.title?d("div",{class:`${e}-notification-main__header`},N(this.title)):null,this.description?d("div",{class:`${e}-notification-main__description`},N(this.description)):null,this.content?d("pre",{class:`${e}-notification-main__content`},N(this.content)):null,this.meta||this.action?d("div",{class:`${e}-notification-main-footer`},this.meta?d("div",{class:`${e}-notification-main-footer__meta`},N(this.meta)):null,this.action?d("div",{class:`${e}-notification-main-footer__action`},N(this.action)):null):null))}}),Eo=Object.assign(Object.assign({},ie),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),Bo=y({name:"NotificationEnvironment",props:Object.assign(Object.assign({},Eo),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const o=x(!0);let n=null;function i(){o.value=!1,n&&window.clearTimeout(n)}function r(t){B(()=>{t.style.height=`${t.offsetHeight}px`,t.style.maxHeight="0",t.style.transition="none",t.offsetHeight,t.style.transition="",t.style.maxHeight=t.style.height})}function a(t){t.style.height="",t.style.maxHeight="";const{onAfterEnter:u,onAfterShow:h}=e;u&&u(),h&&h()}function c(t){t.style.maxHeight=`${t.offsetHeight}px`,t.style.height=`${t.offsetHeight}px`,t.offsetHeight}function f(t){const{onHide:u}=e;u&&u(),t.style.maxHeight="0",t.offsetHeight}function s(){const{onAfterLeave:t,onInternalAfterLeave:u,onAfterHide:h,internalKey:p}=e;t&&t(),u(p),h&&h()}function l(){const{onClose:t}=e;t?Promise.resolve(t()).then(u=>{u!==!1&&i()}):i()}return le(()=>{e.duration&&(n=window.setTimeout(i,e.duration))}),{show:o,hide:i,handleClose:l,handleAfterLeave:s,handleLeave:f,handleBeforeLeave:c,handleAfterEnter:a,handleBeforeEnter:r}},render(){return d(se,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?d(No,Object.assign({},ve(this.$props,Ro),{onClose:this.handleClose})):null})}});var Ho=b([m("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[b(">",[m("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[b(">",[m("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[m("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),v("top-right, bottom-right",[m("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),v("top-left, bottom-left",[m("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),v("top-right",`
 right: 0;
 top: 12px;
 `,[M("top-right")]),v("top-left",`
 left: 0;
 top: 12px;
 `,[M("top-left")]),v("bottom-right",`
 right: 0;
 bottom: 12px;
 `,[M("bottom-right")]),v("bottom-left",`
 left: 0;
 bottom: 12px;
 `,[M("bottom-left")]),v("scrollable",[v("top-right",`
 top: 0;
 `),v("top-left",`
 top: 0;
 `),v("bottom-right",`
 bottom: 0;
 `),v("bottom-left",`
 bottom: 0;
 `)]),m("notification",[b("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-bottom: 0 !important;
 `),b("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),b("&.notification-transition-leave-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),m("notification",`
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 margin-bottom: 12px;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,[k("avatar",[m("icon",{color:"var(--n-icon-color)"}),m("base-icon",{color:"var(--n-icon-color)"})]),v("show-avatar",[m("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),v("closable",[m("notification-main",[b("> *:first-child",{paddingRight:"20px"})]),k("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 font-size: var(--n-close-size);
 transition: color .3s var(--n-bezier);
 `)]),k("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[m("icon",{transition:"color .3s var(--n-bezier)"})]),m("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[m("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[k("meta",`
 font-size: 12px;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),k("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),k("header",`
 font-weight: var(--n-title-font-weight);
 font-size: 16px;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),k("description",`
 margin-top: 8px;
 font-size: 12px;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),k("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[b("&:first-child",{margin:0})])])])])]);function M(e){const n=e.split("-")[1]==="left"?"calc(-100%)":"calc(100%)",i="0";return m("notification",[b("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${n}, 0);
 `),b("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(${i}, 0);
 `)])}const To=D("n-notification-api"),Mo=Object.assign(Object.assign({},A.props),{containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"}});var Fo=y({name:"NotificationProvider",props:Mo,setup(e){const{mergedClsPrefixRef:o}=K(e),n=x([]),i={},r=new Set;function a(h){const p=oe(),w=()=>{r.add(p),i[p]&&i[p].hide()},O=Y(Object.assign(Object.assign({},h),{key:p,destroy:w,hide:w,deactivate:w})),{max:P}=e;if(P&&n.value.length-r.size>=P){let _=!1,g=0;for(const L of n.value){if(!r.has(L.key)){i[L.key]&&(L.destroy(),_=!0);break}g++}_||n.value.splice(g,1)}return n.value.push(O),O}const c=["info","success","warning","error"].map(h=>p=>a(Object.assign(Object.assign({},p),{type:h})));function f(h){r.delete(h),n.value.splice(n.value.findIndex(p=>p.key===h),1)}const s=A("Notification","-notification",Ho,po,e,o),l={create:a,info:c[0],success:c[1],warning:c[2],error:c[3],open:t,destroyAll:u};$(To,l),$(te,{mergedClsPrefixRef:o,mergedThemeRef:s});function t(h){return a(h)}function u(){Object.values(n.value).forEach(h=>{h.hide()})}return Object.assign({mergedClsPrefix:o,notificationList:n,notificationRefs:i,handleAfterLeave:f},l)},render(){var e,o,n;return d(H,null,(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e),this.notificationList.length?d(Z,{to:(n=this.to)!==null&&n!==void 0?n:"body"},d(Ao,{style:this.containerStyle,scrollable:this.scrollable,placement:this.placement},{default:()=>this.notificationList.map(i=>d(Bo,Object.assign({ref:r=>{const a=i.key;r===null?delete this.notificationRefs[a]:this.notificationRefs[a]=r}},ne(i,["destroy","hide","deactivate"]),{internalKey:i.key,onInternalAfterLeave:this.handleAfterLeave})))})):null)}});const Wo=["href"],Ko=y({setup(e){return(o,n)=>{const i=je("router-link");return F(),ce(C(J),{justify:"space-between",align:"center",class:"app-header-container"},{default:S(()=>[z(C(J),{class:"header-logo"},{default:S(()=>[z(i,{to:"/"},{default:S(()=>[ke(re(C(Se)),1)]),_:1})]),_:1}),z(C(J),{justify:"space-between"},{default:S(()=>[(F(!0),ae(H,null,Oe(C(Pe),r=>(F(),ae("a",{key:r.name,href:r.url,target:"_blank"},re(r.name),9,Wo))),128))]),_:1})]),_:1})}}}),Jo=y({setup(e){return(o,n)=>(F(),ce(C(jo),null,{default:S(()=>[z(C($o),null,{default:S(()=>[z(C(Fo),null,{default:S(()=>[z(C(io),null,{default:S(()=>[z(C(eo),{class:"app-main-container"},{default:S(()=>[z(C(xo),{style:{padding:"10px 24px"},bordered:""},{default:S(()=>[z(Ko)]),_:1}),z(C(ze))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{Jo as default};
