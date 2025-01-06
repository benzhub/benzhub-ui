import { Meta, StoryObj } from "@storybook/react/*";
import Radio, { type RadioProps } from ".";
import { useState } from "react";

const meta = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

const Template = (args: RadioProps) => {
  const [value, setValue] = useState<string | number>("");
  return (
    <Radio {...args} value={value} onChange={(value) => setValue(value)} />
  );
};

const options = [
  { label: "India", value: "india" },
  { label: "USA", value: "usa" },
  { label: "UK", value: "uk" },
  { label: "Canada", value: "canada" },
];

export const Basic: Story = {
  render: Template,
  args: {
    label: "Select Country",
    options,
  },
} as { args: RadioProps };

export const VerticalOptions: Story = {
  render: Template,
  args: {
    label: "Select Country",
    options,
    direction: "vertical",
  },
} as { args: RadioProps };
