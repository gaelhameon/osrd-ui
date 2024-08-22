import{r as S,R as g}from"./index-RYns6xqu.js";import{b as I,M as G,f as T,L as R,S as F,l as V,p as H,a as ue,d as U,c as de,e as z,i as me,g as fe,h as ye,j as N,k as he,m as v,n as O,o as ge,s as be}from"./index-DBEOy9XB.js";import{l as w}from"./lodash-CcdATr5u.js";import{r as xe}from"./index-D16Yfzz8.js";const we="nantes-ancenis",Se="nantes-angers",_e="nantes-marseille",Pe="nantes-copenhagen",et=[we,Se,_e,Pe],Le="https://osm.osrd.fr/data/v3.json",Me=[{id:"water",type:"fill",source:"openmaptiles","source-layer":"water",filter:["all",["!=","brunnel","tunnel"]],paint:{"fill-color":"rgb(158,189,255)"}},{id:"road_secondary_tertiary_casing",type:"line",source:"openmaptiles","source-layer":"transportation",filter:["all",["!in","brunnel","bridge","tunnel"],["in","class","secondary","tertiary"],["!=","ramp",1]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-color":"#e9ac77","line-width":{base:1.2,stops:[[8,1.5],[20,17]]}}},{id:"road_trunk_primary_casing",type:"line",source:"openmaptiles","source-layer":"transportation",filter:["all",["!in","brunnel","bridge","tunnel"],["in","class","primary","trunk"]],layout:{"line-join":"round",visibility:"visible"},paint:{"line-color":"#e9ac77","line-width":{base:1.2,stops:[[5,.4],[6,.7],[7,1.75],[20,22]]}}},{id:"road_motorway",type:"line",source:"openmaptiles","source-layer":"transportation",minzoom:5,filter:["all",["!in","brunnel","bridge","tunnel"],["==","class","motorway"],["!=","ramp",1]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-color":{base:1,stops:[[5,"hsl(26, 87%, 62%)"],[6,"#fc8"]]},"line-width":{base:1.2,stops:[[5,0],[7,1],[20,18]]}}},{id:"road_major_rail",type:"line",source:"openmaptiles","source-layer":"transportation",filter:["all",["!in","brunnel","bridge","tunnel"],["==","class","rail"]],layout:{visibility:"visible"},paint:{"line-color":"#bbb","line-width":{base:1.4,stops:[[14,.4],[15,.75],[20,2]]}}},{id:"road_major_rail_hatching",type:"line",source:"openmaptiles","source-layer":"transportation",filter:["all",["!in","brunnel","bridge","tunnel"],["==","class","rail"]],layout:{visibility:"visible"},paint:{"line-color":"#bbb","line-dasharray":[.2,8],"line-width":{base:1.4,stops:[[14.5,0],[15,3],[20,8]]}}},{id:"road_transit_rail",type:"line",source:"openmaptiles","source-layer":"transportation",filter:["all",["!in","brunnel","bridge","tunnel"],["==","class","transit"]],layout:{visibility:"visible"},paint:{"line-color":"#bbb","line-width":{base:1.4,stops:[[14,.4],[15,.75],[20,2]]}}},{id:"road_transit_rail_hatching",type:"line",source:"openmaptiles","source-layer":"transportation",filter:["all",["!in","brunnel","bridge","tunnel"],["==","class","transit"]],layout:{visibility:"visible"},paint:{"line-color":"#bbb","line-dasharray":[.2,8],"line-width":{base:1.4,stops:[[14.5,0],[15,3],[20,8]]}}},{id:"water_name_line",type:"symbol",source:"openmaptiles","source-layer":"waterway",filter:["all",["==","$type","LineString"]],layout:{"text-field":"{name}","text-font":["Roboto Regular"],"text-max-width":5,"text-size":12,"symbol-placement":"line"},paint:{"text-color":"#5d60be","text-halo-color":"rgba(255,255,255,0.7)","text-halo-width":1}},{id:"water_name_point",type:"symbol",source:"openmaptiles","source-layer":"water_name",filter:["==","$type","Point"],layout:{"text-field":"{name}","text-font":["Roboto Regular"],"text-max-width":5,"text-size":12},paint:{"text-color":"#5d60be","text-halo-color":"rgba(255,255,255,0.7)","text-halo-width":1}},{id:"poi_z16",type:"symbol",source:"openmaptiles","source-layer":"poi",minzoom:16,filter:["all",["==","$type","Point"],[">=","rank",20]],layout:{"icon-image":["match",["get","subclass"],["florist","furniture"],["get","subclass"],["get","class"]],"text-anchor":"top","text-field":"{name}","text-font":["Roboto Condensed Italic"],"text-max-width":9,"text-offset":[0,.6],"text-size":12},paint:{"text-color":"#666","text-halo-blur":.5,"text-halo-color":"#ffffff","text-halo-width":1}},{id:"poi_z15",type:"symbol",source:"openmaptiles","source-layer":"poi",minzoom:15,filter:["all",["==","$type","Point"],[">=","rank",7],["<","rank",20]],layout:{"icon-image":["match",["get","subclass"],["florist","furniture"],["get","subclass"],["get","class"]],"text-anchor":"top","text-field":"{name}","text-font":["Roboto Condensed Italic"],"text-max-width":9,"text-offset":[0,.6],"text-size":12},paint:{"text-color":"#666","text-halo-blur":.5,"text-halo-color":"#ffffff","text-halo-width":1}},{id:"poi_z14",type:"symbol",source:"openmaptiles","source-layer":"poi",minzoom:14,filter:["all",["==","$type","Point"],[">=","rank",1],["<","rank",7]],layout:{"icon-image":["match",["get","subclass"],["florist","furniture"],["get","subclass"],["get","class"]],"text-anchor":"top","text-field":"{name}","text-font":["Roboto Condensed Italic"],"text-max-width":9,"text-offset":[0,.6],"text-size":12},paint:{"text-color":"#666","text-halo-blur":.5,"text-halo-color":"#ffffff","text-halo-width":1}},{id:"poi_transit",type:"symbol",source:"openmaptiles","source-layer":"poi",filter:["all",["in","class","bus","rail","airport"]],layout:{"icon-image":"{class}","text-anchor":"left","text-field":"{name_en}","text-font":["Roboto Condensed Italic"],"text-max-width":9,"text-offset":[.9,0],"text-size":12},paint:{"text-color":"#4898ff","text-halo-blur":.5,"text-halo-color":"#ffffff","text-halo-width":1}},{id:"road_label",type:"symbol",source:"openmaptiles","source-layer":"transportation_name",filter:["all"],layout:{"symbol-placement":"line","text-anchor":"center","text-field":"{name}","text-font":["Roboto Regular"],"text-offset":[0,.15],"text-size":{base:1,stops:[[13,12],[14,13]]}},paint:{"text-color":"#765","text-halo-blur":.5,"text-halo-width":1}},{id:"road_shield",type:"symbol",source:"openmaptiles","source-layer":"transportation_name",minzoom:7,filter:["all",["<=","ref_length",6]],layout:{"icon-image":"default_{ref_length}","icon-rotation-alignment":"viewport","symbol-placement":"point","symbol-spacing":500,"text-field":"{ref}","text-font":["Roboto Regular"],"text-offset":[0,.1],"text-rotation-alignment":"viewport","text-size":10,"icon-size":.8}},{id:"place_other",type:"symbol",source:"openmaptiles","source-layer":"place",filter:["all",["in","class","hamlet","island","islet","neighbourhood","suburb","quarter"]],layout:{"text-field":"{name_en}","text-font":["Roboto Condensed Italic"],"text-letter-spacing":.1,"text-max-width":9,"text-size":{base:1.2,stops:[[12,10],[15,14]]},"text-transform":"uppercase"},paint:{"text-color":"#633","text-halo-color":"rgba(255,255,255,0.8)","text-halo-width":1.2}},{id:"place_village",type:"symbol",source:"openmaptiles","source-layer":"place",filter:["all",["==","class","village"]],layout:{"text-field":"{name_en}","text-font":["Roboto Regular"],"text-max-width":8,"text-size":{base:1.2,stops:[[10,12],[15,22]]}},paint:{"text-color":"#333","text-halo-color":"rgba(255,255,255,0.8)","text-halo-width":1.2}},{id:"place_town",type:"symbol",source:"openmaptiles","source-layer":"place",filter:["all",["==","class","town"]],layout:{"icon-image":{base:1,stops:[[0,"dot_9"],[8,""]]},"text-anchor":"bottom","text-field":"{name_en}","text-font":["Roboto Regular"],"text-max-width":8,"text-offset":[0,0],"text-size":{base:1.2,stops:[[7,12],[11,16]]}},paint:{"text-color":"#333","text-halo-color":"rgba(255,255,255,0.8)","text-halo-width":1.2}},{id:"place_city",type:"symbol",source:"openmaptiles","source-layer":"place",minzoom:5,filter:["all",["==","class","city"]],layout:{"icon-image":{base:1,stops:[[0,"dot_9"],[8,""]]},"text-anchor":"bottom","text-field":"{name_en}","text-font":["Roboto Medium"],"text-max-width":8,"text-offset":[0,0],"text-size":{base:1.2,stops:[[7,14],[11,24]]},"icon-allow-overlap":!0,"icon-optional":!1},paint:{"text-color":"#333","text-halo-color":"rgba(255,255,255,0.8)","text-halo-width":1.2}},{id:"state",type:"symbol",source:"openmaptiles","source-layer":"place",maxzoom:6,filter:["all",["==","class","state"]],layout:{"text-field":"{name_en}","text-font":["Roboto Condensed Italic"],"text-size":{stops:[[4,11],[6,15]]},"text-transform":"uppercase"},paint:{"text-color":"#633","text-halo-color":"rgba(255,255,255,0.7)","text-halo-width":1}},{id:"country_3",type:"symbol",source:"openmaptiles","source-layer":"place",filter:["all",[">=","rank",3],["==","class","country"]],layout:{"text-field":"{name_en}","text-font":["Roboto Condensed Italic"],"text-max-width":6.25,"text-size":{stops:[[3,11],[7,17]]},"text-transform":"none"},paint:{"text-color":"#334","text-halo-blur":1,"text-halo-color":"rgba(255,255,255,0.8)","text-halo-width":1}},{id:"country_2",type:"symbol",source:"openmaptiles","source-layer":"place",filter:["all",["==","rank",2],["==","class","country"]],layout:{"text-field":"{name_en}","text-font":["Roboto Condensed Italic"],"text-max-width":6.25,"text-size":{stops:[[2,11],[5,17]]},"text-transform":"none"},paint:{"text-color":"#334","text-halo-blur":1,"text-halo-color":"rgba(255,255,255,0.8)","text-halo-width":1}},{id:"country_1",type:"symbol",source:"openmaptiles","source-layer":"place",filter:["all",["==","rank",1],["==","class","country"]],layout:{"text-field":"{name_en}","text-font":["Roboto Condensed Italic"],"text-max-width":6.25,"text-size":{stops:[[1,11],[4,17]]},"text-transform":"none"},paint:{"text-color":"#334","text-halo-blur":1,"text-halo-color":"rgba(255,255,255,0.8)","text-halo-width":1}},{id:"continent",type:"symbol",source:"openmaptiles","source-layer":"place",maxzoom:1,filter:["all",["==","class","continent"]],layout:{"text-field":"{name_en}","text-font":["Roboto Condensed Italic"],"text-size":13,"text-transform":"uppercase","text-justify":"center"},paint:{"text-color":"#633","text-halo-color":"rgba(255,255,255,0.7)","text-halo-width":1}}],tt={id:"osm",url:Le,layers:Me},ot={version:8,name:"Blank",sources:{openmaptiles:{type:"vector",url:"https://osm.osrd.fr/data/v3.json"}},sprite:"https://maputnik.github.io/osm-liberty/sprites/osm-liberty",glyphs:"https://static.osm.osrd.fr/fonts/{fontstack}/{range}.pbf",layers:[{id:"emptyBackground",type:"background",layout:{visibility:"visible"}}]},Ee=({path:e,mapStyle:n,sources:t,children:r})=>{const[a,o]=S.useState(null),i=S.useMemo(()=>t.flatMap(({layers:s})=>s.map(({id:u})=>u)),[t]);return S.useEffect(()=>{!a||!e||setTimeout(()=>{a.fitBounds(I(e),{animate:!1}),a.resize()},0)},[a]),g.createElement(G,{ref:o,mapStyle:n,style:{width:"100%",height:"100%"},interactiveLayerIds:i,onClick:({features:s})=>{s!=null&&s.length&&console.log("Click base map",s!=null&&s.length?s.length===1?s[0]:T(s):null)}},g.createElement(R,{type:"background",paint:{"background-color":"white"}}),t.map(({id:s,url:u,layers:c})=>g.createElement(F,{key:s,id:s,type:"vector",url:u},c.map(({id:p,...d})=>g.createElement(R,{key:p,id:p,...d})))),r)};Ee.__docgenInfo={description:"This component is for testing purpose only. It displays data as they appear in the DataLoader component.",methods:[],displayName:"BaseMap",props:{path:{required:!0,tsType:{name:"Feature",elements:[{name:"LineString"}],raw:"Feature<LineString>"},description:""},sources:{required:!0,tsType:{name:"Array",elements:[{name:"SourceDefinition"}],raw:"SourceDefinition[]"},description:""},mapStyle:{required:!1,tsType:{name:"union",raw:"string | StyleSpecification",elements:[{name:"string"},{name:"StyleSpecification"}]},description:""}}};const Z=()=>g.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},g.createElement("span",null,"Loading..."));Z.__docgenInfo={description:"",methods:[],displayName:"Loader"};function E(e){return e[0]}function k(e){return e[1]}function J(e,n){return[E(n)-E(e),k(n)-k(e)]}function ke(e,n){return[E(e)+E(n),k(e)+k(n)]}function K(e,n){return[E(e)*n,k(e)*n]}function ee(e,n){return K(e,1/n)}function q(e){return Math.sqrt(E(e)**2+k(e)**2)}function ve(e,n){return q(J(e,n))}function Te(e){return ee(e,q(e))}function te(e,n){return E(e)*E(n)+k(e)+k(n)}function Re(e,n){return Math.acos(te(e,n)/q(e)/q(n))}const M={x:E,y:k,vector:J,add:ke,multiply:K,divide:ee,length:q,distance:ve,normalize:Te,dot:te,angle:Re};function Ie(e,n){if(n<=1)throw new Error("samples must be an integer greater than 1");const t=[],a=V(e,{units:"meters"})/(n-1);for(let o=0;o<n;o++)o?o===n-1?t.push(H(w.last(e.geometry.coordinates))):t.push(ue(e,a*o,{units:"meters"})):t.push(H(w.first(e.geometry.coordinates)));return{step:a,points:t}}function Ce(e,n){if(n<=1)throw new Error("lengthToAdd must be a positive");const t=e.geometry.coordinates,r=t[0],a=t[1],o=t[t.length-1],i=t[t.length-2];return{...e,geometry:{...e.geometry,coordinates:[M.add(r,M.multiply(M.vector(a,r),n/U(a,r,{units:"meters"}))),...t,M.add(o,M.multiply(M.vector(i,o),n/U(i,o,{units:"meters"})))]}}}function Be([e,n],{geometry:{coordinates:[[[t,r],[a,o],[i,s]]]}}){const u=(o-s)*(t-i)+(i-a)*(r-s),c=((o-s)*(e-i)+(i-a)*(n-s))/u,p=((s-r)*(e-i)+(t-i)*(n-s))/u,d=1-c-p;return[c,p,d]}function qe([e,n,t]){return e>=0&&e<=1&&n>=0&&n<=1&&t>=0&&t<=1}function De([e,n,t],{geometry:{coordinates:[[[r,a],[o,i],[s,u]]]}}){return[e*r+n*o+t*s,e*a+n*i+t*u]}function Fe(e,n){return{type:"Feature",id:e.id,properties:{...e.properties,sourceLayer:e.sourceLayer||e.properties.sourceLayer||n},geometry:e.geometry||e._geometry}}function A(e,n=!1){switch(e.type){case"rectangle":{const[[t,r],[a,o]]=e.points;return{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[t,r],[a,r],[a,o],[t,o],[t,r]]]}}}case"polygon":return{type:"Feature",properties:{},geometry:n?{type:"Polygon",coordinates:[[...e.points,e.points[0]]]}:{type:"LineString",coordinates:e.points}};default:throw new Error("Zone is neither a polygone, neither a rectangle")}}function ze(e){if(e.type==="rectangle"){const[[n,t],[r,a]]=e.points;return[Math.min(n,r),Math.min(t,a),Math.max(n,r),Math.max(t,a)]}return I(A(e,!0))}function Oe(e,n){const t=n.geometry.type==="MultiLineString"?n.geometry.coordinates:[n.geometry.coordinates],r={type:"Feature",properties:n.properties,geometry:{type:"MultiLineString",coordinates:[]}};return t.forEach(a=>{if(a.length<2)return;const o={type:"Point",coordinates:a[0]},i={type:"Point",coordinates:a[a.length-1]};let s=fe({type:"LineString",coordinates:a},e).features.map(c=>c.geometry);z(o,e)&&(s=[o].concat(s)),z(i,e)&&s.push(i),w.chunk(s,2).filter(c=>c.length===2).forEach(([c,p])=>{r.geometry.coordinates.push(ye(c.coordinates,p.coordinates,{type:"LineString",coordinates:a}).geometry.coordinates)})}),r.geometry.coordinates.length>1?r:r.geometry.coordinates.length===1?N(r.geometry.coordinates[0],r.properties):null}function oe(e,n){if(e.type==="FeatureCollection")return{...e,features:e.features.flatMap(t=>{const r=oe(t,n);return r?[r]:[]})};if(e.type==="Feature"){const t=e,r=t.geometry.type;if(r==="LineString"||r==="MultiLineString"){if(n.type==="polygon"){const i=Oe(A(n,!0),t);return i?{...t,...i}:null}const o=de(t,ze(n));return o.geometry.coordinates.length?o:null}const a=A(n,!0).geometry;if(r==="Point")return z(t.geometry.coordinates,a)?e:null;if(r==="MultiPoint"){const o={...t,geometry:{...t.geometry,coordinates:t.geometry.coordinates.filter(i=>z(i,a))}};return o.geometry.coordinates.length?o:null}if(r==="Polygon"||r==="MultiPolygon"){const o=me(t,a);return o&&o.geometry.coordinates.length?{...t,...o,properties:t.properties}:null}}return e}const Y="Loading data around warped path",$e=({bbox:e,mapStyle:n,onDataLoaded:t,sources:r,timeout:a,log:o})=>{const[i,s]=S.useState(null),[u,c]=S.useState("idle");return S.useEffect(()=>{i&&(i.fitBounds(e,{animate:!1}),setTimeout(()=>{o&&console.time(Y),c("render")},0))},[i,e]),S.useEffect(()=>{if(u==="render"){const p=i,d=()=>{let m=0,h=1;const y=new Set,b={};r.forEach(({id:x,layers:_})=>{const L=[];_.forEach(({"source-layer":P})=>{const C=p.querySourceFeatures(x,{sourceLayer:P}).map(B=>Fe(B,P));for(let B=0,pe=C.length;B<pe;B++){const $=C[B],D=$.id||"generated/"+h++;if(y.has(D)){const W=D+"/dedup/"+h++;y.add(W),L.push({...$,id:W})}else y.add(D),L.push({...$,id:D})}}),b[x]=T(L),m+=L.length||0}),o&&console.timeEnd(Y),o&&console.log("  - Features: ",m),l(),t(b),c("loaded")};let f=null;a&&(f=window.setTimeout(d,a));const l=()=>{p.off("idle",d),f!==null&&window.clearTimeout(f)};return p.on("idle",d),l}},[u]),u!=="loaded"?xe.createPortal(g.createElement("div",{style:{position:"fixed",bottom:"110%",height:1200,width:1200}},g.createElement(G,{ref:s,mapStyle:n,style:{width:"100%",height:"100%"}},u==="render"&&r.map(({id:p,url:d,layers:f})=>g.createElement(F,{key:p,id:p,type:"vector",url:d},f.map(({id:l,...m})=>g.createElement(R,{key:l,id:l,...m})))))),document.body):null},ne=({bbox:e,mapStyle:n,sources:t,transformedData:r,backgroundColor:a="white",path:o,pathLayer:i,log:s,children:u})=>{const[c,p]=S.useState(null),d=S.useMemo(()=>T(o?[o]:[]),[o]),f=S.useMemo(()=>t.flatMap(({layers:l})=>l.map(({id:m})=>m)),[t]);return S.useEffect(()=>{if(!c)return;const l=(e[0]+e[2])/2,m=[l,e[1],l,e[3]];setTimeout(()=>{c.fitBounds(m,{animate:!1}),c.resize()},0)},[c,e]),g.createElement(G,{ref:p,mapStyle:n,style:{width:"100%",height:"100%"},interactiveLayerIds:s?f:[],onClick:({features:l})=>{s&&console.log("Click transformed data map",l!=null&&l.length?l.length===1?l[0]:T(l):null)}},g.createElement(R,{type:"background",paint:{"background-color":a}}),t.map(l=>g.createElement(F,{key:l.id,id:l.id,type:"geojson",data:r[l.id]||T([])},l.layers.map(m=>{const y=["==","sourceLayer",m["source-layer"]];return g.createElement(R,{key:m.id,...w.omit(m,"source-layer"),filter:m.filter?["all",m.filter,y]:y})}))),o&&i&&g.createElement(F,{type:"geojson",data:d},g.createElement(R,{...w.omit(i,"source-layer")})),u)};ne.__docgenInfo={description:"This component handles displaying warped data. The data must be warped before being given to this component.\nCheck `SimulationWarpedMap` to see an example use case.",methods:[],displayName:"TransformedDataMap",props:{bbox:{required:!0,tsType:{name:"BBox2d"},description:""},mapStyle:{required:!1,tsType:{name:"union",raw:"string | StyleSpecification",elements:[{name:"string"},{name:"StyleSpecification"}]},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'white'",computed:!1}},sources:{required:!0,tsType:{name:"Array",elements:[{name:"SourceDefinition"}],raw:"SourceDefinition[]"},description:""},transformedData:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"FeatureCollection"}],raw:"Record<string, FeatureCollection>"},description:""},path:{required:!1,tsType:{name:"Feature",elements:[{name:"LineString"}],raw:"Feature<LineString>"},description:""},pathLayer:{required:!1,tsType:{name:"Omit",elements:[{name:"LineLayer"},{name:"literal",value:"'source-layer'"}],raw:"Omit<LineLayer, 'source-layer'>"},description:""},log:{required:!1,tsType:{name:"boolean"},description:""}}};function re(e){return w.keyBy(e.features,n=>n.properties.triangleId)}function ae(e,n){const t=[],r=re(e),a=e.features.length/n/2/2;for(let o=0;o<n;o++){t[o]=t[o]||{},t[o+1]=t[o+1]||{};for(let i=-1;i<=1;i+=2)for(let s=0;s<a;s++){const u=r[`step:${o}/strip:${i*(s+1)}/inside`],c=r[`step:${o}/strip:${i*(s+1)}/outside`],[[p,d,f]]=u.geometry.coordinates,[[l]]=c.geometry.coordinates;t[o][i*s]=p,t[o][i*(s+1)]=f,t[o+1][i*s]=d,t[o+1][i*(s+1)]=l}}return t}function ie(e){const n=T([]),t=e.length-1,r=(Object.keys(e[0]).length-1)/2;for(let a=0;a<t;a++)for(let o=-1;o<=1;o+=2)for(let i=0;i<r;i++){const s=e[a][o*i],u=e[a][o*(i+1)],c=e[a+1][o*i],p=e[a+1][o*(i+1)];n.features.push(O([[s,c,u,s]],{triangleId:`step:${a}/strip:${o*(i+1)}/inside`})),n.features.push(O([[p,c,u,p]],{triangleId:`step:${a}/strip:${o*(i+1)}/outside`}))}return n}function Ae(e){const n=e[0],t=e[e.length-1],r=(Object.keys(n).length-1)/2,a=[];for(let o=-r;o<=r;o++)a.push(e[0][o]);for(let o=1,i=e.length-1;o<i;o++)a.push(e[o][r]),a.unshift(e[o][-r]);for(let o=r;o>=-r;o--)a.push(t[o]);return a.push(a[0]),{type:"polygon",points:a}}function je(e,n){const t=(n==null?void 0:n.stripsPerSize)||3,r=e.geometry.coordinates.length;if(r<=2)throw new Error("line must have at least 3 points");const a=V(e),o=a/(r-1),i=he(e),s=T([]),u=v(i,a/2,180),c=[];for(let l=0;l<r;l++)c.push(v(u,-l*o,180).geometry.coordinates);const p=N(c);for(let l=0;l<r-1;l++){const m=p.geometry.coordinates[l],h=p.geometry.coordinates[l+1];for(let y=-1;y<=1;y+=2)for(let b=0;b<t;b++){const x=v(m,o*b,y*90).geometry.coordinates,_=v(m,o*(b+1),y*90).geometry.coordinates,L=v(h,o*b,y*90).geometry.coordinates,P=v(h,o*(b+1),y*90).geometry.coordinates;s.features.push(O([[x,L,_,x]],{triangleId:`step:${l}/strip:${y*(b+1)}/inside`})),s.features.push(O([[P,L,_,P]],{triangleId:`step:${l}/strip:${y*(b+1)}/outside`}))}}const d=[];for(let l=0;l<r;l++){d[l]={};const m=e.geometry.coordinates[l],h=e.geometry.coordinates[l===0?l:l-1],y=e.geometry.coordinates[l===r-1?l:l+1],b=ge(h,y)+90;d[l][0]=m;for(let x=-1;x<=1;x+=2)for(let _=1;_<=t;_++)d[l][x*_]=v(m,o*_*x,b).geometry.coordinates}return{original:ie(d),warped:s}}function se(e,n,t){const r=w.clamp((t==null?void 0:t.force)||.5,0,1),a=Math.max(1,(t==null?void 0:t.iterations)||1);if(a>1){let c=e;for(let p=0;p<a;p++)c=se(c,n,{force:r});return c}const o=ae(e,n),i=o.length,s=[],u=(Object.keys(o[0]).length-1)/2;s[0]=w.cloneDeep(o[0]),s[i-1]=w.cloneDeep(o[i-1]);for(let c=1;c<i-1;c++){s[c]={};for(let p=-1;p<=1;p+=2){s[c][0]=o[c][0];for(let d=1;d<=u;d++){const f=o[c][p*d],l=(o[c-1]||{})[p*d],m=(o[c+1]||{})[p*d],h=(o[c]||{})[p*d-1],y=(o[c]||{})[p*d+1],b=[l,m,h||M.add(f,M.vector(y,f)),y||M.add(f,M.vector(h,f))];s[c][p*d]=[w.meanBy(b,x=>x[0])*r+f[0]*(1-r),w.meanBy(b,x=>x[1])*r+f[1]*(1-r)]}}}return ie(s)}function Ge([e,n,t,r],[a,o,i,s]){return!(e>i)&&!(t<a)&&!(n>s)&&!(r<o)}function Q(e,n){return n?{type:"leaf",elements:[]}:{type:"quad",bbox:e,children:[null,null,null,null]}}function Ne(e,n){const t=I(e),r=Q(t);for(let a=0,o=e.features.length;a<o;a++){const i=e.features[a],s=I(i);let u=[r];for(let c=0;c<n&&u.length;c++){const p=[];for(let d=0,f=u.length;d<f;d++){const l=u[d];if(l.type!=="quad")break;const[m,h,y,b]=l.bbox,x=(m+y)/2,_=(h+b)/2,L=[[m,h,x,_],[x,h,y,_],[m,_,x,b],[x,_,y,b]];for(let P=0;P<L.length;P++){const C=L[P];Ge(s,C)&&(l.children[P]=l.children[P]||Q(C,c===n-1),p.push(l.children[P]))}}u=p}for(let c=0,p=u.length;c<p;c++){const d=u[c];if(d.type!=="leaf")break;d.elements.push(i)}}return r}function le(e,n){const[t,r]=e,[a,o,i,s]=n.bbox,u=(a+i)/2,c=(o+s)/2;let p;return t<u&&r<c?p=n.children[0]:t>u&&r<c?p=n.children[1]:t<u&&r>c?p=n.children[2]:p=n.children[3],p?p.type==="quad"?le(e,p):p.elements:[]}function We(e,n,t){let r;e.type==="quad"?r=w.keyBy(le(t,e),o=>o.properties.triangleId):r=e;const a=Object.keys(r);for(let o=0,i=a.length;o<i;o++){const s=a[o],u=r[s],c=Be(t,u);if(qe(c))return De(c,n[s])}return null}function j(e,n){if(!e)return null;switch(e.type){case"Point":{const t=n(e.coordinates);return t?{...e,coordinates:t}:null}case"MultiPoint":case"LineString":{const t=e.coordinates.flatMap(r=>{const a=n(r);return a?[a]:[]});return t.length?{...e,coordinates:t}:null}case"Polygon":case"MultiLineString":{const t=e.coordinates.flatMap(r=>{const a=r.flatMap(o=>{const i=n(o);return i?[i]:[]});return a.length?[a]:[]});return t.length?{...e,coordinates:t}:null}case"MultiPolygon":{const t=e.coordinates.flatMap(r=>{const a=r.flatMap(o=>{const i=o.flatMap(s=>{const u=n(s);return u?[u]:[]});return i.length?[i]:[]});return a.length?[a]:[]});return t.length?{...e,coordinates:t}:null}case"GeometryCollection":return{...e,geometries:e.geometries.map(t=>j(t,n))};default:return e}}function ce(e,n,t){if(e.type==="FeatureCollection")return{...e,features:e.features.flatMap(r=>{const a=ce(r,n,t);return a?[a]:[]})};if(e.type==="Feature"){const r=oe(e,t);if(r){const a=j(r.geometry,n);return a?{...r,geometry:a}:null}return null}return j(e,n)}const He={tolerance:.01,samplesCount:15,straightenForce:.8,straightenIterations:5,quadtreeDepth:4,stripsPerSide:3};function Ue(e,n={}){const t={...He,...n},r=be(e,{tolerance:t.tolerance}),a=Ie(r,t.samplesCount),o=N(a.points.map(h=>h.geometry.coordinates)),i=Ce(o,a.step),s=i.geometry.coordinates.length-1,{warped:u,original:c}=je(i,{stripsPerSize:t.stripsPerSide}),p=se(c,s,{force:t.straightenForce,iterations:t.straightenIterations}),d=re(u),f=Ne(p,t.quadtreeDepth),l=Ae(ae(p,s)),m=h=>We(f,d,h);return{warpedPathBBox:I(u),transform:h=>ce(h,m,l),grid:p,warpedGrid:u}}const X="Warping data",Ye={loader:Z},Qe=({path:e,pathLayer:n,sources:t,components:r={},mapStyle:a,warpingOptions:o,log:i,children:s})=>{const[u,c]=S.useState({type:"idle"}),p={...Ye,...r};return S.useEffect(()=>{const d=I(e),{warpedPathBBox:f,transform:l}=Ue(e,o),m=l(e);c({type:"pathLoaded",path:e,warpedPath:m,pathBBox:d,warpedPathBBox:f,transform:l})},[e,o]),g.createElement(g.Fragment,null,u.type==="pathLoaded"&&g.createElement($e,{log:i,mapStyle:a,bbox:u.pathBBox,sources:t,timeout:3e3,onDataLoaded:d=>{i&&console.time(X);const f=w.omitBy(w.mapValues(d,l=>l?u.transform(l):null),w.isNil);i&&console.timeEnd(X),c({...u,data:d,transformedData:f,type:"dataLoaded"})}}),u.type!=="dataLoaded"&&g.createElement(p.loader,null),u.type==="dataLoaded"&&g.createElement(ne,{log:i,mapStyle:a,bbox:u.warpedPathBBox,sources:t,transformedData:u.transformedData,path:u.warpedPath,pathLayer:n},s))};Qe.__docgenInfo={description:`This component handles loading all data along a given path on various sources, and then displays them on a map (using
TransformedDataMap):`,methods:[],displayName:"WarpedMap",props:{path:{required:!0,tsType:{name:"Feature",elements:[{name:"LineString"}],raw:"Feature<LineString>"},description:""},pathLayer:{required:!1,tsType:{name:"Omit",elements:[{name:"LineLayer"},{name:"literal",value:"'source-layer'"}],raw:"Omit<LineLayer, 'source-layer'>"},description:""},sources:{required:!0,tsType:{name:"Array",elements:[{name:"SourceDefinition"}],raw:"SourceDefinition[]"},description:""},components:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"literal",value:"'loader'"},{name:"ComponentType"}],raw:"Record<'loader', ComponentType>"}],raw:"Partial<Components>"},description:"",defaultValue:{value:"{}",computed:!1}},mapStyle:{required:!1,tsType:{name:"union",raw:"string | StyleSpecification",elements:[{name:"string"},{name:"StyleSpecification"}]},description:""},warpingOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  tolerance: number;
  samplesCount: number;
  straightenForce: number;
  straightenIterations: number;
  quadtreeDepth: number;
  stripsPerSide: number;
}`,signature:{properties:[{key:"tolerance",value:{name:"number",required:!0}},{key:"samplesCount",value:{name:"number",required:!0}},{key:"straightenForce",value:{name:"number",required:!0}},{key:"straightenIterations",value:{name:"number",required:!0}},{key:"quadtreeDepth",value:{name:"number",required:!0}},{key:"stripsPerSide",value:{name:"number",required:!0}}]}},description:""},log:{required:!1,tsType:{name:"boolean"},description:""}}};function Xe(e){if(e.type==="ready")return e.data;if(e.type==="loading")return e.previousData}function nt(e,n){const[t,r]=S.useState({type:"loading"});return S.useEffect(()=>{let a=!1;return r({type:"loading",previousData:Xe(t)}),e().then(o=>{a||r({type:"ready",data:o})}).catch(o=>{a||r({type:"error",error:o})}),()=>{a=!0}},n),t}export{Ee as B,He as D,Z as L,ot as O,et as P,Qe as W,tt as a,_e as b,we as c,Se as d,Pe as e,Ue as g,nt as u};
