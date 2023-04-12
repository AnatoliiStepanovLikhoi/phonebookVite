import{g as E,b as A,s as w,c as x,_ as u,d as se,r as y,e as q,f as U,a as s,h as N,i as G,P as he,k as De,T as ze,n as g,l as D,m as oe,o as re,p as O,j as h,q as Be,R as z,t as Ne,v as We,w as Ie,F as ge,x as Pe,y as Me,z as Oe,A as _e,B as L,C as Fe}from"./index-83014835.js";import{C as je,M as Le,S as Ee}from"./App.styled-7fb1b29d.js";import{B as Ae,a as qe,M as Ue,u as Ge,F as He,n as ne,b as Ve,L as le}from"./Loader-c03811f8.js";var $={},Ze={get exports(){return $},set exports(e){$=e}},Ye="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Xe=Ye,Ke=Xe;function fe(){}function be(){}be.resetWarningCache=fe;var Je=function(){function e(r,n,a,l,i,c){if(c!==Ke){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:be,resetWarningCache:fe};return o.PropTypes=o,o};Ze.exports=Je();function Qe(e){return A("MuiIconButton",e)}const et=E("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),tt=et,ot=["edge","children","className","color","disabled","disableFocusRipple","size"],rt=e=>{const{classes:t,disabled:o,color:r,edge:n,size:a}=e,l={root:["root",o&&"disabled",r!=="default"&&`color${x(r)}`,n&&`edge${x(n)}`,`size${x(a)}`]};return G(l,Qe,t)},nt=w(Ae,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="default"&&t[`color${x(o.color)}`],o.edge&&t[`edge${x(o.edge)}`],t[`size${x(o.size)}`]]}})(({theme:e,ownerState:t})=>u({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:se(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var o;const r=(o=(e.vars||e).palette)==null?void 0:o[t.color];return u({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&u({color:r==null?void 0:r.main},!t.disableRipple&&{"&:hover":u({},r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:se(r.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${tt.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),at=y.forwardRef(function(t,o){const r=q({props:t,name:"MuiIconButton"}),{edge:n=!1,children:a,className:l,color:i="default",disabled:c=!1,disableFocusRipple:p=!1,size:b="medium"}=r,m=U(r,ot),f=u({},r,{edge:n,color:i,disabled:c,disableFocusRipple:p,size:b}),v=rt(f);return s(nt,u({className:N(v.root,l),centerRipple:!0,focusRipple:!p,disabled:c,ref:o,ownerState:f},m,{children:a}))}),it=at;function st(e){return A("MuiDialog",e)}const lt=E("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),X=lt,ct=y.createContext({}),xe=ct,dt=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],pt=w(qe,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),ut=e=>{const{classes:t,scroll:o,maxWidth:r,fullWidth:n,fullScreen:a}=e,l={root:["root"],container:["container",`scroll${x(o)}`],paper:["paper",`paperScroll${x(o)}`,`paperWidth${x(String(r))}`,n&&"paperFullWidth",a&&"paperFullScreen"]};return G(l,st,t)},mt=w(Ue,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),ht=w("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.container,t[`scroll${x(o.scroll)}`]]}})(({ownerState:e})=>u({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),gt=w(he,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.paper,t[`scrollPaper${x(o.scroll)}`],t[`paperWidth${x(String(o.maxWidth))}`],o.fullWidth&&t.paperFullWidth,o.fullScreen&&t.paperFullScreen]}})(({theme:e,ownerState:t})=>u({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},t.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},t.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},t.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${X.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&t.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${X.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${X.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),ft=y.forwardRef(function(t,o){const r=q({props:t,name:"MuiDialog"}),n=Ge(),a={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":i,BackdropComponent:c,BackdropProps:p,children:b,className:m,disableEscapeKeyDown:f=!1,fullScreen:v=!1,fullWidth:B=!1,maxWidth:W="sm",onBackdropClick:k,onClose:T,open:I,PaperComponent:H=he,PaperProps:_={},scroll:P="paper",TransitionComponent:d=He,transitionDuration:C=a,TransitionProps:R}=r,F=U(r,dt),j=u({},r,{disableEscapeKeyDown:f,fullScreen:v,fullWidth:B,maxWidth:W,scroll:P}),V=ut(j),Z=y.useRef(),Se=M=>{Z.current=M.target===M.currentTarget},we=M=>{Z.current&&(Z.current=null,k&&k(M),T&&T(M,"backdropClick"))},Y=De(i),Re=y.useMemo(()=>({titleId:Y}),[Y]);return s(mt,u({className:N(V.root,m),closeAfterTransition:!0,components:{Backdrop:pt},componentsProps:{backdrop:u({transitionDuration:C,as:c},p)},disableEscapeKeyDown:f,onClose:T,open:I,ref:o,onClick:we,ownerState:j},F,{children:s(d,u({appear:!0,in:I,timeout:C,role:"presentation"},R,{children:s(ht,{className:N(V.container),onMouseDown:Se,ownerState:j,children:s(gt,u({as:H,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":Y},_,{className:N(V.paper,_.className),ownerState:j,children:s(xe.Provider,{value:Re,children:b})}))})}))}))}),bt=ft;function xt(e){return A("MuiDialogContent",e)}E("MuiDialogContent",["root","dividers"]);function yt(e){return A("MuiDialogTitle",e)}const vt=E("MuiDialogTitle",["root"]),Ct=vt,$t=["className","dividers"],kt=e=>{const{classes:t,dividers:o}=e;return G({root:["root",o&&"dividers"]},xt,t)},Tt=w("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dividers&&t.dividers]}})(({theme:e,ownerState:t})=>u({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${Ct.root} + &`]:{paddingTop:0}})),St=y.forwardRef(function(t,o){const r=q({props:t,name:"MuiDialogContent"}),{className:n,dividers:a=!1}=r,l=U(r,$t),i=u({},r,{dividers:a}),c=kt(i);return s(Tt,u({className:N(c.root,n),ownerState:i,ref:o},l))}),wt=St,Rt=["className","id"],Dt=e=>{const{classes:t}=e;return G({root:["root"]},yt,t)},zt=w(ze,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),Bt=y.forwardRef(function(t,o){const r=q({props:t,name:"MuiDialogTitle"}),{className:n,id:a}=r,l=U(r,Rt),i=r,c=Dt(i),{titleId:p=a}=y.useContext(xe);return s(zt,u({component:"h2",className:N(c.root,n),ownerState:i,ref:o,variant:"h6",id:a??p},l))}),Nt=Bt;function ae(e){return e.toLowerCase().split(" ").map(t=>t.charAt(0).toUpperCase()+t.substring(1)).join(" ")}const Wt=g.form`
  width: 500px;
  margin-bottom: ${e=>e.theme.space[3]};
  padding: ${e=>e.theme.space[3]};
  border: 1px solid ${e=>e.theme.colors.grey};
  border-radius: ${e=>e.theme.radii.generic};

  margin-left: auto;
  margin-right: auto;
`,Q=g.label`
  display: block;

  margin-bottom: ${e=>e.theme.space[3]};

  font-size: ${e=>e.theme.fontsSizes.m}px;
  font-weight: ${e=>e.theme.fontWeights.semiBold}; ;
`,ee=g.input`
  display: block;

  margin: ${e=>e.theme.space[2]} auto ${e=>e.theme.space[0]};
  width: 320px;
  padding: ${e=>e.theme.space[2]};

  font-size: ${e=>e.theme.fontsSizes.s}px;

  border: 1px solid transparent;
  border-radius: ${e=>e.theme.radii.semiRound};
  background-color: ${e=>e.theme.colors.bgGrey};

  transition: border 250ms ease-out 0s, background-color 250ms ease-out 0s;

  &:focus-within {
    border: 1px solid ${e=>e.theme.colors.grey};
    background-color: rgb(245, 248, 250);
    filter: drop-shadow(${e=>e.theme.colors.accentShadow} 0px 4px 4px);
    outline: none;
  }

  :focus::placeholder {
    color: transparent;
  }
`,It=g.button`
  min-width: 80px;
  height: 40px;

  padding: 4px 16px;

  color: ${e=>e.theme.colors.black};
  background-color: ${e=>e.theme.colors.bgGrey};

  font-size: ${e=>e.theme.fontsSizes.m}px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};

  border: 2px solid ${e=>e.theme.colors.accentShadow};
  border-radius: ${e=>e.theme.radii.semiRound};

  cursor: pointer;
  transition: background-color 250ms ease-out 0s, border-color 250ms ease-out 0s;

  &:hover,
  :focus {
    background-color: ${e=>e.theme.colors.accentShadow};
    border: 2px solid transparent;
  }
`,Pt=()=>{const e=D(oe),t=D(re),o=O(),r=a=>{if(!e)return;const l=a.toLowerCase().trim();return e.find(({name:i})=>i.toLowerCase()===l)};return h(Wt,{onSubmit:a=>{a.preventDefault();const l=new FormData(a.target),i=Object.fromEntries(l.entries()),{name:c,number:p}=i,b=ae(c);if(r(c)){alert(`Sorry, ${b} has already added!`);return}ne.Notify.success("Contact added!"),o(Be({name:b,number:p})),a.currentTarget.reset()},children:[h(Q,{children:["Name",s(ee,{type:"text",name:"name",placeholder:"FirstName LastName",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я-яЁёІіЇїЄє]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),h(Q,{children:["Number",s(ee,{type:"tel",name:"number",placeholder:"123-45-67",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),s(It,{type:"submit",disabled:t==="loading",children:"Add contacts"})]})};var ye={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ce=z.createContext&&z.createContext(ye),S=globalThis&&globalThis.__assign||function(){return S=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},S.apply(this,arguments)},Mt=globalThis&&globalThis.__rest||function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};function ve(e){return e&&e.map(function(t,o){return z.createElement(t.tag,S({key:o},t.attr),ve(t.child))})}function Ot(e){return function(t){return z.createElement(_t,S({attr:S({},e.attr)},t),ve(e.child))}}function _t(e){var t=function(o){var r=e.attr,n=e.size,a=e.title,l=Mt(e,["attr","size","title"]),i=n||o.size||"1em",c;return o.className&&(c=o.className),e.className&&(c=(c?c+" ":"")+e.className),z.createElement("svg",S({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,r,l,{className:c,style:S(S({color:e.color||o.color},o.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),a&&z.createElement("title",null,a),e.children)};return ce!==void 0?z.createElement(ce.Consumer,null,function(o){return t(o)}):t(ye)}function Ft(e){return Ot({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FF7043",d:"M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"}},{tag:"path",attr:{fill:"#BF360C",d:"M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"}},{tag:"g",attr:{fill:"#AB300B"},child:[{tag:"circle",attr:{cx:"26",cy:"20",r:"4"}},{tag:"path",attr:{d:"M33,30c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V30z"}}]}]})(e)}const jt=g(Ft)`
  width: ${e=>e.theme.space[5]};
  height: ${e=>e.theme.space[5]};
`,Lt=g.li`
  display: grid;
  grid-template-columns: ${e=>e.theme.space[5]} 1fr ${e=>e.theme.space[6]} ${e=>e.theme.space[6]};
  grid-template-rows: ${e=>e.theme.space[5]};
  grid-column-gap: ${e=>e.theme.space[5]};
  align-items: center;
  gap: ${e=>e.theme.space[4]};
  font-size: ${e=>e.theme.fontsSizes.m}px;

  &:nth-of-type(2n) {
    background-color: ${e=>e.theme.colors.bgGrey};
    border-radius: ${e=>e.theme.radii.generic};
  }
`,Et=g.p`
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  text-align: start;
`,At=g.button`
  min-width: 48px;
  height: 24px;

  padding: 2px 2px;

  color: ${e=>e.theme.colors.black};
  background-color: ${e=>e.theme.colors.bgGrey};

  font-size: ${e=>e.theme.fontsSizes.s}px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};

  border: 2px solid ${e=>e.theme.colors.lightRed};
  border-radius: ${e=>e.theme.radii.semiRound};

  cursor: pointer;
  transition: background-color 250ms ease-out 0s, border-color 250ms ease-out 0s;

  &:hover,
  :focus {
    background-color: ${e=>e.theme.colors.lightRed};
    border: 2px solid transparent;
  }
`,qt=g.button`
  min-width: 48px;
  height: 24px;

  padding: 2px 2px;

  color: ${e=>e.theme.colors.black};
  background-color: ${e=>e.theme.colors.bgGrey};

  font-size: ${e=>e.theme.fontsSizes.s}px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};

  border: 2px solid ${e=>e.theme.colors.accentShadow};
  border-radius: ${e=>e.theme.radii.semiRound};

  cursor: pointer;
  transition: background-color 250ms ease-out 0s, border-color 250ms ease-out 0s;

  &:hover,
  :focus {
    background-color: ${e=>e.theme.colors.accentShadow};
    border: 2px solid transparent;
  }
`;var ie={},Ut=We;Object.defineProperty(ie,"__esModule",{value:!0});var Ce=ie.default=void 0,Gt=Ut(Ne()),Ht=Ie,Vt=(0,Gt.default)((0,Ht.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");Ce=ie.default=Vt;const Zt=g.form`
  width: 400px;
  margin-bottom: ${e=>e.theme.space[3]};
  padding: ${e=>e.theme.space[3]};
  border: 1px solid ${e=>e.theme.colors.grey};
  border-radius: ${e=>e.theme.radii.generic};

  margin-left: auto;
  margin-right: auto;

  text-align: center;
`,de=g.label`
  display: block;

  margin-bottom: ${e=>e.theme.space[3]};

  font-size: ${e=>e.theme.fontsSizes.m}px;
  font-weight: ${e=>e.theme.fontWeights.semiBold}; ;
`,pe=g.input`
  display: block;

  margin: ${e=>e.theme.space[2]} auto ${e=>e.theme.space[0]};
  width: 320px;
  padding: ${e=>e.theme.space[2]};

  font-size: ${e=>e.theme.fontsSizes.s}px;

  border: 1px solid transparent;
  border-radius: ${e=>e.theme.radii.semiRound};
  background-color: ${e=>e.theme.colors.bgGrey};

  transition: border 250ms ease-out 0s, background-color 250ms ease-out 0s;

  &:focus-within {
    border: 1px solid ${e=>e.theme.colors.grey};
    background-color: rgb(245, 248, 250);
    filter: drop-shadow(${e=>e.theme.colors.accentShadow} 0px 4px 4px);
    outline: none;
  }

  :focus::placeholder {
    color: transparent;
  }
`,Yt=w(bt)(({theme:e})=>({"& .MuiDialogContent-root":{padding:e.spacing(2)},"& .MuiDialogActions-root":{padding:e.spacing(1)}}));function $e(e){const{children:t,onClose:o,...r}=e;return h(Nt,{sx:{m:0,p:2},...r,children:[t,o?s(it,{"aria-label":"close",onClick:o,sx:{position:"absolute",right:8,top:8,color:n=>n.palette.grey[500]},children:s(Ce,{})}):null]})}$e.propTypes={children:$.node,onClose:$.func.isRequired};function ke({name:e,number:t,contactId:o}){const[r,n]=y.useState(!1),a=()=>{n(!0)},l=()=>{n(!1)},i=D(oe),c=O(),p=m=>{if(!i)return;const f=m.toLowerCase().trim();return i.find(({name:v})=>v.toLowerCase()===f)},b=m=>{m.preventDefault();const f=new FormData(m.target),v=Object.fromEntries(f.entries()),{name:B,number:W}=v,k=ae(B);if(p(B)){alert(`Sorry, ${k} has already added!`);return}c(Pe({contact:{name:k,number:W},contactId:o})),ne.Notify.success("Contact has updated!"),m.currentTarget.reset()};return h(ge,{children:[s(qt,{variant:"outlined",onClick:a,children:"Update"}),h(Yt,{onClose:l,"aria-labelledby":"customized-dialog-title",open:r,children:[s($e,{id:"customized-dialog-title",onClose:l,children:"Update contact details"}),s(wt,{dividers:!0,children:h(Zt,{onSubmit:b,children:[h(de,{children:["Name",s(pe,{type:"text",name:"name",placeholder:"FirstName LastName",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я-яЁёІіЇїЄє]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),h(de,{children:["Number",s(pe,{type:"tel",name:"number",placeholder:"123-45-67",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),s(Ve,{type:"submit",autoFocus:!0,onClick:l,onSubmit:b,sx:{marginLeft:"auto",marginRight:"auto"},children:"Save changes"})]})})]})]})}ke.propTypes={name:$.string.isRequired,number:$.string.isRequired,contactId:$.string.isRequired};function Te(e){const t=D(re),o=O(),{contactInfo:{name:r,number:n,id:a}}=e,l=c=>(ne.Notify.warning("Contacts has deleted"),o(Me(c))),i=ae(r);return h(Lt,{children:[s(jt,{}),h(Et,{children:[i,": ",n]}),s(ke,{name:i,number:n,contactId:a}),s(At,{type:"button",onClick:()=>l(a),disabled:t==="loading",children:"Remove"})]})}Te.propTypes={contactInfo:$.PropTypes.shape({name:$.PropTypes.string.isRequired,number:$.PropTypes.string.isRequired,id:$.PropTypes.string.isRequired})};const Xt=g.ul`
  display: flex;
  flex-direction: column;

  width: 500px;
  margin-bottom: ${e=>e.theme.space[3]};
  padding: ${e=>e.theme.space[3]};
  border: 1px solid ${e=>e.theme.colors.grey};
  border-radius: ${e=>e.theme.radii.generic};

  margin-left: auto;
  margin-right: auto;

  /* text-align: start; */
`,K=g.span`
  font-size: ${e=>e.theme.fontsSizes.m}px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
`;function Kt(){const e=O(),t=D(oe),o=D(re),r=D(Oe);y.useEffect(()=>{e(_e())},[e]);const n=y.useMemo(()=>t==null?void 0:t.filter(({name:a})=>a.toLowerCase().includes(r)),[t,r]);return s(ge,{children:h(Xt,{children:[o==="idle"&&s(le,{}),n!=null&&n.length?(n??t).map(a=>s(Te,{contactInfo:a},a.id)):r?s(K,{children:"We found nothing here:("}):o==="loading"?s(le,{}):s(K,{children:"Empty phonebook"}),o==="error"&&s(K,{children:"Something went wrong, try again later:("})]})})}var Jt="Expected a function",ue=0/0,Qt="[object Symbol]",eo=/^\s+|\s+$/g,to=/^[-+]0x[0-9a-f]+$/i,oo=/^0b[01]+$/i,ro=/^0o[0-7]+$/i,no=parseInt,ao=typeof L=="object"&&L&&L.Object===Object&&L,io=typeof self=="object"&&self&&self.Object===Object&&self,so=ao||io||Function("return this")(),lo=Object.prototype,co=lo.toString,po=Math.max,uo=Math.min,J=function(){return so.Date.now()};function mo(e,t,o){var r,n,a,l,i,c,p=0,b=!1,m=!1,f=!0;if(typeof e!="function")throw new TypeError(Jt);t=me(t)||0,te(o)&&(b=!!o.leading,m="maxWait"in o,a=m?po(me(o.maxWait)||0,t):a,f="trailing"in o?!!o.trailing:f);function v(d){var C=r,R=n;return r=n=void 0,p=d,l=e.apply(R,C),l}function B(d){return p=d,i=setTimeout(T,t),b?v(d):l}function W(d){var C=d-c,R=d-p,F=t-C;return m?uo(F,a-R):F}function k(d){var C=d-c,R=d-p;return c===void 0||C>=t||C<0||m&&R>=a}function T(){var d=J();if(k(d))return I(d);i=setTimeout(T,W(d))}function I(d){return i=void 0,f&&r?v(d):(r=n=void 0,l)}function H(){i!==void 0&&clearTimeout(i),p=0,r=c=n=i=void 0}function _(){return i===void 0?l:I(J())}function P(){var d=J(),C=k(d);if(r=arguments,n=this,c=d,C){if(i===void 0)return B(c);if(m)return i=setTimeout(T,t),v(c)}return i===void 0&&(i=setTimeout(T,t)),l}return P.cancel=H,P.flush=_,P}function te(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ho(e){return!!e&&typeof e=="object"}function go(e){return typeof e=="symbol"||ho(e)&&co.call(e)==Qt}function me(e){if(typeof e=="number")return e;if(go(e))return ue;if(te(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=te(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(eo,"");var o=oo.test(e);return o||ro.test(e)?no(e.slice(2),o?2:8):to.test(e)?ue:+e}var fo=mo;function bo(){const e=O(),t=r=>{const n=r.target.value.toLocaleLowerCase();e(Fe(n))},o=y.useMemo(()=>fo(t,500),[]);return h(Q,{children:["Filter contacts by name",s(ee,{onInput:o,name:"search",placeholder:"Search"})]})}function Co(){return h(je,{children:[s(Le,{children:"Phonebook"}),s(Pt,{}),s(Ee,{children:"Contacts"}),s(bo,{}),s(Kt,{})]})}export{Co as default};
