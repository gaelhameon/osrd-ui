import{R as a,r as T}from"./index-RYns6xqu.js";/* empty css              */import{c as W}from"./index-Cm1LdsEh.js";import{C as H}from"./Checkbox-BGYpQcqM.js";import{F as K}from"./FieldWrapper-C3znly_0.js";import"./useFocusByTab-CGFT2N9H.js";import"./InputStatusIcon-C7TZknlp.js";import"./index.esm-Dk8PHLvH.js";const g=e=>{const{items:s,onClickItem:r,small:t=!1,label:o="",readOnly:l=!1,disabled:c=!1}=e;return a.createElement(a.Fragment,null,a.createElement("span",{className:"checkbox-list-label"},o),a.createElement("ul",{className:W("checkbox-list",{small:t})},s.map(p=>{const{id:d,props:i,items:m}=p;return a.createElement("li",{key:d},a.createElement(H,{small:t,onClick:C=>r(C,p),checked:p.props.checked,isIndeterminate:p.props.isIndeterminate,...i,disabled:c,readOnly:l}),m&&a.createElement(g,{...e,items:m}))})))};var n=(e=>(e[e.UNCHECKED=0]="UNCHECKED",e[e.CHECKED=1]="CHECKED",e[e.INDETERMINATE=2]="INDETERMINATE",e))(n||{});const E=(e,s,r)=>{e.forEach(t=>{s(t,r),t.items&&t.items.length>0&&E(t.items,s,t)})},v=e=>{const s={},r={};return E(e,(t,o)=>{(o==null?void 0:o.id)!==void 0&&(s[o.id]||(s[o.id]=[]),s[o.id].push(t.id),r[t.id]=o.id)}),{parentChildrenMap:s,childrenParentMap:r}},I=(e,s,r,t)=>{var o;t[e]=s,(o=r[e])==null||o.forEach(l=>I(l,s,r,t))},N=(e,s,r)=>{const{parentChildrenMap:t,childrenParentMap:o}=r,l=o[e];if(l===void 0)return;const p=t[l].map(i=>s[i]);let d;p.every(i=>i===n.CHECKED)?d=n.CHECKED:p.every(i=>i===n.UNCHECKED)?d=n.UNCHECKED:d=n.INDETERMINATE,s[l]=d,N(l,s,{parentChildrenMap:t,childrenParentMap:o})},w=(e,s,r)=>{const t={...s},o=t[r]===n.CHECKED?n.UNCHECKED:n.CHECKED,{parentChildrenMap:l,childrenParentMap:c}=v(e);return I(r,o,l,t),N(r,t,{parentChildrenMap:l,childrenParentMap:c}),t},R=e=>{const s={};return E(e,r=>{r.props.isIndeterminate?s[r.id]=n.INDETERMINATE:s[r.id]=r.props.checked?n.CHECKED:n.UNCHECKED}),s},A=(e,s)=>{const r=JSON.parse(JSON.stringify(e));return E(r,t=>{const{checked:o,isIndeterminate:l,...c}=t.props;t.props=c,s[t.id]===n.INDETERMINATE?t.props.isIndeterminate=!0:s[t.id]===n.CHECKED?t.props.checked=!0:t.props.checked=!1}),r},x=(e,s)=>{const r=R(e),t=w(e,r,s.id);return A(e,t)},k=({items:e,small:s,id:r,label:t,hint:o,statusWithMessage:l,disabled:c,required:p,readOnly:d,onChange:i,computeNewItemsTree:m})=>{const C=(M,u)=>{var f,h;const y=m?m(e,u):x(e,u);i==null||i(y,u),(h=(f=u.props).onClick)==null||h.call(f,M)};return a.createElement(K,{id:r,label:t,hint:o,statusWithMessage:l,statusIconPosition:"before-status-message",disabled:c,required:p,small:s},a.createElement(g,{small:s,items:e,disabled:c,readOnly:d,onClickItem:C}))},L=e=>{const[s,r]=T.useState(e.items),t=o=>r(o);return a.createElement(k,{...e,items:s,onChange:t})},J={component:k,title:"Core/CheckboxesTree",tags:["autodocs"],argTypes:{disabled:{control:"boolean"},small:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"}},render:e=>a.createElement(L,{...e})},D=[{id:1,props:{label:"Milk"}},{id:2,props:{label:"Butter"}},{id:3,props:{label:"Cream"}}],b=[{id:1,props:{label:"Milk"}},{id:2,props:{label:"Sugar"}},{id:3,props:{label:"Lemon slice"}}],Y={args:{items:D}},_={args:{items:b,label:"With your tea"}},j={args:{items:b,label:"With your tea",hint:"At no extra cost for you"}},z={args:{items:[{id:1,props:{label:"A walk on the beach"}},{id:2,props:{label:"A bike ride on long forest winding roads"}},{id:3,props:{label:"Reading a book in a couch"}}]}},Q={args:{items:[{id:0,props:{label:"Dairy products"},items:[{id:1,props:{label:"Milk"}},{id:2,props:{label:"Butter"}},{id:3,props:{label:"Cream"}}]}]}},X={args:{items:[{id:1,props:{label:"foo"},items:[{id:2,props:{label:"foo2"},items:[{id:3,props:{label:"foo3"}},{id:4,props:{label:"foo4"}}]},{id:5,props:{label:"foo5"},items:[{id:6,props:{label:"foo6"},items:[{id:8,props:{label:"foo8"}},{id:9,props:{label:"foo9"}}]}]}]},{id:7,props:{label:"foo7"}}]}},Z={args:{items:b,label:"With your beverage",required:!0}},V={args:{items:D.map((e,s)=>s===1?{...e,props:{...e.props,checked:!0}}:{...e}),disabled:!0,statusWithMessage:{status:"info",message:"These controls are disabled"}},decorators:[e=>a.createElement("div",{style:{maxWidth:"20rem"}},a.createElement(e,null))]},$={args:{items:b,statusWithMessage:{status:"warning",message:"Your tea will be black, strong and not sweet at all"}},decorators:[e=>a.createElement("div",{style:{maxWidth:"20rem"}},a.createElement(e,null))]},ee={args:{items:[{id:1,props:{label:"Chocolate cake"}},{id:2,props:{label:"Ice cream"}},{id:3,props:{label:"Tiramisu"}}],statusWithMessage:{status:"error",message:"You can’t order a meal without a pastry"}},decorators:[e=>a.createElement("div",{style:{maxWidth:"20rem"}},a.createElement(e,null))]},te=["Default","GroupWithLabel","GroupWithLabelCaption","LabelOverflow","Nested","MoreNested","Required","Information","Warning","Error"];export{Y as Default,ee as Error,_ as GroupWithLabel,j as GroupWithLabelCaption,V as Information,z as LabelOverflow,X as MoreNested,Q as Nested,Z as Required,$ as Warning,te as __namedExportsOrder,J as default};
