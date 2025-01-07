import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{c as z}from"./index-i5X67GZP.js";import"./index-DJO9vBfz.js";const e=({size:o="medium",color:v="blue",text:t=""})=>l.jsxs("div",{className:"w-max flex flex-col items-center gap-2",children:[l.jsx("div",{className:z("border border-solid border-t-transparent rounded-full animate-spin",{"h-10 w-10 border-2":o==="small","h-16 w-16 border-4":o==="medium","h-24 w-24 border-8":o==="large"}),style:{borderColor:v,borderTopColor:"transparent"}}),t&&l.jsx("p",{className:"text-sm text-gray-500",children:t})]});e.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"blue"',computed:!1}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const j={component:e,title:"Components/Spinner",tags:["autodocs"]},r={args:{size:"small",color:"green"},render:e},n={args:{size:"medium",color:"blue"},render:e},s={args:{size:"large",color:"red"},render:e},a={args:{size:"medium",color:"blue",text:"Loading..."},render:e};var m,d,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "small",
    color: "green"
  },
  render: Spinner
} as {
  args: SpinnerProps;
  render: () => JSX.Element;
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "medium",
    color: "blue"
  },
  render: Spinner
} as {
  args: SpinnerProps;
  render: () => JSX.Element;
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,S,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "large",
    color: "red"
  },
  render: Spinner
} as {
  args: SpinnerProps;
  render: () => JSX.Element;
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "medium",
    color: "blue",
    text: "Loading..."
  },
  render: Spinner
} as {
  args: SpinnerProps;
  render: () => JSX.Element;
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const w=["Small","Medium","Large","WithText"];export{s as Large,n as Medium,r as Small,a as WithText,w as __namedExportsOrder,j as default};
