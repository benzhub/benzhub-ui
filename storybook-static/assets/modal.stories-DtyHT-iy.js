import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as f}from"./index-i5X67GZP.js";import{B as o}from"./index-B6O6nFff.js";import{c as x}from"./createLucideIcon-C1eKXhvf.js";import{r as h}from"./index-DJO9vBfz.js";import"./index-Dw2FvX7v.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=x("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),l=({title:a,children:s,footerChildren:r,showModal:u,onCancel:i,footer:p=!0,size:n="medium"})=>u?e.jsx("div",{className:"absolute inset-0 bg-black/30 flex justify-center items-center",children:e.jsxs("div",{className:f("bg-white shadow-sm rounded-lg p-4 flex flex-col gap-3",{"w-1/4":n==="small","w-1/2":n==="medium","w-3/4":n==="large"}),children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h2",{className:"text-lg font-normal",children:a}),e.jsx(g,{onClick:i,className:"cursor-pointer"})]}),e.jsx("hr",{}),e.jsx("div",{className:"text-sm",children:s}),p&&e.jsxs("div",{className:"flex justify-end gap-2",children:[r,e.jsx(o,{title:"Cancel",onClick:i,variant:"outlined",rounded:"medium"})]})]})}):null;l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},footer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},footerChildren:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}}}};const T={title:"Components/Modal",component:l,tags:["autodocs"]},j=a=>{const[s,r]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Open Modal",onClick:()=>r(!0),variant:"outlined",rounded:"medium"}),e.jsx(l,{...a,showModal:s,onCancel:()=>r(!1)})]})},t={args:{showModal:!0,children:e.jsx("p",{children:"Modal Content"}),footerChildren:e.jsx(o,{title:"Confirm",rounded:"medium",variant:"outlined",onClick:()=>{console.log("Confirm")}}),title:"Modal Title",size:"medium"},render:j};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    showModal: true,
    children: <p>Modal Content</p>,
    footerChildren: <Button title="Confirm" rounded="medium" variant="outlined" onClick={() => {
      console.log("Confirm");
    }} />,
    title: "Modal Title",
    size: "medium"
  },
  render: Template
} as {
  args: ModalProps;
  render: () => JSX.Element;
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const k=["Basic"];export{t as Basic,k as __namedExportsOrder,T as default};
