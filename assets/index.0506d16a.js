import{b as w,r as k,i as f,p as I,j as D,k as ie,l as P,m as G,w as _e,v as Pe,T as ue,n as W,q as re,s as he,o as K,t as te,x as ve,y as $e,z as Re,A as Ae,B as Ie,c as ge,C as x,D as C,E as fe,G as V,u as b,H as Ne,R as Be}from"./vendor.eaef4322.js";import{u as He,O as Ee}from"./theme.634d8166.js";import{d as Me,N as Te,a as Fe,b as We,u as Ke,c as De,e as pe,I as me,S as be,W as xe,E as Ce,f as q}from"./Space.801d8f80.js";import{k as ye,d as Ve,a as qe,c as ae,b as se,e as Ue,s as Xe,f as m,g as v,u as N,h as T,i as J,j as Q,l as Ge,m as Je,n as y,o as O,p as Qe,q as we,N as Ye,r as E,t as M,v as Ze,w as ke,x as eo,y as oo,z as no,A as to,B as io,C as ro,D as ao,E as so}from"./context.a7ef65c1.js";import{l as lo,p as co,f as fo,N as uo}from"./Layout.d4923a8e.js";import"./modulepreload-polyfill.b7f2da20.js";function le(o,e=[],n){const i={};return Object.getOwnPropertyNames(o).forEach(r=>{e.includes(r)||(i[r]=o[r])}),Object.assign(i,n)}const ho=Object.assign(Object.assign({},Me),{internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function}),vo=w({name:"DialogEnvironment",props:Object.assign(Object.assign({},ho),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(o){const e=k(!0);function n(){o.onInternalAfterLeave(o.internalKey)}function i(c){const{onPositiveClick:t}=o;t?Promise.resolve(t(c)).then(u=>{u!==!1&&a()}):a()}function l(c){const{onNegativeClick:t}=o;t?Promise.resolve(t(c)).then(u=>{u!==!1&&a()}):a()}function r(){const{onClose:c}=o;c?Promise.resolve(c()).then(t=>{t!==!1&&a()}):a()}function d(c){const{onMaskClick:t,maskClosable:u}=o;t&&(t(c),u&&a())}function a(){e.value=!1}function s(c){e.value=c}return{show:e,hide:a,handleUpdateShow:s,handleAfterLeave:n,handleCloseClick:r,handleNegativeClick:l,handlePositiveClick:i,handleMaskClick:d}},render(){const{handlePositiveClick:o,handleUpdateShow:e,handleNegativeClick:n,handleCloseClick:i,handleAfterLeave:l,handleMaskClick:r,to:d,maskClosable:a,show:s}=this;return f(We,{show:s,onUpdateShow:e,onMaskClick:r,to:d,maskClosable:a,onAfterLeave:l,internalAppear:!0,internalDialog:!0},{default:()=>f(Te,Object.assign({},ye(this.$props,Fe),{style:this.internalStyle,onClose:i,onNegativeClick:n,onPositiveClick:o}))})}}),go={injectionKey:String,to:[String,Object]},po=w({name:"DialogProvider",props:go,setup(){const o=k([]),e={};function n(a={}){const s=ae(),c=ie(Object.assign(Object.assign({},a),{key:s,destroy:()=>{e[`n-dialog-${s}`].hide()}}));return o.value.push(c),c}const i=["info","success","warning","error"].map(a=>s=>n(Object.assign(Object.assign({},s),{type:a})));function l(a){const{value:s}=o;s.splice(s.findIndex(c=>c.key===a),1)}function r(){Object.values(e).forEach(a=>a.hide())}const d={create:n,destroyAll:r,info:i[0],success:i[1],warning:i[2],error:i[3]};return I(Ve,d),I(qe,{clickedRef:Ke(64),clickPositionRef:De()}),Object.assign(Object.assign({},d),{dialogList:o,dialogInstRefs:e,handleAfterLeave:l})},render(){var o,e;return f(D,null,[this.dialogList.map(n=>f(vo,le(n,["destroy","style"],{internalStyle:n.style,to:this.to,ref:i=>{i===null?delete this.dialogInstRefs[`n-dialog-${n.key}`]:this.dialogInstRefs[`n-dialog-${n.key}`]=i},internalKey:n.key,onInternalAfterLeave:this.handleAfterLeave}))),(e=(o=this.$slots).default)===null||e===void 0?void 0:e.call(o)])}}),mo=o=>{const{primaryColor:e,errorColor:n}=o;return{colorError:n,colorLoading:e,height:"2px"}},bo={name:"LoadingBar",common:se,self:mo};var xo=bo,Co={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 12px",closeSize:"16px",iconSize:"20px",fontSize:"14px"};const yo=o=>{const{textColor2:e,closeColor:n,closeColorHover:i,closeColorPressed:l,infoColor:r,successColor:d,errorColor:a,warningColor:s,popoverColor:c,boxShadow2:t,primaryColor:u,lineHeight:h,borderRadius:p}=o;return Object.assign(Object.assign({},Co),{textColor:e,textColorInfo:e,textColorSuccess:e,textColorError:e,textColorWarning:e,textColorLoading:e,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:t,boxShadowInfo:t,boxShadowSuccess:t,boxShadowError:t,boxShadowWarning:t,boxShadowLoading:t,iconColor:e,iconColorInfo:r,iconColorSuccess:d,iconColorWarning:s,iconColorError:a,iconColorLoading:u,closeColor:n,closeColorHover:i,closeColorPressed:l,closeColorInfo:n,closeColorHoverInfo:i,closeColorPressedInfo:l,closeColorSuccess:n,closeColorHoverSuccess:i,closeColorPressedSuccess:l,closeColorError:n,closeColorHoverError:i,closeColorPressedError:l,closeColorWarning:n,closeColorHoverWarning:i,closeColorPressedWarning:l,closeColorLoading:n,closeColorHoverLoading:i,closeColorPressedLoading:l,loadingColor:u,lineHeight:h,borderRadius:p})},wo={name:"Message",common:se,self:yo};var ko=wo,Lo={closeMargin:"18px 14px",closeSize:"16px",width:"365px",padding:"16px"};const jo=o=>{const{textColor2:e,successColor:n,infoColor:i,warningColor:l,errorColor:r,popoverColor:d,closeColor:a,closeColorHover:s,textColor1:c,textColor3:t,borderRadius:u,fontWeightStrong:h,boxShadow2:p,lineHeight:L,fontSize:z}=o;return Object.assign(Object.assign({},Lo),{borderRadius:u,lineHeight:L,fontSize:z,headerFontWeight:h,iconColor:e,iconColorSuccess:n,iconColorInfo:i,iconColorWarning:l,iconColorError:r,color:d,textColor:e,closeColor:a,closeColorHover:s,closeColorPressed:a,headerTextColor:c,descriptionTextColor:t,actionTextColor:e,boxShadow:p})},Oo=Ue({name:"Notification",common:se,peers:{Scrollbar:Xe},self:jo});var zo=Oo,So=m("layout-header",`
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
 `)]);const _o={position:co,inverted:Boolean,bordered:{type:Boolean,default:!1}};var Po=w({name:"LayoutHeader",props:Object.assign(Object.assign({},N.props),_o),setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=T(o),i=N("Layout","-layout-header",So,lo,o,e),l=P(()=>{const{common:{cubicBezierEaseInOut:d},self:a}=i.value,s={"--n-bezier":d};return o.inverted?(s["--n-color"]=a.headerColorInverted,s["--n-text-color"]=a.textColorInverted,s["--n-border-color"]=a.headerBorderColorInverted):(s["--n-color"]=a.headerColor,s["--n-text-color"]=a.textColor,s["--n-border-color"]=a.headerBorderColor),s}),r=n?J("layout-header",P(()=>o.inverted?"a":"b"),l,o):void 0;return{mergedClsPrefix:e,cssVars:n?void 0:l,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var o;const{mergedClsPrefix:e}=this;return(o=this.onRender)===null||o===void 0||o.call(this),f("div",{class:[`${e}-layout-header`,this.themeClass,this.position&&`${e}-layout-header--${this.position}-positioned`,this.bordered&&`${e}-layout-header--bordered`],style:this.cssVars},this.$slots)}});const Le=Q("n-loading-bar"),$o=Q("n-loading-bar-api");var Ro=m("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[Ge({enterDuration:"0.3s",leaveDuration:"0.8s"}),m("loading-bar",`
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
 `)])]),ne=globalThis&&globalThis.__awaiter||function(o,e,n,i){function l(r){return r instanceof n?r:new n(function(d){d(r)})}return new(n||(n=Promise))(function(r,d){function a(t){try{c(i.next(t))}catch(u){d(u)}}function s(t){try{c(i.throw(t))}catch(u){d(u)}}function c(t){t.done?r(t.value):l(t.value).then(a,s)}c((i=i.apply(o,e||[])).next())})};function U(o,e){return`${e}-loading-bar ${e}-loading-bar--${o}`}var Ao=w({name:"LoadingBar",setup(o){const{inlineThemeDisabled:e}=T(),{props:n,mergedClsPrefixRef:i}=G(Le),l=k(null),r=k(!1),d=k(!1),a=k(!1),s=k(!1);let c=!1;const t=k(!1),u=P(()=>{const{loadingBarStyle:g}=n;return g?g[t.value?"error":"loading"]:""});function h(){return ne(this,void 0,void 0,function*(){r.value=!1,a.value=!1,c=!1,t.value=!1,s.value=!0,yield W(),s.value=!1})}function p(g=0,B=80,H="starting"){return ne(this,void 0,void 0,function*(){yield h(),a.value=!0,d.value=!0,yield W();const j=l.value;!j||(j.style.maxWidth=`${g}%`,j.style.transition="none",j.offsetWidth,j.className=U(H,i.value),j.style.transition="",j.style.maxWidth=`${B}%`)})}function L(){if(c||t.value||!a.value)return;c=!0;const g=l.value;!g||(g.className=U("finishing",i.value),g.style.maxWidth="100%",g.offsetWidth,a.value=!1)}function z(){if(!(c||t.value))if(!a.value)p(100,100,"error").then(()=>{t.value=!0;const g=l.value;!g||(g.className=U("error",i.value),g.offsetWidth,a.value=!1)});else{t.value=!0;const g=l.value;if(!g)return;g.className=U("error",i.value),g.style.maxWidth="100%",g.offsetWidth,a.value=!1}}function $(){r.value=!0}function R(){r.value=!1}function A(){return ne(this,void 0,void 0,function*(){yield h()})}const _=N("LoadingBar","-loading-bar",Ro,xo,n,i),F=P(()=>{const{self:{height:g,colorError:B,colorLoading:H}}=_.value;return{"--n-height":g,"--n-color-loading":H,"--n-color-error":B}}),S=e?J("loading-bar",void 0,F,n):void 0;return{mergedClsPrefix:i,loadingBarRef:l,started:d,loading:a,entering:r,transitionDisabled:s,start:p,error:z,finish:L,handleEnter:$,handleAfterEnter:R,handleAfterLeave:A,mergedLoadingBarStyle:u,cssVars:e?void 0:F,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){if(!this.started)return null;const{mergedClsPrefix:o}=this;return f(ue,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var e;return(e=this.onRender)===null||e===void 0||e.call(this),_e(f("div",{class:[`${o}-loading-bar-container`,this.themeClass]},f("div",{ref:"loadingBarRef",class:[`${o}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[Pe,this.loading||!this.loading&&this.entering]])}})}});const Io=Object.assign(Object.assign({},N.props),{to:{type:[String,Object],default:void 0},loadingBarStyle:{type:Object}});var No=w({name:"LoadingBarProvider",props:Io,setup(o){const e=Je(),n=k(null),i={start(){var r;e.value?(r=n.value)===null||r===void 0||r.start():W(()=>{var d;(d=n.value)===null||d===void 0||d.start()})},error(){var r;e.value?(r=n.value)===null||r===void 0||r.error():W(()=>{var d;(d=n.value)===null||d===void 0||d.error()})},finish(){var r;e.value?(r=n.value)===null||r===void 0||r.finish():W(()=>{var d;(d=n.value)===null||d===void 0||d.finish()})}},{mergedClsPrefixRef:l}=T(o);return I($o,i),I(Le,{props:o,mergedClsPrefixRef:l}),Object.assign(i,{loadingBarRef:n})},render(){var o,e,n;return f(D,null,f(re,{to:(o=this.to)!==null&&o!==void 0?o:"body"},f(Ao,{ref:"loadingBarRef"})),(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}});const je={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function};var Bo=y([m("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[fo({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),m("message",`
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
 `,[O("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),O("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(o=>v(`${o}-type`,[y("> *",`
 color: var(--n-icon-color-${o});
 transition: color .3s var(--n-bezier);
 `)])),y("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[Qe()])]),O("close",`
 font-size: var(--n-close-size);
 margin: var(--n-close-margin);
 transition: color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[y("&:hover",`
 color: var(--n-close-color-hover);
 `),y("&:active",`
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
 `)])]);const Ho={info:f(me,null),success:f(be,null),warning:f(xe,null),error:f(Ce,null),default:null};var Eo=w({name:"Message",props:Object.assign(Object.assign({},je),{render:Function}),setup(o){const{inlineThemeDisabled:e}=T(),{props:n,mergedClsPrefixRef:i}=G(we),l=N("Message","-message",Bo,ko,n,i),r=P(()=>{const{type:a}=o,{common:{cubicBezierEaseInOut:s},self:{padding:c,margin:t,maxWidth:u,iconMargin:h,closeMargin:p,closeSize:L,iconSize:z,fontSize:$,lineHeight:R,borderRadius:A,iconColorInfo:_,iconColorSuccess:F,iconColorWarning:S,iconColorError:g,iconColorLoading:B,[M("textColor",a)]:H,[M("boxShadow",a)]:j,[M("color",a)]:Y,[M("closeColor",a)]:Z,[M("closeColorPressed",a)]:ee,[M("closeColorHover",a)]:oe}}=l.value;return{"--n-bezier":s,"--n-margin":t,"--n-padding":c,"--n-max-width":u,"--n-font-size":$,"--n-icon-margin":h,"--n-icon-size":z,"--n-close-size":L,"--n-close-margin":p,"--n-text-color":H,"--n-color":Y,"--n-box-shadow":j,"--n-icon-color-info":_,"--n-icon-color-success":F,"--n-icon-color-warning":S,"--n-icon-color-error":g,"--n-icon-color-loading":B,"--n-close-color":Z,"--n-close-color-pressed":ee,"--n-close-color-hover":oe,"--n-line-height":R,"--n-border-radius":A}}),d=e?J("message",P(()=>o.type[0]),r,{}):void 0;return{mergedClsPrefix:i,messageProviderProps:n,handleClose(){var a;(a=o.onClose)===null||a===void 0||a.call(o)},cssVars:e?void 0:r,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender,placement:n.placement}},render(){const{render:o,type:e,closable:n,content:i,mergedClsPrefix:l,cssVars:r,themeClass:d,onRender:a,icon:s,handleClose:c,showIcon:t}=this;a==null||a();let u;return f("div",{class:[`${l}-message-wrapper`,d],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},r]},o?o(this.$props):f("div",{class:`${l}-message ${l}-message--${e}-type`},(u=Mo(s,e,l))&&t?f("div",{class:`${l}-message__icon ${l}-message__icon--${e}-type`},f(Ye,null,{default:()=>u})):null,f("div",{class:`${l}-message__content`},E(i)),n?f(pe,{clsPrefix:l,class:`${l}-message__close`,onClick:c}):null))}});function Mo(o,e,n){if(typeof o=="function")return o();{const i=e==="loading"?f(Ze,{clsPrefix:n,strokeWidth:24,scale:.85}):Ho[e];return i?f(ke,{clsPrefix:n,key:e},{default:()=>i}):null}}var To=w({name:"MessageEnvironment",props:Object.assign(Object.assign({},je),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(o){let e=null;const n=k(!0);he(()=>{i()});function i(){const{duration:t}=o;t&&(e=window.setTimeout(d,t))}function l(t){t.currentTarget===t.target&&e!==null&&(window.clearTimeout(e),e=null)}function r(t){t.currentTarget===t.target&&i()}function d(){const{onHide:t}=o;n.value=!1,e&&(window.clearTimeout(e),e=null),t&&t()}function a(){const{onClose:t}=o;t&&t(),d()}function s(){const{onAfterLeave:t,onInternalAfterLeave:u,onAfterHide:h,internalKey:p}=o;t&&t(),u&&u(p),h&&h()}function c(){d()}return{show:n,hide:d,handleClose:a,handleAfterLeave:s,handleMouseleave:r,handleMouseenter:l,deactivate:c}},render(){return f(eo,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?f(Eo,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}});const Fo=Object.assign(Object.assign({},N.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]});var Wo=w({name:"MessageProvider",props:Fo,setup(o){const{mergedClsPrefixRef:e}=T(o),n=k([]),i=k({}),l={create(s,c){return r(s,Object.assign({type:"default"},c))},info(s,c){return r(s,Object.assign(Object.assign({},c),{type:"info"}))},success(s,c){return r(s,Object.assign(Object.assign({},c),{type:"success"}))},warning(s,c){return r(s,Object.assign(Object.assign({},c),{type:"warning"}))},error(s,c){return r(s,Object.assign(Object.assign({},c),{type:"error"}))},loading(s,c){return r(s,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:a};I(we,{props:o,mergedClsPrefixRef:e}),I(oo,l);function r(s,c){const t=ae(),u=ie(Object.assign(Object.assign({},c),{content:s,key:t,destroy:()=>{i.value[t].hide()}})),{max:h}=o;return h&&n.value.length>=h&&n.value.shift(),n.value.push(u),u}function d(s){n.value.splice(n.value.findIndex(c=>c.key===s),1),delete i.value[s]}function a(){Object.values(i.value).forEach(s=>{s.hide()})}return Object.assign({mergedClsPrefix:e,messageRefs:i,messageList:n,handleAfterLeave:d},l)},render(){var o,e,n;return f(D,null,(e=(o=this.$slots).default)===null||e===void 0?void 0:e.call(o),this.messageList.length?f(re,{to:(n=this.to)!==null&&n!==void 0?n:"body"},f("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(i=>f(To,Object.assign({ref:l=>{l&&(this.messageRefs[i.key]=l)},internalKey:i.key,onInternalAfterLeave:this.handleAfterLeave},le(i,["destroy"],void 0),{duration:i.duration===void 0?this.duration:i.duration,keepAliveOnHover:i.keepAliveOnHover===void 0?this.keepAliveOnHover:i.keepAliveOnHover,closable:i.closable===void 0?this.closable:i.closable}))))):null)}});const ce=Q("n-notification-provider"),Ko=w({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:o,mergedClsPrefixRef:e}=G(ce);return{mergedTheme:o,mergedClsPrefix:e}},render(){const{$slots:o,scrollable:e,mergedClsPrefix:n,mergedTheme:i,placement:l}=this;return f("div",{class:[`${n}-notification-container`,e&&`${n}-notification-container--scrollable`,`${n}-notification-container--${l}`]},e?f(no,{theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar},o):o)}}),Do={info:f(me,null),success:f(be,null),warning:f(xe,null),error:f(Ce,null),default:null},de={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0}},Vo=to(de),qo=w({name:"Notification",props:de,setup(o){const{mergedClsPrefixRef:e,mergedThemeRef:n,props:i}=G(ce),{inlineThemeDisabled:l}=T(),r=P(()=>{const{type:a}=o,{self:{color:s,textColor:c,closeColor:t,closeColorHover:u,closeColorPressed:h,headerTextColor:p,descriptionTextColor:L,actionTextColor:z,borderRadius:$,headerFontWeight:R,boxShadow:A,lineHeight:_,fontSize:F,closeMargin:S,closeSize:g,width:B,padding:H,[M("iconColor",a)]:j},common:{cubicBezierEaseOut:Y,cubicBezierEaseIn:Z,cubicBezierEaseInOut:ee}}=n.value,{left:oe,right:Oe,top:ze,bottom:Se}=io(H);return{"--n-color":s,"--n-font-size":F,"--n-text-color":c,"--n-description-text-color":L,"--n-action-text-color":z,"--n-title-text-color":p,"--n-title-font-weight":R,"--n-bezier":ee,"--n-bezier-ease-out":Y,"--n-bezier-ease-in":Z,"--n-border-radius":$,"--n-box-shadow":A,"--n-close-color":t,"--n-close-color-hover":u,"--n-close-color-pressed":h,"--n-line-height":_,"--n-icon-color":j,"--n-close-margin":S,"--n-close-size":g,"--n-width":B,"--n-padding-left":oe,"--n-padding-right":Oe,"--n-padding-top":ze,"--n-padding-bottom":Se}}),d=l?J("notification",P(()=>o.type[0]),r,i):void 0;return{mergedClsPrefix:e,showAvatar:P(()=>o.avatar||o.type!=="default"),handleCloseClick(){o.onClose()},cssVars:l?void 0:r,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var o;const{mergedClsPrefix:e}=this;return(o=this.onRender)===null||o===void 0||o.call(this),f("div",{class:[`${e}-notification`,this.themeClass,{[`${e}-notification--closable`]:this.closable,[`${e}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?f("div",{class:`${e}-notification__avatar`},this.avatar?E(this.avatar):this.type!=="default"?f(ke,{clsPrefix:e},{default:()=>Do[this.type]}):null):null,this.closable?f(pe,{clsPrefix:e,class:`${e}-notification__close`,onClick:this.handleCloseClick}):null,f("div",{ref:"bodyRef",class:`${e}-notification-main`},this.title?f("div",{class:`${e}-notification-main__header`},E(this.title)):null,this.description?f("div",{class:`${e}-notification-main__description`},E(this.description)):null,this.content?f("pre",{class:`${e}-notification-main__content`},E(this.content)):null,this.meta||this.action?f("div",{class:`${e}-notification-main-footer`},this.meta?f("div",{class:`${e}-notification-main-footer__meta`},E(this.meta)):null,this.action?f("div",{class:`${e}-notification-main-footer__action`},E(this.action)):null):null))}}),Uo=Object.assign(Object.assign({},de),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),Xo=w({name:"NotificationEnvironment",props:Object.assign(Object.assign({},Uo),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(o){const e=k(!0);let n=null;function i(){e.value=!1,n&&window.clearTimeout(n)}function l(t){W(()=>{t.style.height=`${t.offsetHeight}px`,t.style.maxHeight="0",t.style.transition="none",t.offsetHeight,t.style.transition="",t.style.maxHeight=t.style.height})}function r(t){t.style.height="",t.style.maxHeight="";const{onAfterEnter:u,onAfterShow:h}=o;u&&u(),h&&h()}function d(t){t.style.maxHeight=`${t.offsetHeight}px`,t.style.height=`${t.offsetHeight}px`,t.offsetHeight}function a(t){const{onHide:u}=o;u&&u(),t.style.maxHeight="0",t.offsetHeight}function s(){const{onAfterLeave:t,onInternalAfterLeave:u,onAfterHide:h,internalKey:p}=o;t&&t(),u(p),h&&h()}function c(){const{onClose:t}=o;t?Promise.resolve(t()).then(u=>{u!==!1&&i()}):i()}return he(()=>{o.duration&&(n=window.setTimeout(i,o.duration))}),{show:e,hide:i,handleClose:c,handleAfterLeave:s,handleLeave:a,handleBeforeLeave:d,handleAfterEnter:r,handleBeforeEnter:l}},render(){return f(ue,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?f(qo,Object.assign({},ye(this.$props,Vo),{onClose:this.handleClose})):null})}});var Go=y([m("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[y(">",[m("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[y(">",[m("scrollbar-container",`
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
 `,[X("top-right")]),v("top-left",`
 left: 0;
 top: 12px;
 `,[X("top-left")]),v("bottom-right",`
 right: 0;
 bottom: 12px;
 `,[X("bottom-right")]),v("bottom-left",`
 left: 0;
 bottom: 12px;
 `,[X("bottom-left")]),v("scrollable",[v("top-right",`
 top: 0;
 `),v("top-left",`
 top: 0;
 `),v("bottom-right",`
 bottom: 0;
 `),v("bottom-left",`
 bottom: 0;
 `)]),m("notification",[y("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-bottom: 0 !important;
 `),y("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),y("&.notification-transition-leave-active",`
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
 `,[O("avatar",[m("icon",{color:"var(--n-icon-color)"}),m("base-icon",{color:"var(--n-icon-color)"})]),v("show-avatar",[m("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),v("closable",[m("notification-main",[y("> *:first-child",{paddingRight:"20px"})]),O("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 font-size: var(--n-close-size);
 transition: color .3s var(--n-bezier);
 `)]),O("avatar",`
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
 `,[O("meta",`
 font-size: 12px;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),O("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),O("header",`
 font-weight: var(--n-title-font-weight);
 font-size: 16px;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),O("description",`
 margin-top: 8px;
 font-size: 12px;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),O("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[y("&:first-child",{margin:0})])])])])]);function X(o){const n=o.split("-")[1]==="left"?"calc(-100%)":"calc(100%)",i="0";return m("notification",[y("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${n}, 0);
 `),y("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(${i}, 0);
 `)])}const Jo=Q("n-notification-api"),Qo=Object.assign(Object.assign({},N.props),{containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"}});var Yo=w({name:"NotificationProvider",props:Qo,setup(o){const{mergedClsPrefixRef:e}=T(o),n=k([]),i={},l=new Set;function r(h){const p=ae(),L=()=>{l.add(p),i[p]&&i[p].hide()},z=ie(Object.assign(Object.assign({},h),{key:p,destroy:L,hide:L,deactivate:L})),{max:$}=o;if($&&n.value.length-l.size>=$){let R=!1,A=0;for(const _ of n.value){if(!l.has(_.key)){i[_.key]&&(_.destroy(),R=!0);break}A++}R||n.value.splice(A,1)}return n.value.push(z),z}const d=["info","success","warning","error"].map(h=>p=>r(Object.assign(Object.assign({},p),{type:h})));function a(h){l.delete(h),n.value.splice(n.value.findIndex(p=>p.key===h),1)}const s=N("Notification","-notification",Go,zo,o,e),c={create:r,info:d[0],success:d[1],warning:d[2],error:d[3],open:t,destroyAll:u};I(Jo,c),I(ce,{props:o,mergedClsPrefixRef:e,mergedThemeRef:s});function t(h){return r(h)}function u(){Object.values(n.value).forEach(h=>{h.hide()})}return Object.assign({mergedClsPrefix:e,notificationList:n,notificationRefs:i,handleAfterLeave:a},c)},render(){var o,e,n;return f(D,null,(e=(o=this.$slots).default)===null||e===void 0?void 0:e.call(o),this.notificationList.length?f(re,{to:(n=this.to)!==null&&n!==void 0?n:"body"},f(Ko,{style:this.containerStyle,scrollable:this.scrollable,placement:this.placement},{default:()=>this.notificationList.map(i=>f(Xo,Object.assign({ref:l=>{const r=i.key;l===null?delete this.notificationRefs[r]:this.notificationRefs[r]=l}},le(i,["destroy","hide","deactivate"]),{internalKey:i.key,onInternalAfterLeave:this.handleAfterLeave})))})):null)}});const Zo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},en=ve("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M112 184l144 144l144-144"},null,-1),on=[en];var nn=w({name:"ChevronDown",render:function(e,n){return K(),te("svg",Zo,on)}});const tn=["href"],rn=w({setup(o){const e=$e(),n=Re(),i=He(),{versionList:l,getVersion:r}=Ae(i),d=s=>f("div",{innerHTML:`${s.label}${s.remarks}`}),a=s=>{i.versionChange(s);const{path:c}=e;c!=="/theme"&&n.push("/theme")};return(s,c)=>{const t=Ie("router-link");return K(),ge(b(q),{justify:"space-between",align:"center",class:"app-header-container"},{default:x(()=>[C(b(q),{class:"header-logo"},{default:x(()=>{var u;return[C(t,{to:"/"},{default:x(()=>{var h;return[fe(V((h=b(r))==null?void 0:h.label),1)]}),_:1}),ve("span",null,V((u=b(r))==null?void 0:u.remarks),1)]}),_:1}),C(b(q),{justify:"space-between",align:"center"},{default:x(()=>[C(b(q),{justify:"space-between"},{default:x(()=>[(K(!0),te(D,null,Ne(b(Ee),u=>(K(),te("a",{key:u.name,href:u.url,target:"_blank"},V(u.name),9,tn))),128))]),_:1}),C(b(ro),{trigger:"hover",options:b(l),"render-label":d,"on-select":a},{default:x(()=>[C(b(ao),{text:"","icon-placement":"right"},{icon:x(()=>[C(b(so),{size:"16"},{default:x(()=>[C(b(nn))]),_:1})]),default:x(()=>{var u;return[fe(V((u=b(r))==null?void 0:u.label)+" ",1)]}),_:1})]),_:1},8,["options"])]),_:1})]),_:1})}}}),un=w({setup(o){return(e,n)=>(K(),ge(b(No),null,{default:x(()=>[C(b(Wo),null,{default:x(()=>[C(b(Yo),null,{default:x(()=>[C(b(po),null,{default:x(()=>[C(b(uo),{class:"app-main-container"},{default:x(()=>[C(b(Po),{style:{padding:"10px 24px"},bordered:""},{default:x(()=>[C(rn)]),_:1}),C(b(Be))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{un as default};
