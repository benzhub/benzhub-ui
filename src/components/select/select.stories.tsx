import type { Meta, StoryObj } from "@storybook/react";
import Select, { type SelectProps } from "./index";
import IndiaFlag from "../icon/flag/india";
import USAFlag from "../icon/flag/usa/usa";
import UKFlag from "../icon/flag/uk";
import CanadaFlag from "../icon/flag/canada";
import { useState } from "react";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const Template = (args: SelectProps) => {
  const [value, setValue] = useState<string | number>("");
  return (
    <Select {...args} value={value} onChange={(value) => setValue(value)} />
  );
};

export const Basic: Story = {
  render: Template,
  args: {
    options: [
      { label: "India", value: "india"},
      { label: "USA", value: "usa"},
      { label: "UK", value: "uk"},
      { label: "Canada", value: "canada"},
    ],
    placeholder: "Select a country",
  },
};

export const Advanced = {
  render: Template,
  args: {
    options: [
      { label: "India", value: "india", icon: <IndiaFlag /> },
      { label: "USA", value: "usa", icon: <USAFlag /> },
      { label: "UK", value: "uk", icon: <UKFlag /> },
      { label: "Canada", value: "canada", icon: <CanadaFlag /> },
    ],
    placeholder: "Select a country",
    onChange: (value) => console.log(value),
  },
} as { args: SelectProps };
