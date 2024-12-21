import Button from ".";
import { ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
};

export const Containd = {
  args: {
    title: "Click Me",
    variant: "contained",
  },
} as { args: ButtonProps };

export const Outlined = {
  args: {
    title: "Click Me",
    variant: "outlined",
  },
} as { args: ButtonProps };

export const Small = {
  args: {
    title: "Click Me",
    size: "small",
  },
} as { args: ButtonProps };

export const Medium = {
  args: {
    title: "Click Me",
    size: "medium",
  },
} as { args: ButtonProps };

export const Large = {
  args: {
    title: "Click Me",
    size: "large",
  },
} as { args: ButtonProps };

export const Disabled = {
  args: {
    title: "Click Me",
    disabled: true,
  },
} as { args: ButtonProps };
