import{R as t,r as u}from"./index-RYns6xqu.js";import{f as T,S as p,L as l}from"./index-DBEOy9XB.js";import{u as P,L as E,g as A,B as _,O as m,W as b,a as I,P as D,b as y,D as e}from"./useAsyncMemo-DTEe5ELV.js";import"./iframe-B16YjvGo.js";import"../sb-preview/runtime.js";import"./index-D16Yfzz8.js";import"./lodash-CcdATr5u.js";const c=[I],O={id:"path-layer",source:"path",type:"line",paint:{"line-width":1,"line-color":"blue"}},N=({path:r,warpingOptions:a})=>{const{grid:o,warpedGrid:n}=u.useMemo(()=>A(r,a),[r,a]),s=u.useMemo(()=>T([r]),[r]);return t.createElement("div",{style:{background:"lightgrey",display:"flex",flexDirection:"row",alignItems:"stretch",position:"absolute",inset:0}},t.createElement("div",{style:{marginRight:"1em",flexGrow:1}},t.createElement(_,{path:r,sources:c,mapStyle:m},t.createElement(p,{type:"geojson",data:s},t.createElement(l,{id:"path-layer",source:"path",type:"line",paint:{"line-width":1,"line-color":"blue"}})),t.createElement(p,{type:"geojson",data:o},t.createElement(l,{id:"grid-layer",source:"grid",type:"line",paint:{"line-width":1,"line-color":"red"}})))),t.createElement("div",{style:{flexGrow:1}},t.createElement(b,{log:!0,path:r,pathLayer:O,sources:c,mapStyle:m,warpingOptions:a},t.createElement(p,{type:"geojson",data:n},t.createElement(l,{id:"grid-layer",source:"grid",type:"line",paint:{"line-width":1,"line-color":"red"}})))))},f=r=>{const{path:a,...o}=r,n=P(()=>fetch(`./${a}.json`).then(S=>S.json()),[a]),s=n.type==="ready"?n.data:null;return s?t.createElement(N,{key:a,path:s,warpingOptions:o}):t.createElement(E,null)};f.__docgenInfo={description:"",methods:[],displayName:"Algorithms",props:{path:{required:!0,tsType:{name:"string"},description:""},tolerance:{required:!0,tsType:{name:"number"},description:""},samplesCount:{required:!0,tsType:{name:"number"},description:""},straightenForce:{required:!0,tsType:{name:"number"},description:""},straightenIterations:{required:!0,tsType:{name:"number"},description:""},quadtreeDepth:{required:!0,tsType:{name:"number"},description:""},stripsPerSide:{required:!0,tsType:{name:"number"},description:""}}};const W={component:f,title:"WarpedMap/Algorithms",argTypes:{path:{name:"Path",description:"Which path to warp on",options:D,defaultValue:y,control:{type:"radio"}},tolerance:{name:"Tolerance",description:"The tolerance for turf.simplify",defaultValue:e.tolerance,type:"number",control:{type:"range",min:0,max:1,step:.005,defaultValue:e.tolerance}},stripsPerSide:{name:"Strips per side",description:"The number of strips on each side of the grid",defaultValue:e.stripsPerSide,type:"number",control:{type:"number",min:1,step:1,defaultValue:e.stripsPerSide}},samplesCount:{name:"Samples count",description:"The number of samples on the grid",defaultValue:e.samplesCount,type:"number",control:{type:"number",min:3,step:1,defaultValue:e.samplesCount}},straightenForce:{name:"Straighten force",description:"The strength of the force to strengthen on.",defaultValue:e.straightenForce,type:"number",control:{type:"range",min:0,max:1,step:.005,defaultValue:e.straightenForce}},straightenIterations:{name:"Straighten iterations",description:"The number of strenghtening iterations.",defaultValue:e.straightenIterations,type:"number",control:{type:"number",min:1,step:1,defaultValue:e.straightenIterations}},quadtreeDepth:{name:"Quadtree depth",description:"The maximum depth of the quadtree",defaultValue:e.quadtreeDepth,type:"number",control:{type:"number",min:1,step:1,defaultValue:e.quadtreeDepth}}}},i={name:"Default settings",args:{path:y,tolerance:e.tolerance,stripsPerSide:e.stripsPerSide,samplesCount:e.samplesCount,straightenForce:e.straightenForce,straightenIterations:e.straightenIterations,quadtreeDepth:e.quadtreeDepth}};var d,h,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Default settings',
  args: {
    path: PATH_LONG,
    tolerance: DEFAULT_WARPING_OPTIONS.tolerance,
    stripsPerSide: DEFAULT_WARPING_OPTIONS.stripsPerSide,
    samplesCount: DEFAULT_WARPING_OPTIONS.samplesCount,
    straightenForce: DEFAULT_WARPING_OPTIONS.straightenForce,
    straightenIterations: DEFAULT_WARPING_OPTIONS.straightenIterations,
    quadtreeDepth: DEFAULT_WARPING_OPTIONS.quadtreeDepth
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const x=["DefaultSettings"];export{i as DefaultSettings,x as __namedExportsOrder,W as default};
