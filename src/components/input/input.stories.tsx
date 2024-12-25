import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
    label: "用戶名",
    placeholder: "請輸入用戶名",
  },
};

// 不同尺寸
export const Sizes: Story = {
  args: {
    value: "",
    onChange: () => {},
    label: "用戶名",
    placeholder: "請輸入用戶名",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Input
        value=""
        onChange={() => {}}
        size="small"
        placeholder="Small Input"
      />
      <Input
        value=""
        onChange={() => {}}
        size="medium"
        placeholder="Medium Input"
      />
      <Input
        value=""
        onChange={() => {}}
        size="large"
        placeholder="Large Input"
      />
    </div>
  ),
};

// 不同圓角
export const Rounded: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input
        value=""
        onChange={() => {}}
        rounded="none"
        placeholder="No Rounded"
      />
      <Input
        value=""
        onChange={() => {}}
        rounded="small"
        placeholder="Small Rounded"
      />
      <Input
        value=""
        onChange={() => {}}
        rounded="medium"
        placeholder="Medium Rounded"
      />
      <Input
        value=""
        onChange={() => {}}
        rounded="large"
        placeholder="Large Rounded"
      />
      <Input
        value=""
        onChange={() => {}}
        rounded="full"
        placeholder="Full Rounded"
      />
    </div>
  ),
};

// 不同類型
export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input
        value="Hello Input"
        onChange={() => {}}
        type="text"
        label="文字輸入"
        placeholder="Text Input"
      />
      <Input
        value="12345"
        onChange={() => {}}
        type="password"
        label="密碼輸入"
        placeholder="Password Input"
      />
      <Input
        value="12345"
        onChange={() => {}}
        type="number"
        label="數字輸入"
        placeholder="Number Input"
      />
    </div>
  ),
};

// 錯誤狀態
export const WithError: Story = {
  args: {
    value: "",
    onChange: () => {},
    label: "錯誤示例",
    placeholder: "請輸入",
    error: "這是一個錯誤信息",
  },
};

// 禁用狀態
export const Disabled: Story = {
  args: {
    value: "Disabled Input",
    onChange: () => {},
    label: "禁用狀態",
    disabled: true,
  },
};

// 不同間距
export const Gaps: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input
        value=""
        onChange={() => {}}
        label="Gap 1"
        placeholder="Gap 1"
        gap={1}
      />
      <Input
        value=""
        onChange={() => {}}
        label="Gap 2"
        placeholder="Gap 2"
        gap={2}
      />
      <Input
        value=""
        onChange={() => {}}
        label="Gap 3"
        placeholder="Gap 3"
        gap={3}
      />
      <Input
        value=""
        onChange={() => {}}
        label="Gap 4"
        placeholder="Gap 4"
        gap={4}
      />
    </div>
  ),
};

// 組合展示
export const Playground: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Input
        value="完整示例"
        onChange={() => {}}
        label="完整輸入框"
        placeholder="請輸入內容"
        size="large"
        rounded="medium"
      />
      <Input
        value=""
        onChange={() => {}}
        label="錯誤輸入框"
        placeholder="請輸入內容"
        error="這是一個錯誤信息"
      />
      <Input value="禁用輸入框" onChange={() => {}} label="禁用狀態" disabled />
    </div>
  ),
};
