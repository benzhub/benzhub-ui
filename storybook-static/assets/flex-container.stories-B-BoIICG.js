import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as p}from"./index-i5X67GZP.js";import"./index-DJO9vBfz.js";const i=({children:d,direction:n="column",justify:a="start",align:r="top",gap:m=0,height:u=0,showBorder:c=!1})=>e.jsx("div",{style:{height:u,gap:m},className:p("flex",{"flex-col":n==="column","flex-row":n==="row","justify-start":a==="start","justify-center":a==="center","justify-end":a==="end","items-start":r==="top","items-center":r==="center","items-end":r==="bottom","border border-solid border-gray-500":c}),children:d});i.__docgenInfo={description:"",methods:[],displayName:"FlexContainer",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"row" | "column"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'}]},description:"",defaultValue:{value:'"column"',computed:!1}},justify:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "center"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},showBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const g={title:"Components/FlexContainer",component:i,tags:["autodocs"]},f=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"p-5 bg-red-500 text-white h-max",children:"Item 1"}),e.jsx("div",{className:"p-5 bg-blue-500 text-white h-max",children:"Item 2"}),e.jsx("div",{className:"p-5 bg-green-500 text-white h-max",children:"Item 3"})]}),t={args:{children:f,justify:"start",align:"top",direction:"row",height:300,showBorder:!0}};var s,l,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: children,
    justify: "start",
    align: "top",
    direction: "row",
    height: 300,
    showBorder: true
  }
} as {
  args: FlexContainerProps;
  render: () => JSX.Element;
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const w=["Basic"];export{t as Basic,w as __namedExportsOrder,g as default};
