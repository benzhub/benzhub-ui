import { Meta } from "@storybook/react/*";
import Tab, { type TabProps } from ".";
import { useState } from "react";

const tabsData = [
  { title: "Tab 1", content: <p>Tab 1</p> },
  { title: "Tab 2", content: <p>Tab 2</p> },
  { title: "Tab 3", content: <p>Tab 3</p> },
];

export default {
  title: "Components/Tab",
  component: Tab,
} as Meta<TabProps>;

const Template = (args: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return <Tab {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
};

export const Basic = {
  args: {
    tabsData,
  },
  render: Template,
} as { args: TabProps; render: () => JSX.Element };

export const DisabledTab = {
  args: {
    tabsData,
    disabledTabIndexes: [0],
  },
  render: Template,
} as { args: TabProps; render: () => JSX.Element };


export const Vertical = {
    args: {
        tabsData,
        direction: "vertical",
    },
    render: Template,
} as { args: TabProps; render: () => JSX.Element };
