import{r as f,R as u}from"./index-RYns6xqu.js";import{c as M}from"./index-Cm1LdsEh.js";import{l as O}from"./lodash-CcdATr5u.js";import{g as S,X as h,Y as P,S as C,c as l,z as D,a as b,K as Z}from"./PathLayer-B_O64oKG.js";import{g as _}from"./vectors-BiytCEVh.js";/* empty css                        */import"./chroma-CVOSM3bD.js";const y=+new Date("2024/01/01"),x=["#9E8256","#FF362E","#FF8E3D","#FFBF00","#95C877","#78E6C5","#66C0F1","#526CE8","#D16DBC","#FF9BC6"],R=({operationalPointsCount:c,trainTypes:m,pathsPerTrain:g,spaceScaleType:L})=>{const n=f.useMemo(()=>{let e=0;return O.range(c).map(t=>({id:`op-${t}`,label:`Operational point n°${t+1}`,position:e+=O.random(5e4,15e4),importanceLevel:!t||t===c-1||Math.random()>.8?1:2}))},[c]),v=f.useMemo(()=>{const e=n,t=e.filter(a=>a.importanceLevel===1),p=e.slice(0).reverse(),r=t.slice(0).reverse();return O.range(m).flatMap(a=>{const s=a%2,i=Math.floor(a/2)%2,F=(100+100*(Math.floor(a/2)/Math.floor(m/2)))*Z/(60*l);return S(`type n°${a}`,i?s?p:e:s?r:t,5*l,(30+a*5)*l,F*(s?-1:1),g,y,{color:x[a%x.length],fromEnd:i?"out":"stop",toEnd:i?"out":"stop"})})},[n,m,g]),[o,E]=f.useState({xOffset:0,yOffset:0,xZoomLevel:h,yZoomLevel:P,panning:null});return u.createElement("div",{className:"inset-0"},u.createElement(C,{className:M("inset-0 absolute p-0 m-0",o.panning&&"cursor-grabbing"),operationalPoints:n,spaceOrigin:0,spaceScales:n.slice(0,-1).map((e,t)=>({from:e.position,to:n[t+1].position,...L==="linear"?{size:50*o.yZoomLevel}:{coefficient:150/o.yZoomLevel}})),timeOrigin:y,timeScale:l/o.xZoomLevel,xOffset:o.xOffset,yOffset:o.yOffset,onPan:({initialPosition:e,position:t,isPanning:p})=>{const{panning:r}=o,a=_(e,t);E(s=>{if(p)if(r){const i=r.initialOffset.x+a.x,d=r.initialOffset.y+a.y;return{...o,xOffset:i,yOffset:d}}else return{...s,panning:{initialOffset:{x:o.xOffset,y:o.yOffset}}};else return{...s,panning:null}})},onZoom:e=>{E(t=>({...t,...D(o,e)}))}},v.map((e,t)=>u.createElement(b,{key:e.id,index:t,path:e,color:e.color}))))},K={title:"SpaceTimeChart/Performances",component:R,argTypes:{operationalPointsCount:{name:"Operational points",defaultValue:5,control:{type:"number",step:1,min:2,max:30}},trainTypes:{name:"Train types",defaultValue:4,control:{type:"number",step:1,min:1,max:20}},pathsPerTrain:{name:"Paths per train type",defaultValue:50,control:{type:"number",step:10,min:0,max:200}},spaceScaleType:{name:"Space scaling type",options:["linear","proportional"],defaultValue:"linear",control:{type:"radio"}}}},X={name:"Default arguments",args:{operationalPointsCount:5,trainTypes:4,pathsPerTrain:50,spaceScaleType:"linear"}},Y=["DefaultArgs"];export{X as DefaultArgs,Y as __namedExportsOrder,K as default};
