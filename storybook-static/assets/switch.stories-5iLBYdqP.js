import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as z}from"./index-DJO9vBfz.js";import{c as m}from"./index-i5X67GZP.js";import{T as j}from"./index-Dw2FvX7v.js";const i=({label:c="",checked:r,onChange:l,disabled:T=!1,direction:d="horizontal"})=>e.jsx(j,{children:e.jsxs("div",{className:m("flex gap-1",{"flex-row items-center":d==="horizontal","flex-col":d==="vertical"}),children:[e.jsx("span",{className:"text-sm",children:c}),e.jsx("div",{className:m("bg-gray-400 w-10 p-1 rounded-full flex cursor-pointer",{"bg-primary justify-end":r,"opacity-50 pointer-events-none cursor-not-allowed":T}),onClick:()=>l(!r),children:e.jsx("div",{className:"w-4 h-4 rounded-full bg-white"})})]})});i.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const q={title:"Components/Switch",component:i,tags:["autodocs"]},o=c=>{const[r,l]=z.useState(!1);return e.jsx(i,{...c,checked:r,onChange:l})},a={args:{label:"Is Active ?",checked:!1},render:o},s={args:{label:"Is Active ?",checked:!1,direction:"horizontal"},render:o},n={args:{label:"Is Active ?",checked:!1,direction:"vertical"},render:o},t={args:{label:"Is Active ?",checked:!1,direction:"horizontal",disabled:!0},render:o};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Is Active ?",
    checked: false
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Is Active ?",
    checked: false,
    direction: "horizontal"
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,x,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Is Active ?",
    checked: false,
    direction: "vertical"
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var w,k,y;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Is Active ?",
    checked: false,
    direction: "horizontal",
    disabled: true
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const C=["Basic","Horizontal","Vertical","Disabled"];export{a as Basic,t as Disabled,s as Horizontal,n as Vertical,C as __namedExportsOrder,q as default};
