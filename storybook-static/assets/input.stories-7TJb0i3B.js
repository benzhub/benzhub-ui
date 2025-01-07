import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as h}from"./index-i5X67GZP.js";import{T as K}from"./index-CYu3-ncJ.js";import"./index-DJO9vBfz.js";function a({value:H,onChange:W,name:O="",placeholder:k="",label:A="",disabled:i=!1,type:B="text",size:c="medium",rounded:l="none",error:g="",gap:r=1}){return e.jsx(K,{children:e.jsxs("div",{className:h("flex flex-col w-max",{"gap-1":r===1,"gap-2":r===2,"gap-3":r===3,"gap-4":r===4}),children:[e.jsx("label",{htmlFor:"input",children:A}),e.jsx("input",{type:B,name:O,placeholder:k,value:H,onChange:J=>W(J.target.value),disabled:i,className:h("px-5","focus:border-2 focus:border-primary focus:shadow-[0_0_0_1px_var(--primary-color)]",{"h-8":c==="small","h-10":c==="medium","h-12":c==="large","rounded-sm":l==="small","rounded-md":l==="medium","rounded-lg":l==="large","rounded-full":l==="full","border border-primary border-solid outline-none transition-all duration-":!i,"border border-red-500 border-solid":g,"cursor-not-allowed pointer-events-none bg-gray-100 border border-solid":i})}),g&&e.jsx("span",{className:"text-red-500",children:g})]})})}a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "number" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"number"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"",defaultValue:{value:"1",computed:!1}}}};const Z={title:"Components/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{value:"",onChange:()=>{},label:"用戶名",placeholder:"請輸入用戶名"}},o={args:{value:"",onChange:()=>{},label:"用戶名",placeholder:"請輸入用戶名"},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{value:"",onChange:()=>{},size:"small",placeholder:"Small Input"}),e.jsx(a,{value:"",onChange:()=>{},size:"medium",placeholder:"Medium Input"}),e.jsx(a,{value:"",onChange:()=>{},size:"large",placeholder:"Large Input"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{value:"",onChange:()=>{},rounded:"none",placeholder:"No Rounded"}),e.jsx(a,{value:"",onChange:()=>{},rounded:"small",placeholder:"Small Rounded"}),e.jsx(a,{value:"",onChange:()=>{},rounded:"medium",placeholder:"Medium Rounded"}),e.jsx(a,{value:"",onChange:()=>{},rounded:"large",placeholder:"Large Rounded"}),e.jsx(a,{value:"",onChange:()=>{},rounded:"full",placeholder:"Full Rounded"})]})},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{value:"Hello Input",onChange:()=>{},type:"text",label:"文字輸入",placeholder:"Text Input"}),e.jsx(a,{value:"12345",onChange:()=>{},type:"password",label:"密碼輸入",placeholder:"Password Input"}),e.jsx(a,{value:"12345",onChange:()=>{},type:"number",label:"數字輸入",placeholder:"Number Input"})]})},d={args:{value:"",onChange:()=>{},label:"錯誤示例",placeholder:"請輸入",error:"這是一個錯誤信息"}},t={args:{value:"Disabled Input",onChange:()=>{},label:"禁用狀態",disabled:!0}},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{value:"",onChange:()=>{},label:"Gap 1",placeholder:"Gap 1",gap:1}),e.jsx(a,{value:"",onChange:()=>{},label:"Gap 2",placeholder:"Gap 2",gap:2}),e.jsx(a,{value:"",onChange:()=>{},label:"Gap 3",placeholder:"Gap 3",gap:3}),e.jsx(a,{value:"",onChange:()=>{},label:"Gap 4",placeholder:"Gap 4",gap:4})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(a,{value:"完整示例",onChange:()=>{},label:"完整輸入框",placeholder:"請輸入內容",size:"large",rounded:"medium"}),e.jsx(a,{value:"",onChange:()=>{},label:"錯誤輸入框",placeholder:"請輸入內容",error:"這是一個錯誤信息"}),e.jsx(a,{value:"禁用輸入框",onChange:()=>{},label:"禁用狀態",disabled:!0})]})};var v,f,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: "",
    onChange: () => {},
    label: "用戶名",
    placeholder: "請輸入用戶名"
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,C,I;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: "",
    onChange: () => {},
    label: "用戶名",
    placeholder: "請輸入用戶名"
  },
  render: () => <div className="flex flex-col gap-4">\r
      <Input value="" onChange={() => {}} size="small" placeholder="Small Input" />\r
      <Input value="" onChange={() => {}} size="medium" placeholder="Medium Input" />\r
      <Input value="" onChange={() => {}} size="large" placeholder="Large Input" />\r
    </div>
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var j,y,N;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <Input value="" onChange={() => {}} rounded="none" placeholder="No Rounded" />\r
      <Input value="" onChange={() => {}} rounded="small" placeholder="Small Rounded" />\r
      <Input value="" onChange={() => {}} rounded="medium" placeholder="Medium Rounded" />\r
      <Input value="" onChange={() => {}} rounded="large" placeholder="Large Rounded" />\r
      <Input value="" onChange={() => {}} rounded="full" placeholder="Full Rounded" />\r
    </div>
}`,...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var G,T,w;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <Input value="Hello Input" onChange={() => {}} type="text" label="文字輸入" placeholder="Text Input" />\r
      <Input value="12345" onChange={() => {}} type="password" label="密碼輸入" placeholder="Password Input" />\r
      <Input value="12345" onChange={() => {}} type="number" label="數字輸入" placeholder="Number Input" />\r
    </div>
}`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var S,R,q;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: "",
    onChange: () => {},
    label: "錯誤示例",
    placeholder: "請輸入",
    error: "這是一個錯誤信息"
  }
}`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var z,V,_;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: "Disabled Input",
    onChange: () => {},
    label: "禁用狀態",
    disabled: true
  }
}`,...(_=(V=t.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var D,P,E;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <Input value="" onChange={() => {}} label="Gap 1" placeholder="Gap 1" gap={1} />\r
      <Input value="" onChange={() => {}} label="Gap 2" placeholder="Gap 2" gap={2} />\r
      <Input value="" onChange={() => {}} label="Gap 3" placeholder="Gap 3" gap={3} />\r
      <Input value="" onChange={() => {}} label="Gap 4" placeholder="Gap 4" gap={4} />\r
    </div>
}`,...(E=(P=p.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var L,M,F;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">\r
      <Input value="完整示例" onChange={() => {}} label="完整輸入框" placeholder="請輸入內容" size="large" rounded="medium" />\r
      <Input value="" onChange={() => {}} label="錯誤輸入框" placeholder="請輸入內容" error="這是一個錯誤信息" />\r
      <Input value="禁用輸入框" onChange={() => {}} label="禁用狀態" disabled />\r
    </div>
}`,...(F=(M=m.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};const $=["Default","Sizes","Rounded","Types","WithError","Disabled","Gaps","Playground"];export{n as Default,t as Disabled,p as Gaps,m as Playground,s as Rounded,o as Sizes,u as Types,d as WithError,$ as __namedExportsOrder,Z as default};
