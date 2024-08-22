import{R as o,r as E}from"./index-RYns6xqu.js";import{b as F,c as P,W as x}from"./index.esm-Dk8PHLvH.js";import{c as w}from"./index-Cm1LdsEh.js";import{a as W,u as V}from"./useOutsideClick-DXZiCUGB.js";import{I as Y}from"./Input-DS6hbjNQ.js";/* empty css              */import"./FieldWrapper-C3znly_0.js";import"./InputStatusIcon-C7TZknlp.js";import"./useFocusByTab-CGFT2N9H.js";const G="Invalid selectedSlot: If start and end are defined, the start date must be before the end date.",B="Invalid selectableSlot: If start and end are defined, the start date must be before the end date.",z="selectedSlot must be within selectableSlot",$="initialDate must be within selectableSlot";function f(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function L(t){return t.start&&t.end?f(t.start).getTime()<=f(t.end).getTime():!0}function H(t,n){const a=new Date(n,t,1).getDay();if(a===1)return[];const r=a===0?6:a-1,s=new Date(n,t,0),i=[];for(let c=0;c<r;c++){const u=s.getDate()-c;i.unshift(new Date(s.getFullYear(),s.getMonth(),u))}return i}function j(t,n){const r=(7-new Date(n,t+1,0).getDay())%7;if(r===0)return[];const s=new Date(n,t+1,1),i=[];for(let c=0;c<r;c++){const u=c+1;i.push(new Date(s.getFullYear(),s.getMonth(),u))}return i}function q(t,n){const a=new Date(n,t+1,0).getDate(),r=[];for(let s=1;s<=a;s++)r.push(new Date(n,t,s));return r}function T(t,n){return!t||!n?!1:t.getDate()===n.getDate()&&t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear()}function I(t,n){if(!n)return!0;const e=f(t),a=n.start?f(n.start):void 0,r=n.end?f(n.end):void 0,s=a?e>=a:!0,i=r?e<=r:!0;return s&&i}function K(t,n){const e=[];for(let a=0;a<n;a++){const r=new Date(t);r.setMonth(t.getMonth()+a,1),e.push(new Date(r.getFullYear(),r.getMonth(),1))}return e}function C(t){if(!t)return"";const n=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getFullYear()).slice(-2);return`${n}/${e}/${a}`}function Z(t,n){return!n||(n==null?void 0:n.start)===null?{start:t,end:null}:n.end?{start:t,end:null}:f(t).getTime()===f(n.start).getTime()?void 0:f(t)<f(n.start)?{start:t,end:n.start}:{start:n.start,end:t}}function J(t){let n="";if(t){const{start:e,end:a}=t;if(T(e,a))n=C(e);else{let r=C(e);e&&a&&e.getFullYear()===a.getFullYear()&&(r=r.slice(0,5)),n=`${r} - ${C(a)}`}}return n}function _({value:t,isRangeMode:n}){return n?J(t):C(t)}function A({value:t,isRangeMode:n}){return n?t:t&&{start:t,end:t}}function Q(t,n,e){if(t&&!L(t))throw new Error(G);if(n&&!L(n))throw new Error(B);if(t!=null&&t.start&&(t!=null&&t.end)&&(n!=null&&n.start)&&(n!=null&&n.end)&&(f(t.start)<f(n.start)||f(t.end)>f(n.end)))throw new Error(z);if(e&&(n!=null&&n.start)&&(n!=null&&n.end)&&(f(e)<f(n.start)||f(e)>f(n.end)))throw new Error($)}function U({displayedMonthStartDate:t,selectableSlot:n,selectedSlot:e}){const a=(n==null?void 0:n.start)??new Date;a.setHours(0,0,0,0);const r=t.getFullYear(),s=t.getMonth(),i=q(s,r),c=H(s,r),u=j(s,r);return{days:[...c,...i,...u],isReferenceDate:d=>f(d).getTime()===f(a).getTime(),buildDayWrapperClassName:d=>{const D=e&&T(d,e.start)||!1,y=e&&T(d,e.end)||!1,N=e&&e.start&&e.end&&I(d,e)||D||y,M=I(d,n);let h={"inside-selectable-slot":M,"outside-selectable-slot":!M,"current-month":d.getMonth()===s,past:f(d)<f(a)};return e&&(h={...h,start:D,end:y,"within-selected-slot":N}),w("day-wrapper",h)},isDateSelectable:d=>!(!I(d,n)||d.getMonth()!==s)}}const X=["M","T","W","T","F","S","S"],b=({date:t,isReferenceDate:n,isSelectable:e,dayWrapperClassName:a,onClick:r})=>o.createElement("div",{onClick:()=>{e&&r(t)},className:"day-background"},o.createElement("div",{className:a},o.createElement("span",{className:"day"},t.getDate()),n&&o.createElement("span",{className:"current-date-highlight"}))),S=t=>{const{displayedMonthStartDate:n,onDayClick:e}=t,{days:a,isReferenceDate:r,isDateSelectable:s,buildDayWrapperClassName:i}=U(t);return o.createElement("div",{className:"calendar-wrapper"},o.createElement("div",{className:"calendar-anatomy"},o.createElement("p",{className:"calendar-month-label"},n.toLocaleString("en-GB",{month:"short"})),o.createElement("div",{className:"calendar-grid-wrapper"},o.createElement("div",{className:"calendar-weekday-labels"},X.map((c,u)=>o.createElement("p",{key:u},c))),o.createElement("div",{className:"calendar-days-grid"},a.map((c,u)=>o.createElement(b,{key:u,date:c,isReferenceDate:r(c),isSelectable:s(c),dayWrapperClassName:i(c),onClick:e}))))))};function tt({initialDate:t,selectedSlot:n,selectableSlot:e,numberOfMonths:a=1}){Q(n,e,t);const r=t??(n==null?void 0:n.start)??(e==null?void 0:e.start)??new Date,[s,i]=E.useState(r),c=K(s,a),u=s.getFullYear(),m=s.getMonth(),p=new Date(u,m,1),l=new Date(u,m+1,0),d=e===void 0||e.start===null?!0:e.start<p,D=e===void 0||e.end===null?!0:e.end>l;return{displayedMonthsStartDates:c,showNavigationBtn:d||D,canGoToPreviousMonth:d,canGoToNextMonth:D,handleGoToPreviousMonth:()=>{if(d){const h=m===0?11:m-1,g=m===0?u-1:u;i(new Date(g,h,1))}},handleGoToNextMonth:()=>{if(D){const h=m===11?0:m+1,g=m===11?u+1:u;i(new Date(g,h,1))}}}}const nt=({initialDate:t,selectedSlot:n,selectableSlot:e,numberOfMonths:a=1,onDayClick:r,modalPosition:s,calendarPickerRef:i})=>{const{displayedMonthsStartDates:c,showNavigationBtn:u,canGoToNextMonth:m,canGoToPreviousMonth:p,handleGoToNextMonth:l,handleGoToPreviousMonth:d}=tt({initialDate:t,selectedSlot:n,selectableSlot:e,numberOfMonths:a});return o.createElement("div",{ref:i,className:"calendar-picker",style:s},u&&o.createElement("span",{className:w("calendar-navigation-btn","previous",{disabled:!p}),onClick:d},o.createElement(F,{size:"lg"})),o.createElement("div",{className:w("calendar-list",{"navigation-btn-hidden":!u})},c.map((D,y)=>o.createElement(S,{key:y,displayedMonthStartDate:D,selectableSlot:e,selectedSlot:n,onDayClick:r}))),u&&o.createElement("span",{className:w("calendar-navigation-btn","next",{disabled:!m}),onClick:l},o.createElement(P,{size:"lg"})))},et=-24,at=3;function rt(t){const{inputProps:n,value:e,isRangeMode:a,onDateChange:r}=t,[s,i]=E.useState(!1),[c,u]=E.useState(_(t)),[m,p]=E.useState(A(t)),l=E.useRef(null),d=E.useRef(null);W(l,h=>{var g;d.current&&((g=d.current.parentElement)!=null&&g.contains(h.target))||i(!1)});const{calculatePosition:D,modalPosition:y}=V(d,l,at,et),N=h=>{var g;i(!0),(g=n.onClick)==null||g.call(n,h)},M=h=>{if(a){const g=Z(h,e);r(h,g)}else r(h)};return E.useEffect(()=>{s&&D()},[s,D]),E.useEffect(()=>{u(_(t)),p(A(t))},[e]),{showPicker:s,inputValue:c,selectedSlot:m,modalPosition:y,inputRef:d,calendarPickerRef:l,setShowPicker:i,handleDayClick:M,handleInputClick:N}}const k=t=>{const{inputValue:n,selectedSlot:e,showPicker:a,modalPosition:r,inputRef:s,calendarPickerRef:i,setShowPicker:c,handleDayClick:u,handleInputClick:m}=rt(t),{inputFieldWrapperClassname:p,...l}=t.inputProps;return o.createElement("div",{className:"date-picker"},o.createElement("div",null,o.createElement(Y,{...l,ref:s,value:n,onClick:m,type:"text",trailingContent:{content:o.createElement(x,null),onClickCallback:()=>c(!a)},inputFieldWrapperClassname:w("date-picker-input",p),autoComplete:"off"})),a&&o.createElement("div",{className:"calendar-picker-wrapper"},o.createElement(nt,{...t.calendarPickerProps,selectedSlot:e,onDayClick:u,modalPosition:r,calendarPickerRef:i})))},v=new Date,R=new Date(v);R.setMonth(R.getMonth()+3);const O=new Date(v);O.setDate(O.getDate()+5);const st={start:v,end:R},ot={start:v,end:O},it=t=>{const[n,e]=E.useState(t.value),a=(s,i)=>e(i),r=s=>e(s);return t.isRangeMode?o.createElement(k,{...t,value:n,onDateChange:a}):o.createElement(k,{...t,value:n,onDateChange:r})},Et={component:k,decorators:[t=>o.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.createElement(t,null))],parameters:{docs:{story:{height:"500px"}}},args:{calendarPickerProps:{numberOfMonths:1,selectableSlot:st},inputProps:{id:"date-picker",label:"Select a date"}},render:t=>o.createElement(it,{...t}),title:"core/DatePicker",tags:["autodocs"]},pt={args:{isRangeMode:!1,value:v}},yt={args:{isRangeMode:!0,value:ot}},Mt=["Single","Range"];export{yt as Range,pt as Single,Mt as __namedExportsOrder,Et as default};
