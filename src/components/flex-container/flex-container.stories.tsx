import type { Meta, StoryObj } from "@storybook/react";
import FlexContainer, { type FlexContainerProps } from ".";

const meta = {
  title: "Components/FlexContainer",
  component: FlexContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof FlexContainer>;

export default meta;
type Story = StoryObj<typeof FlexContainer>;

const children = (
  <>
    <div className="p-5 bg-red-500 text-white h-max">Item 1</div>
    <div className="p-5 bg-blue-500 text-white h-max">Item 2</div>
    <div className="p-5 bg-green-500 text-white h-max">Item 3</div>
  </>
);

export const Basic: Story = {
  args: {
    children: children,
    justify: "start",
    align: "top",
    direction: "row",
    height: 300,
    showBorder: true,
  },
} as { args: FlexContainerProps; render: () => JSX.Element };
