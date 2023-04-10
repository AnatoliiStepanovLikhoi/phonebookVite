import{n as t,u as s,j as c,a as e,N as n}from"./index-b0b6732b.js";const h=t.div`
  display: flex;
  flex-direction: column;

  /* box-shadow: rgb(182 182 182) 2px 10px 20px; */
  width: 100%;
  padding: ${o=>o.theme.space[4]};
  text-align: center;

  margin-left: auto;
  margin-right: auto;
  margin-top: ${o=>o.theme.space[6]};
`,l=t.h1`
  font-size: ${o=>o.theme.fontsSizes.xl}px;
  padding-bottom: ${o=>o.theme.space[3]};

  /* color: ${o=>o.theme.colors.bgGrey}; */
`;t.h2`
  font-size: ${o=>o.theme.fontsSizes.l}px;
  padding-bottom: ${o=>o.theme.space[4]};
`;const a=t.img`
  width: 480px;
  margin-left: auto;
  margin-right: auto;
`,i="/phonebookVite/assets/phone-book-99cfc0ed.png";function r(){const{isLoggedIn:o}=s();return c(h,{children:[e(l,{children:"Welcome to Simple phonebook"}),o?e(n,{to:"contacts",children:e(a,{src:i,alt:"phonebook logo"})}):e(n,{to:"login",children:e(a,{src:i,alt:"phonebook logo"})})]})}export{r as default};
