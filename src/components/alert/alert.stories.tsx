import Alert from "./index";
import { AlertProps } from "./index";

export default {
  component: Alert,
  title: "Components/Alert",
  tags: ["autodocs"],
} as { component: React.ComponentType<AlertProps>; title: string };

export const Info = {
  args: {
    message: "This is a Info Alert",
    description: "This is a Info Alert Description",
    type: "info",
    closeAble: true,
  },
  render: Alert,
} as { args: AlertProps; render: () => JSX.Element };

export const Success = {
  args: {
    message: "This is a Success Alert",
    type: "success",
    closeAble: true,
  },
  render: Alert,
} as { args: AlertProps; render: () => JSX.Element };

export const Error = {
  args: {
    message: "This is a Error Alert",
    type: "error",
    closeAble: true,
  },
  render: Alert,
} as { args: AlertProps; render: () => JSX.Element };

export const Warning = {
  args: {
    message: "This is a Warning Alert",
    type: "warning",
    closeAble: true,
  },
  render: Alert,
} as { args: AlertProps; render: () => JSX.Element };
