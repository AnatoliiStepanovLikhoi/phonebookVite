import{p as L,u as q,r as p,a3 as F,j as t,a as e,T as N,a4 as T}from"./index-83014835.js";import{u as W,C as B,a as D,B as f,A as E,d as P,G as s,T as n,F as _,b as j,L as k,D as z}from"./index.esm-375b6835.js";import{n as l,L as I,b as R}from"./Loader-c03811f8.js";function M(){var u,c,g;const x=L(),{isLoggedIn:d,isLoading:w}=q(),[o,b]=p.useState(!1),m=F(),v=W(),{register:i,control:y,handleSubmit:C,formState:{errors:a}}=v,A=(r,h)=>{h.preventDefault(),console.log(r),h.target.reset(),x(T(r))},S=()=>{b(!o)};return p.useEffect(()=>{if(d){m("/");return}},[m,d]),t(B,{component:"main",maxWidth:"xs",children:[e(D,{}),t(f,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[e(E,{sx:{m:1,bgcolor:"#1de9b6",color:"#000"},children:e(P,{})}),e(N,{component:"h1",variant:"h5",children:"Register"}),t(f,{component:"form",noValidate:!0,onSubmit:C(A),sx:{mt:3,color:"secondary"},children:[t(s,{container:!0,spacing:2,children:[e(s,{item:!0,xs:12,children:e(n,{autoComplete:"given-name",name:"name",fullWidth:!0,id:"name",...i("name",{required:{value:!0,message:"Name  is required"}}),label:"User Name",autoFocus:!0})}),((u=a.name)==null?void 0:u.message)&&l.Notify.warning(a.name.message),e(s,{item:!0,xs:12,children:e(n,{fullWidth:!0,id:"email",...i("email",{required:{value:!0,message:"Email is required"},pattern:{value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,message:"Invalid email format"},validate:{notBlackListed:r=>!r.endsWith("ru")||"Mordor domain is not supported"}}),label:"Email Address",name:"email",autoComplete:"email"})}),((c=a.email)==null?void 0:c.message)&&l.Notify.warning(a.email.message),e(s,{item:!0,xs:12,children:e(n,{fullWidth:!0,name:"password",label:"Password",type:o?"text":"password",id:"password",...i("password",{required:{value:!0,message:"Password  is required"}}),autoComplete:"new-password"})}),((g=a.password)==null?void 0:g.message)&&l.Notify.warning(a.password.message)]}),e(_,{control:e(j,{value:"remember",color:"secondary"}),label:"Show Password",checked:o,onChange:S}),w?e(I,{color:"#1de9b6"}):e(R,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Register"}),e(s,{container:!0,justifyContent:"flex-end",children:e(s,{item:!0,children:e(k,{href:"login",variant:"body2",sx:{color:"#000"},children:"Already have an account? Sign in"})})})]}),e(z,{control:y})]})]})}export{M as default};
