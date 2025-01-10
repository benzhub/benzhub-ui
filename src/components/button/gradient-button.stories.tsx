import type { Meta, StoryObj } from "@storybook/react";
import GradientButton from "./Gradient";
import { Heart } from "lucide-react";

const meta = {
  title: "Components/Button/GradientButton",
  component: GradientButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GradientButton>;

export default meta;
type Story = StoryObj<typeof GradientButton>;

export const Default: Story = {
  args: {
    title: "Gradient Button",
    size: "medium",
  },
};

export const WithIcon: Story = {
  args: {
    title: "With Icon",
    icon: <Heart />,
  },
};

export const Loading: Story = {
  args: {
    title: "Loading",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled",
    disabled: true,
  },
};
