import{d as C,r as x,h as f,p as I,i as K,j as ne,k as _,l as U,w as ze,v as Se,T as fe,n as W,m as te,q as ue,s as Pe,o as q,c as he,t as S,x as z,y as _e,z as ce,u as y,A as de,B as Re,C as $e,R as Ae}from"./vendor.7211bf26.js";import{T as Ie,O as Ne}from"./constant.90e48bd5.js";import{d as Ee,N as Be,a as He,b as Te,u as Me,c as Fe,e as ge,I as ve,S as me,W as pe,E as be,f as ee}from"./Space.8a57b6c8.js";import{c as ie,a as We,b as p,d as g,u as N,e as M,f as X,g as G,i as Ke,h as b,j,k as Ve,N as De,l as H,m as qe,n as Ue}from"./Button.ca97bbd7.js";import{k as xe,d as Xe,a as Ge,c as re,s as Je,f as Qe,m as Ce,r as T,N as ye,b as Ye,e as Ze,g as eo,h as oo}from"./context.38ddce23.js";import{l as no,p as to,f as io,N as ro}from"./Layout.edbdccc6.js";function ae(o,e=[],n){const i={};return Object.getOwnPropertyNames(o).forEach(r=>{e.includes(r)||(i[r]=o[r])}),Object.assign(i,n)}const ao=Object.assign(Object.assign({},Ee),{internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function}),so=C({name:"DialogEnvironment",props:Object.assign(Object.assign({},ao),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(o){const e=x(!0);function n(){o.onInternalAfterLeave(o.internalKey)}function i(c){const{onPositiveClick:t}=o;t?Promise.resolve(t(c)).then(u=>{u!==!1&&s()}):s()}function a(c){const{onNegativeClick:t}=o;t?Promise.resolve(t(c)).then(u=>{u!==!1&&s()}):s()}function r(){const{onClose:c}=o;c?Promise.resolve(c()).then(t=>{t!==!1&&s()}):s()}function l(c){const{onMaskClick:t,maskClosable:u}=o;t&&(t(c),u&&s())}function s(){e.value=!1}function d(c){e.value=c}return{show:e,hide:s,handleUpdateShow:d,handleAfterLeave:n,handleCloseClick:r,handleNegativeClick:a,handlePositiveClick:i,handleMaskClick:l}},render(){const{handlePositiveClick:o,handleUpdateShow:e,handleNegativeClick:n,handleCloseClick:i,handleAfterLeave:a,handleMaskClick:r,to:l,maskClosable:s,show:d}=this;return f(Te,{show:d,onUpdateShow:e,onMaskClick:r,to:l,maskClosable:s,onAfterLeave:a,internalAppear:!0,internalDialog:!0},{default:()=>f(Be,Object.assign({},xe(this.$props,He),{style:this.internalStyle,onClose:i,onNegativeClick:n,onPositiveClick:o}))})}}),lo={injectionKey:String,to:[String,Object]},co=C({name:"DialogProvider",props:lo,setup(){const o=x([]),e={};function n(s={}){const d=re(),c=ne(Object.assign(Object.assign({},s),{key:d,destroy:()=>{e[`n-dialog-${d}`].hide()}}));return o.value.push(c),c}const i=["info","success","warning","error"].map(s=>d=>n(Object.assign(Object.assign({},d),{type:s})));function a(s){const{value:d}=o;d.splice(d.findIndex(c=>c.key===s),1)}function r(){Object.values(e).forEach(s=>s.hide())}const l={create:n,destroyAll:r,info:i[0],success:i[1],warning:i[2],error:i[3]};return I(Xe,l),I(Ge,{clickedRef:Me(64),clickPositionRef:Fe()}),Object.assign(Object.assign({},l),{dialogList:o,dialogInstRefs:e,handleAfterLeave:a})},render(){var o,e;return f(K,null,[this.dialogList.map(n=>f(so,ae(n,["destroy","style"],{internalStyle:n.style,to:this.to,ref:i=>{i===null?delete this.dialogInstRefs[`n-dialog-${n.key}`]:this.dialogInstRefs[`n-dialog-${n.key}`]=i},internalKey:n.key,onInternalAfterLeave:this.handleAfterLeave}))),(e=(o=this.$slots).default)===null||e===void 0?void 0:e.call(o)])}}),fo=o=>{const{primaryColor:e,errorColor:n}=o;return{colorError:n,colorLoading:e,height:"2px"}},uo={name:"LoadingBar",common:ie,self:fo};var ho=uo,go={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 12px",closeSize:"16px",iconSize:"20px",fontSize:"14px"};const vo=o=>{const{textColor2:e,closeColor:n,closeColorHover:i,closeColorPressed:a,infoColor:r,successColor:l,errorColor:s,warningColor:d,popoverColor:c,boxShadow2:t,primaryColor:u,lineHeight:h,borderRadius:m}=o;return Object.assign(Object.assign({},go),{textColor:e,textColorInfo:e,textColorSuccess:e,textColorError:e,textColorWarning:e,textColorLoading:e,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:t,boxShadowInfo:t,boxShadowSuccess:t,boxShadowError:t,boxShadowWarning:t,boxShadowLoading:t,iconColor:e,iconColorInfo:r,iconColorSuccess:l,iconColorWarning:d,iconColorError:s,iconColorLoading:u,closeColor:n,closeColorHover:i,closeColorPressed:a,closeColorInfo:n,closeColorHoverInfo:i,closeColorPressedInfo:a,closeColorSuccess:n,closeColorHoverSuccess:i,closeColorPressedSuccess:a,closeColorError:n,closeColorHoverError:i,closeColorPressedError:a,closeColorWarning:n,closeColorHoverWarning:i,closeColorPressedWarning:a,closeColorLoading:n,closeColorHoverLoading:i,closeColorPressedLoading:a,loadingColor:u,lineHeight:h,borderRadius:m})},mo={name:"Message",common:ie,self:vo};var po=mo,bo={closeMargin:"18px 14px",closeSize:"16px",width:"365px",padding:"16px"};const xo=o=>{const{textColor2:e,successColor:n,infoColor:i,warningColor:a,errorColor:r,popoverColor:l,closeColor:s,closeColorHover:d,textColor1:c,textColor3:t,borderRadius:u,fontWeightStrong:h,boxShadow2:m,lineHeight:w,fontSize:k}=o;return Object.assign(Object.assign({},bo),{borderRadius:u,lineHeight:w,fontSize:k,headerFontWeight:h,iconColor:e,iconColorSuccess:n,iconColorInfo:i,iconColorWarning:a,iconColorError:r,color:l,textColor:e,closeColor:s,closeColorHover:d,closeColorPressed:s,headerTextColor:c,descriptionTextColor:t,actionTextColor:e,boxShadow:m})},Co=We({name:"Notification",common:ie,peers:{Scrollbar:Je},self:xo});var yo=Co,wo=p("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[g("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),g("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]);const Lo={position:to,inverted:Boolean,bordered:{type:Boolean,default:!1}};var jo=C({name:"LayoutHeader",props:Object.assign(Object.assign({},N.props),Lo),setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=M(o),i=N("Layout","-layout-header",wo,no,o,e),a=_(()=>{const{common:{cubicBezierEaseInOut:l},self:s}=i.value,d={"--n-bezier":l};return o.inverted?(d["--n-color"]=s.headerColorInverted,d["--n-text-color"]=s.textColorInverted,d["--n-border-color"]=s.headerBorderColorInverted):(d["--n-color"]=s.headerColor,d["--n-text-color"]=s.textColor,d["--n-border-color"]=s.headerBorderColor),d}),r=n?X("layout-header",_(()=>o.inverted?"a":"b"),a,o):void 0;return{mergedClsPrefix:e,cssVars:n?void 0:a,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var o;const{mergedClsPrefix:e}=this;return(o=this.onRender)===null||o===void 0||o.call(this),f("div",{class:[`${e}-layout-header`,this.themeClass,this.position&&`${e}-layout-header--${this.position}-positioned`,this.bordered&&`${e}-layout-header--bordered`],style:this.cssVars},this.$slots)}});const we=G("n-loading-bar"),ko=G("n-loading-bar-api");var Oo=p("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[Qe({enterDuration:"0.3s",leaveDuration:"0.8s"}),p("loading-bar",`
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `,[g("starting",`
 background: var(--n-color-loading);
 `),g("finishing",`
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `),g("error",`
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]),oe=globalThis&&globalThis.__awaiter||function(o,e,n,i){function a(r){return r instanceof n?r:new n(function(l){l(r)})}return new(n||(n=Promise))(function(r,l){function s(t){try{c(i.next(t))}catch(u){l(u)}}function d(t){try{c(i.throw(t))}catch(u){l(u)}}function c(t){t.done?r(t.value):a(t.value).then(s,d)}c((i=i.apply(o,e||[])).next())})};function V(o,e){return`${e}-loading-bar ${e}-loading-bar--${o}`}var zo=C({name:"LoadingBar",setup(o){const{inlineThemeDisabled:e}=M(),{props:n,mergedClsPrefixRef:i}=U(we),a=x(null),r=x(!1),l=x(!1),s=x(!1),d=x(!1);let c=!1;const t=x(!1),u=_(()=>{const{loadingBarStyle:v}=n;return v?v[t.value?"error":"loading"]:""});function h(){return oe(this,void 0,void 0,function*(){r.value=!1,s.value=!1,c=!1,t.value=!1,d.value=!0,yield W(),d.value=!1})}function m(v=0,E=80,B="starting"){return oe(this,void 0,void 0,function*(){yield h(),s.value=!0,l.value=!0,yield W();const L=a.value;!L||(L.style.maxWidth=`${v}%`,L.style.transition="none",L.offsetWidth,L.className=V(B,i.value),L.style.transition="",L.style.maxWidth=`${E}%`)})}function w(){if(c||t.value||!s.value)return;c=!0;const v=a.value;!v||(v.className=V("finishing",i.value),v.style.maxWidth="100%",v.offsetWidth,s.value=!1)}function k(){if(!(c||t.value))if(!s.value)m(100,100,"error").then(()=>{t.value=!0;const v=a.value;!v||(v.className=V("error",i.value),v.offsetWidth,s.value=!1)});else{t.value=!0;const v=a.value;if(!v)return;v.className=V("error",i.value),v.style.maxWidth="100%",v.offsetWidth,s.value=!1}}function R(){r.value=!0}function $(){r.value=!1}function A(){return oe(this,void 0,void 0,function*(){yield h()})}const P=N("LoadingBar","-loading-bar",Oo,ho,n,i),F=_(()=>{const{self:{height:v,colorError:E,colorLoading:B}}=P.value;return{"--n-height":v,"--n-color-loading":B,"--n-color-error":E}}),O=e?X("loading-bar",void 0,F,n):void 0;return{mergedClsPrefix:i,loadingBarRef:a,started:l,loading:s,entering:r,transitionDisabled:d,start:m,error:k,finish:w,handleEnter:R,handleAfterEnter:$,handleAfterLeave:A,mergedLoadingBarStyle:u,cssVars:e?void 0:F,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){if(!this.started)return null;const{mergedClsPrefix:o}=this;return f(fe,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var e;return(e=this.onRender)===null||e===void 0||e.call(this),ze(f("div",{class:[`${o}-loading-bar-container`,this.themeClass]},f("div",{ref:"loadingBarRef",class:[`${o}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[Se,this.loading||!this.loading&&this.entering]])}})}});const So=Object.assign(Object.assign({},N.props),{to:{type:[String,Object],default:void 0},loadingBarStyle:{type:Object}});var Po=C({name:"LoadingBarProvider",props:So,setup(o){const e=Ke(),n=x(null),i={start(){var r;e.value?(r=n.value)===null||r===void 0||r.start():W(()=>{var l;(l=n.value)===null||l===void 0||l.start()})},error(){var r;e.value?(r=n.value)===null||r===void 0||r.error():W(()=>{var l;(l=n.value)===null||l===void 0||l.error()})},finish(){var r;e.value?(r=n.value)===null||r===void 0||r.finish():W(()=>{var l;(l=n.value)===null||l===void 0||l.finish()})}},{mergedClsPrefixRef:a}=M(o);return I(ko,i),I(we,{props:o,mergedClsPrefixRef:a}),Object.assign(i,{loadingBarRef:n})},render(){var o,e,n;return f(K,null,f(te,{to:(o=this.to)!==null&&o!==void 0?o:"body"},f(zo,{ref:"loadingBarRef"})),(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}});const Le={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function};var _o=b([p("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[io({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),p("message",`
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
 `,[j("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),j("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(o=>g(`${o}-type`,[b("> *",`
 color: var(--n-icon-color-${o});
 transition: color .3s var(--n-bezier);
 `)])),b("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[Ve()])]),j("close",`
 font-size: var(--n-close-size);
 margin: var(--n-close-margin);
 transition: color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[b("&:hover",`
 color: var(--n-close-color-hover);
 `),b("&:active",`
 color: var(--n-close-color-pressed);
 `)])]),p("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[g("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),g("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),g("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),g("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),g("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),g("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]);const Ro={info:f(ve,null),success:f(me,null),warning:f(pe,null),error:f(be,null),default:null};var $o=C({name:"Message",props:Object.assign(Object.assign({},Le),{render:Function}),setup(o){const{inlineThemeDisabled:e}=M(),{props:n,mergedClsPrefixRef:i}=U(Ce),a=N("Message","-message",_o,po,n,i),r=_(()=>{const{type:s}=o,{common:{cubicBezierEaseInOut:d},self:{padding:c,margin:t,maxWidth:u,iconMargin:h,closeMargin:m,closeSize:w,iconSize:k,fontSize:R,lineHeight:$,borderRadius:A,iconColorInfo:P,iconColorSuccess:F,iconColorWarning:O,iconColorError:v,iconColorLoading:E,[H("textColor",s)]:B,[H("boxShadow",s)]:L,[H("color",s)]:J,[H("closeColor",s)]:Q,[H("closeColorPressed",s)]:Y,[H("closeColorHover",s)]:Z}}=a.value;return{"--n-bezier":d,"--n-margin":t,"--n-padding":c,"--n-max-width":u,"--n-font-size":R,"--n-icon-margin":h,"--n-icon-size":k,"--n-close-size":w,"--n-close-margin":m,"--n-text-color":B,"--n-color":J,"--n-box-shadow":L,"--n-icon-color-info":P,"--n-icon-color-success":F,"--n-icon-color-warning":O,"--n-icon-color-error":v,"--n-icon-color-loading":E,"--n-close-color":Q,"--n-close-color-pressed":Y,"--n-close-color-hover":Z,"--n-line-height":$,"--n-border-radius":A}}),l=e?X("message",_(()=>o.type[0]),r,{}):void 0;return{mergedClsPrefix:i,messageProviderProps:n,handleClose(){var s;(s=o.onClose)===null||s===void 0||s.call(o)},cssVars:e?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,placement:n.placement}},render(){const{render:o,type:e,closable:n,content:i,mergedClsPrefix:a,cssVars:r,themeClass:l,onRender:s,icon:d,handleClose:c,showIcon:t}=this;s==null||s();let u;return f("div",{class:[`${a}-message-wrapper`,l],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},r]},o?o(this.$props):f("div",{class:`${a}-message ${a}-message--${e}-type`},(u=Ao(d,e,a))&&t?f("div",{class:`${a}-message__icon ${a}-message__icon--${e}-type`},f(De,null,{default:()=>u})):null,f("div",{class:`${a}-message__content`},T(i)),n?f(ge,{clsPrefix:a,class:`${a}-message__close`,onClick:c}):null))}});function Ao(o,e,n){if(typeof o=="function")return o();{const i=e==="loading"?f(qe,{clsPrefix:n,strokeWidth:24,scale:.85}):Ro[e];return i?f(ye,{clsPrefix:n,key:e},{default:()=>i}):null}}var Io=C({name:"MessageEnvironment",props:Object.assign(Object.assign({},Le),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(o){let e=null;const n=x(!0);ue(()=>{i()});function i(){const{duration:t}=o;t&&(e=window.setTimeout(l,t))}function a(t){t.currentTarget===t.target&&e!==null&&(window.clearTimeout(e),e=null)}function r(t){t.currentTarget===t.target&&i()}function l(){const{onHide:t}=o;n.value=!1,e&&(window.clearTimeout(e),e=null),t&&t()}function s(){const{onClose:t}=o;t&&t(),l()}function d(){const{onAfterLeave:t,onInternalAfterLeave:u,onAfterHide:h,internalKey:m}=o;t&&t(),u&&u(m),h&&h()}function c(){l()}return{show:n,hide:l,handleClose:s,handleAfterLeave:d,handleMouseleave:r,handleMouseenter:a,deactivate:c}},render(){return f(Ue,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?f($o,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}});const No=Object.assign(Object.assign({},N.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]});var Eo=C({name:"MessageProvider",props:No,setup(o){const{mergedClsPrefixRef:e}=M(o),n=x([]),i=x({}),a={create(d,c){return r(d,Object.assign({type:"default"},c))},info(d,c){return r(d,Object.assign(Object.assign({},c),{type:"info"}))},success(d,c){return r(d,Object.assign(Object.assign({},c),{type:"success"}))},warning(d,c){return r(d,Object.assign(Object.assign({},c),{type:"warning"}))},error(d,c){return r(d,Object.assign(Object.assign({},c),{type:"error"}))},loading(d,c){return r(d,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:s};I(Ce,{props:o,mergedClsPrefixRef:e}),I(Ye,a);function r(d,c){const t=re(),u=ne(Object.assign(Object.assign({},c),{content:d,key:t,destroy:()=>{i.value[t].hide()}})),{max:h}=o;return h&&n.value.length>=h&&n.value.shift(),n.value.push(u),u}function l(d){n.value.splice(n.value.findIndex(c=>c.key===d),1),delete i.value[d]}function s(){Object.values(i.value).forEach(d=>{d.hide()})}return Object.assign({mergedClsPrefix:e,messageRefs:i,messageList:n,handleAfterLeave:l},a)},render(){var o,e,n;return f(K,null,(e=(o=this.$slots).default)===null||e===void 0?void 0:e.call(o),this.messageList.length?f(te,{to:(n=this.to)!==null&&n!==void 0?n:"body"},f("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(i=>f(Io,Object.assign({ref:a=>{a&&(this.messageRefs[i.key]=a)},internalKey:i.key,onInternalAfterLeave:this.handleAfterLeave},ae(i,["destroy"],void 0),{duration:i.duration===void 0?this.duration:i.duration,keepAliveOnHover:i.keepAliveOnHover===void 0?this.keepAliveOnHover:i.keepAliveOnHover,closable:i.closable===void 0?this.closable:i.closable}))))):null)}});const se=G("n-notification-provider"),Bo=C({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:o,mergedClsPrefixRef:e}=U(se);return{mergedTheme:o,mergedClsPrefix:e}},render(){const{$slots:o,scrollable:e,mergedClsPrefix:n,mergedTheme:i,placement:a}=this;return f("div",{class:[`${n}-notification-container`,e&&`${n}-notification-container--scrollable`,`${n}-notification-container--${a}`]},e?f(Ze,{theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar},o):o)}}),Ho={info:f(ve,null),success:f(me,null),warning:f(pe,null),error:f(be,null),default:null},le={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0}},To=eo(le),Mo=C({name:"Notification",props:le,setup(o){const{mergedClsPrefixRef:e,mergedThemeRef:n,props:i}=U(se),{inlineThemeDisabled:a}=M(),r=_(()=>{const{type:s}=o,{self:{color:d,textColor:c,closeColor:t,closeColorHover:u,closeColorPressed:h,headerTextColor:m,descriptionTextColor:w,actionTextColor:k,borderRadius:R,headerFontWeight:$,boxShadow:A,lineHeight:P,fontSize:F,closeMargin:O,closeSize:v,width:E,padding:B,[H("iconColor",s)]:L},common:{cubicBezierEaseOut:J,cubicBezierEaseIn:Q,cubicBezierEaseInOut:Y}}=n.value,{left:Z,right:je,top:ke,bottom:Oe}=oo(B);return{"--n-color":d,"--n-font-size":F,"--n-text-color":c,"--n-description-text-color":w,"--n-action-text-color":k,"--n-title-text-color":m,"--n-title-font-weight":$,"--n-bezier":Y,"--n-bezier-ease-out":J,"--n-bezier-ease-in":Q,"--n-border-radius":R,"--n-box-shadow":A,"--n-close-color":t,"--n-close-color-hover":u,"--n-close-color-pressed":h,"--n-line-height":P,"--n-icon-color":L,"--n-close-margin":O,"--n-close-size":v,"--n-width":E,"--n-padding-left":Z,"--n-padding-right":je,"--n-padding-top":ke,"--n-padding-bottom":Oe}}),l=a?X("notification",_(()=>o.type[0]),r,i):void 0;return{mergedClsPrefix:e,showAvatar:_(()=>o.avatar||o.type!=="default"),handleCloseClick(){o.onClose()},cssVars:a?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var o;const{mergedClsPrefix:e}=this;return(o=this.onRender)===null||o===void 0||o.call(this),f("div",{class:[`${e}-notification`,this.themeClass,{[`${e}-notification--closable`]:this.closable,[`${e}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?f("div",{class:`${e}-notification__avatar`},this.avatar?T(this.avatar):this.type!=="default"?f(ye,{clsPrefix:e},{default:()=>Ho[this.type]}):null):null,this.closable?f(ge,{clsPrefix:e,class:`${e}-notification__close`,onClick:this.handleCloseClick}):null,f("div",{ref:"bodyRef",class:`${e}-notification-main`},this.title?f("div",{class:`${e}-notification-main__header`},T(this.title)):null,this.description?f("div",{class:`${e}-notification-main__description`},T(this.description)):null,this.content?f("pre",{class:`${e}-notification-main__content`},T(this.content)):null,this.meta||this.action?f("div",{class:`${e}-notification-main-footer`},this.meta?f("div",{class:`${e}-notification-main-footer__meta`},T(this.meta)):null,this.action?f("div",{class:`${e}-notification-main-footer__action`},T(this.action)):null):null))}}),Fo=Object.assign(Object.assign({},le),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),Wo=C({name:"NotificationEnvironment",props:Object.assign(Object.assign({},Fo),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(o){const e=x(!0);let n=null;function i(){e.value=!1,n&&window.clearTimeout(n)}function a(t){W(()=>{t.style.height=`${t.offsetHeight}px`,t.style.maxHeight="0",t.style.transition="none",t.offsetHeight,t.style.transition="",t.style.maxHeight=t.style.height})}function r(t){t.style.height="",t.style.maxHeight="";const{onAfterEnter:u,onAfterShow:h}=o;u&&u(),h&&h()}function l(t){t.style.maxHeight=`${t.offsetHeight}px`,t.style.height=`${t.offsetHeight}px`,t.offsetHeight}function s(t){const{onHide:u}=o;u&&u(),t.style.maxHeight="0",t.offsetHeight}function d(){const{onAfterLeave:t,onInternalAfterLeave:u,onAfterHide:h,internalKey:m}=o;t&&t(),u(m),h&&h()}function c(){const{onClose:t}=o;t?Promise.resolve(t()).then(u=>{u!==!1&&i()}):i()}return ue(()=>{o.duration&&(n=window.setTimeout(i,o.duration))}),{show:e,hide:i,handleClose:c,handleAfterLeave:d,handleLeave:s,handleBeforeLeave:l,handleAfterEnter:r,handleBeforeEnter:a}},render(){return f(fe,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?f(Mo,Object.assign({},xe(this.$props,To),{onClose:this.handleClose})):null})}});var Ko=b([p("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[b(">",[p("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[b(">",[p("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[p("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),g("top-right, bottom-right",[p("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),g("top-left, bottom-left",[p("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),g("top-right",`
 right: 0;
 top: 12px;
 `,[D("top-right")]),g("top-left",`
 left: 0;
 top: 12px;
 `,[D("top-left")]),g("bottom-right",`
 right: 0;
 bottom: 12px;
 `,[D("bottom-right")]),g("bottom-left",`
 left: 0;
 bottom: 12px;
 `,[D("bottom-left")]),g("scrollable",[g("top-right",`
 top: 0;
 `),g("top-left",`
 top: 0;
 `),g("bottom-right",`
 bottom: 0;
 `),g("bottom-left",`
 bottom: 0;
 `)]),p("notification",[b("&.notification-transition-enter-from, &.notification-transition-leave-to",`
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
 `)]),p("notification",`
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
 `,[j("avatar",[p("icon",{color:"var(--n-icon-color)"}),p("base-icon",{color:"var(--n-icon-color)"})]),g("show-avatar",[p("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),g("closable",[p("notification-main",[b("> *:first-child",{paddingRight:"20px"})]),j("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 font-size: var(--n-close-size);
 transition: color .3s var(--n-bezier);
 `)]),j("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[p("icon",{transition:"color .3s var(--n-bezier)"})]),p("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[p("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[j("meta",`
 font-size: 12px;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),j("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),j("header",`
 font-weight: var(--n-title-font-weight);
 font-size: 16px;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),j("description",`
 margin-top: 8px;
 font-size: 12px;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),j("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[b("&:first-child",{margin:0})])])])])]);function D(o){const n=o.split("-")[1]==="left"?"calc(-100%)":"calc(100%)",i="0";return p("notification",[b("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${n}, 0);
 `),b("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(${i}, 0);
 `)])}const Vo=G("n-notification-api"),Do=Object.assign(Object.assign({},N.props),{containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"}});var qo=C({name:"NotificationProvider",props:Do,setup(o){const{mergedClsPrefixRef:e}=M(o),n=x([]),i={},a=new Set;function r(h){const m=re(),w=()=>{a.add(m),i[m]&&i[m].hide()},k=ne(Object.assign(Object.assign({},h),{key:m,destroy:w,hide:w,deactivate:w})),{max:R}=o;if(R&&n.value.length-a.size>=R){let $=!1,A=0;for(const P of n.value){if(!a.has(P.key)){i[P.key]&&(P.destroy(),$=!0);break}A++}$||n.value.splice(A,1)}return n.value.push(k),k}const l=["info","success","warning","error"].map(h=>m=>r(Object.assign(Object.assign({},m),{type:h})));function s(h){a.delete(h),n.value.splice(n.value.findIndex(m=>m.key===h),1)}const d=N("Notification","-notification",Ko,yo,o,e),c={create:r,info:l[0],success:l[1],warning:l[2],error:l[3],open:t,destroyAll:u};I(Vo,c),I(se,{props:o,mergedClsPrefixRef:e,mergedThemeRef:d});function t(h){return r(h)}function u(){Object.values(n.value).forEach(h=>{h.hide()})}return Object.assign({mergedClsPrefix:e,notificationList:n,notificationRefs:i,handleAfterLeave:s},c)},render(){var o,e,n;return f(K,null,(e=(o=this.$slots).default)===null||e===void 0?void 0:e.call(o),this.notificationList.length?f(te,{to:(n=this.to)!==null&&n!==void 0?n:"body"},f(Bo,{style:this.containerStyle,scrollable:this.scrollable,placement:this.placement},{default:()=>this.notificationList.map(i=>f(Wo,Object.assign({ref:a=>{const r=i.key;a===null?delete this.notificationRefs[r]:this.notificationRefs[r]=a}},ae(i,["destroy","hide","deactivate"]),{internalKey:i.key,onInternalAfterLeave:this.handleAfterLeave})))})):null)}});const Uo=$e("span",null,"\uFF08\u9002\u7528\u4E8E Vant 3\uFF09",-1),Xo=["href"],Go=C({setup(o){return(e,n)=>{const i=Pe("router-link");return q(),he(y(ee),{justify:"space-between",align:"center",class:"app-header-container"},{default:S(()=>[z(y(ee),{class:"header-logo"},{default:S(()=>[z(i,{to:"/"},{default:S(()=>[_e(ce(y(Ie)),1)]),_:1}),Uo]),_:1}),z(y(ee),{justify:"space-between"},{default:S(()=>[(q(!0),de(K,null,Re(y(Ne),a=>(q(),de("a",{key:a.name,href:a.url,target:"_blank"},ce(a.name),9,Xo))),128))]),_:1})]),_:1})}}}),nn=C({setup(o){return(e,n)=>(q(),he(y(Po),null,{default:S(()=>[z(y(Eo),null,{default:S(()=>[z(y(qo),null,{default:S(()=>[z(y(co),null,{default:S(()=>[z(y(ro),{class:"app-main-container"},{default:S(()=>[z(y(jo),{style:{padding:"10px 24px"},bordered:""},{default:S(()=>[z(Go)]),_:1}),z(y(Ae))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{nn as default};
