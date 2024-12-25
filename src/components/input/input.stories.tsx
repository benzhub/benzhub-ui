import { Meta } from "@storybook/react/*";
import Input from "./";
import { InputProps } from "./";

export default {
  title: "Components/Input",
  component: Input,
} as Meta<InputProps>;

export const Basic = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const Large = {
  args: {
    ...Basic.args,
    size: "large",
  },
};

export const Error = {
  args: {
    ...Basic.args,
    error: "This is an error message",
  },
};

export const Disabled = {
  args: {
    ...Basic.args,
    disabled: true,
    value: "Disabled Input",
  },
};

export const Rounded = {
  args: {
    ...Basic.args,
    rounded: "full",
  },
};
