import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{c as n}from"./index-i5X67GZP.js";import{r as T}from"./index-DJO9vBfz.js";const d=({value:l="",onChange:i=()=>{},options:m=[],label:u="",disabled:t=!1,size:e="medium",direction:h="horizontal"})=>a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:n("",{"text-sm":e==="small","text-base":e==="medium","text-lg":e==="large"}),children:u}),a.jsx("div",{className:n("flex gap-5",{"flex-col":h==="vertical","bg-gray-100 pointer-events-none cursor-not-allowed":t,"p-2":e==="small","p-3":e==="medium","p-4":e==="large"}),children:m.map(r=>a.jsxs("div",{className:"flex items-center gap-1 cursor-pointer",onClick:()=>i(r.value),children:[a.jsx("div",{className:n("w-4 h-4 border border-solid rounded-full box-border",{"border-primary":r.value===l&&!t,"border-gray-300":t,"border-[5px]":r.value===l})}),a.jsx("span",{className:n("mt-[2px]",{"text-gray-500":t,"text-sm":e==="small","text-base":e==="medium","text-lg":e==="large"}),children:r.label})]},r.label))})]});d.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"OptionProps"}],raw:"OptionProps[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const w={title:"Components/Radio",component:d,parameters:{layout:"centered"},tags:["autodocs"]},b=l=>{const[i,m]=T.useState("");return a.jsx(d,{...l,value:i,onChange:u=>m(u)})},y=[{label:"India",value:"india"},{label:"USA",value:"usa"},{label:"UK",value:"uk"},{label:"Canada",value:"canada"}],s={render:b,args:{label:"Select Country",options:y}},o={render:b,args:{label:"Select Country",options:y,direction:"vertical"}};var c,p,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select Country",
    options
  }
} as {
  args: RadioProps;
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,v,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select Country",
    options,
    direction: "vertical"
  }
} as {
  args: RadioProps;
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const N=["Basic","VerticalOptions"];export{s as Basic,o as VerticalOptions,N as __namedExportsOrder,w as default};
