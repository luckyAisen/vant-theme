import{ac as tt,L as at,f as p,n as C,o as u,p as ot,M as nt,N as it,w as ye,V as De,v as lt,b as st,ad as pe,j as dt,ae as ut,g as F,af as X,h as ct,u as ke,ag as ht,ah as ft,ai as Pe,R as vt,i as pt,S as ae,z as mt,aj as gt,I as Me,t as me,B as bt,T as w,K as ze,d as yt,ak as $e,y as wt}from"./context.a7ef65c1.js";import{m as ne,l as M,b as I,i as a,L as Re,r as y,s as xt,S as Ct,U as Fe,M as Ae,p as St,j as Pt,n as Mt}from"./vendor.eaef4322.js";const zt={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},Transfer:{sourceTitle:"Source",targetTitle:"Target"},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)"}};var Ft=zt;function ge(e){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):e.defaultWidth,d=e.formats[o]||e.formats[e.defaultWidth];return d}}function Y(e){return function(i,o){var d=o||{},c=d.context?String(d.context):"standalone",l;if(c==="formatting"&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,h=d.width?String(d.width):n;l=e.formattingValues[h]||e.formattingValues[n]}else{var S=e.defaultWidth,b=d.width?String(d.width):e.defaultWidth;l=e.values[b]||e.values[S]}var g=e.argumentCallback?e.argumentCallback(i):i;return l[g]}}function At(e){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=i.match(e.matchPattern);if(!d)return null;var c=d[0],l=i.match(e.parsePattern);if(!l)return null;var n=e.valueCallback?e.valueCallback(l[0]):l[0];n=o.valueCallback?o.valueCallback(n):n;var h=i.slice(c.length);return{value:n,rest:h}}}function J(e){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=o.width,c=d&&e.matchPatterns[d]||e.matchPatterns[e.defaultMatchWidth],l=i.match(c);if(!l)return null;var n=l[0],h=d&&e.parsePatterns[d]||e.parsePatterns[e.defaultParseWidth],S=Array.isArray(h)?Dt(h,function(x){return x.test(n)}):Tt(h,function(x){return x.test(n)}),b;b=e.valueCallback?e.valueCallback(S):S,b=o.valueCallback?o.valueCallback(b):b;var g=i.slice(n.length);return{value:b,rest:g}}}function Tt(e,i){for(var o in e)if(e.hasOwnProperty(o)&&i(e[o]))return o}function Dt(e,i){for(var o=0;o<e.length;o++)if(i(e[o]))return o}var kt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},$t=function(e,i,o){var d,c=kt[e];return typeof c=="string"?d=c:i===1?d=c.one:d=c.other.replace("{{count}}",i.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+d:d+" ago":d},Rt=$t,Wt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Et={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},_t={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Bt={date:ge({formats:Wt,defaultWidth:"full"}),time:ge({formats:Et,defaultWidth:"full"}),dateTime:ge({formats:_t,defaultWidth:"full"})},Lt=Bt,It={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Vt=function(e,i,o,d){return It[e]},Nt=Vt,Ot={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},jt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ht={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ut={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Kt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Xt=function(e,i){var o=Number(e),d=o%100;if(d>20||d<10)switch(d%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},Yt={ordinalNumber:Xt,era:Y({values:Ot,defaultWidth:"wide"}),quarter:Y({values:jt,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Y({values:Ht,defaultWidth:"wide"}),day:Y({values:Ut,defaultWidth:"wide"}),dayPeriod:Y({values:Kt,defaultWidth:"wide",formattingValues:qt,defaultFormattingWidth:"wide"})},Jt=Yt,Qt=/^(\d+)(th|st|nd|rd)?/i,Zt=/\d+/i,Gt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ea={any:[/^b/i,/^(a|c)/i]},ra={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ta={any:[/1/i,/2/i,/3/i,/4/i]},aa={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},oa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},na={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ia={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},la={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},sa={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},da={ordinalNumber:At({matchPattern:Qt,parsePattern:Zt,valueCallback:function(e){return parseInt(e,10)}}),era:J({matchPatterns:Gt,defaultMatchWidth:"wide",parsePatterns:ea,defaultParseWidth:"any"}),quarter:J({matchPatterns:ra,defaultMatchWidth:"wide",parsePatterns:ta,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:J({matchPatterns:aa,defaultMatchWidth:"wide",parsePatterns:oa,defaultParseWidth:"any"}),day:J({matchPatterns:na,defaultMatchWidth:"wide",parsePatterns:ia,defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:la,defaultMatchWidth:"any",parsePatterns:sa,defaultParseWidth:"any"})},ua=da,ca={code:"en-US",formatDistance:Rt,formatLong:Lt,formatRelative:Nt,localize:Jt,match:ua,options:{weekStartsOn:0,firstWeekContainsDate:1}},ha=ca;const fa={name:"en-US",locale:ha};var va=fa;function pa(e){const{mergedLocaleRef:i,mergedDateLocaleRef:o}=ne(tt,null)||{},d=M(()=>{var l,n;return(n=(l=i==null?void 0:i.value)===null||l===void 0?void 0:l[e])!==null&&n!==void 0?n:Ft[e]});return{dateLocaleRef:M(()=>{var l;return(l=o==null?void 0:o.value)!==null&&l!==void 0?l:va}),localeRef:d}}var ma=I({name:"Eye",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),a("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),ga=I({name:"EyeOff",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),a("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),a("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),a("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),a("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),ba=I({name:"ChevronDown",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),ya=at("clear",a("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),wa=p("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[C(">",[u("clear",`
 font-size: var(--n-clear-size);
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 `,[C("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),C("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),u("placeholder",`
 display: flex;
 `),u("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ot({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),be=I({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return nt("-base-clear",wa,Re(e,"clsPrefix")),{handleMouseDown(i){i.preventDefault()}}},render(){const{clsPrefix:e}=this;return a("div",{class:`${e}-base-clear`},a(it,null,{default:()=>{var i,o;return this.show?a(ye,{clsPrefix:e,key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},{default:()=>a(ya,null)}):a("div",{key:"icon",class:`${e}-base-clear__placeholder`},(o=(i=this.$slots).default)===null||o===void 0?void 0:o.call(i))}}))}}),xa=I({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:i}){return()=>{const{clsPrefix:o}=e;return a(lt,{clsPrefix:o,class:`${o}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?a(be,{clsPrefix:o,show:e.showClear,onClear:e.onClear},{default:()=>a(ye,{clsPrefix:o,class:`${o}-base-suffix__arrow`},{default:()=>De(i.default,()=>[a(ba,null)])})}):null})}}}),Ca={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const Sa=e=>{const{textColor2:i,textColor3:o,textColorDisabled:d,primaryColor:c,primaryColorHover:l,inputColor:n,inputColorDisabled:h,borderColor:S,warningColor:b,warningColorHover:g,errorColor:x,errorColorHover:z,borderRadius:ie,lineHeight:k,fontSizeTiny:le,fontSizeSmall:P,fontSizeMedium:$,fontSizeLarge:N,heightTiny:T,heightSmall:se,heightMedium:D,heightLarge:R,actionColor:A,clearColor:W,clearColorHover:O,clearColorPressed:j,placeholderColor:de,placeholderColorDisabled:ue,iconColor:H,iconColorDisabled:ce,iconColorHover:U,iconColorPressed:E}=e;return Object.assign(Object.assign({},Ca),{countTextColor:o,heightTiny:T,heightSmall:se,heightMedium:D,heightLarge:R,fontSizeTiny:le,fontSizeSmall:P,fontSizeMedium:$,fontSizeLarge:N,lineHeight:k,lineHeightTextarea:k,borderRadius:ie,iconSize:"16px",groupLabelColor:A,groupLabelTextColor:i,textColor:i,textColorDisabled:d,textDecorationColor:i,caretColor:c,placeholderColor:de,placeholderColorDisabled:ue,color:n,colorDisabled:h,colorFocus:n,groupLabelBorder:`1px solid ${S}`,border:`1px solid ${S}`,borderHover:`1px solid ${l}`,borderDisabled:`1px solid ${S}`,borderFocus:`1px solid ${l}`,boxShadowFocus:`0 0 0 2px ${pe(c,{alpha:.2})}`,loadingColor:c,loadingColorWarning:b,borderWarning:`1px solid ${b}`,borderHoverWarning:`1px solid ${g}`,colorFocusWarning:n,borderFocusWarning:`1px solid ${g}`,boxShadowFocusWarning:`0 0 0 2px ${pe(b,{alpha:.2})}`,caretColorWarning:b,loadingColorError:x,borderError:`1px solid ${x}`,borderHoverError:`1px solid ${z}`,colorFocusError:n,borderFocusError:`1px solid ${z}`,boxShadowFocusError:`0 0 0 2px ${pe(x,{alpha:.2})}`,caretColorError:x,clearColor:W,clearColorHover:O,clearColorPressed:j,iconColor:H,iconColorDisabled:ce,iconColorHover:U,iconColorPressed:E,suffixTextColor:i})},Pa={name:"Input",common:st,self:Sa};var Ma=Pa;const We=dt("n-input");function za(e){let i=0;for(const o of e)i++;return i}function oe(e){return["",void 0,null].includes(e)}var Te=I({name:"InputWordCount",setup(e,{slots:i}){const{mergedValueRef:o,maxlengthRef:d,mergedClsPrefixRef:c}=ne(We),l=M(()=>{const{value:n}=o;return n===null||Array.isArray(n)?0:za(n)});return()=>{const{value:n}=d,{value:h}=o;return a("span",{class:`${c.value}-input-word-count`},ut(i.default,{value:h===null||Array.isArray(h)?"":h},()=>[n===void 0?l.value:`${l.value} / ${n}`]))}}}),Fa=p("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[u("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),u("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),u("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),C("&::placeholder","color: #0000;"),C("&:-webkit-autofill ~",[u("placeholder","display: none;")])]),F("round",[X("textarea","border-radius: calc(var(--n-height) / 2);")]),u("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[C("span",`
 width: 100%;
 display: inline-block;
 `)]),F("textarea",[u("placeholder","overflow: visible;")]),X("autosize","width: 100%;"),F("autosize",[u("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),p("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),u("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),u("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[C("+",[u("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),X("textarea",[u("placeholder","white-space: nowrap;")]),u("eye",`
 transition: color .3s var(--n-bezier);
 `),F("textarea","width: 100%;",[p("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),F("resizable",[p("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),u("textarea",`
 position: static;
 `),u("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 left: var(--n-padding-left);
 right: var(--n-padding-right);
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),u("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),F("pair",[u("input-el, placeholder","text-align: center;"),u("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[p("icon",`
 color: var(--n-icon-color);
 `),p("base-icon",`
 color: var(--n-icon-color);
 `)])]),F("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[u("border","border: var(--n-border-disabled);"),u("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),u("placeholder","color: var(--n-placeholder-color-disabled);"),u("separator","color: var(--n-text-color-disabled);",[p("icon",`
 color: var(--n-icon-color-disabled);
 `),p("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),u("suffix, prefix","color: var(--n-text-color-disabled);",[p("icon",`
 color: var(--n-icon-color-disabled);
 `),p("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),X("disabled",[u("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[C("&:hover",`
 color: var(--n-icon-color-hover);
 `),C("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),C("&:hover",[u("state-border","border: var(--n-border-hover);")]),F("focus","background-color: var(--n-color-focus);",[u("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),u("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),u("state-border",`
 border-color: #0000;
 z-index: 1;
 `),u("prefix","margin-right: 4px;"),u("suffix",`
 margin-left: 4px;
 `),u("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[p("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),p("base-clear",`
 font-size: var(--n-icon-size);
 `,[u("placeholder",[p("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),p("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `),p("base-icon",`
 font-size: var(--n-icon-size);
 `)]),p("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>F(`${e}-status`,[X("disabled",[p("base-loading",`
 color: var(--n-loading-color-${e})
 `),u("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),u("state-border",`
 border: var(--n-border-${e});
 `),C("&:hover",[u("state-border",`
 border: var(--n-border-hover-${e});
 `)]),C("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[u("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),F("focus",`
 background-color: var(--n-color-focus-${e});
 `,[u("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]);const Aa=Object.assign(Object.assign({},ke.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var ka=I({name:"Input",props:Aa,setup(e){const{mergedClsPrefixRef:i,mergedBorderedRef:o,inlineThemeDisabled:d,mergedRtlRef:c}=ct(e),l=ke("Input","-input",Fa,Ma,e,i),n=y(null),h=y(null),S=y(null),b=y(null),g=y(null),x=y(null),z=y(null),{localeRef:ie}=pa("Input"),k=y(e.defaultValue),le=Re(e,"value"),P=ht(le,k),$=ft(e),{mergedSizeRef:N,mergedDisabledRef:T,mergedStatusRef:se}=$,D=y(!1),R=y(!1),A=y(!1),W=y(!1);let O=null;const j=M(()=>{const{placeholder:r,pair:t}=e;return t?Array.isArray(r)?r:r===void 0?["",""]:[r,r]:r===void 0?[ie.value.placeholder]:[r]}),de=M(()=>{const{value:r}=A,{value:t}=P,{value:s}=j;return!r&&(oe(t)||Array.isArray(t)&&oe(t[0]))&&s[0]}),ue=M(()=>{const{value:r}=A,{value:t}=P,{value:s}=j;return!r&&s[1]&&(oe(t)||Array.isArray(t)&&oe(t[1]))}),H=Pe(()=>e.internalForceFocus||D.value),ce=Pe(()=>{if(T.value||e.readonly||!e.clearable||!H.value&&!R.value)return!1;const{value:r}=P,{value:t}=H;return e.pair?!!(Array.isArray(r)&&(r[0]||r[1]))&&(R.value||t):!!r&&(R.value||t)}),U=M(()=>{const{showPasswordOn:r}=e;if(r)return r;if(e.showPasswordToggle)return"click"}),E=y(!1),Ee=M(()=>{const{textDecoration:r}=e;return r?Array.isArray(r)?r.map(t=>({textDecoration:t})):[{textDecoration:r}]:["",""]}),we=y(void 0),_e=()=>{var r,t;if(e.type==="textarea"){const{autosize:s}=e;if(s&&(we.value=(t=(r=z.value)===null||r===void 0?void 0:r.$el)===null||t===void 0?void 0:t.offsetWidth),!h.value||typeof s=="boolean")return;const{paddingTop:f,paddingBottom:v,lineHeight:m}=window.getComputedStyle(h.value),_=Number(f.slice(0,-2)),B=Number(v.slice(0,-2)),L=Number(m.slice(0,-2)),{value:K}=S;if(!K)return;if(s.minRows){const q=Math.max(s.minRows,1),ve=`${_+B+L*q}px`;K.style.minHeight=ve}if(s.maxRows){const q=`${_+B+L*s.maxRows}px`;K.style.maxHeight=q}}},Be=M(()=>{const{maxlength:r}=e;return r===void 0?void 0:Number(r)});xt(()=>{const{value:r}=P;Array.isArray(r)||fe(r)});const Le=Ct().proxy;function Q(r){const{onUpdateValue:t,"onUpdate:value":s,onInput:f}=e,{nTriggerFormInput:v}=$;t&&w(t,r),s&&w(s,r),f&&w(f,r),k.value=r,v()}function Z(r){const{onChange:t}=e,{nTriggerFormChange:s}=$;t&&w(t,r),k.value=r,s()}function Ie(r){const{onBlur:t}=e,{nTriggerFormBlur:s}=$;t&&w(t,r),s()}function Ve(r){const{onFocus:t}=e,{nTriggerFormFocus:s}=$;t&&w(t,r),s()}function Ne(r){const{onClear:t}=e;t&&w(t,r)}function Oe(r){const{onInputBlur:t}=e;t&&w(t,r)}function je(r){const{onInputFocus:t}=e;t&&w(t,r)}function He(){const{onDeactivate:r}=e;r&&w(r)}function Ue(){const{onActivate:r}=e;r&&w(r)}function Ke(r){const{onClick:t}=e;t&&w(t,r)}function qe(r){const{onWrapperFocus:t}=e;t&&w(t,r)}function Xe(r){const{onWrapperBlur:t}=e;t&&w(t,r)}function Ye(){A.value=!0}function Je(r){A.value=!1,r.target===x.value?G(r,1):G(r,0)}function G(r,t=0,s="input"){const f=r.target.value;if(fe(f),e.type==="textarea"){const{value:m}=z;m&&m.syncUnifiedContainer()}if(O=f,A.value)return;const v=f;if(!e.pair)s==="input"?Q(v):Z(v);else{let{value:m}=P;Array.isArray(m)?m=[...m]:m=["",""],m[t]=v,s==="input"?Q(m):Z(m)}Le.$forceUpdate()}function Qe(r){Oe(r),r.relatedTarget===n.value&&He(),r.relatedTarget!==null&&(r.relatedTarget===g.value||r.relatedTarget===x.value||r.relatedTarget===h.value)||(W.value=!1),ee(r,"blur")}function Ze(r){je(r),D.value=!0,W.value=!0,Ue(),ee(r,"focus")}function Ge(r){e.passivelyActivated&&(Xe(r),ee(r,"blur"))}function er(r){e.passivelyActivated&&(D.value=!0,qe(r),ee(r,"focus"))}function ee(r,t){r.relatedTarget!==null&&(r.relatedTarget===g.value||r.relatedTarget===x.value||r.relatedTarget===h.value||r.relatedTarget===n.value)||(t==="focus"?(Ve(r),D.value=!0):t==="blur"&&(Ie(r),D.value=!1))}function rr(r,t){G(r,t,"change")}function tr(r){Ke(r)}function ar(r){Ne(r),e.pair?(Q(["",""]),Z(["",""])):(Q(""),Z(""))}function or(r){const{onMousedown:t}=e;t&&t(r);const{tagName:s}=r.target;if(s!=="INPUT"&&s!=="TEXTAREA"){if(e.resizable){const{value:f}=n;if(f){const{left:v,top:m,width:_,height:B}=f.getBoundingClientRect(),L=14;if(v+_-L<r.clientX&&r.clientY<v+_&&m+B-L<r.clientY&&r.clientY<m+B)return}}r.preventDefault(),D.value||xe()}}function nr(){var r;R.value=!0,e.type==="textarea"&&((r=z.value)===null||r===void 0||r.handleMouseEnterWrapper())}function ir(){var r;R.value=!1,e.type==="textarea"&&((r=z.value)===null||r===void 0||r.handleMouseLeaveWrapper())}function lr(){T.value||U.value==="click"&&(E.value=!E.value)}function sr(r){if(T.value)return;r.preventDefault();const t=f=>{f.preventDefault(),ze("mouseup",document,t)};if(Me("mouseup",document,t),U.value!=="mousedown")return;E.value=!0;const s=()=>{E.value=!1,ze("mouseup",document,s)};Me("mouseup",document,s)}function dr(r){var t;switch((t=e.onKeydown)===null||t===void 0||t.call(e,r),r.code){case"Escape":he();break;case"Enter":case"NumpadEnter":ur(r);break}}function ur(r){var t,s;if(e.passivelyActivated){const{value:f}=W;if(f){e.internalDeactivateOnEnter&&he();return}r.preventDefault(),e.type==="textarea"?(t=h.value)===null||t===void 0||t.focus():(s=g.value)===null||s===void 0||s.focus()}}function he(){e.passivelyActivated&&(W.value=!1,Mt(()=>{var r;(r=n.value)===null||r===void 0||r.focus()}))}function xe(){var r,t,s;T.value||(e.passivelyActivated?(r=n.value)===null||r===void 0||r.focus():((t=h.value)===null||t===void 0||t.focus(),(s=g.value)===null||s===void 0||s.focus()))}function cr(){var r;!((r=n.value)===null||r===void 0)&&r.contains(document.activeElement)&&document.activeElement.blur()}function hr(){var r,t;(r=h.value)===null||r===void 0||r.select(),(t=g.value)===null||t===void 0||t.select()}function fr(){T.value||(h.value?h.value.focus():g.value&&g.value.focus())}function vr(){const{value:r}=n;(r==null?void 0:r.contains(document.activeElement))&&r!==document.activeElement&&he()}function fe(r){const{type:t,pair:s,autosize:f}=e;if(!s&&f)if(t==="textarea"){const{value:v}=S;v&&(v.textContent=(r!=null?r:"")+`\r
`)}else{const{value:v}=b;v&&(r?v.textContent=r:v.innerHTML="&nbsp;")}}function pr(){_e()}const Ce=y({top:"0"});function mr(r){var t;const{scrollTop:s}=r.target;Ce.value.top=`${-s}px`,(t=z.value)===null||t===void 0||t.syncUnifiedContainer()}let re=null;Fe(()=>{const{autosize:r,type:t}=e;r&&t==="textarea"?re=Ae(P,s=>{!Array.isArray(s)&&s!==O&&fe(s)}):re==null||re()});let te=null;Fe(()=>{e.type==="textarea"?te=Ae(P,r=>{var t;!Array.isArray(r)&&r!==O&&((t=z.value)===null||t===void 0||t.syncUnifiedContainer())}):te==null||te()}),St(We,{mergedValueRef:P,maxlengthRef:Be,mergedClsPrefixRef:i});const gr={wrapperElRef:n,inputElRef:g,textareaElRef:h,isCompositing:A,focus:xe,blur:cr,select:hr,deactivate:vr,activate:fr},br=vt("Input",c,i),Se=M(()=>{const{value:r}=N,{common:{cubicBezierEaseInOut:t},self:{color:s,borderRadius:f,textColor:v,caretColor:m,caretColorError:_,caretColorWarning:B,textDecorationColor:L,border:K,borderDisabled:q,borderHover:ve,borderFocus:yr,placeholderColor:wr,placeholderColorDisabled:xr,lineHeightTextarea:Cr,colorDisabled:Sr,colorFocus:Pr,textColorDisabled:Mr,boxShadowFocus:zr,iconSize:Fr,colorFocusWarning:Ar,boxShadowFocusWarning:Tr,borderWarning:Dr,borderFocusWarning:kr,borderHoverWarning:$r,colorFocusError:Rr,boxShadowFocusError:Wr,borderError:Er,borderFocusError:_r,borderHoverError:Br,clearSize:Lr,clearColor:Ir,clearColorHover:Vr,clearColorPressed:Nr,iconColor:Or,iconColorDisabled:jr,suffixTextColor:Hr,countTextColor:Ur,iconColorHover:Kr,iconColorPressed:qr,loadingColor:Xr,loadingColorError:Yr,loadingColorWarning:Jr,[me("padding",r)]:Qr,[me("fontSize",r)]:Zr,[me("height",r)]:Gr}}=l.value,{left:et,right:rt}=bt(Qr);return{"--n-bezier":t,"--n-count-text-color":Ur,"--n-color":s,"--n-font-size":Zr,"--n-border-radius":f,"--n-height":Gr,"--n-padding-left":et,"--n-padding-right":rt,"--n-text-color":v,"--n-caret-color":m,"--n-text-decoration-color":L,"--n-border":K,"--n-border-disabled":q,"--n-border-hover":ve,"--n-border-focus":yr,"--n-placeholder-color":wr,"--n-placeholder-color-disabled":xr,"--n-icon-size":Fr,"--n-line-height-textarea":Cr,"--n-color-disabled":Sr,"--n-color-focus":Pr,"--n-text-color-disabled":Mr,"--n-box-shadow-focus":zr,"--n-loading-color":Xr,"--n-caret-color-warning":B,"--n-color-focus-warning":Ar,"--n-box-shadow-focus-warning":Tr,"--n-border-warning":Dr,"--n-border-focus-warning":kr,"--n-border-hover-warning":$r,"--n-loading-color-warning":Jr,"--n-caret-color-error":_,"--n-color-focus-error":Rr,"--n-box-shadow-focus-error":Wr,"--n-border-error":Er,"--n-border-focus-error":_r,"--n-border-hover-error":Br,"--n-loading-color-error":Yr,"--n-clear-color":Ir,"--n-clear-size":Lr,"--n-clear-color-hover":Vr,"--n-clear-color-pressed":Nr,"--n-icon-color":Or,"--n-icon-color-hover":Kr,"--n-icon-color-pressed":qr,"--n-icon-color-disabled":jr,"--n-suffix-text-color":Hr}}),V=d?pt("input",M(()=>{const{value:r}=N;return r[0]}),Se,e):void 0;return Object.assign(Object.assign({},gr),{wrapperElRef:n,inputElRef:g,inputMirrorElRef:b,inputEl2Ref:x,textareaElRef:h,textareaMirrorElRef:S,textareaScrollbarInstRef:z,rtlEnabled:br,uncontrolledValue:k,mergedValue:P,passwordVisible:E,mergedPlaceholder:j,showPlaceholder1:de,showPlaceholder2:ue,mergedFocus:H,isComposing:A,activated:W,showClearButton:ce,mergedSize:N,mergedDisabled:T,textDecorationStyle:Ee,mergedClsPrefix:i,mergedBordered:o,mergedShowPasswordOn:U,placeholderStyle:Ce,mergedStatus:se,textAreaScrollContainerWidth:we,handleTextAreaScroll:mr,handleCompositionStart:Ye,handleCompositionEnd:Je,handleInput:G,handleInputBlur:Qe,handleInputFocus:Ze,handleWrapperBlur:Ge,handleWrapperFocus:er,handleMouseEnter:nr,handleMouseLeave:ir,handleMouseDown:or,handleChange:rr,handleClick:tr,handleClear:ar,handlePasswordToggleClick:lr,handlePasswordToggleMousedown:sr,handleWrapperKeyDown:dr,handleTextAreaMirrorResize:pr,getTextareaScrollContainer:()=>h.value,mergedTheme:l,cssVars:d?void 0:Se,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender})},render(){const{mergedClsPrefix:e,mergedStatus:i,themeClass:o,onRender:d,$slots:c}=this;return d==null||d(),a("div",{ref:"wrapperElRef",class:[`${e}-input`,o,i&&`${e}-input--${i}-status`,{[`${e}-input--rtl`]:this.rtlEnabled,[`${e}-input--disabled`]:this.mergedDisabled,[`${e}-input--textarea`]:this.type==="textarea",[`${e}-input--resizable`]:this.resizable&&!this.autosize,[`${e}-input--autosize`]:this.autosize,[`${e}-input--round`]:this.round&&this.type!=="textarea",[`${e}-input--pair`]:this.pair,[`${e}-input--focus`]:this.mergedFocus,[`${e}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeyDown},a("div",{class:`${e}-input-wrapper`},ae(c.prefix,l=>l&&a("div",{class:`${e}-input__prefix`},l)),this.type==="textarea"?a(mt,{ref:"textareaScrollbarInstRef",class:`${e}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{const{textAreaScrollContainerWidth:l}=this,n={width:this.autosize&&l&&`${l}px`};return a(Pt,null,a("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:`${e}-input__textarea-el`,autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],n],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?a("div",{class:`${e}-input__placeholder`,style:[this.placeholderStyle,n],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?a(gt,{onResize:this.handleTextAreaMirrorResize},{default:()=>a("div",{ref:"textareaMirrorElRef",class:`${e}-input__textarea-mirror`,key:"mirror"})}):null)}}):a("div",{class:`${e}-input__input`},a("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:`${e}-input__input-el`,style:this.textDecorationStyle[0],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:l=>this.handleInput(l,0),onChange:l=>this.handleChange(l,0)})),this.showPlaceholder1?a("div",{class:`${e}-input__placeholder`},a("span",null,this.mergedPlaceholder[0])):null,this.autosize?a("div",{class:`${e}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&ae(c.suffix,l=>l||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?a("div",{class:`${e}-input__suffix`},[ae(c.clear,n=>(this.clearable||n)&&a(be,{clsPrefix:e,show:this.showClearButton,onClear:this.handleClear},{default:()=>n})),this.internalLoadingBeforeSuffix?null:l,this.loading!==void 0?a(xa,{clsPrefix:e,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?l:null,this.showCount&&this.type!=="textarea"?a(Te,null,{default:n=>{var h;return(h=c.count)===null||h===void 0?void 0:h.call(c,n)}}):null,this.mergedShowPasswordOn&&this.type==="password"?a(ye,{clsPrefix:e,class:`${e}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},{default:()=>this.passwordVisible?a(ma,null):a(ga,null)}):null]):null)),this.pair?a("span",{class:`${e}-input__separator`},De(c.separator,()=>[this.separator])):null,this.pair?a("div",{class:`${e}-input-wrapper`},a("div",{class:`${e}-input__input`},a("input",{ref:"inputEl2Ref",type:this.type,class:`${e}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:l=>this.handleInput(l,1),onChange:l=>this.handleChange(l,1)}),this.showPlaceholder2?a("div",{class:`${e}-input__placeholder`},a("span",null,this.mergedPlaceholder[1])):null),ae(c.suffix,l=>(this.clearable||l)&&a("div",{class:`${e}-input__suffix`},[this.clearable&&a(be,{clsPrefix:e,show:this.showClearButton,onClear:this.handleClear},{default:()=>{var n;return(n=c.clear)===null||n===void 0?void 0:n.call(c)}}),l]))):null,this.mergedBordered?a("div",{class:`${e}-input__border`}):null,this.mergedBordered?a("div",{class:`${e}-input__state-border`}):null,this.showCount&&this.type==="textarea"?a(Te,null,{default:l=>{var n;return(n=c.count)===null||n===void 0?void 0:n.call(c,l)}}):null)}});function $a(){const e=ne(yt,null);return e===null&&$e("use-dialog","No outer <n-dialog-provider /> founded."),e}function Ra(){const e=ne(wt,null);return e===null&&$e("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}export{ka as N,Ra as a,pa as b,Ma as i,$a as u};
