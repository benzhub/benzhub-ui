import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as E}from"./index-i5X67GZP.js";import{r as N}from"./index-DJO9vBfz.js";import{c}from"./createLucideIcon-C1eKXhvf.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=c("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=c("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=c("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=c("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),s=({type:r="info",message:k,description:i,isShowIcon:a=!0,closeAble:S=!1})=>{const[v,w]=N.useState(!0);return v?e.jsxs("div",{className:E("p-3 border border-solid rounded-sm",{"bg-blue-500 bg-opacity-20 border-blue-500":r==="info","bg-green-500 bg-opacity-20 border-green-500":r==="success","bg-red-500 bg-opacity-20 border-red-500":r==="error","bg-yellow-500 bg-opacity-20 border-yellow-500":r==="warning"}),children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-sm font-bold flex items-center gap-2",children:[a&&r==="info"&&e.jsx(q,{size:16,className:"text-blue-500"}),a&&r==="success"&&e.jsx(I,{size:16,className:"text-green-500"}),a&&r==="error"&&e.jsx(d,{size:16,className:"text-red-500"}),a&&r==="warning"&&e.jsx(z,{size:16,className:"text-yellow-500"}),k]}),S&&e.jsx(d,{size:18,className:"cursor-pointer",onClick:()=>w(!1)})]}),i&&e.jsx("p",{className:"text-xs",children:i})]}):e.jsx(e.Fragment,{})};s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},message:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},isShowIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeAble:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const J={component:s,title:"Components/Alert",tags:["autodocs"]},n={args:{message:"This is a Info Alert",description:"This is a Info Alert Description",type:"info",closeAble:!0},render:s},t={args:{message:"This is a Success Alert",type:"success",closeAble:!0},render:s},o={args:{message:"This is a Error Alert",type:"error",closeAble:!0},render:s},l={args:{message:"This is a Warning Alert",type:"warning",closeAble:!0},render:s};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    message: "This is a Info Alert",
    description: "This is a Info Alert Description",
    type: "info",
    closeAble: true
  },
  render: Alert
} as {
  args: AlertProps;
  render: () => JSX.Element;
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,A;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    message: "This is a Success Alert",
    type: "success",
    closeAble: true
  },
  render: Alert
} as {
  args: AlertProps;
  render: () => JSX.Element;
}`,...(A=(f=t.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var b,h,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    message: "This is a Error Alert",
    type: "error",
    closeAble: true
  },
  render: Alert
} as {
  args: AlertProps;
  render: () => JSX.Element;
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,T,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    message: "This is a Warning Alert",
    type: "warning",
    closeAble: true
  },
  render: Alert
} as {
  args: AlertProps;
  render: () => JSX.Element;
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const P=["Info","Success","Error","Warning"];export{o as Error,n as Info,t as Success,l as Warning,P as __namedExportsOrder,J as default};
