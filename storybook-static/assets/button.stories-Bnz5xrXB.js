import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{B as t}from"./index-CVeO_chF.js";import{r as W}from"./index-DJO9vBfz.js";import{c as O}from"./createLucideIcon-C1eKXhvf.js";import"./index-i5X67GZP.js";import"./index-CYu3-ncJ.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=O("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=O("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),K={title:"Components/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{title:"基本按鈕",onClick:()=>console.log("clicked")}},a={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{title:"Contained",variant:"contained"}),e.jsx(t,{title:"Outlined",variant:"outlined"})]})},s={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{title:"Small",size:"small"}),e.jsx(t,{title:"Medium",size:"medium"}),e.jsx(t,{title:"Large",size:"large"})]})},n={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{title:"None",rounded:"none"}),e.jsx(t,{title:"Small",rounded:"small"}),e.jsx(t,{title:"Medium",rounded:"medium"}),e.jsx(t,{title:"Large",rounded:"large"})]})},i={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{title:"發送郵件",icon:e.jsx(R,{size:16}),iconPosition:"left"}),e.jsx(t,{title:"添加收藏",icon:e.jsx(_,{size:16}),iconPosition:"right"})]})},w=()=>{const[A,c]=W.useState(!1),V=()=>{c(!0),setTimeout(()=>c(!1),2e3)};return e.jsx(t,{title:"點擊載入",onClick:V,isLoading:A})},o={render:()=>e.jsx(w,{})},d={args:{title:"禁用按鈕",disabled:!0}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{title:"主要按鈕",variant:"contained",size:"large",rounded:"medium"}),e.jsx(t,{title:"次要按鈕",variant:"outlined",size:"large",rounded:"medium"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{title:"帶圖標",icon:e.jsx(R,{size:16}),variant:"contained"}),e.jsx(t,{title:"禁用狀態",disabled:!0}),e.jsx(t,{title:"Loading",isLoading:!0})]})]})};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: '基本按鈕',
    onClick: () => console.log('clicked')
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,x,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Button title="Contained" variant="contained" />\r
      <Button title="Outlined" variant="outlined" />\r
    </div>
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var j,f,B;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Button title="Small" size="small" />\r
      <Button title="Medium" size="medium" />\r
      <Button title="Large" size="large" />\r
    </div>
}`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var z,h,L;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Button title="None" rounded="none" />\r
      <Button title="Small" rounded="small" />\r
      <Button title="Medium" rounded="medium" />\r
      <Button title="Large" rounded="large" />\r
    </div>
}`,...(L=(h=n.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var N,S,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Button title="發送郵件" icon={<Mail size={16} />} iconPosition="left" />\r
      <Button title="添加收藏" icon={<Heart size={16} />} iconPosition="right" />\r
    </div>
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var y,M,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <LoadingButton />
}`,...(C=(M=o.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var b,P,D;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: '禁用按鈕',
    disabled: true
  }
}`,...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var I,E,H;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div className="flex gap-4">\r
        <Button title="主要按鈕" variant="contained" size="large" rounded="medium" />\r
        <Button title="次要按鈕" variant="outlined" size="large" rounded="medium" />\r
      </div>\r
      <div className="flex gap-4">\r
        <Button title="帶圖標" icon={<Mail size={16} />} variant="contained" />\r
        <Button title="禁用狀態" disabled />\r
        <Button title="Loading" isLoading />\r
      </div>\r
    </div>
}`,...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const Q=["Default","Variants","Sizes","Rounded","WithIcon","Loading","Disabled","Playground"];export{r as Default,d as Disabled,o as Loading,l as Playground,n as Rounded,s as Sizes,a as Variants,i as WithIcon,Q as __namedExportsOrder,K as default};
