import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import { useState } from 'react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const ButtonWithLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <Button
      title="Click Me"
      onClick={handleClick}
      isLoading={isLoading}
    />
  );
};

export const Default: Story = {
  render: () => <ButtonWithLoading />
};
