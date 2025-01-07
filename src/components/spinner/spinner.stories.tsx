import { Meta } from "@storybook/react/*";
import { ModalProps } from "../modal";
import Spinner, { SpinnerProps } from "./";

export default {
  component: Spinner,
  title: "Components/Spinner",
} as Meta<ModalProps>;

export const Small = {
  args: {
    size: "small",
    color: "green",
  },
  render: Spinner,
} as { args: SpinnerProps; render: () => JSX.Element };

export const Medium = {
  args: {
    size: "medium",
    color: "blue",
  },
  render: Spinner,
} as { args: SpinnerProps; render: () => JSX.Element };

export const Large = {
  args: {
    size: "large",
    color: "red",
  },
  render: Spinner,
} as { args: SpinnerProps; render: () => JSX.Element };

export const WithText = {
  args: {
    size: "medium",
    color: "blue",
    text: "Loading...",
  },
  render: Spinner,
} as { args: SpinnerProps; render: () => JSX.Element };
