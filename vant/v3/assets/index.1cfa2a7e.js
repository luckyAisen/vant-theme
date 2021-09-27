import{e,p as t,q as a,o as r}from"./use-translate.b583725c.js";import{c as n,w as u}from"./with-install.62f47d2f.js";import{u as l}from"./use-expose.33de0944.js";import{c as o}from"./number.b01aa591.js";import{s,t as m,p as i,g as c,a as p}from"./utils.06c87c13.js";import{P as v}from"./index.3a29a39b.js";import{A as d,E as g,D as f,H as y,s as h,y as D,e as x,J as M}from"./vendor.ef334a89.js";const[H]=n("time-picker");var V=d({name:H,props:e({},s,{modelValue:String,minHour:{type:[Number,String],default:0},maxHour:{type:[Number,String],default:23},minMinute:{type:[Number,String],default:0},maxMinute:{type:[Number,String],default:59}}),emits:["confirm","cancel","change","update:modelValue"],setup(e,{emit:r,slots:n}){const u=t=>{const{minHour:r,maxHour:n,maxMinute:u,minMinute:l}=e;t||(t=`${a(r)}:${a(l)}`);let[s,m]=t.split(":");return s=a(o(+s,+r,+n)),m=a(o(+m,+l,+u)),`${s}:${m}`},s=g(),c=g(u(e.modelValue)),p=f((()=>[{type:"hour",range:[+e.minHour,+e.maxHour]},{type:"minute",range:[+e.minMinute,+e.maxMinute]}])),d=f((()=>p.value.map((({type:t,range:r})=>{let n=m(r[1]-r[0]+1,(e=>a(r[0]+e)));return e.filter&&(n=e.filter(t,n)),{type:t,values:n}})))),H=f((()=>d.value.map((t=>({values:t.values.map((a=>e.formatter(t.type,a)))}))))),V=()=>{const t=c.value.split(":"),a=[e.formatter("hour",t[0]),e.formatter("minute",t[1])];h((()=>{var e;null==(e=s.value)||e.setValues(a)}))},b=()=>{const[e,t]=s.value.getIndexes(),[a,r]=d.value,n=a.values[e]||a.values[0],l=r.values[t]||r.values[0];c.value=u(`${n}:${l}`),V()},$=()=>r("confirm",c.value),k=()=>r("cancel"),j=()=>{b(),h((()=>{h((()=>r("change",c.value)))}))};return y((()=>{V(),h(b)})),D(H,V),D((()=>[e.filter,e.maxHour,e.minMinute,e.maxMinute]),b),D((()=>e.minHour),(()=>{h(b)})),D(c,(e=>r("update:modelValue",e))),D((()=>e.modelValue),(e=>{(e=u(e))!==c.value&&(c.value=e,V())})),l({getPicker:()=>s.value}),()=>x(v,M({ref:s,columns:H.value,onChange:j,onCancel:k,onConfirm:$},t(e,i)),n)}});const b=(new Date).getFullYear(),[$]=n("date-picker");var k=d({name:$,props:e({},s,{modelValue:Date,type:{type:String,default:"datetime"},minDate:{type:Date,default:()=>new Date(b-10,0,1),validator:r},maxDate:{type:Date,default:()=>new Date(b+10,11,31),validator:r}}),emits:["confirm","cancel","change","update:modelValue"],setup(e,{emit:n,slots:u}){const s=t=>{if(r(t)){const a=o(t.getTime(),e.minDate.getTime(),e.maxDate.getTime());return new Date(a)}},d=g(),H=g(s(e.modelValue)),V=(t,a)=>{const r=e[`${t}Date`],n=r.getFullYear();let u=1,l=1,o=0,s=0;return"max"===t&&(u=12,l=c(a.getFullYear(),a.getMonth()+1),o=23,s=59),a.getFullYear()===n&&(u=r.getMonth()+1,a.getMonth()+1===u&&(l=r.getDate(),a.getDate()===l&&(o=r.getHours(),a.getHours()===o&&(s=r.getMinutes())))),{[`${t}Year`]:n,[`${t}Month`]:u,[`${t}Date`]:l,[`${t}Hour`]:o,[`${t}Minute`]:s}},b=f((()=>{const{maxYear:t,maxDate:a,maxMonth:r,maxHour:n,maxMinute:u}=V("max",H.value||e.minDate),{minYear:l,minDate:o,minMonth:s,minHour:m,minMinute:i}=V("min",H.value||e.minDate);let c=[{type:"year",range:[l,t]},{type:"month",range:[s,r]},{type:"day",range:[o,a]},{type:"hour",range:[m,n]},{type:"minute",range:[i,u]}];switch(e.type){case"date":c=c.slice(0,3);break;case"year-month":c=c.slice(0,2);break;case"month-day":c=c.slice(1,3);break;case"datehour":c=c.slice(0,4)}if(e.columnsOrder){const t=e.columnsOrder.concat(c.map((e=>e.type)));c.sort(((e,a)=>t.indexOf(e.type)-t.indexOf(a.type)))}return c})),$=f((()=>b.value.map((({type:t,range:r})=>{let n=m(r[1]-r[0]+1,(e=>a(r[0]+e)));return e.filter&&(n=e.filter(t,n)),{type:t,values:n}})))),k=f((()=>$.value.map((t=>({values:t.values.map((a=>e.formatter(t.type,a)))}))))),j=()=>{const t=H.value||e.minDate,{formatter:r}=e,n=$.value.map((e=>{switch(e.type){case"year":return r("year",`${t.getFullYear()}`);case"month":return r("month",a(t.getMonth()+1));case"day":return r("day",a(t.getDate()));case"hour":return r("hour",a(t.getHours()));case"minute":return r("minute",a(t.getMinutes()));default:return""}}));h((()=>{var e;null==(e=d.value)||e.setValues(n)}))},w=()=>{const{type:t}=e,a=d.value.getIndexes(),r=e=>{let t=0;$.value.forEach(((a,r)=>{e===a.type&&(t=r)}));const{values:r}=$.value[t];return p(r[a[t]])};let n,u,l;"month-day"===t?(n=(H.value||e.minDate).getFullYear(),u=r("month"),l=r("day")):(n=r("year"),u=r("month"),l="year-month"===t?1:r("day"));const o=c(n,u);l=l>o?o:l;let m=0,i=0;"datehour"===t&&(m=r("hour")),"datetime"===t&&(m=r("hour"),i=r("minute"));const v=new Date(n,u-1,l,m,i);H.value=s(v)},Y=()=>{n("update:modelValue",H.value),n("confirm",H.value)},O=()=>n("cancel"),S=()=>{w(),h((()=>{h((()=>n("change",H.value)))}))};return y((()=>{j(),h(w)})),D(k,j),D(H,((e,t)=>n("update:modelValue",t?e:null))),D((()=>[e.filter,e.maxDate]),w),D((()=>e.minDate),(()=>{h(w)})),D((()=>e.modelValue),(e=>{var t;(e=s(e))&&e.valueOf()!==(null==(t=H.value)?void 0:t.valueOf())&&(H.value=e)})),l({getPicker:()=>d.value}),()=>x(v,M({ref:d,columns:k.value,onChange:S,onCancel:O,onConfirm:Y},t(e,i)),u)}});const[j,w]=n("datetime-picker"),Y=Object.keys(V.props),O=Object.keys(k.props);const S=u(d({name:j,props:e({},V.props,k.props,{modelValue:[String,Date]}),setup(e,{attrs:a,slots:r}){const n=g();return l({getPicker:()=>{var e;return null==(e=n.value)?void 0:e.getPicker()}}),()=>{const u="time"===e.type,l=u?V:k,o=t(e,u?Y:O);return x(l,M({ref:n,class:w()},o,a),r)}}}));export{S as D};