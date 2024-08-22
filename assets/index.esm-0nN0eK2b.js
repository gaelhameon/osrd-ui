import{r as o,R as Y}from"./index-RYns6xqu.js";import{c as Pe}from"./index-Cm1LdsEh.js";import{l as W}from"./lodash-CcdATr5u.js";import{c as Te}from"./chroma-CVOSM3bD.js";function ye(e){const[n,i]=o.useState({width:(e==null?void 0:e.offsetWidth)||1,height:(e==null?void 0:e.offsetHeight)||1});return o.useEffect(()=>{const m=()=>{const x=(e==null?void 0:e.offsetWidth)||1,y=(e==null?void 0:e.offsetHeight)||1;x===n.width&&y===n.height||i({width:x,height:y})};if(e){const x=new ResizeObserver(m);return x.observe(e),()=>{x.disconnect()}}m()},[e,n.height,n.width]),n}const De=o.createContext(void 0),ce=o.createContext({register:()=>{},unregister:()=>{}}),Ae=o.createContext(void 0),he="stop",Q=["paths"],ne=["graduations","paths","captions","overlay"],xe={},ie={};function Le(e){return xe[e.toLowerCase()]}function oe(e){return e.toString(16).padStart(2,"0").toLowerCase()}const de="picking";function Ie(e,n,i){const m=o.useRef({}),x=o.useRef({}),y=o.useRef(Q.reduce((u,d)=>Object.assign(Object.assign({},u),{[d]:new Set}),{})),g=o.useRef(ne.reduce((u,d)=>Object.assign(Object.assign({},u),{[d]:new Set}),{})),v=o.useRef(n),b=o.useRef(null),k=ye(e),[t,p]=o.useState(null),c=o.useCallback((u,d)=>{Q.forEach(h=>{if(d&&!d.has(h))return;const a=x.current[`${de}-${h}`],S=y.current[h];if(a){a.clearRect(0,0,a.canvas.width,a.canvas.height);const O=a.getImageData(0,0,a.canvas.width,a.canvas.height);S.forEach(L=>L(O,u)),a.putImageData(O,0,0)}})},[]),r=o.useCallback((u,d)=>{ne.forEach(h=>{if(d&&!d.has(h))return;const a=x.current[`rendering-${h}`],S=g.current[h];a&&(a.clearRect(0,0,a.canvas.width,a.canvas.height),S.forEach(O=>O(a,u)))})},[]),f=o.useCallback(()=>{r(v.current),c(v.current),b.current&&(window.cancelAnimationFrame(b.current.frameId),b.current=null)},[]),s=o.useCallback(()=>{b.current||(b.current={frameId:window.requestAnimationFrame(f)})},[]),w=o.useCallback(({type:u,layer:d,fn:h})=>{if(u==="picking"){const a=y.current[d];if(a.has(h))throw new Error("This picking function has already been registered.");a.add(h)}else if(u==="rendering"){const a=g.current[d];if(a.has(h))throw new Error("This drawing function has already been registered.");a.add(h)}s()},[]),R=o.useCallback(({type:u,layer:d,fn:h})=>{if(u==="picking"){const a=y.current[d];if(!a.has(h))throw new Error("This picking function has not been registered.");a.delete(h)}else if(u==="rendering"){const a=g.current[d];if(!a.has(h))throw new Error("This drawing function has not been registered.");a.delete(h)}s()},[]);return o.useEffect(()=>{if(!e)return;const u=m.current,d=x.current;[...ne.map(h=>({layer:h,type:"rendering"})),...Q.map(h=>({layer:h,type:"picking"}))].forEach(({layer:h,type:a})=>{const S=`${a}-${h}`;if(!u[S]){const O=document.createElement("CANVAS"),L=O.getContext("2d");O.style.position="absolute",O.style.inset="0",e.appendChild(O),u[S]=O,d[S]=L,a==="picking"&&(O.style.display="none")}})},[e]),o.useEffect(()=>{v.current=n,f()},[n.fingerprint]),o.useEffect(()=>{for(const u in m.current){const d=m.current[u];d&&(d.style.width=k.width+"px",d.style.height=k.height+"px",d.setAttribute("width",k.width+"px"),d.setAttribute("height",k.height+"px"))}f()},[k]),o.useEffect(()=>{let u=null;Q.some(d=>{const h=x.current[`${de}-${d}`];if(h&&i){const[a,S,O,L]=h.getImageData(i.x,i.y,1,1).data;if(L===255){const H=function(q,Z,U){return`#${oe(q)}${oe(Z)}${oe(U)}`}(a,S,O);return u={layer:d,index:Le(H)},!0}}return!1}),W.isEqual(u,t)||p(u)},[i,t]),{canvasContext:o.useMemo(()=>({register:w,unregister:R}),[w,R]),hoveredItem:t}}function ee(e,n){const{register:i,unregister:m}=o.useContext(ce);o.useEffect(()=>(i({type:"rendering",layer:e,fn:n}),()=>{m({type:"rendering",layer:e,fn:n})}),[e,n,i,m])}const X="#2170B9",re="#B6B2AF",ve=6e4,J=36e5,we=[.2,.4,.8,2.4,12,32,72,1/0],be=[1e4,3e4,6e4,3e5,9e5,18e5,1*J,3*J,6*J,12*J,24*J],Re={1:{width:.5,color:X,opacity:.75},2:{width:.5,color:X,opacity:.25},3:{width:.5,color:"#EDEDED"}},je=()=>(ee("graduations",o.useCallback((e,{xOffset:n,getY:i,operationalPoints:m})=>{const x=e.canvas.width;m.forEach(y=>{const g=Re[y.importanceLevel||0];if(!g)return;e.strokeStyle=g.color,e.lineWidth=g.width,e.globalAlpha=g.opacity||1,g.dashArray&&(e.setLineDash(g.dashArray||[]),e.lineDashOffset=-n);const v=i(y.position);typeof v=="number"&&(e.beginPath(),e.moveTo(0,v),e.lineTo(x,v),e.stroke())}),e.setLineDash([]),e.lineDashOffset=0,e.globalAlpha=1},[])),null),Fe=[[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1],[0,0,0,0,0,3,1,1,1,1,1],[0,0,0,3,2,1,1,1,1,1,1],[0,0,0,3,2,1,1,1,1,1,1],[0,0,3,2,1,1,1,1,1,1,1],[0,0,3,2,1,1,1,1,1,1,1]],_=e=>`:${new Date(e).getMinutes().toString().padStart(2,"0")}`,V=(e,n)=>{const i=new Date(e);return n>1?`${i.getUTCHours().toString().padStart(2,"0")}:${i.getMinutes().toString().padStart(2,"0")}`:i.getUTCHours().toString().padStart(2,"0")},We=[()=>"",()=>"",_,_,_,_,V,V,V,V,V],$e={1:{color:"#797671",fontSize:12,topOffset:11},2:{color:re,fontSize:12,topOffset:9},3:{color:re,fontSize:10,topOffset:6},4:{color:re,fontSize:8,topOffset:8}},Ne=()=>(ee("captions",o.useCallback((e,{timeScale:n,timeOrigin:i,xOffset:m,getX:x})=>{const y=e.canvas.width,g=e.canvas.height,v=i-n*m,b=v+n*y,k=1/n*ve;let t=[];we.some((c,r)=>k<c&&(t=Fe[r],!0));const p={};be.map((c,r)=>{const f=t[r];if(!f)return;let s=Math.floor(v/c)*c;for(;s<=b;)f&&(p[s]={level:f,rangeIndex:r}),s+=c}),e.fillStyle="white",e.fillRect(0,g-33,y,g),e.strokeStyle="#979797",e.lineWidth=2,e.beginPath(),e.moveTo(0,g-33),e.lineTo(y,g-33),e.stroke();for(const c in p){const{level:r,rangeIndex:f}=p[c],s=$e[r],w=(0,We[f])(+c,k);e.textAlign="center",e.textBaseline="top",e.fillStyle=s.color,e.font=`${s.fontWeight||"normal"} ${s.fontSize}px IBM Plex Sans`,e.fillText(w,x(+c),g-33+(s.topOffset||0))}},[])),null),He=[[0,0,0,0,0,0,0,4,3,2,1],[0,0,0,0,0,0,4,3,3,2,1],[0,0,0,0,0,6,4,3,3,2,1],[0,0,0,0,6,5,4,3,3,2,1],[0,0,0,6,5,4,3,2,2,2,1],[0,0,6,5,4,4,3,2,2,2,1],[0,6,5,4,4,4,3,2,2,2,1],[6,0,5,4,4,4,3,2,2,2,1]],ze={1:{width:.5,color:"#000000"},2:{width:.5,color:X,opacity:.77},3:{width:.5,color:X,opacity:.5},4:{width:.5,color:X,opacity:.5,dashArray:[6,6]},5:{width:.5,color:X,opacity:.5,dashArray:[6,18]},6:{width:1,color:X,opacity:.5,dashArray:[1,12]}},Be=()=>(ee("graduations",o.useCallback((e,{timeScale:n,timeOrigin:i,xOffset:m,yOffset:x,getX:y})=>{const g=e.canvas.width,v=e.canvas.height,b=i-n*m,k=b+n*g,t=1/n*ve;let p=[];we.some((r,f)=>t<r&&(p=He[f],!0));const c={};be.map((r,f)=>{const s=p[f];if(!s)return;let w=Math.floor(b/r)*r;for(;w<=k;)c[w]=s,w+=r});for(const r in c){const f=c[r],s=ze[f];e.strokeStyle=s.color,e.lineWidth=s.width,e.globalAlpha=s.opacity||1,e.setLineDash(s.dashArray||[]),s.dashArray&&(e.lineDashOffset=-x);const w=y(+r);e.beginPath(),e.moveTo(w,0),e.lineTo(w,v),e.stroke()}e.setLineDash([]),e.lineDashOffset=0,e.globalAlpha=1},[])),null);function ae(e,n){const i=n.getBoundingClientRect();return{x:e.clientX-i.left,y:e.clientY-i.top}}function Ye(e){if(e.deltaY!==void 0)return-3*e.deltaY/360;if(e.detail!==void 0)return e.detail/-9;throw new Error("Could not extract delta from event.")}function Ee(e,n){e=W.clamp(e,n.from,n.to);let i=n;for(;"limit"in i;)i=e<=i.limit?i.left:i.right;return i}function Xe(e,n,i){return m=>{const{from:x,pixelFrom:y,coefficient:g}=function(v,b){v=W.clamp(v,b.pixelFrom,b.pixelTo);let k=b;for(;"pixelLimit"in k;)k=v<=k.pixelLimit?k.left:k.right;return k}(m-n,i);return e+x+(m-n-y)*g}}function Oe(e,n,i){if(n<e)return Oe(n,e,i).reverse();e=Math.max(e,i.from),n=Math.min(n,i.to);let m=Ee(e,i),x=e;const y=[];for(;m.to<n;)m.to!==x&&y.push(m.to),x=m.to,m=m.next;return y}const Je=e=>{const{operationalPoints:n,spaceOrigin:i,spaceScales:m,timeOrigin:x,timeScale:y,xOffset:g=0,yOffset:v=0,onHoveredChildUpdate:b,children:k,onPan:t,onZoom:p,onClick:c,onMouseMove:r}=e,f=function(l,$){var F={};for(var P in l)Object.prototype.hasOwnProperty.call(l,P)&&$.indexOf(P)<0&&(F[P]=l[P]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function"){var D=0;for(P=Object.getOwnPropertySymbols(l);D<P.length;D++)$.indexOf(P[D])<0&&Object.prototype.propertyIsEnumerable.call(l,P[D])&&(F[P[D]]=l[P[D]])}return F}(e,["operationalPoints","spaceOrigin","spaceScales","timeOrigin","timeScale","xOffset","yOffset","onHoveredChildUpdate","children","onPan","onZoom","onClick","onMouseMove"]),[s,w]=o.useState(null),[R,u]=o.useState(null),{width:d,height:h}=ye(s),a=o.useMemo(()=>JSON.stringify({width:d,height:h,spaceOrigin:i,spaceScales:m,timeOrigin:x,timeScale:y,xOffset:g,yOffset:v}),[d,h,i,m,x,y,g,v]),S=o.useMemo(()=>{const l=function(j,C){let I=j;if(C.some(M=>M.to<I||(I=M.to,!1)))throw new Error("Invalid scale: 'to' must be greater than previous 'to'.");if(C.some(M=>("size"in M?M.size:M.coefficient)<=0))throw new Error("Invalid scale: 'to' must be greater than 'from'.");const A=[];let z=0;I=j;for(let M=0;M<C.length;M++){const E=C[M],N="coefficient"in E?E.coefficient:(E.to-I)/E.size,T="coefficient"in E?(E.to-I)/E.coefficient:E.size;A.push({from:I,to:E.to,pixelFrom:z,pixelTo:z+T,coefficient:N}),z+=T,I=E.to,M&&(A[M].previous=A[M-1],A[M-1].next=A[M])}return function M(E){if(E.length===0)throw new Error("Invalid scales: there should be at least one scale.");if(E.length===1)return E[0];{const N=Math.ceil(E.length/2);return{limit:E[N-1].to,pixelLimit:E[N-1].pixelTo,from:E[0].from,to:E[E.length-1].to,pixelFrom:E[0].pixelFrom,pixelTo:E[E.length-1].pixelTo,left:M(E.slice(0,N)),right:M(E.slice(N))}}}(A)}(i,m),$=function(j,C,I){return A=>C+(A-j)/I}(x,g,y),F=function(j,C,I){return A=>{const{from:z,pixelFrom:M,coefficient:E}=Ee(A-j,I);return C+M+(A-z)/E}}(i,v,l),P=function(j,C){return({time:I,position:A})=>({x:j(I),y:C(A)})}($,F),D=function(j,C,I){return A=>(A-C)*I+j}(x,g,y),K=Xe(i,v,l);return{fingerprint:a,width:d,height:h,getX:$,getY:F,getPoint:P,getTime:D,getSpace:K,getData:function(j,C){return({x:I,y:A})=>({time:j(I),position:C(A)})}(D,K),operationalPoints:n,spaceOrigin:i,spaceScaleTree:l,timeOrigin:x,timeScale:y,xOffset:g,yOffset:v}},[a]),{position:O,down:L,isHover:H}=function(l,$,F){const P=o.useRef($),[D,K]=o.useState({type:"idle"}),[te,j]=o.useState({isHover:!1,position:{x:NaN,y:NaN}}),{position:C,down:I}=te;o.useEffect(()=>{P.current=$},[$]);const A=o.useCallback(T=>{if(!l)return;const{onClick:B}=P.current;if(B){const G=ae(T,l);B({event:T,position:C,data:F(G)})}},[l,F]),z=o.useCallback(T=>{l&&j(B=>Object.assign(Object.assign({},B),{down:{ctrl:T.ctrlKey,shift:T.shiftKey}}))},[l]),M=o.useCallback(()=>{l&&j(T=>Object.assign(Object.assign({},T),{down:void 0}))},[l]),E=o.useCallback(T=>{if(!l)return;const B=ae(T,l),{x:G,y:le}=C,ke=l.offsetWidth,Ce=l.offsetHeight,fe=G>=0&&G<=ke&&le>=0&&le<=Ce;j(Me=>Object.assign(Object.assign({},Me),{position:B,isHover:fe}));const{onMouseMove:ue}=P.current;ue&&ue({event:T,isHover:fe,position:C,data:{position:NaN,time:NaN}})},[l]),N=o.useCallback(T=>{const{onZoom:B}=P.current;B&&l&&B({delta:Ye(T),position:ae(T,l),event:T})},[l]);return o.useEffect(()=>{if(l)return l.addEventListener("click",A),()=>{l.removeEventListener("click",A)}},[l,A]),o.useEffect(()=>{if(l)return l.addEventListener("mousedown",z),()=>{l.removeEventListener("mousedown",z)}},[l,z]),o.useEffect(()=>(document.addEventListener("mouseup",M),()=>{document.removeEventListener("mouseup",M)}),[M]),o.useEffect(()=>(document.addEventListener("mousemove",E),()=>{document.removeEventListener("mousemove",E)}),[E]),o.useEffect(()=>{if(l)return l.addEventListener("wheel",N),()=>{l.removeEventListener("wheel",N)}},[l,N]),o.useEffect(()=>{const{onPan:T}=P.current;I?K({type:"panning",initialPosition:C,initialData:F(C)}):(D.type==="panning"&&T&&T({isPanning:!1,position:C,initialPosition:D.initialPosition,data:F(C),initialData:D.initialData}),D.type!=="idle"&&K({type:"idle"}))},[I]),o.useEffect(()=>{const{onPan:T}=P.current;D.type==="panning"&&T&&T({isPanning:!0,position:C,initialPosition:D.initialPosition,data:F(C),initialData:D.initialData})},[C]),te}(s,e,S.getData),q=o.useMemo(()=>({position:O,down:L,isHover:H,data:S.getData(O)}),[O,L,H,S]),{canvasContext:Z,hoveredItem:U}=Ie(R,S,O);return o.useEffect(()=>{b&&b({item:U})},[U]),Y.createElement("div",Object.assign({},f,{ref:w,className:Pe("relative space-time-chart",f.className)}),Y.createElement("div",{ref:u,className:"absolute inset-0"}),Y.createElement(De.Provider,{value:S},Y.createElement(ce.Provider,{value:Z},Y.createElement(Ae.Provider,{value:q},Y.createElement(je,null),Y.createElement(Be,null),Y.createElement(Ne,null),k))))};function Se(e,n,i,[m,x,y],g,v=Math.ceil(g/2)){if(n.x>i.x)return Se(e,i,n,[m,x,y],g);const b=e.width,k=e.height,t=i.x-n.x,p=i.y-n.y,c=Math.sqrt(t*t+p*p),r=-p/c,f=t/c,s=v,w={x:n.x+(+r-t/c)*s,y:n.y+(+f-p/c)*s},R={x:n.x+(-r-t/c)*s,y:n.y+(-f-p/c)*s},u={x:i.x+(t/c-r)*s,y:i.y+(p/c-f)*s},d={x:i.x+(+r+t/c)*s,y:i.y+(+f+p/c)*s},h=n.y<i.y,a=h?d:w,S=h?w:R,O=h?u:d,L=h?R:u,H=W.clamp(Math.floor(S.x),0,b),q=W.clamp(Math.ceil(O.x),0,b),Z=W.clamp(Math.floor(L.y),0,k),U=W.clamp(Math.ceil(a.y),0,k);for(let l=Z;l<=U;l++){const $=W.clamp(l<S.y?Math.floor(L.x+(l-L.y)*(S.x-L.x)/(S.y-L.y)):Math.floor(S.x+(l-S.y)*(S.x-a.x)/(S.y-a.y)),H,q),F=W.clamp(l<O.y?Math.ceil(L.x+(l-L.y)*(O.x-L.x)/(O.y-L.y)):Math.ceil(O.x+(l-O.y)*(O.x-a.x)/(O.y-a.y)),H,q);for(let P=$;P<=F;P++){const D=4*(l*b+P);e.data[D]=m,e.data[D+1]=x,e.data[D+2]=y,e.data[D+3]=255}}}const pe=6,se=12;function ge(e,n,i,m,x,y){y==="out"?function(g,v,b,k,t){const p=k==="from"?1:-1,c=(t==="down"?1:-1)*p,r=v-4*p,f=b+(se-2)*c;g.beginPath(),g.moveTo(v,b),g.bezierCurveTo(r,f,r,f,v-se*p,b+se*c),g.stroke()}(e,n,i,m,x):function(g,v,b){g.beginPath(),g.moveTo(v,b-pe/2),g.lineTo(v,b+pe/2),g.stroke()}(e,n,i)}const me={1:{width:1.5,endWidth:1.5},2:{width:1,endWidth:1},3:{width:1,endWidth:1,dashArray:[5,5],lineCap:"square"},4:{width:1.5,endWidth:1,dashArray:[0,4],lineCap:"round"}},Ve=({index:e,path:n,color:i,level:m=2,pickingTolerance:x=5})=>{const y=o.useCallback(({getX:t,getY:p,spaceScaleTree:c})=>{const r=[];return n.points.forEach(({position:f,time:s},w,R)=>{if(w){const{position:u,time:d}=R[w-1];Oe(u,f,c).forEach(h=>{const a=d+(h-u)/(f-u)*(s-d);r.push({x:t(a),y:p(h)})}),r.push({x:t(s),y:p(f)})}else r.push({x:t(s),y:p(f)})}),r},[n]),g=o.useCallback((t,{getX:p,getY:c,operationalPoints:r})=>{const f=new Set(r.map(s=>s.position));n.points.forEach(({position:s,time:w},R,u)=>{if(R){const{position:d,time:h}=u[R-1];if(d===s&&f.has(s)){const a=c(s);t.beginPath(),t.moveTo(p(h),a),t.lineTo(p(w),a),t.stroke()}}})},[n]),v=o.useCallback((t,p,c,r)=>{if(!p)return;const f=t.canvas.width,s=t.canvas.height,w=r.findIndex(({x:L,y:H})=>W.inRange(L,0,f)&&W.inRange(H,0,s));if(w<0)return;const R=r[w-1],u=r[w],d=r[w+1];let h=u,a=0;w===0?d&&(a=Math.atan2(d.y-u.y,d.x-u.x)):(h={x:0,y:u.y-u.x*(u.y-R.y)/(u.x-R.x)},a=Math.atan2(u.y-h.y,u.x-h.x)),t.save(),t.translate(h.x,h.y),t.rotate(a),t.font="10px IBM Plex Mono",t.textAlign="start";const S=a>=0?-5:15,O=t.measureText(p).width+4;t.fillStyle="#FFFFFFC0",t.fillRect(3,S-14+2,O,14),t.fillStyle=c,t.fillText(p,5,S-2.5),t.restore()},[]),b=o.useCallback((t,{getX:p,getY:c})=>{const r=function({points:u}){if(u.length<2)return"down";for(let d=1,h=Math.min(3,u.length);d<h;d++){const a=u[d].position-u[d-1].position;if(a>0)return"up";if(a<0)return"down"}return"down"}(n),f=n.points[0],s=n.fromEnd||he,w=W.last(n.points),R=n.toEnd||he;ge(t,p(f.time),c(f.position),"from",r,s),ge(t,p(w.time),c(w.position),"to",r,R)},[n]);ee("paths",o.useCallback((t,p)=>{t.strokeStyle=i,t.lineWidth=7,t.globalAlpha=.2,t.lineCap="round",g(t,p);const c=me[m];t.strokeStyle=i,t.lineWidth=c.width,t.setLineDash(c.dashArray||[]),t.globalAlpha=c.opacity||1,t.lineCap=c.lineCap||"square",t.beginPath();const r=y(p);r.forEach(({x:f,y:s},w)=>{w?t.lineTo(f,s):t.moveTo(f,s)}),t.stroke(),t.setLineDash([]),t.lineWidth=c.endWidth,b(t,p),v(t,n.label,i,r)},[i,g,m,y,b,v,n.label]));const k=o.useCallback((t,p)=>{const c=function(r){return Te(r).rgba()}(function(r){if(ie[r])return ie[r];const f=`#${r.toString(16).padStart(6,"0")}`.toLowerCase();return xe[f]=r,ie[r]=f,f}(e));y(p).forEach((r,f,s)=>{if(f){const w=s[f-1];Se(t,w,r,c,me[m].width+x)}})},[e,y,m,x]);return function(t,p){const{register:c,unregister:r}=o.useContext(ce);o.useEffect(()=>(c({type:"picking",layer:t,fn:p}),()=>{r({type:"picking",layer:t,fn:p})}),[t,p,c,r])}("paths",k),null};export{Je as V,Ve as i};
