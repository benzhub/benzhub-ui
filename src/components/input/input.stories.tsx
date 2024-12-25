import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';
import { useState } from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

const InputWithState = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      value={value}
      onChange={(val) => setValue(val.toString())}
      placeholder="請輸入..."
      label="基本輸入框"
    />
  );
};

export const Default: Story = {
  render: () => <InputWithState />
};

export const Disabled: Story = {
  render: () => (
    <Input
      value=""
      onChange={() => {}}
      disabled
      placeholder="禁用狀態"
    />
  )
};

export const WithError: Story = {
  render: () => (
    <Input
      value=""
      onChange={() => {}}
      error="這是一個錯誤信息"
      placeholder="錯誤狀態"
    />
  )
};
