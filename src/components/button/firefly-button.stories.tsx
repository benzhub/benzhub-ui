import type { Meta, StoryObj } from '@storybook/react';
import FireFlyButton from './FireFly';
import { Heart } from 'lucide-react';

const meta = {
  title: 'Components/Button/FireFlyButton',
  component: FireFlyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FireFlyButton>;

export default meta;
type Story = StoryObj<typeof FireFlyButton>;

export const Default: Story = {
  args: {
    title: 'Default',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'With Icon',
    icon: <Heart />,
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled',
    disabled: true,
  },
};

