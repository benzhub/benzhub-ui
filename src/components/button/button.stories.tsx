import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import { useState } from 'react';
import { Mail, Heart } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// 基本按鈕
export const Default: Story = {
  args: {
    title: '基本按鈕',
    onClick: () => console.log('clicked'),
  },
};

// 不同變體
export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button title="Contained" variant="contained" />
      <Button title="Outlined" variant="outlined" />
    </div>
  ),
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button title="Small" size="small" />
      <Button title="Medium" size="medium" />
      <Button title="Large" size="large" />
    </div>
  ),
};

// 圓角樣式
export const Rounded: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button title="None" rounded="none" />
      <Button title="Small" rounded="small" />
      <Button title="Medium" rounded="medium" />
      <Button title="Large" rounded="large" />
    </div>
  ),
};

// 帶圖標的按鈕
export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button 
        title="發送郵件" 
        icon={<Mail size={16} />} 
        iconPosition="left"
      />
      <Button 
        title="添加收藏" 
        icon={<Heart size={16} />} 
        iconPosition="right"
      />
    </div>
  ),
};

// Loading 狀態
const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Button
      title="點擊顯示載入"
      onClick={handleClick}
      isLoading={isLoading}
    />
  );
};

export const Loading: Story = {
  render: () => <LoadingButton />,
};

// 禁用狀態
export const Disabled: Story = {
  args: {
    title: '禁用按鈕',
    disabled: true,
  },
};

// 組合展示
export const Playground: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button 
          title="主要按鈕" 
          variant="contained"
          size="large"
          rounded="medium"
        />
        <Button 
          title="次要按鈕" 
          variant="outlined"
          size="large"
          rounded="medium"
        />
      </div>
      <div className="flex gap-4">
        <Button 
          title="帶圖標" 
          icon={<Mail size={16} />}
          variant="contained"
        />
        <Button 
          title="禁用狀態" 
          disabled
        />
        <Button 
          title="Loading" 
          isLoading
        />
      </div>
    </div>
  ),
};

