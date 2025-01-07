import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as s}from"./index-i5X67GZP.js";import{r as w}from"./index-DJO9vBfz.js";const d=({tabsData:n,activeTab:r,onTabChange:c,disabledTabIndexes:j=[],direction:a="horizontal"})=>e.jsxs("div",{className:s("flex gap-5",{"flex-row justify-start":a==="vertical","flex-col":a==="horizontal"}),children:[e.jsx("div",{className:s("flex gap-5 border-0 border-solid border-gray-300",{"flex-col border-r":a==="vertical","flex-row border-b":a==="horizontal"}),children:n.map((N,t)=>e.jsx("div",{className:s("px-1 py-2 pr-2 cursor-pointer",{"border-primary border-solid border-b-4 border-0":r===t&&a==="horizontal","border-primary border-solid border-r-4 border-0":r===t&&a==="vertical","opacity-50 cursor-not-allowed pointer-events-none":j.includes(t)}),onClick:()=>c(t),children:e.jsx("span",{className:s("text-sm",{"text-primary":r===t}),children:N.title})},t))}),e.jsx("div",{className:"text-sm",children:n[r].content})]});d.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{tabsData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  title: string;\r
  content: ReactNode;\r
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactNode",required:!0}}]}}],raw:`Array<{\r
  title: string;\r
  content: ReactNode;\r
}>`},description:""},activeTab:{required:!0,tsType:{name:"number"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: number) => void",signature:{arguments:[{type:{name:"number"},name:"tab"}],return:{name:"void"}}},description:""},disabledTabIndexes:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[]",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const m=[{title:"Tab 1",content:e.jsx("p",{children:"Tab 1"})},{title:"Tab 2",content:e.jsx("p",{children:"Tab 2"})},{title:"Tab 3",content:e.jsx("p",{children:"Tab 3"})}],D={title:"Components/Tab",component:d,tags:["autodocs"]},p=n=>{const[r,c]=w.useState(0);return e.jsx(d,{...n,activeTab:r,onTabChange:c})},o={args:{tabsData:m},render:p},i={args:{tabsData:m,disabledTabIndexes:[0]},render:p},l={args:{tabsData:m,direction:"vertical"},render:p};var u,b,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tabsData
  },
  render: Template
} as {
  args: TabProps;
  render: () => JSX.Element;
}`,...(T=(b=o.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var g,x,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tabsData,
    disabledTabIndexes: [0]
  },
  render: Template
} as {
  args: TabProps;
  render: () => JSX.Element;
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,f,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    tabsData,
    direction: "vertical"
  },
  render: Template
} as {
  args: TabProps;
  render: () => JSX.Element;
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const E=["Basic","DisabledTab","Vertical"];export{o as Basic,i as DisabledTab,l as Vertical,E as __namedExportsOrder,D as default};
