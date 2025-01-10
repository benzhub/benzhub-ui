import{j as m}from"./jsx-runtime-CkxqCPlQ.js";import{c as f}from"./index-i5X67GZP.js";import{H as _}from"./heart-BC3jszjO.js";import"./index-DJO9vBfz.js";import"./createLucideIcon-C1eKXhvf.js";const j=({title:C,onClick:F,color:a="var(--primary-color)",size:u="medium",rounded:t="none",icon:o,iconPosition:c="left",isLoading:p=!1,disabled:d=!1})=>{const L=e=>{const r=parseInt(e.slice(1,3),16),B=parseInt(e.slice(3,5),16),W=parseInt(e.slice(5,7),16);return`${r}, ${B}, ${W}`},N=f("flex justify-center items-center gap-3 border-none text-base text-white tracking-[4px] font-bold uppercase transition-[box-shadow] duration-500",{"px-4 py-3":u==="small","px-6 py-4":u==="medium","px-8 py-6":u==="large","rounded-none":t==="none","rounded-sm":t==="small","rounded-md":t==="medium","rounded-lg":t==="large","cursor-pointer":!d,"pointer-events-none bg-opacity-10 border-none cursor-not-allowed text-gray-500":d||p}),V=L(a);return m.jsxs("button",{onClick:F,className:N,style:{backgroundColor:a,boxShadow:`0 0 25px ${a}`,"--firefly-color":a,"--firefly-rgb":V},onMouseOver:e=>{const r=e.currentTarget;r.style.boxShadow=`
          0 0 5px var(--firefly-color),
          0 0 25px var(--firefly-color),
          0 0 50px var(--firefly-color),
          0 0 100px var(--firefly-color)
        `},onMouseOut:e=>{const r=e.currentTarget;r.style.boxShadow="0 0 25px var(--firefly-color)"},disabled:d,children:[o&&c==="left"&&o,C,o&&c==="right"&&o,p&&m.jsx("div",{"data-testid":"loading-spinner",className:f("w-3 h-3 border-2 border-solid border-t-transparent border-white animate-spin rounded-full")})]})};j.__docgenInfo={description:"",methods:[],displayName:"FireFlyButton",props:{title:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"var(--primary-color)"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const E={title:"Components/Button/FireFlyButton",component:j,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{title:"Default"}},n={args:{title:"With Icon",icon:m.jsx(_,{})}},l={args:{title:"Loading",isLoading:!0}},i={args:{title:"Disabled",disabled:!0}};var g,y,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Default'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,x,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'With Icon',
    icon: <Heart />
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var w,T,q;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Loading',
    isLoading: true
  }
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var D,I,S;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Disabled',
    disabled: true
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const M=["Default","WithIcon","Loading","Disabled"];export{s as Default,i as Disabled,l as Loading,n as WithIcon,M as __namedExportsOrder,E as default};
