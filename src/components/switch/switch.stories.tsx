import { useState } from "react";
import Switch, { SwitchProps } from "./";

export default {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
};

const Template = (args: SwitchProps) => {
  const [checked, setChecked] = useState(false);
  return <Switch {...args} checked={checked} onChange={setChecked} />;
};

export const Basic = {
  args: {
    label: "Is Active ?",
    checked: false,
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };

export const Horizontal = {
  args: {
    label: "Is Active ?",
    checked: false,
    direction: "horizontal",
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };

export const Vertical = {
  args: {
    label: "Is Active ?",
    checked: false,
    direction: "vertical",
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };

export const Disabled = {
  args: {
    label: "Is Active ?",
    checked: false,
    direction: "horizontal",
    disabled: true,
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };
