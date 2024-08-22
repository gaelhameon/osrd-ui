import{r as d,R as l}from"./index-RYns6xqu.js";import{c as S}from"./index-Cm1LdsEh.js";import{X as _,Y as E,S as M,O as m,d as P,e as b,f as v,h,P as T,a as X}from"./PathLayer-C7DXgddV.js";import{g as A}from"./vectors-BMNFZSin.js";/* empty css                        */import"./lodash-CcdATr5u.js";const V=({xPan:f,yPan:c,xZoom:p,yZoom:u,spaceScaleType:L})=>{const[a,O]=d.useState({xOffset:0,yOffset:0,xZoomLevel:_,yZoomLevel:E,panning:null});return l.createElement("div",{className:"inset-0"},l.createElement(M,{className:S("inset-0 absolute p-0 m-0",a.panning&&"cursor-grabbing"),operationalPoints:m,spaceOrigin:0,spaceScales:m.slice(0,-1).map((t,n)=>({from:t.position,to:m[n+1].position,...L==="linear"?{size:50*a.yZoomLevel}:{coefficient:150/a.yZoomLevel}})),timeOrigin:+new Date("2024/04/02"),timeScale:6e4/a.xZoomLevel,xOffset:a.xOffset,yOffset:a.yOffset,onPan:({initialPosition:t,position:n,isPanning:o})=>{if(!f&&!c)return;const s=A(t,n);O(e=>{if(o)if(e.panning){const{initialOffset:y}=e.panning,i={...a};return f&&(i.xOffset=y.x+s.x),c&&(i.yOffset=y.y+s.y),i}else return{...e,panning:{initialOffset:{x:a.xOffset,y:a.yOffset}}};else return{...e,panning:null}})},onZoom:({delta:t,position:{x:n,y:o}})=>{!p&&!u||O(s=>{const e={...s};return p&&(e.xZoomLevel=Math.min(Math.max(e.xZoomLevel*(1+t/10),P),b),e.xOffset=n-(n-a.xOffset)/a.xZoomLevel*e.xZoomLevel),u&&(e.yZoomLevel=Math.min(Math.max(e.yZoomLevel*(1+t/10),v),h),e.yOffset=o-(o-a.yOffset)/a.yZoomLevel*e.yZoomLevel),e})}},T.map((t,n)=>l.createElement(X,{key:t.id,index:n,path:t,color:t.color}))))},R={title:"SpaceTimeChart/Panning and zooming",component:V,argTypes:{xPan:{name:"Enable panning on the X axis?",defaultValue:!0,control:{type:"boolean"}},yPan:{name:"Enable panning on the Y axis?",defaultValue:!0,control:{type:"boolean"}},xZoom:{name:"Enable zooming on the X axis?",defaultValue:!0,control:{type:"boolean"}},yZoom:{name:"Enable zooming on the Y axis?",defaultValue:!0,control:{type:"boolean"}},spaceScaleType:{name:"Space scaling type",options:["linear","proportional"],defaultValue:"linear",control:{type:"radio"}}}},r={name:"Default arguments",args:{xPan:!0,yPan:!0,xZoom:!0,yZoom:!0,spaceScaleType:"linear"}};var x,g,Z;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Default arguments',
  args: {
    xPan: true,
    yPan: true,
    xZoom: true,
    yZoom: true,
    spaceScaleType: 'linear'
  }
}`,...(Z=(g=r.parameters)==null?void 0:g.docs)==null?void 0:Z.source}}};const C=["DefaultArgs"];export{r as DefaultArgs,C as __namedExportsOrder,R as default};
