import{R as e}from"./index-RYns6xqu.js";import{c as t}from"./index-Cm1LdsEh.js";import{F as B}from"./FieldWrapper-DTvEllJF.js";import{u as x}from"./useFocusByTab-DuF17kQm.js";const i=({value:a,type:s,disabled:m,readOnly:n})=>{const l=typeof a=="object"&&a!==null&&"onClickCallback"in a,r=l?a.content:a,o=l?{onClick:a.onClickCallback}:{};return e.createElement("div",{className:t(`${s}-content-wrapper`,{disabled:m,"read-only":n}),...o},e.createElement("span",{className:`${s}-content`},r))},y=e.forwardRef(({id:a,label:s,type:m,hint:n,leadingContent:l,trailingContent:r,required:o,disabled:u=!1,readOnly:f=!1,statusWithMessage:c,inputFieldWrapperClassname:N="",small:d=!1,withIcons:E=[],onKeyUp:w,onBlur:k,...I},b)=>{const{handleKeyUp:v,handleBlur:q,isFocusByTab:F}=x({onBlur:k,onKeyUp:w});return e.createElement(B,{id:a,label:s,hint:n,statusWithMessage:c,disabled:u,required:o,small:d,className:t("input-field-wrapper",N)},e.createElement("div",{className:t("input-wrapper",{small:d,"focused-by-tab":F})},l&&e.createElement(i,{value:l,type:"leading",disabled:u,readOnly:f}),e.createElement("div",{className:"input-container"},e.createElement("input",{ref:b,className:t("input",{"with-leading-only":l&&!r,"with-trailing-only":r&&!l,"with-leading-and-trailing":l&&r,[(c==null?void 0:c.status)||""]:!!c}),id:a,type:m,disabled:u,readOnly:f,onKeyUp:v,onBlur:q,...I}),e.createElement("div",{className:t("input-icons",{small:d})},E.map((p,V)=>e.createElement("span",{key:V,className:p==null?void 0:p.className,onClick:p.action},p.icon)))),r&&e.createElement(i,{value:r,type:"trailing",disabled:u,readOnly:f})))});y.displayName="Input";y.__docgenInfo={description:"",methods:[],displayName:"Input",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},inputFieldWrapperClassname:{defaultValue:{value:"''",computed:!1},required:!1},small:{defaultValue:{value:"false",computed:!1},required:!1},withIcons:{defaultValue:{value:"[]",computed:!1},required:!1}}};export{y as I};
